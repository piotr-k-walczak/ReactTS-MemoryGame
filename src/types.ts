export type PuzzleType = {
  uniqueId: number;
  puzzleId: number;
  imageSrc: string;
  takenOff: boolean;
  isFlipped: boolean;
};

export type Skin = [{ puzzleId: number; imageId: string }];

export type BoardParams = {
  size: number;
  skin: Skin;
  layout: [PuzzleType] | null;
};

export default PuzzleType;
