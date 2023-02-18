import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"
import { Form } from "../models"
import axios from 'axios'
interface modalState{
    Registerstate:Boolean
    details:Form,
    loading:Boolean
}
const initialState:modalState={
    Registerstate:false,
    details:{
        name:"",
        matricNo:"",
        tagId:"",
        level:"",
        Date:Date.now()
    },
    loading:false
}
export const uploadStudents=createAsyncThunk('students/registeredStudents', async(userDetail:Form)=>{
    return await axios.post('https://attendance-system-zmr0.onrender.com/students',
    userDetail).then((response)=>response.data)
})
export const modalActionSlice=createSlice({
    name:'modalActionSlice',
    initialState,
    reducers:{
        updateModalState:(state)=>{
            state.Registerstate=!state.Registerstate
        },
        updateName:(state, action:PayloadAction<string>)=>{
            state.details.name=action.payload
        },
        updateMatricNo:(state, action:PayloadAction<string>)=>{
            state.details.matricNo=action.payload
        },
        updateCardDetails:(state, action:PayloadAction<string>)=>{
            state.details.tagId=action.payload
        },
        updateLevel:(state, action:PayloadAction<string>)=>{
            state.details.level=action.payload
        },
        setTodefault:(state)=>{
            state.details={
                name:"",
                matricNo:"",
                tagId:"",
                level:"",
                Date:Date.now()
            }
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(uploadStudents.pending, (state)=>{
            state.loading=true
        })
        builder.addCase(uploadStudents.fulfilled, (state)=>{
            state.loading=false
        })
        builder.addCase(uploadStudents.rejected, (state)=>{
            state.loading=false
        })
    }
})
export const {updateModalState, updateName,updateMatricNo,updateCardDetails,updateLevel,setTodefault }=modalActionSlice.actions
export default modalActionSlice.reducer