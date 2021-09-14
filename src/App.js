import React, {Component} from 'react';
import Table from './Table'
import Form from './Form'
class App extends Component {
    state = {
      bookmarks: []
    }
    removeBookmark = (index) => {
      const {bookmarks} = this.state
      this.setState({
          bookmarks:bookmarks.filter((bookmark,i) => {
              if(index === i) {
                localStorage.removeItem(bookmark.name);
              }
              return i !== index
          }),
      });
    }

    editBookmark = (index) => {
      const {bookmarks} = this.state
      this.setState({
          
        })
    }

    handleSubmit = (bookmark) => {
        this.setState({
          bookmarks: [...this.state.bookmarks, bookmark]
        })
    }
    //injects localstorage data to table
    componentDidMount() {
      for(var i = 0; i < localStorage.length; i++) {
        this.state.bookmarks.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
      this.setState({
          bookmarks: [...this.state.bookmarks]
        })
    } 
    render() {
      return (
        <div className="container">
          <Table bookmarkData={this.state.bookmarks} removeBookmark={this.removeBookmark} />
          <h3>Add New</h3>
          <Form handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
  }

export default App
