function ValidateBook(bookName, author, category) {
    console.log("user-->"+bookName)
    console.log("Entered validation")

    const error = {
        bookNameError: '',
        authorError: '',
        categoryError: '',
    }

    if (bookName === "") {
        // console.log("user email err")
        error.bookNameError = "Please enter the book name";
    }

    if (author === "") {
        error.authorError = "Please enter the book author";
    }

    if (category === "") {
        error.categoryError = "Please enter the category of book";
    }

    console.log("ERROR in validation : ", error)

    if (error.bookNameError || error.authorError || error.categoryError) {
        return error;
    }

    return true;
}

export default ValidateBook;