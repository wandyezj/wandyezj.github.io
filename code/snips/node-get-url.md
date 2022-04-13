```typescript
import fs from "fs";
import path from "path";
import https from "https";

// mirrors what is used from fetch in node-fetch
// https://nodejs.org/dist/latest-v16.x/docs/api/https.html
async function getUrl(url: string) {
    return new Promise<{ status: number; buffer: () => Promise<string> }>(
        (resolve, reject) => {
            https.get(url, (response) => {
                const statusCode = response.statusCode;

                response.on("error", (err) => {
                    reject(err);
                });

                const dataBuffer = new Promise<string>((resolveBuffer) => {
                    response.on("data", (data) => {
                        resolveBuffer(data);
                    });
                });

                resolve({
                    status: statusCode || -1,
                    buffer: () => dataBuffer,
                });
            });
        }
    );
}

export async function downloadFile(
    download: {source: string, destination: string}
): Promise<DownloadFileResponse> {
    const { source, destination } = download;
    const request = await getUrl(source);

    if (request.status === 200) {
        const data = await request.buffer();

        fs.mkdirSync(path.dirname(destination), { recursive: true });
        fs.writeFileSync(destination, data);
    }

    const response: DownloadFileResponse = {
        download,
        requestStatus: request.status,
    };

    return response;
}

```
