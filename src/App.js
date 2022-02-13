import "./App.css";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const handleClickLike = () => {
    setLike(!like);
    setDislike(false);
  };
  const handleClickDislike = () => {
    like && setDislike(!dislike);
    setLike(false);
  };
  return (
    <div className="post">
      <div className="imgs">
        <img
          className="ocean"
          src="https://github.com/OlgaKoplik/CodePen/blob/master/see.jpeg?raw=true"
          alt="see"
        />
        <img
          className="lemons"
          src="https://github.com/OlgaKoplik/CodePen/blob/master/lemon.jpeg?raw=true"
          alt="lemons"
        />
      </div>
      <div className="content">
        <h1>Lemon & Ocean</h1>
        <p>
          The lemon, Citrus limon Osbeck, is a species of small evergreen tree
          in the flowering plant family Rutaceae, native to South Asia,
          primarily North eastern India.
        </p>

        <p>
          The tree's ellipsoidal yellow fruit is used for culinary and
          non-culinary purposes throughout the world, primarily for its juice,
          which has both culinary and cleaning uses.[2] The pulp and rind are
          also used in cooking and baking. The juice of the lemon is about 5% to
          6% citric acid, with a pH of around 2.2, giving it a sour taste. The
          distinctive sour taste of lemon juice makes it a key ingredient in
          drinks and foods such as lemonade and lemon meringue pie.
        </p>
        <div className="buttons">
          <button
            id="like"
            onClick={() => handleClickLike()}
            className={`like-button like-button-up ${
              like ? "active" : "not-active"
            }`}
          >
            <FaThumbsUp />
          </button>
          <button
            id="dislike"
            onClick={() => handleClickDislike()}
            className={`like-button dislike-button-down ${
              dislike ? "active" : "not-active"
            }`}
          >
            <FaThumbsDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
