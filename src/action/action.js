import * as types from './actionType';
import axios from 'axios';
import axiosInstance from '../api/axios';

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.ADD_USER,
});

const userUpdated = () => ({
  type: types.UPDATE_USER
});

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

const getSuccessMessage = (message) => ({
  type: types.GET_SUCCESS_MESSAGE,
  payload: message
});

const getErrorMessage = (message) => ({
  type: types.GET_ERROR_MESSAGE,
  payload: message
});

const bookListSuccess = (message) => ({
  type: types.ADD_BOOK_LIST_SUCCESS,
  payload: message
});

const bookListFailure = (message) => ({
  type: types.ADD_BOOK_LIST_FAILURE,
  payload: message
});

//Register User
export const registerUser = (user) => {
  console.log("register")
  return (dispatch) => {
    axiosInstance.post(`/users/register`, user)
      .then((res) => {
        console.log("res : ", res)
        dispatch(userAdded())
        dispatch(getSuccessMessage(res.data.data.message))
      })
      .catch((error) => {
        console.log("error from action : ", error);
        dispatch(getErrorMessage(error.response.data.error))
      })
  }
}

//Login User 
export const userLoggedIn = (loginCredential) => {
  console.log("Login : ", loginCredential);
  return async function (dispatch) {
    axiosInstance.post(`/users/login`, loginCredential)
      .then((res) => {
        if (res) {
          console.log("response : ", res.data.role)
          window.localStorage.setItem('token', res.data.token)
          window.localStorage.setItem('role', res.data.role)
          dispatch(getSuccessMessage(res.data.data.message))
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
        dispatch(getErrorMessage(error.response.data.error))
      })
  }
}

//admin -> add book - new 
export const addBook = (book) => {
  console.log("Book add : ", book);
  return async function (dispatch) {
    axiosInstance.post('http://localhost:5000/books/add', book)
      .then((res) => {
        if (res) {
          console.log("response book", res.data.data.message);
          dispatch(getSuccessMessage(res.data.data.message))
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
        dispatch(getErrorMessage(error.response.data.error))
      })
  }
}

//admin -> edit book - new 
export const editBook = (id, book) => {
  return async function (dispatch) {
    axiosInstance.put(`${usersUrl}/${id}`, book)
      .then((res) => {
        if (res) {
          console.log("response edit book", res.data.data.message);
          dispatch(getSuccessMessage(res.data.data.message))
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
        dispatch(getErrorMessage(error.response.data.error))
      })
  }
}

//delete user
export const deleteUser = (id) => {
  return function (dispatch) {
    axiosInstance
      .delete(`/users/${id}`)
      .then((resp) => {
        console.log("resp", resp)
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((error) => {
        console.log(error)
      });
  };
}

//logout
export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: types.SET_LOGOUT
    })
  }
}

//Set user login
export const setLoggedIn = () => ({
  type: types.SET_LOGIN
})

//add books--> admin
export const setBookIn = () => ({
  type: types.SET_BOOK
})

// export const setLoggedOut = () => ({
//   type: types.SET_LOGOUT
// })

//view profile
export const viewProfile = (id) => {
  return function (dispatch) {
    axiosInstance.get(`users/profile/${id}`)
      .then((res) => {
        dispatch(getUser(res.data))
        dispatch(loadUsers())
      })
      .catch((error) => {
        console.log("View Profile error: " + error)
      })
  }
}

//update/edit Profile
export const updateProfile = (user, id) => {
  return function (dispatch) {
    axiosInstance.put(`users/${id}`, user)
      .then(() => {
        dispatch(userUpdated());
        dispatch(loadUsers())
      })
      .catch((error) => {
        console.log("User update error : ", error)
      })
  }
}

//load all users -> refreshing the page
export const loadUsers = () => {
  return function (dispatch) {
    axiosInstance
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        console.log("resp", resp)
        dispatch(getUsers(resp.data));
      })
      .catch((error) => {
        console.log(error)
      });
  };
}

//books
const usersUrl = 'http://localhost:5000/books';
export const getBooks = async (id) => {
  id = id || '';
  return await axiosInstance.get(`${usersUrl}/${id}`);
}


// export const addBook = (book) => {
//   console.log("Book add : ", book);
//   return async function (dispatch) {
//     axiosInstance.post('http://localhost:5000/books/add', book)
//       .then((res) => {
//         if (res) {
//           console.log("response book", res.data.data.message);
//           dispatch(getSuccessMessage(res.data.data.message))
//         }
//       })
//       .catch((error) => {
//         console.log(error.response.data.error);
//         dispatch(getErrorMessage(error.response.data.error))
//       })
//   }
// }
//admin -> delete books
export const deleteBook = (id) => {
  return async function (dispatch) {
    axiosInstance.delete(`${usersUrl}/${id}`)
      .then((res) => {
        if (res) {
          console.log("delete book", message.bookData.message);
          dispatch(bookListSuccess(message.bookData.message))
        }
      })
      .catch((error) => {
        // console.log(error.response.data.message);
        dispatch(bookListFailure(error.response.data.message))
      })
  }
}
//old delete book
// export const deleteBook = async (id) => {
//   return await axiosInstance.delete(`${usersUrl}/${id}`);
// }

//single book
export const getSingleBook = (id) => {
  return function (dispatch) {
    axiosInstance
      .get(`${process.env.REACT_WEBPACK_APP_BASEURL}/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getUser(resp.data));
      })
      .catch(error => console.log(error))
  };
};

//user- booking list
export const getBookList = async (id) => {
  return await axiosInstance.get(`http://localhost:5000/bookings/${id}`);
}


//add book to list-> user - book list
export const addBookToList = (book) => {
  return async (dispatch) => {
    await axiosInstance.post(`http://localhost:5000/books/add-list`, book)
      .then((message) => {
        console.log("success : ", message.data.message)
        dispatch(bookListSuccess(message.data.message))
      })
      .catch((err) => {
        console.log("error : ", err.response.data.message)
        dispatch(bookListFailure(err.response.data.message))
      })
  }
}

//remove from user - booking list
export const removeBook = async (id) => {
  return await axiosInstance.delete(`http://localhost:5000/bookings/${id}`);
}


//old add book

// export const addBook = async (book) => {
//   return await axiosInstance.post(`${usersUrl}/add`, book);
// }


//old edit book
// export const editBooks = async (id, book) => {
//   try {
//     return await axiosInstance.put(`${usersUrl}/${id}`, book);
//   } catch (error) {
//     console.log('Error while editing books', error);
//   }
// }

// export const addBook = (property) => {
//   return function (dispatch) {
//     axiosInstance
//       .post(`books/add-list`, property)
//       .then((res) => {
//         console.log("responser", res)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }
// }