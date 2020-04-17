import React, { useEffect } from "react";
import "./styles.css";

/* Instructions (codesandbox.io):
1. Create a component that contains 2 buttons (Like/Dislike) which can be toggled but only one button can be active at any given time.
These buttons will have the following states:
  1. If a button is not active and clicked, the button will increment count and become active.
  2. In addition to #1, if the other button is active, the other button will decrement count and become inactive.
  3. If a button is active and clicked, the button will decrement count and become inactive.
Note: Only one button can be active at any time, but both buttons can be inactive.
2. Add basic styling to the active button to clearly show that it is active (some styles already added to styles.css)
*/
const VotingApp = props => {
  const [likes, setLikes] = React.useState(100);
  const [dislikes, setDislikes] = React.useState(25);
  const [toggleButton, setButton] = React.useState(null);

  function toggleVote (type){
    if ((type === "like" || toggleButton === null) && (toggleButton === "dislike" || toggleButton === null)) {
      setLikes((prev) => prev + 1)
      setDislikes((prev) => prev - 1)
      setButton("like")
    }
    else if ((type === "dislike" || toggleButton === null) && (toggleButton === "like" || toggleButton === null)) {
      setLikes((prev) => prev - 1)
      setDislikes((prev) => prev + 1)
      setButton("dislike")
    }
  }


  return (
    <div className="container">
      <div className="title">Is Javascript the best language?</div>
      <div>
        <div className={toggleButton === "like" ? "button active" : "button"} onClick={() => toggleVote("like")}>
          <span>Like</span>
          <span> | </span>
          <span className="likes-counter">{likes}</span>
        </div>
        <div className={toggleButton === "dislike" ? "button active" : "button"} onClick={() => toggleVote("dislike")}>
          <span>Dislike</span>
          <span> | </span>
          <span className="dislikes-counter">{dislikes}</span>
        </div>
      </div>
    </div>
  );
};

export default VotingApp;
