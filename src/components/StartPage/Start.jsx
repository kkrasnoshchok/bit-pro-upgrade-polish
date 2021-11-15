import React, { useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./Start.css";
import { IoIosArrowForward } from "react-icons/io";

export default function Start() {
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("first");
  };
  return (
    <div className="start">
      <main className="startMain main">
        <div className="mainTitle title">
          <strong>Witamy</strong>
          <p>w naszej aplikacji.</p>
        </div>
        <div className="mainDescription description">
          <p className>
            <strong>Zacznij zarabiać</strong> z dowolnego miejsca gdziekolwiek
            jesteś! Wszystko,
            <strong>
              czego potrzebujesz to smartfon z dostępem do Internetu.
            </strong>
          </p>
          <p className>
            Aby się <strong>zarejestrować</strong>, musisz
            <strong>odpowiedzieć na kilka prostych pytań</strong>
          </p>
        </div>

        <div className="mainButton">
          <button onClick={setQuizState}>
            <p>Kontynuuj</p>
            <IoIosArrowForward className="arrowIcon" />
          </button>
        </div>
      </main>
    </div>
  );
}
