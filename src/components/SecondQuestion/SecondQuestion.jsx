import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./SecondQuestion.css";
import LoadingPage from "../LoadingPage/LoadingPage";

function SecondQuestion(props) {
  const [loading, setLoading] = useState(false);
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("third");
  };

  // hook useEffect для лоадера
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="quiz">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="quizPage">
          <div className="container">
            <div className="quizInner">
              <div className="quizQuestion question">
                Czy masz portfel kryptowalut?
              </div>
              <div className="quizAnswers answers">
                <div className="answer" onClick={setQuizState}>
                  Tak
                </div>
                <div className="answer" onClick={setQuizState}>
                  Nie
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SecondQuestion;
