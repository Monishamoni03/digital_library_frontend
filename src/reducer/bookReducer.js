import * as types from "../action/actionType";

const initialState = {
    loading: true,
    bookListSuccess: '',
    bookListFailure: '',
};

const bookReducers = (state = initialState, action) => {
    switch (action.type) {

        case types.ADD_BOOK_LIST_SUCCESS:
            return {
                ...state,
                bookListSuccess: action.payload,
                bookListFailure: '',
                loading: true
            };
        case types.ADD_BOOK_LIST_FAILURE:
            return {
                ...state,
                bookListFailure: action.payload,
                bookListSuccess: '',
                loading: false
            };
        default:
            return state;
    }
};

export default bookReducers;