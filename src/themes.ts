import { getRandomElements } from "./utils";

export type Theme = {
  name: string;
  size: number;
  back: string;
  puzzles: string[];
};

const CardBacks = [
    "blue_back.png",
    "gray_back.png",
    "green_back.png"
]

const Cards = [
    "2C.png",
    "2D.png",
    "2H.png",
    "2S.png",
    "3C.png",
    "3D.png",
    "3H.png",
    "3S.png",
    "4C.png",
    "4D.png",
    "4H.png",
    "4S.png",
    "5C.png",
    "5D.png",
    "5H.png",
    "5S.png",
    "6C.png",
    "6D.png",
    "6H.png",
    "6S.png",
    "7C.png",
    "7D.png",
    "7H.png",
    "7S.png",
    "8C.png",
    "8D.png",
    "8H.png",
    "8S.png",
    "9C.png",
    "9D.png",
    "9H.png",
    "9S.png",
    "10C.png",
    "10D.png",
    "10H.png",
    "10S.png",
    "JC.png",
    "JD.png",
    "JH.png",
    "JS.png",
    "KC.png",
    "KD.png",
    "KH.png",
    "KS.png",
    "QC.png",
    "QD.png",
    "QH.png",
    "QS.png",
    "AC.png",
    "AD.png",
    "AH.png",
    "AS.png"
]

export const SmallerTheme = {
    name: "cards",
    size: 8,
    back: getRandomElements(CardBacks, 1)[0],
    puzzles: getRandomElements(Cards, 8)
}

export const LargerTheme = {
    name: "cards",
    size: 15,
    back: getRandomElements(CardBacks, 1)[0],
    puzzles: getRandomElements(Cards, 15)
}

export const Themes = [
    SmallerTheme,
    LargerTheme
]

export function themeToName(theme: Theme){
    return theme.name + "_" + theme.size;
}

export default Themes[0];
