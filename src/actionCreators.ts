import { Theme } from "./themes";
import PuzzleType from "./types";

export const setConfirmed = (confirmed: boolean) => {
  return {
    type: "game/setConfirmed",
    payload: confirmed,
  };
};

export const flipPuzzles = (id1: number, id2: number) => {
  return {
    type: "puzzles/flipPuzzles",
    payload: [id1, id2],
  };
};

export const takeOffPuzzles = (id1: number, id2: number) => {
  return {
    type: "puzzles/takeOffPuzzles",
    payload: [id1, id2],
  };
};

export const setPuzzles = (puzzles: { [key: number]: PuzzleType }) => {
  return {
    type: "puzzles/setPuzzles",
    payload: puzzles,
  };
};

export const updatePuzzle = (puzzle: PuzzleType) => {
  return {
    type: "puzzles/updatePuzzle",
    payload: puzzle,
  };
};

export const setLastTheme = (theme: string) => {
  return {
    type: "lastTheme/setLastTheme",
    payload: theme,
  };
};

export const addMove = () => {
  return {
    type: "game/addMove",
    payload: null,
  };
};

export const resetMoves = () => {
  return {
    type: "game/resetMoves",
    payload: null,
  };
};

export const setBoardHeight = (h: number) => {
  return {
    type: "board/setHeight",
    payload: h,
  };
};
