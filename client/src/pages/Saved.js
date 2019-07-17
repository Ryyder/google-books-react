import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import SavedContainer from "../components/SavedContainer";


class Saved extends Component {

    state = {
        books: [],
        title: "",
        authors: "",
        description: "",
        image: "",
        infoLink: "",
        previewLink: ""
      };

      render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Jumbotron />
                        <SavedContainer results={this.state.books} />
                    </div>
                </div>
            </div>
        )
    }
}


export default Saved;