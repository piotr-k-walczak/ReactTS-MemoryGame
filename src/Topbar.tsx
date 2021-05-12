import styled from "styled-components"
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import StyledLink, { StyledButton } from "./StyledText";

type Props = {
  inGame: boolean;
};

const StyledTopbar = styled.div`
  width: 100%;
  padding: 1.2em 2em 1em;
  text-align: left;
  box-sizing: border-box;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%);
  color: white;
  font-family: 'Josefin Sans', sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-items: center;
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;

    & > div {
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }
`

const StyledLogoLink = styled(StyledLink)`
  background: -webkit-linear-gradient( 92deg, #95d7e3, #eb76ff );
  background-size:600vw 600vw;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textAnimate 5s linear infinite alternate;
  @keyframes textAnimate {
    from {
      filter: hue-rotate(0deg);
      background-position-x: 0%;
      
    }
    to {
      filter: hue-rotate(360deg);
      background-position-x: 600vw;
      
    }
  }
`

function Topbar(props: Props) {
  const history = useHistory();
  const matchedText = useSelector((state: any) => {
    const puzzles = Object.values(state.puzzles);
    const matched = puzzles.filter((puzzle: any) => puzzle.takenOff);
    return "Matched " + (matched ? matched.length / 2 : 0) + " of " + (puzzles ? puzzles.length / 2 : 0);
  });

  const moves: number = useSelector((state: any) => state.moves);

  const handleRestart = () => {
    history.go(0);
  };

  return (
    <StyledTopbar>
      <StyledLogoLink to="/" style={{fontWeight:'bold', fontSize:'1.1em'}}>Memory Game</StyledLogoLink>
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
    </StyledTopbar>
  );
}

export default Topbar;
