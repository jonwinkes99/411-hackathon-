import React, { Component } from "react"

class Alt extends Component {
    state = {
        alts: [],
        input: ""
      }


      onChange = (e) => {
        this.setState({input: e.target.value})
    
      }

      fetchArticles = (e) => {
        e.preventDefault()
        fetch("https://hn.algolia.com/api/v1/search?query=" + this.state.input)
          .then(res => res.json())
          .then(response => {
            console.log(response)
            this.setState({ alts: response.hits})
          });
      };

      render() {
        return (
            <form onSubmit={this.fetchArticles}>
            <input onChange={this.onChange}></input>
            <button type="submit">Submit</button>
            {
              this.state.alts.map(alts => {
                return <p> <a href={alts.url}>{alts.title}</a></p>
              })
            }
          </form>
        );
    }

}

export default Alt