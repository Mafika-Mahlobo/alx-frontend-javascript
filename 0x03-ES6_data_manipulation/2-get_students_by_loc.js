export default function getStudentsByLocation(studentList, city) {
  const studentsByCity = studentList.filter((student) => student.location === city);
  return studentsByCity;
}
