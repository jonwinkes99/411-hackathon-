import React, { Component } from "react";
class Main extends Component {
  state = {
    articles: []
  };

  
  render() {
    console.log(this.state.articles);
    return (
      <div>
        <button onClick={this.fetchArticles}>Fetch Articles</button>
        {this.state.articles.map}
      </div>
    );
  }
}

export default Main;