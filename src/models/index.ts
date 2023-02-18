interface Student {
  name: string;
  level: string;
  tagId: string;
  attendance: Boolean;
  timeStamp: Number;
  matricNo:string
}
interface FilteredAttendance{
    name:string,
    matricNo:string
    
}
interface Form{
 Date:Number
 name:string
 matricNo:string,
 tagId:string,
 level:string,
}
export {Student, FilteredAttendance, Form} ;
