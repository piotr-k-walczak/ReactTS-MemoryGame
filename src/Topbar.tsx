import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import StyledLink, { StyledButton } from "./StyledText";

type Props = {
  inGame: boolean;
};

function Topbar(props: Props) {
  const history = useHistory();
  const matchedText = useSelector((state: any) => {
    const puzzles = Object.values(state.puzzles);
    const matched = puzzles.filter((puzzle: any) => puzzle.takenOff);
    return "Matched " + matched ? matched.length / 2 : 0 + " of " + puzzles ? puzzles.length / 2 : 0;
  });

  const moves: number = useSelector((state: any) => state.moves);

  const handleRestart = () => {
    history.go(0);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "1.2em 2em 1em",
        textAlign: "left",
        boxSizing: "border-box",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%)",
        color: "white",
        fontFamily: "'Josefin Sans', sans-serif",
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <StyledLink to="/">Memory Game</StyledLink>
      {props.inGame && (
        <>
          <div>
            {moves}
            {moves == 1 ? " move" : " moves"}
          </div>
          <div style={{ display: "flex" }}>
            <div>{matchedText}</div>
            <div style={{ borderLeft: "1px solid white", margin: "0 10px" }} />
            <StyledButton onClick={handleRestart}>Restart</StyledButton>
          </div>
        </>
      )}
    </div>
  );
}

export default Topbar;
