let details = [];
let marksTable = document.getElementById("marksTable");
let button = document.getElementById("button");


class Marks {
    constructor(name, college, branch, year1, year2, year3, year4) {
        this.name = name;
        this.college = college;
        this.branch = branch;
        this.year1 = year1;
        this.year2 = year2;
        this.year3 = year3;
        this.year4 = year4;
    }

    getAvg() {
        return (this.year1 + this.year2 + this.year3 + this.year4) / 4;
    }

    getTableDetails() {
        let tableRow = document.createElement("tr");

        let tableData1 = document.createElement("td");
        tableData1.textContent = this.name;
        tableRow.appendChild(tableData1);

        let tableData7 = document.createElement("td");
        tableData7.textContent = this.college;
        tableRow.appendChild(tableData7);

        let tableData8 = document.createElement("td");
        tableData8.textContent = this.branch;
        tableRow.appendChild(tableData8);

        let tableData2 = document.createElement("td");
        tableData2.textContent = this.year1;
        tableRow.appendChild(tableData2);

        let tableData3 = document.createElement("td");
        tableData3.textContent = this.year2;
        tableRow.appendChild(tableData3);

        let tableData4 = document.createElement("td");
        tableData4.textContent = this.year3;
        tableRow.appendChild(tableData4);

        let tableData5 = document.createElement("td");
        tableData5.textContent = this.year4;
        tableRow.appendChild(tableData5);

        let tableData6 = document.createElement("td");
        tableData6.textContent = this.getAvg();
        tableRow.appendChild(tableData6);

        return tableRow
    }

}

function takingInputs() {
    let nameValue = document.getElementById("name").value;
    let collegeValue = document.getElementById("college").value;
    let branchValue = document.getElementById("branch").value;
    let year1Value = document.getElementById("year1").value;
    let year2Value = document.getElementById("year2").value;
    let year3Value = document.getElementById("year3").value;
    let year4Value = document.getElementById("year4").value;

    details.push(nameValue, collegeValue, branchValue, parseInt(year1Value), parseInt(year2Value), parseInt(year3Value), parseInt(year4Value));
}
button.addEventListener("click", function() {
    takingInputs();
    console.log(details);
    let mark = new Marks(details[0], details[1], details[2], details[3], details[4], details[5], details[6]);
    console.log(mark.getAvg());
    let marksData = mark.getTableDetails();
    console.log(marksData);
    marksTable.appendChild(marksData);
    details = [];

    document.getElementById("name").value = "";
    college.value = "";
    branch.value = "";
    year1.value = "";
    year2.value = "";
    year3.value = "";
    year4.value = "";
})