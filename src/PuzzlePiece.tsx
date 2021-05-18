import React, { Component, useState } from "react";
import { useSpring, animated as a, interpolate } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {PuzzleType} from "./types";
import { updatePuzzle } from "./actionCreators";

const StyledPiece = styled(a.div)<PieceProps>`
  width: ${p => p.w}px;
  height: ${p => p.h}px;
  cursor: pointer;
  backface-visibility: hidden;
  webkit-backface-visibility: hidden;
  border-radius: 10px;
  background-size: cover;
  will-change: transform, opacity;
  transform-style: preserve-3d;
  box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, .25);
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

type PieceProps = {
  h: number,
  w: number
}

const PuzzleContainer = styled(a.div)`
  display: grid;
  & > div {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

type BoardLayout = { [key: number]: PuzzleType };

function PuzzlePiece(props: PuzzleType & PieceProps) {
  const puzzleDetails = useSelector(
    (state: any) => state.puzzles[props.uniqueId]
  );
  const dispatch = useDispatch();

  const amountOfFlipped = useSelector((state: { puzzles: BoardLayout }) => {
    return Object.values(state.puzzles).filter((puzzle) => puzzle.isFlipped)
      .length;
  });

  const { transform, opacity } = useSpring({
    opacity: puzzleDetails.takenOff ? 0 : 1,
    transform: `rotateX(${puzzleDetails.isFlipped ? 180 : 0}deg) translateY(${
      puzzleDetails.takenOff ? -100 : 0
    }px)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleClick = () => {
    if (
      !puzzleDetails.takenOff &&
      !puzzleDetails.isFlipped &&
      amountOfFlipped < 2
    ) {
      dispatch(updatePuzzle({
        ...puzzleDetails,
        isFlipped: !puzzleDetails.isFlipped,
      }));
    }
  };

  return (
    <PuzzleContainer
      onClick={handleClick}
      style={{ opacity, pointerEvents: !puzzleDetails.takenOff ? "auto" : "none" }}
    >
      <StyledPiece
        w={props.w}
        h={props.h}
        style={{
          zIndex: 2,
          transform,
          backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
        }}
      />
      <StyledPiece
        w={props.w}
        h={props.h}
        style={{
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          backgroundImage: `url("/assets/${puzzleDetails.imageSrc}")`,
        }}
      />
    </PuzzleContainer>
  );
}

export default PuzzlePiece;
