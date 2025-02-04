import { combineReducers } from "@reduxjs/toolkit";
import pokemonApi from "../containers/pokemonReducers/reducerSlice";

export const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});
