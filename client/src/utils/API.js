import axios from "axios"

export default {
    // get query from google books api 
    getGoogleSearchBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // we get all the books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // we get books on id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // save a book
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    // delete a book on id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }

}