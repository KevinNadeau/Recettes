import { ADD_RECIPES } from "../actionTypes";

const defaultState = [];

export const RecettesListe = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_RECIPES:
            //Le playload ce présente sous cette forme
            // payload : { data: data}
            return action.payload.data;
        default:
            return state;
    }
};