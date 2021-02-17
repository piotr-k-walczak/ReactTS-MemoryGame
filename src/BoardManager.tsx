import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PuzzleType from "./types";
import { addMove, flipPuzzles, setConfirmed, takeOffPuzzles } from "./actionCreators";
import Board from "./Board";
import PostgameAlert from "./PostgameAlert";

type BoardLayout = { [key: number]: PuzzleType };

function ManagedBoard(layout: BoardLayout){
  const flipped = useSelector((state: { puzzles: BoardLayout }) => {
    return Object.values(state.puzzles).filter((puzzle) => puzzle.isFlipped);
  });

  const confirmed = useSelector((state: any) => state.confirmed);

  const dispatch = useDispatch();

  function checkCorrect(flipped: PuzzleType[]) {
    if (flipped.length == 2) {
      if (confirmed) {
        if (flipped[0].puzzleId != flipped[1].puzzleId) {
          dispatch(flipPuzzles(flipped[0].uniqueId, flipped[1].uniqueId));
        } else {
          dispatch(takeOffPuzzles(flipped[0].uniqueId, flipped[1].uniqueId));
        }
        dispatch(addMove())
        dispatch(setConfirmed(false));
      }
    }
  }

  function handleClick(){
    if(flipped.length == 2){
        if (!confirmed){
            dispatch(setConfirmed(true));
        }
    }
  }

  useMemo(() => checkCorrect(flipped), [flipped]);

  return <><Board layout={layout} onClick={handleClick} /><PostgameAlert/></>
};

export default ManagedBoard;
