import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
    name:"resume",
    initialState:[],
    reducers:{
        addResume(state,action){
            state.push(action.payload)
        }
    }
})


export const {addResume} = resumeSlice.actions
export default resumeSlice.reducer;