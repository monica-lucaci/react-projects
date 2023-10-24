import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ title, info, info2 }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h5 onClick={() => setShowInfo(!showInfo)}>{title}</h5>
        <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && (
        <div className="question-p">
          <p>{info}</p>
          <p>{info2}</p>
        </div>
      )}
    </article>
  );
};

export default Question;
