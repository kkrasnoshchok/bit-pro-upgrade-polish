import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./FourthQuestion.css";
import LoadingPage from "../LoadingPage/LoadingPage";

function FourthQuestion(props) {
  const [loading, setLoading] = useState(false);
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("ref");
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
                <strong>
                  Po zarejestrowaniu się otrzymasz telefon od swojego osobistego
                  menedżera,
                </strong>
                <p>czy jesteś gotowy do rozmowy z nim przez telefon?</p>
              </div>
              <div className="quizAnswers answers">
                <div className="answer" onClick={setQuizState}>
                  Yes
                </div>
                <div className="answer" onClick={setQuizState}>
                  No
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FourthQuestion;
