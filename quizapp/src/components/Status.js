import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { data } from "../data";
import { getQuestionNo } from "../features/quiz/QuizSlice";

export default function Status() {
  const question_no = useSelector(getQuestionNo);
  const [total_questions, setTotal] = useState(data.length);

  const [percent, setPersent] = useState(1);

  useEffect(() => {
    setPersent((question_no / total_questions) * 100);
  }, [question_no]);

  useEffect(() => {
    console.log(percent);
  });

  return (
    <div className="w-screen">
      <div style={{ width: `${percent}%` }} className={`h-5 bg-gray-600`}></div>
    </div>
  );
}
