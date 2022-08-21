import * as types from "../action/actionType";

const initialState = {
    users: [],
    user: {},
    loading: true,
    successmessage: "",
    errormessage: "",
};

const userReducers = (state = initialState, action) => { 
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case types.GET_SUCCESS_MESSAGE:
            return {
                ...state,
                successmessage: action.payload,
                errormessage: '',
                loading: true
            };
        case types.GET_ERROR_MESSAGE: 
            return {
                ...state,
                successmessage : '',
                errormessage: action.payload,
                loading: false
            };
        case types.DELETE_USER:
        case types.ADD_USER:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default userReducers;