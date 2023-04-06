import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
    name: "resume",
    initialState: [],
    reducers: {
        addResume(state, action) {
            state.push(action.payload)
        },
        updateResume(state, action) {
            console.log(action.payload)
            return [action.payload];
        }
    }
})


export const { addResume,updateResume } = resumeSlice.actions
export default resumeSlice.reducer;