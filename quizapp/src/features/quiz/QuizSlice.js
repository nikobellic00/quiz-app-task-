import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../data";

const initialState = {
  value: {
    current_question: 0,
    question: data[0],
  },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion: (state) => {
      if (state.value.current_question < data.length - 1) {
        const inc = state.value.current_question + 1;

        state.value.question = inc;
        state.value.question = data[inc];

        state.value.current_question += 1;
      }
    },

    // isCorrect: (state, action) => {
    //   choosed = action.payload.choosed;

    //   const isCorrect = state.value.quesion.correct_answer.includes(choosed);
    // },
  },
});

export const { nextQuestion } = quizSlice.actions;

export default quizSlice.reducer;

export const getQuestion = (state) => state.question.value.question;

export const getQuestionNo = (state) => state.question.value.current_question;
