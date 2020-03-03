import React from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import ArticlesContainer from './components/ArticlesContainer';
import {mapStateToProps, mapDispatchToProps} from './mappingStateDispatch';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      postData : ""
    }
  }
  
  render () {
    return (
        <div className="App">
          <Header/>
          <ArticlesContainer posts={this.state.postData}/>
        </div>
    );
  }

  componentDidMount () {
    let dataUrl = "https://jsonplaceholder.typicode.com/comments";
    fetch(dataUrl)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        postData: responseData
      });
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
