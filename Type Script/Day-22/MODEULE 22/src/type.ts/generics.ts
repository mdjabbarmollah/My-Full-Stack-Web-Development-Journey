
// interface Respose {
//    Data: any;
//    data: boolean | string | number | object | null;
//   status: number;
// }
interface Response<T>{
  data: T;
  status: string;
}
const studentinformation: Response<string> = {
  data: "information",
  status: 'okay',
}
const studentBatch: Response<number> = {
  data: 2016,
  status: 'passed',
}
const districtofstudent: Response<boolean> = {
  data: true,
  status: 'Faridpur',
}
