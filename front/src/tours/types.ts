type User = {
  _id: number;
  role: string;
  active: boolean;
  name: string;
  email: string;
  photo: string;
  password: number;
};

type Location = {
  type: string;
  description: string;
  coordinates: number[];
  address: string;
};

export type Tour = {
  _id: number;
  startLocation: Location;
  images: string[];
  startDates: string[]; //or Date
  createdAt: string; //or Date
  guides: User[];
  ratingsAverage: number;
  ratingsQuantity: number;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  locations: Location & {_id: number, day: number}[];
  slug: string;
};

export type Tours = Array<Tour>;
;

// redux types
export const FETCH_TOURS_START = 'FETCH_TOURS_START';
type FetchToursStartAction = {
  type: typeof FETCH_TOURS_START
}

export const FETCH_TOURS_SUCCESS = 'FETCH_TOURS_SUCCESS';
type FetchToursSuccessAction = {
  type: typeof FETCH_TOURS_SUCCESS,
  payload: Tours
}

export const FETCH_TOURS_FAILURE = 'FETCH_TOURS_FAILURE';
type FetchToursFailureAction = {
  type: typeof FETCH_TOURS_FAILURE,
  payload: string; // Must be an ErrorMessageType or ErrorCodeType
}

export type ToursActionTypes = 
  | FetchToursStartAction
  | FetchToursSuccessAction
  | FetchToursFailureAction;