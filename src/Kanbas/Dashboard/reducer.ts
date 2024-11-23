import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: enrollments,
  isEnrolling: false,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, { payload: enrollment }) => {
      state.enrollments = enrollment.payload;
    },
    enrollCourse: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: action.payload.userId,
        course: action.payload.courseId,
      };
      state.enrollments.push(newEnrollment);
    },
    unenrollCourse: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(
            enrollment.user === action.payload.userId &&
            enrollment.course === action.payload.courseId
          )
      );
    },
    toggleIsEnrolling: (state) => {
      state.isEnrolling = !state.isEnrolling;
    },
  },
});

export const {
  setEnrollments,
  enrollCourse,
  unenrollCourse,
  toggleIsEnrolling,
} = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
