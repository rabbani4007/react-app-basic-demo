import React, { useContext, useState, useEffect, useRef } from "react";
import { QuizState } from "../../helpers/quiz-state";
import { QuizStateContext } from "../../helpers/quiz-state-context";
//import { QuizQuestions } from "../../helpers/quiz-questions"; // types

import CountDownTimer from "../layout/count-down-timer";
import ReactLoading from "react-loading";
import {
  QuestionsState,
  Difficulty,
  fetchQuizQuestions,
} from "../../services/quiz-question-api";

const QuestionCard = () => {
  const {
    quizState,
    setQuizState,
    quizScore,
    setQuizScore,
    quizDifficulty,
    quizCategory,
    totalQuestion,
    timeElapsed,
    setTimeElapsed,
  } = useContext(QuizStateContext);
  const [loading, setLoading] = useState(true);
  const [quizQuestions, setQuizQuestions] = useState<QuestionsState[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerChosen, setAnswerChosen] = useState("");
  const [percentComplete, setPercentComplete] = useState(0);
  //const [selectedOption, setSelectedOption] = useState("option1");
  const selectedOptionRadio = useRef<HTMLInputElement>(null);
  //const [timeElapsed, setTimeElapsed] = useState("");

  const nextQuestion = () => {
    if (quizQuestions[currentQuestion].correct_answer == answerChosen) {
      setQuizScore(quizScore + 1);
    }
    setAnswerChosen("");

    setCurrentQuestion(currentQuestion + 1);
    let percent = ((currentQuestion + 1 + 1) * 100) / quizQuestions.length;
    setPercentComplete(percent);
  };
  const prevQuestion = () => {
    if (quizQuestions[currentQuestion].correct_answer == answerChosen) {
      setQuizScore(quizScore + 1);
    }
    setAnswerChosen("");
    setCurrentQuestion(currentQuestion - 1);
  };
  const finishQuiz = () => {
    if (quizQuestions[currentQuestion].correct_answer == answerChosen) {
      setQuizScore(quizScore + 1);
    }
    //answerChosen;
    setQuizState(QuizState.END);
  };
  async function startTrivia() {
    let quizId = parseInt(quizCategory.split(",")[0]);
    setLoading(true);
    const newQuestions = await fetchQuizQuestions(
      totalQuestion,
      quizDifficulty.toLowerCase(),
      quizId
    );
    setLoading(false);
    setQuizQuestions(newQuestions);
    console.log(newQuestions);
  }

  const getTimeElapsedNew = (timeElapsed: string) => {
    setTimeElapsed(timeElapsed);
  };

  useEffect(() => {
    startTrivia();
    //alert("hello");
  }, []);
  return (
    <div>
      <div className="container1 mt-51">
        <div className="d-flex justify-content-center row">
          <div className="col-md-10 col-lg-10">
            {loading ? (
              <div style={{ marginLeft: "45%" }}>
                Loading Questions...
                <ReactLoading type="bars" color="green" />
              </div>
            ) : null}
            {!loading && quizQuestions.length > 0 ? (
              <div className="border">
                <div className="question bg-white p-3 border-bottom">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: percentComplete + "%",
                      }}
                      data-aria-valuenow={percentComplete}
                      data-aria-valuemin="0"
                      data-aria-valuemax="100"
                    >
                      {percentComplete}%
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center mcq">
                    <h4>{quizCategory.split(",")[1]}</h4>
                    <span style={{ textAlign: "center" }}>
                      Time Remaining :
                      <CountDownTimer
                        initialMinute={5}
                        initialSeconds={0}
                        getTimeElapsed={getTimeElapsedNew}
                      />
                    </span>
                    <span>
                      ({currentQuestion + 1} of {quizQuestions.length}) score :
                      {quizScore}
                    </span>
                  </div>
                </div>

                <div className="question bg-white p-3 border-bottom">
                  <div className="d-flex flex-row align-items-center question-title">
                    <h3 className="text-danger">Q.{currentQuestion + 1} </h3>
                    <h5 className="mt-1 ml-2">
                      {quizQuestions[currentQuestion].question}
                    </h5>
                  </div>
                  {quizQuestions[currentQuestion].answers.map((answer, i) => (
                    <div key={i} className="ans ml-2">
                      <label
                        className="radio"
                        onClick={() => {
                          setAnswerChosen(answer);
                        }}
                      >
                        <input
                          ref={selectedOptionRadio}
                          type="radio"
                          name="option"
                          value={answer}
                        />
                        <span>{answer}</span>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                  <button
                    style={{
                      visibility: currentQuestion == 0 ? "hidden" : "visible",
                    }}
                    className="btn btn-primary d-flex align-items-center btn-danger"
                    type="button"
                    onClick={prevQuestion}
                  >
                    ❮ Previous
                  </button>
                  {currentQuestion == quizQuestions.length - 1 ? (
                    <button
                      onClick={finishQuiz}
                      id="nextQuestion"
                      type="button"
                      className="btn btn-primary border-success align-items-center btn-success"
                    >
                      Finish Quiz
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary border-success align-items-center btn-success"
                      onClick={nextQuestion}
                      id="nextQuestion"
                      type="button"
                    >
                      Next ❯
                    </button>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
