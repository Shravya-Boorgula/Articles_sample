import React from 'react';
import {Provider, connect} from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import ArticlesContainer from './components/ArticlesContainer';
import './App.css';

const mapStateToProps = (state) => ({
  showModalToEdit: state.showModalToEdit
});

const mapDispatchToProps = (dispatch) => {

}

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      postData : ""
    }
  }
  
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <Header/>
          <ArticlesContainer posts = {this.state.postData}/>
        </div>
      </Provider>
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

export default connect(mapStateToProps)(App);
