import React, { useState, useEffect } from "react";
import "./FinalPage.css";
import { IoIosArrowForward } from "react-icons/io";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function FinalPage(props) {
  const [loading, setLoading] = useState(false);

  // hook useEffect для лоадера
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="finalPage">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="finalInner">
          <div className="finalDescription description">
            <p>
              Aby zacząć zarabiać, musisz wpłacić na swoje konto handlowe co
              najmniej
            </p>
          </div>
          <div className="finalTitle title">€250</div>
          <div className="finalDescription description">
            <p>
              pieniądze te pozostają Twoją własnością i możesz je wypłacić w
              każdej chwili:
            </p>
          </div>
          <div className="finalLink">
            <a
              href="https://domfir.xyz/gZm6H5"
              target="_blank"
              rel="noreferrer"
            >
              <p>Przejdź do rejestracji konta inwestora</p>
              <IoIosArrowForward className="arrowIconFinal" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
