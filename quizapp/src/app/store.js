import { configureStore } from "@reduxjs/toolkit";
import QuizReducer from "../features/quiz/QuizSlice";

export const store = configureStore({
  reducer: {
    question: QuizReducer,
  },
});
