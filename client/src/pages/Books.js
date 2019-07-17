import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchContainer from "../components/SearchContainer";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

//our Books class
class Books extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: "",
    image: "",
    infoLink: "",
    previewLink: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();
    API.searchBooks(this.state.title)
      .then(res => {
        this.setState({ books: res.data.items });
      })
      .catch(err => console.log(err))
  };

  render() {
    console.log(this.state.books);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Jumbotron />
            <form>
              <div className="form-row">
                <div className="col-7">
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Book Name (required)"
                  />
                </div>
                <div className="col-auto">
                  <FormBtn
                    disabled={!this.state.title}
                    onClick={this.handleFormSubmit}
                  >
                    Search
              </FormBtn>
                </div>
              </div>
              <SearchContainer results={this.state.books} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
