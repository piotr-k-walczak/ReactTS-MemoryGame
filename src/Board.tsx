import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import PuzzlePiece from "./PuzzlePiece";
import PuzzleType from "./types";
import { useSelector } from "react-redux";
import useWindowDimensions from "./useWindowDimensions";

const BoardGrid = styled.div<boardParams>`
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 20px;
  box-sizing: border-box;
  padding: 20px;
  grid-template-columns: repeat(${(p) => p.rowLength}, auto);
  grid-auto-flow: row;
`;

interface boardParams {
  onClick: any;
  rowLength: number;
  width: number;
  height: number;
}

type BoardLayout = { [key: number]: PuzzleType };

type BoardParams = { layout: BoardLayout; onClick: () => void };

const Board: React.FC<BoardParams> = (props: BoardParams) => {
  const { onClick } = props;
  const layout = useSelector(
    (state: { puzzles: BoardLayout }) => state.puzzles
  );

  const { width } = useWindowDimensions();

  const height = useSelector((state: { height: number }) => state.height);

  const PADDING = 10;
  const [PUZZLE_PIECE, setPuzzleSize] = useState<{ h: number; w: number }>({ h: 100, w: 130 });

  const numberOfPieces = Object.values(layout).length;
  const columns = Math.ceil(Math.sqrt(numberOfPieces));
  const rows = Math.ceil(numberOfPieces / columns);


  function updatePieceSize(){
    if (PUZZLE_PIECE.w <= 0 || PUZZLE_PIECE.h <= 0 || columns * (PUZZLE_PIECE.w + 2 * PADDING) + 2 * PADDING > width) {
      const newW = (width - 2 * PADDING * (columns + 1)) / columns;
      const newH = newW * 1.3;
      setPuzzleSize({ h: newH, w: newW });
    }
  
    if (PUZZLE_PIECE.w <= 0 || PUZZLE_PIECE.h <= 0 || rows * (PUZZLE_PIECE.h + 2 * PADDING) + 2 * PADDING > height) {
      const newH = (height - 2 * PADDING) / rows - 2 * PADDING;
      const newW = newH / 1.3;
      setPuzzleSize({ h: newH, w: newW });
    }
  }

  useEffect(() => updatePieceSize())

  useMemo(() => updatePieceSize(), [width, height])


  useMemo(() => console.log(PUZZLE_PIECE), [PUZZLE_PIECE])
  return (
    <BoardGrid
      onClick={onClick}
      rowLength={Math.ceil(columns)}
      width={width}
      height={height}
    >
      {Object.values(layout).map((puzzle) => (
        <PuzzlePiece {...puzzle} w={PUZZLE_PIECE.w} h={PUZZLE_PIECE.h} />
      ))}
    </BoardGrid>
  );
};

export default Board;
