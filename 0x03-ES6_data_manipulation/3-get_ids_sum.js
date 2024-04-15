export default function getStudentIdsSum(studentList) {
  const idsSum = studentList.reduce((sum, user) => sum + user.id, 0);
  return idsSum;
}
