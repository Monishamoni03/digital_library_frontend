const initialState = {
    bookListSuccess: false,
    bookMessage: ''
};

const bookReducers = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_BOOK_LIST_SUCCESS': return {
            ...state,
            bookListSuccess: true,
            bookMessage: action.payload
        }
        case 'ADD_BOOK_LIST_FAILURE': return {
            ...state,
            bookListSuccess: false,
            bookMessage: action.payload
        }
        default:
            return state;
    }
};

export default bookReducers;