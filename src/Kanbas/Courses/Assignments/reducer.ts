import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
    assignment: {
        title: "New Assignments 123", description: "New Description", points: "100",dueDate:"2023-09-10",
        availableFrom:"2023-10-10",
        Until:"2023-10-10"
    }
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments.push({ ...action.payload, _id: new Date().getTime().toString() });
            console.log('New assignments list:', state.assignments);
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) =>
                assignment._id === action.payload._id ? action.payload : assignment
            );
        },
        setAssignment: (state, action) => {
            state.assignments = action.payload;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment,setAssignment } = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
