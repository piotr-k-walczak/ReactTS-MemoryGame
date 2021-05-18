import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";
import { setPuzzles } from "./actionCreators";
import ManagedBoard from "./BoardManager";
import generatePuzzleLayout, { generatePuzzleLayoutByName } from "./generate";
import PuzzleType from "./types";

type BoardLayout = { [key: number]: PuzzleType };

const Game: React.FC = () => {
  const location = useLocation();
  const themeName = location.pathname.replace("/", "");
  const dispatch = useDispatch();
  console.log(themeName);
  let layout: BoardLayout = generatePuzzleLayoutByName(themeName);
  console.log(layout);
  dispatch(setPuzzles(layout));

  return <ManagedBoard {...layout} />;
};

export default Game;
