class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleName + " " + lastName;
  }
}
interface Person {
  firstName: string;
  middleName: string;
  lastName: string;
}

function show(param: Person) {
  param.firstName.indexOf;
  return (
    "Hello : " + param.firstName + " " + param.middleName + " " + param.lastName
  );
}
export { Student };
export default show;
