// Node script to read out the package.json dependencies and dev dependencies lock versions

// run in the same folder as a set of folders with npm packages

//console.log("hello")

const fs = require('fs')
const path = require("path")

const paths = fs.readdirSync(".")
//console.log(paths)

const directories = paths.filter((name) => fs.statSync(name).isDirectory());
console.log(directories)

function getPackageVersions(dependencies, lockPackages) {
    const dependencyVersions = dependencies === undefined ? undefined : Object.getOwnPropertyNames(dependencies).map((name) => {
        const fullName = `node_modules/${name}`;
        const lockPackage = lockPackages[fullName]
        const version = lockPackage === undefined ? undefined : lockPackage["version"];
        return {
            name,
            version
        }
    });
    return dependencyVersions;
}

const packages = directories.map((name) => {
    //console.log(name);
    const packagePath = path.join(name, "package.json");
    const packageLockPath = path.join(name, "package-lock.json");

    const packageJson = JSON.parse(fs.readFileSync(packagePath));
    const packageLockJson = JSON.parse(fs.readFileSync(packageLockPath));


    const dependencies = packageJson["dependencies"];

    const dependenciesDev = packageJson["devDependencies"];


    const lockPackages = packageLockJson["packages"]

    const dependencyVersions = getPackageVersions(dependencies, lockPackages);
    const dependencyDevVersions = getPackageVersions(dependenciesDev, lockPackages);

    return {
        name,
        packagePath,
        packageLockPath,
        packageJson,
        packageLockJson,
        dependencyVersions,
        dependencyDevVersions,
    };
});

const values = packages.map(({ name, dependencyVersions, dependencyDevVersions }) => {


    return {
        name,
        dependencyVersions,
        dependencyDevVersions,
    };
});


//console.log(JSON.stringify(values, undefined, "    "))

// consolidate versions



function addDependenciesToMap(consolidatedMap, packageName, dependencyVersions) {

    dependencyVersions.forEach(({ name, version }) => {
        //console.log(`${name} ${version}`);
        const value = consolidatedMap.get(name) || {
            name,
            versions: [],
            packages: [],
            packageVersion: []
        };

        value.versions.push(version);
        // reduce to unique values
        value.versions = value.versions.reduce((previous, current) => {
            if (!previous.includes(current)) {
                previous.push(current);
            }
            return previous;
        }, []);
        value.packages.push(packageName);
        value.packageVersion.push({
            package: packageName,
            version
        });

        //console.log(value);
        consolidatedMap.set(name, value);
    });
}

const consolidatedMap = new Map();

values.forEach(({ name, dependencyVersions, dependencyDevVersions }) => {

    const packageName = name;
    if (dependencyVersions) {
        addDependenciesToMap(consolidatedMap, packageName, dependencyVersions,);
    }

    if (dependencyDevVersions) {
        addDependenciesToMap(consolidatedMap, packageName, dependencyDevVersions,);
    }
});

const consolidated = Array.from(consolidatedMap.values());
//console.log(consolidatedMap.keys())

//console.log(JSON.stringify(consolidated, undefined, "    "));

// output all distinct package versions

const packageVersions = consolidated.reduce((previous, current) => {
    const { name, versions } = current;

    const pairs = versions.map((v) => `${name}, ${v}`);

    previous.push(...pairs);
    return previous;

}, []);

console.log(packageVersions.join("\n"));

