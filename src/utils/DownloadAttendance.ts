import { Student, FilteredAttendance } from "../models";
import * as DocumentPicker from 'expo-document-picker'
import { PermissionsAndroid } from "react-native";
import * as FileSystem from 'expo-file-system'
import * as Sharing from 'expo-sharing'
import  {StorageAccessFramework} from 'expo-file-system'
import axios from 'axios'
const filterAttendance =async (): Promise<FilteredAttendance[]> => {
 const studentss= await axios.get('https://attendance-system-zmr0.onrender.com/students').then(response=>{
  console.log(response.data)
    return response.data
  }).catch(error=>{
    console.log(error)
  })
  let filtered: Array<FilteredAttendance> = [];
  studentss.map((student: Student) => {
    if (student.attendance === true) {
      filtered.push({
        name: student.name,
        matricNo: student.matricNo,
      });
    }
  });
  return filtered;
};

export const download = async () => {
  const filteredStudents =await filterAttendance();
  const header = Object.keys(filteredStudents[0]);
  const headerString = header.join(",");
  const replacer = (key: any, value: any) => value ?? "";
  const rowItems = filteredStudents.map((row: any) =>
    header
      .map((fieldName) => JSON.stringify(row[fieldName], replacer))
      .join(",")
  );
  const csv = [headerString, ...rowItems].join("\r\n");
  console.log("CSV is here:",csv);
  try{
    const fileUri=FileSystem.documentDirectory+'Attendance.csv'
    await FileSystem.writeAsStringAsync(fileUri, csv)
    console.log('File saved to:', fileUri)
  }catch(error){
    console.error(error)
  }
  try{

  
  const dataUri=FileSystem.documentDirectory+'Attendance.csv'
  const fileInfo=await FileSystem.getInfoAsync(dataUri)
  if(!fileInfo.exists){
    console.log("File does not exist")
    return
  }
  await Sharing.shareAsync(
    dataUri,{
      mimeType:'text/csv',
      dialogTitle:'Open with: ',
      UTI:'public.comma-separated-values-text'
    }
  )}catch(error){
console.log(error)
  }

};
