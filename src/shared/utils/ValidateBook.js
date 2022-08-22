import * as regex from '../constants/regex';

function ValidateBook(bookName, author, category, description) {
    console.log("Entered book validation")

    const error = {
        bookNameError: '',
        authorError: '',
        categoryError: '',
        descriptionError: ''
    }

    if (bookName === "") {
        error.bookNameError = "Please enter the book name";
    } else if (!regex.BOOKNAME_REGEX.test(bookName)) {
        error.bookNameError = "Invalid book name";
    }

    if (author === "") {
        error.authorError = "Please enter the book author";
    } else if (!regex.NAME_REGEX.test(author)) {
        error.authorError = "Invalid author name, don't include special characters, numbers";
    }

    if (category === "") {
        error.categoryError = "Please enter the category of book";
    } else if (!regex.NAME_REGEX.test(category)) {
        error.categoryError = "Invalid category name, don't include special characters, numbers";
    }

    if (description === "") {
        error.descriptionError = "Please enter the description of book";
    }

    console.log("ERROR in validation : ", error)

    if (error.bookNameError || error.authorError || error.categoryError || error.descriptionError) {
        return error;
    }

    return true;
}

export default ValidateBook;