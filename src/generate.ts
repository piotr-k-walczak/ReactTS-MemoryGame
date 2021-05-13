import { getRndInteger } from "./utils";
import { PuzzleType } from "./types";
import {
  Theme,
  Themes,
  themeToName
} from "./themes";

type BoardLayout = { [key: number]: PuzzleType };

export function generatePuzzleLayoutByName(name: string): BoardLayout {
  Themes.forEach(theme => {
    if (themeToName(theme) == name){
      console.log(name);
      console.log(themeToName(theme));
        return generatePuzzleLayout(theme);
    }
  })
  return generatePuzzleLayout(Themes[0]);
}

export function generatePuzzleLayout(params: Theme): BoardLayout {
  var layout: BoardLayout = {};

  const size = Math.min(params.size, params.puzzles.length);
  for (var i = 0; i < params.size && i < params.puzzles.length; i++) {
    for (var j = 0; j < 2; j++) {
      var index = getRndInteger(0, size * 20);
      while (index in layout) {
        index = getRndInteger(0, size * 20);
      }
      layout[index] = {
        uniqueId: index,
        puzzleId: i,
        imageSrc: params.puzzles[i],
        takenOff: false,
        isFlipped: false,
      };
    }
  }

  return layout;
}

export default generatePuzzleLayout;
