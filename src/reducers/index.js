import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";
import { BrowserRouter } from "react-router-dom";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;
