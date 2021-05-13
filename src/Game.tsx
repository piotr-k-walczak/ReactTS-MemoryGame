import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setPuzzles } from "./actionCreators";
import ManagedBoard from "./BoardManager";
import generatePuzzleLayout, { generatePuzzleLayoutByName } from "./generate";
import PuzzleType from "./types";

type BoardLayout = { [key: number]: PuzzleType };

const Game: React.FC = () => {
  const { theme } = useParams<any>();
  const dispatch = useDispatch();
  let layout: BoardLayout = generatePuzzleLayoutByName(theme);
  dispatch(setPuzzles(layout));

  return <ManagedBoard {...layout} />;
};

export default Game;
