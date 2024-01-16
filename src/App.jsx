import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () => [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="h-[100vh] flex bg-[#020230] text-white">
      {username ? (
        <>
          <div className="f-main flex flex-col">
            {stop ? (
              <h1 className="relative top-0 left-0 right-0 bottom-0 m-auto text-xl font-semibold">
                You earned: {earned}
              </h1>
            ) : (
              <>
                <div className="h-[50%] relative">
                  <div className="w-[70px] h-[70px] rounded-[50%] border-[5px] border-solid border-white flex items-center justify-center text-[30px] font-bold absolute bottom-3 left-20">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="h-[50%]">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="w-[25%] flex items-center justify-center">
            <ul className="moneyList w-full p-5">
              {moneyPyramid.map((item) => (
                <li className={`${questionNumber == item.id && "active"}`}>
                  <span className="text-[18px] font-thin">{item.id}</span>
                  <span className="text-[20px] font-light">{item.amount}</span>
                </li>
              ))}
              {/* <li className="active">
            <span className="text-[18px] font-thin">4</span>
            <span className="text-[20px] font-light">$ 400</span>
          </li>
          <li className="">
            <span className="text-[18px] font-thin">3</span>
            <span className="text-[20px] font-light">$ 300</span>
          </li>
          <li className="">
            <span className="text-[18px] font-thin">2</span>
            <span className="text-[20px] font-light">$ 200</span>
          </li>
          <li className="">
            <span className="text-[18px] font-thin">1</span>
            <span className="text-[20px] font-light">$ 100</span>
          </li> */}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
