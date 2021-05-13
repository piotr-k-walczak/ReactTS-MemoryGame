import React from "react";
import styled from "styled-components";
import PuzzlePiece from "./PuzzlePiece";
import PuzzleType from "./types";
import { useSelector } from "react-redux";
import useWindowDimensions from "./useWindowDimensions";

const BoardGrid = styled.div<boardParams>`
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;
  padding: 20px;
  grid-template-columns: repeat(${p => p.rowLength}, auto);
  grid-auto-flow: row;
`;

interface boardParams {
  onClick: any,
  rowLength: number
}

type BoardLayout = { [key: number]: PuzzleType };

type BoardParams = { layout: BoardLayout; onClick: () => void };

const Board: React.FC<BoardParams> = (props: BoardParams) => {
  const { onClick } = props;
  const layout = useSelector(
    (state: { puzzles: BoardLayout }) => state.puzzles
  );

  const {height, width} = useWindowDimensions();

  const PUZZLE_PIECE: {h: number, w: number} = {h: 100, w: 130};
  const PADDING = 10;

  const maxX = width / (PUZZLE_PIECE.w + PADDING);

  const numberOfPieces = Object.values(layout).length
  const ideal = Math.sqrt(numberOfPieces);
  

  let columns;

  if (ideal > maxX || ideal < 0){
    columns = maxX;
  } 
  else {
    columns = ideal;
  }
  console.log(columns)

  return (
    <BoardGrid onClick={onClick} rowLength={Math.ceil(columns)}>
      {Object.values(layout).map((puzzle) => (
        <PuzzlePiece {...puzzle} />
      ))}
    </BoardGrid>
  );
};

export default Board;
