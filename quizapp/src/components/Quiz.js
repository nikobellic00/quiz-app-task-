import { queryByTestId } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../data";
import {
  getQuestion,
  getQuestionNo,
  nextQuestion,
} from "../features/quiz/QuizSlice";
import QuizHeader from "./QuizHeader";

export default function Quiz() {
  const question = useSelector(getQuestion);
  const question_no = useSelector(getQuestionNo);
  const [correct, setCorrect] = useState("");
  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();

  function checkAns(e, option) {
    setSelected(true);

    if (option === question.correct_answer) {
      setCorrect("Correct!");
    } else {
      setCorrect("Sorry! please try again");
    }
  }

  function moveToNextQuestion() {
    setSelected(false);
    setCorrect("");
    dispatch(nextQuestion());
  }

  return (
    <section className="p-6 md:w-[600px] mx-auto">
      <QuizHeader />

      <h1 className="pt-4">
        {question.question.replace(/[%20 %27 %3F]/g, " ")}?
      </h1>

      <section className="grid grid-cols-12 pt-8 gap-6">
        {question.incorrect_answers.map((option) => {
          return (
            <div className="col-span-6 flex items-center justify-center">
              <button
                disabled={selected}
                onClick={(e) => checkAns(e, option)}
                className={` bg-gray-300 p-2 w-[200px] border border-gray-300 focus:border-black ${
                  selected ? "text-gray-500" : ""
                }`}
              >
                {option.replace(/[%20 %27 %3F]/g, " ")}
              </button>
            </div>
          );
        })}
        <div className="col-span-6 flex items-center justify-center">
          <button
            onClick={(e) => checkAns(e, question.correct_answer)}
            className=" p-2 bg-gray-300 w-[200px] border border-gray-300 focus:border-black"
          >
            {question.correct_answer.replace(/[%20 %27 %3F]/g, " ")}
          </button>
        </div>
      </section>

      {correct && (
        <div className="pt-10 text-center font-bold text-xl">{correct}</div>
      )}

      <div className="flex items-center justify-center">
        {selected && question_no < data.length - 1 && (
          <button
            onClick={moveToNextQuestion}
            className=" mt-4 p-2 bg-gray-300 w-[200px] border border-gray-300 focus:border-black"
          >
            Next Question
          </button>
        )}
      </div>
    </section>
  );
}
