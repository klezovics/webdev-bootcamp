// Reducer = Function
// Two arguments = State, Action
// Reducer = Switch statement
// Note 1: For unknown action return current state
// Note 2: Always return a NEW state object, never mutate state
const booleanReducer = (state = false, action) => {
    switch (action.type) {
        case "TOGGLE":
            return !state;
        default:
            return state;
    }
}

const colors = ["red", "green", "blue"];

const changeColorReducer = (state = "red", action) => {
    const nextColorIdx = Math.floor(Math.random() * colors.length);
    const nextColor = colors[nextColorIdx];

    switch (action.type) {
        case "CHANGE_COLOR":
            return nextColor;
        default:
            return state;
    }
}


const numericReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return state;
    }
}

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.todo];
        case "CLEAR_TODOS":
            return [];
        default:
            return state;
    }
}

const filterReducer = (state = {filter: null, isActive: false}, action) => {
    switch (action.type) {
        case "SET_FILTER":
            return {filter: action.filter, isActive: true};
        case "CLEAR_FILTER":
            return {filter: null, isActive: false};
        default:
            return state;
    }
}