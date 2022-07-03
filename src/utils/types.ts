export interface DetailType {
  id: number;
  name: string;
}

export interface SubGenreInterface extends DetailType {
  isDescriptionRequired?: boolean;
  addNew?: boolean
}

export interface GenreInterface extends DetailType{
  subgenres?: SubGenreInterface[]
}

export interface FirstStepProps {
  genres: GenreInterface[]
}

export interface StateType {
  firstStep: boolean,
  secondStep: boolean,
  thirdStep: boolean,
}
