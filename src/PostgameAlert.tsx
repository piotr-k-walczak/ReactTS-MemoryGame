import React from "react";
import styled from "styled-components";
import { useSpring, animated as a, interpolate } from "react-spring";
import PuzzleType from "./types";
import { useDispatch, useSelector } from "react-redux";
import { setPuzzles } from "./actionCreators";
import { generatePuzzleLayoutByName } from "./generate";
import { useHistory } from "react-router";

const StyledAlert = styled(a.div)`
  padding: 2ch 5ch;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    0deg,
    rgba(250, 250, 250, 0.4) 0%,
    rgba(250, 250, 250, 0.2) 100%
  );
  color: white;
  font-family: "Josefin Sans", sans-serif;
`;

const StyledButton = styled.h2`
  color: aquamarine;
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover {
    color: aqua;
  }

  &:active {
    color: lightgray;
  }
`;

type BoardLayout = { [key: number]: PuzzleType };

const PostgameAlert: React.FC = () => {
    const history = useHistory();
  const completed: boolean = useSelector((state: { puzzles: BoardLayout }) => {
    return (
      Object.values(state.puzzles).filter((puzzle) => !puzzle.takenOff)
        .length == 0
    );
  });
  const moves: number = useSelector((state: any) => state.moves);

  const { transform, opacity } = useSpring({
    opacity: completed ? 1 : 0,
    transform: `translate(-50%, ${completed ? -50 : 0}%)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const dispatch = useDispatch();

  return (
    <StyledAlert
      style={{
        opacity,
        transform,
      }}
    >
      <h2>Congratulations</h2>
      <h2>You've finished the game in</h2>
      <h2>{moves} moves</h2>
      <StyledButton
        onClick={() =>
          history.go(0)
        }
      >
        Wanna Play Again?
      </StyledButton>
    </StyledAlert>
  );
};

export default PostgameAlert;
