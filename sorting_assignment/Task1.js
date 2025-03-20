const readline = require("readline-sync"); 

function main() {
    let n = parseInt(readline.question("Enter number of patients: ")); 
    let patients = [];

    for (let i = 0; i < n; i++) {
        let input = readline.question(`Enter patient ${i + 1} details (ID Name Age Severity): `);
        let [id, name, age, severity] = input.split(" ");
        patients.push({ 
            id: parseInt(id), 
            name, 
            age: parseInt(age), 
            severity: parseInt(severity) 
        });
    }


    patients.sort((a, b) => {
        if (b.severity === a.severity) {
            return a.age - b.age; 
        }
        return b.severity - a.severity; // Sort by severity (descending)
    });

    console.log("\nSorted Patient Records:");
    for (let patient of patients) {
        console.log(`${patient.id} ${patient.name} ${patient.age} ${patient.severity}`);
    }
}


main();
