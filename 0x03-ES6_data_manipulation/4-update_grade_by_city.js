export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const filteredStudents = studentList.filter((student) => student.location === city);

  const studentWithScores = filteredStudents.map((student) => {
    let grade = 'N/A';

    for (const gradeObj of newGrades) {
      if (gradeObj.studentId === student.id) {
        grade = gradeObj.grade;
        break;
      }
    }
    return { ...student, grade };
  });
  return studentWithScores;
}
