import { combineReducers } from "redux";

import { RecettesListe } from "./recipesList";
import { selectedRecipe } from "./selectedRecipe";


export default combineReducers({
    RecettesListe,
    selectedRecipe,
});