import React, { Component } from "react";
import axios from "axios";

//our savedcontainer class
class SavedContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  //on page load, load all the saved books
  componentDidMount() {
    this.loadBooks();
  }

  //load our books
  loadBooks = () => {
    axios.get("/api/books")
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  //delete book by id call
  deleteBook = id => {
    axios.delete("/api/books/" + id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };


  render() {
    let bookList = this.state.books || {};

    return (
      <>
        <span>{bookList.map( object => {
          console.log(object)
          return (
            <>
              <div key={object._id} data={object}>
                <h1>{object.title}</h1>
                <h2>{object.authors}</h2>
                <img src={object.image} alt="book" />
                <p >{object.description}</p>
                <span>
                  <a href={object.previewLink}><span>Preview Link </span></a>|
                        <a href={object.infoLink}><span> Info Link </span></a>|
                  <span> Delete</span>
                </span>
              </div>
            </>
          )
        })}</span>
      </>
    )
  }
}

export default SavedContainer;