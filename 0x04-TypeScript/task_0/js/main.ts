interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
   firstName: "john",
   lastName: "doe",
   age: 25,
   location: "location1",
};

const student2: Student = {
  firstName: "jane",
  lastName: "doe",
  age: 20,
  location: "location2",
};

const studentsList: Student[] = [student1, student2];

const renderTable = ((students: Student[]) => {
  const table = document.createElement('table');

  students.forEach((student) => {
    const row = table.insertRow();
    const col1 = row.insertCell();
    const col2 = row.insertCell();
    col1.textContent = student.firstName;
    col2.textContent = student.location;
  });

  document.body.appendChild(table);

});

renderTable(studentsList);
