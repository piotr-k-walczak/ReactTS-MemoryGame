import React from "react";
import styled from "styled-components";
import PuzzlePiece from "./PuzzlePiece";
import PuzzleType from "./types";
import { useSelector } from "react-redux";

const BoardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  height: 100%;
  gap: 2ch;
  box-sizing: border-box;
  padding: 20px;
`;

type BoardLayout = { [key: number]: PuzzleType };

type BoardParams = { layout: BoardLayout; onClick: () => void };

const Board: React.FC<BoardParams> = (props: BoardParams) => {
  const { onClick } = props;
  const layout = useSelector(
    (state: { puzzles: BoardLayout }) => state.puzzles
  );

  return (
    <BoardGrid onClick={onClick}>
      {Object.values(layout).map((puzzle) => (
        <PuzzlePiece {...puzzle} />
      ))}
    </BoardGrid>
  );
};

export default Board;
