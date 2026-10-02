"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accounted = {
    name: 'Jhon',
    id: 23,
    department: "cashcounter",
};
const marketing = {
    name: 'mojamell',
    id: 334,
    department: 'storemanagement',
    salary: 30000,
};
const lpg = {
    name: "NurulAlom",
    id: 54,
    department: "LPG CEO",
};
const grouTeam = [accounted, marketing, lpg, {
        id: 100,
        name: 'all Group Team',
        department: 'Lpg,account,Marketing'
    }];
function printEmployeeDetails(employe) {
    console.log(`Nmae: ${employe.name}`);
    console.log(`ID : ${employe.id}`);
    console.log(`Department : ${employe.department}`);
    return employe;
}
printEmployeeDetails({ name: "Mark", id: 2432, department: "space_x" });
// parameter gulo k object akare declare kortechi
function displayEmployeDetails({ name, id, department }) {
    console.log(`Name : ${name}`);
    console.log(`ID: ${id}`);
    console.log(`Department : ${department}`);
    return { name, id, department };
}
displayEmployeDetails({ name: 'jhon', id: 234, department: "chamistry" });
//# sourceMappingURL=interface_exam.js.map