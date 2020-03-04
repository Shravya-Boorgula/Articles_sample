import React from 'react';
import {connect} from 'react-redux';
import Header from './components/Header';
import ArticlesContainer from './components/ArticlesContainer';
import {mapStateToProps, mapDispatchToProps} from './mappingStateDispatchToProps';
import './App.css';

class App extends React.Component {
  
  render () {
    return (
        <div className="App">
          <Header/>
          <ArticlesContainer posts={this.props.postsData}/>
        </div>
    );
  }

  componentWillMount () {
    this.props.getPostsData();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
