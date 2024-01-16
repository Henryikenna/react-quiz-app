import React from "react";
import { useState, useEffect } from "react";
// import useSound from '@sn0wbit/use-sound';
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

function Trivia({ data, setStop, questionNumber, setQuestionNumber }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("");

  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (item) => {
    setSelectedAnswer(item);
    setClassName("active");
    delay(1500, () => setClassName(item.correct ? "correct" : "wrong"));
    delay(4500, () => {
      if (item.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          selectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
        
      }
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-around">
      <div className="w-[80%] bg-gradient-to-b from-[#100241] to-black border-[2px] border-solid border-white text-center p-5 rounded-[10px] text-lg">
        {question?.question}
      </div>
      <div className="answers flex justify-center w-full flex-wrap gap-x-5 gap-y-3">
        {question?.answers.map((item) => (
          <div
            className={selectedAnswer === item && className}
            onClick={() => handleClick(item)}
          >
            {item.text}
          </div>
        ))}

        {/* <div className="active">Henryoncode</div>
        <div className="wrong">Henryoncode</div>
        <div className="correct">Henryoncode</div> */}
      </div>
    </div>
  );
}

export default Trivia;
