const initialState = {
  lastTheme: "default",
  confirmed: false,
  puzzles: {},
  moves: 0,
  height: 0,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "lastTheme/setLastTheme": {
      return {
        ...state,
        lastTheme: action.payload,
      };
    }
    case "game/setConfirmed": {
      return {
        ...state,
        confirmed: action.payload,
      };
    }
    case "game/addMove": {
      return {
        ...state,
        moves: state.moves + 1,
      };
    }
    case "game/resetMoves": {
      return {
        ...state,
        moves: 0,
      };
    }
    case "puzzles/setPuzzles": {
      return {
        ...state,
        puzzles: action.payload,
      };
    }
    case "puzzles/updatePuzzle": {
      const puzzle = action.payload;
      return {
        ...state,
        puzzles: {
          ...state.puzzles,
          [puzzle.uniqueId]: puzzle,
        },
      };
    }
    case "puzzles/flipPuzzles": {
      const puzzleIds = action.payload;
      return {
        ...state,
        puzzles: {
          ...state.puzzles,
          [puzzleIds[0]]: {
            ...state.puzzles[puzzleIds[0]],
            isFlipped: false,
          },
          [puzzleIds[1]]: {
            ...state.puzzles[puzzleIds[1]],
            isFlipped: false,
          },
        },
      };
    }
    case "puzzles/takeOffPuzzles": {
      const puzzleIds = action.payload;
      return {
        ...state,
        puzzles: {
          ...state.puzzles,
          [puzzleIds[0]]: {
            ...state.puzzles[puzzleIds[0]],
            takenOff: true,
            isFlipped: false,
          },
          [puzzleIds[1]]: {
            ...state.puzzles[puzzleIds[1]],
            takenOff: true,
            isFlipped: false,
          },
        },
      };
    }
    case "board/setHeight": {
      const h = action.payload;
      return {
        ...state,
        height: h,
      };
    }
    default:
      return state;
  }
}
