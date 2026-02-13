# IndexedDb

https://github.com/mdn/dom-examples/blob/main/indexeddb-api/main.js#L28 

https://w3c.github.io/IndexedDB/#closing-connection 

https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/versionchange_event 

https://medium.com/@shashika.silva88/indexeddb-a-comprehensive-overview-for-frontend-developers-6b47a9f32e23#4c52 

```typescript
db.onversionchange = function() {
  db.close();
  alert("A new version of the database is available. Please reload the page.");
};
```

```typescript
//
// Indexed DB database for Office Scripts.
//

import { LogLevel, sendTelemetryError } from "../telemetry";
import { DatabaseTrackedError } from "../TrackedError";

/**
 * Extract error message and name from error without logging the entire error object.
 * Handles DOMException specifically to capture error name for debugging.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/DOMException
 */
function getErrorMessage(error: unknown): string {
  if (error instanceof DOMException) {
    return `${error.name}: ${error.message}`;
  }
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return String(error);
}

/**
 * Generic error handler for IndexedDB
 * @param callback called if present with the error
 */
function createErrorHandler(callback: (error: unknown) => void) {
  return (event: Event) => {
    const target = event.target;
    let error: unknown;
    if (target instanceof IDBRequest) {
      error = target.error;
    } else {
      error = "Unknown error";
    }

    //console.error(error);
    if (callback) {
      callback(error);
    }
  };
}

//
// Constants
//

const databaseName = "database-name";

export const databaseTableNameMyTable = "my_table";

export type TableName =
  | typeof databaseTableNameMyTable;

//
// Create specific tables
//

/**
 * Creates an object store in the database.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/createObjectStore
 * Can throw: InvalidStateError, ConstraintError, TransactionInactiveError
 */
function createTable(db: IDBDatabase, tableName: TableName) {
  try {
    const objectStore = db.createObjectStore(tableName, {
      keyPath: "id",
    });
    return objectStore;
  } catch (error) {
    throw error;
  }
}

/**
 * Gets a transaction and object store for database operations.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/transaction
 * Can throw: InvalidStateError, NotFoundError
 */
function getTable(db: IDBDatabase, tableName: TableName, mode: IDBTransactionMode) {
  return db.transaction(tableName, mode).objectStore(tableName);
}

//
// Database version
//

/**
 * !!! WARNING !!! Add new updates to the end of the array.
 *
 * Database version functions
 * These functions are called in order when the database is created or upgraded.
 */
const databaseUpgrades: ((db: IDBDatabase) => void)[] = [
  // Version 1
  (db: IDBDatabase) => {
    // Create table my_table
    createTable(db, databaseTableNameMyTable);
  },
  // Version N
  // Add new version upgrade functions below.
];

//
// Create Database
//

/**
 * Opens the IndexedDB database, creating or upgrading as needed.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open
 * See: https://w3c.github.io/IndexedDB/#ref-for-dom-idbfactory-open①
 * Can throw: VersionError, InvalidStateError, AbortError
 */
async function openDatabase() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const databaseVersion = databaseUpgrades.length;
    const request = indexedDB.open(databaseName, databaseVersion);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const target = event.target;
      if (target instanceof IDBOpenDBRequest) {
        const db = target.result;

        // The old version is the version before the upgrade.
        // The old version is 0 when the database is created
        // subtract 1 from the old version to get the index to start running the upgrade functions from.
        // Examples:
        // if the old version is 0, we want to run all upgrade functions. index > -1
        // if the old version is 1, we want to run all upgrade functions except the first. index > 0
        const oldVersion = event.oldVersion - 1;

        // How to upgrade the database from the old version to the new version?
        // Run each upgrade function in order.
        databaseUpgrades.forEach((upgrade, index) => {
          if (index > oldVersion) {
            try {
              upgrade(db);
            } catch (error) {
              throw error;
            }
          }
        });
      }
    };

    request.onsuccess = function () {
      resolve(request.result);
    };

    request.onerror = createErrorHandler(reject);
  });
}

//
// Generic Access Database - Read and Write by id
//

/**
 * Stores an item in the database.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/put
 * Can throw: DataError, ReadOnlyError, TransactionInactiveError, DataCloneError
 */
export async function setItem<Item extends { id: string }>(
  tableName: TableName,
  item: Item,
): Promise<void> {
  try {
    const db = await openDatabase();

    await new Promise<void>((resolve, reject) => {
      const objectStore = getTable(db, tableName, "readwrite");
      const request = objectStore.put(item);
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = createErrorHandler((error) => {
        reject(error);
      });
    });
  } catch (error) {
    throw error;
  }
}

/**
 * Retrieves an item from the database.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/get
 * Can throw: TransactionInactiveError, DataError, InvalidStateError
 */
export async function getItem<Item extends { id: string }>(
  tableName: TableName,
  id: string,
): Promise<Item | undefined> {
  try {
    const db = await openDatabase();

    return await new Promise<Item | undefined>((resolve, reject) => {
      const objectStore = getTable(db, tableName, "readonly");
      const request = objectStore.get(id);
      request.onsuccess = (event) => {
        const target = event.target;
        if (target instanceof IDBRequest) {
          resolve(target.result);
        }
      };
      request.onerror = createErrorHandler((error) => {
        reject(error);
      });
    });
  } catch (error) {
    throw error;
  }
}

/**
 * Deletes an item from the database.
 * See: https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/delete
 * Can throw: ReadOnlyError, TransactionInactiveError, DataError, InvalidStateError
 */
export async function deleteItem(tableName: TableName, id: string): Promise<void> {
  try {
    const db = await openDatabase();

    await new Promise<void>((resolve, reject) => {
      const objectStore = getTable(db, tableName, "readwrite");
      const request = objectStore.delete(id);
      request.onsuccess = () => {
        resolve();
      };
      request.onerror = createErrorHandler((error) => {
        reject(error);
      });
    });
  } catch (error) {
    throw error;
  }
}

export async function getAllItems<Item extends { id: string }>(
  tableName: TableName,
): Promise<Item[]> {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const objectStore = getTable(db, tableName, "readonly");
    const request = objectStore.getAll();
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = createErrorHandler(reject);
  });
}
```
