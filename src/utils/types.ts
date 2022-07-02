export interface DetailType {
  id: number;
  name: string;
}

export interface SubGenreInterface extends DetailType {
  isDescriptionRequired: boolean
}

export interface GenreInterface extends DetailType{
  subgenres: SubGenreInterface[]
}

export interface FirstStepProps {
  genres: GenreInterface[]
}