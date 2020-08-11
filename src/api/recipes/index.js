import axios from "axios";

import {
    fetchRecipesAction,
    fetchSelectedRecipeAction,
} from "../../redux/actions";

const ENDPOINT_BASE = "https://api.spoonacular.com/recipes";
const ENDPOINT_RECIPES = ENDPOINT_BASE + "/search";

const apiKey = "b4ee0d16abbf4b73af1193cac08f4e04";
const MAX_PER_PAGE = 30;

export const fetchRecipes = async(dispatch, cb, query) => {
    try {
        const response = await axios.get(ENDPOINT_RECIPES, {
            params: {
                apiKey,
                number: MAX_PER_PAGE,
            },
        });
        console.log("voila le délire = ", response.data.results);
        cb && cb();
        dispatch(fetchRecipesAction(response.data.results));
    } catch (e) {
        console.log("error of requete recipes", e);
    }
};

export const fetchSelectedRecipe = async(dispatch, recipeId) => {
    try {
        console.log("Dans fetch selected recipe");
        const response = await axios.get(
            ENDPOINT_BASE + "/" + recipeId + "/information", {
                params: {
                    apiKey,
                },
            }
        );
        console.log("Response =", response.data);

        dispatch(fetchSelectedRecipeAction(response.data));
    } catch (e) {
        console.log("error", e);
    }
};