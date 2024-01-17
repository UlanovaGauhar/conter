import { createStore } from "redux";

const initialState = {
    result: 0
};

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': {
            return {
                ...state,
                result: state.result + 25
            };
        }
        case 'SUBTRACTION': {
            return {
                ...state,
                result: state.result + 50
            };
        }
        case 'MULTIPLY': { 
            return {
                ...state,
                result: state.result - 1
            };
        }
        case 'DIVISION': {
            return {
                ...state,
                result: state.result + 1
            };
        }
        default: {
            return state;
        }
    }
}

export const store = createStore(calculatorReducer);
