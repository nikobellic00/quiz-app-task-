import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { data } from "../data";
import { getQuestion, getQuestionNo } from "../features/quiz/QuizSlice";

export default function QuizHeader() {
  const question = useSelector(getQuestion);
  const question_no = useSelector(getQuestionNo);
  const [star, setStar] = useState("");

  useEffect(() => {
    switch (question.difficulty) {
      case "easy":
        setStar(1);
        break;
      case "medium":
        setStar(2);
        break;
      case "hard":
        setStar(3);
        break;
    }
  }, [question]);

  return (
    <header>
      <h1 className="text-xl font-bold text-gray-600">
        Question {question_no + 1} of {data.length}
      </h1>
      <p className="text-sm text-slate-400">
        {question.category.replace(/[%20 %27 %3F]/g, " ")}
      </p>
      <Rating name="simple-controlled" value={star} size="small" />
    </header>
  );
}
