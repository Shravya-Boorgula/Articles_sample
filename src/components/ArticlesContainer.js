import React from 'react';
import {connect} from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import {mapStateToProps, mapDispatchToProps} from '../mappingStateDispatchToProps';

library.add(faTimes);

class ArticlesContainer extends React.Component {
  render() {
    return (
      <div className="app-card-list" id="app-card-list">
        {
          this.props.posts && Object
            .keys(this.props.posts)
            .map(key => <Card key={key} index={key} details={this.props.posts[key]} doubleClick={this.props.showEditModal} />)
        }
      </div>
    );
  }
}
  
class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary"> Read more </button>
    )
  }
}

class CardHeader extends React.Component {
  onCloseClick = () => {
    if(this.props.postsData) {
      let deletePostIndex = -1;
      let deletePost = this.props.postsData.find((post) => {
        deletePostIndex++;
        return post.id === this.props.id;
      });
      if(deletePost) {
        this.props.deletePostData(this.props.postsData.splice(deletePostIndex, 1));
      }
    } 
  }

  render() {
    const { email, title } = this.props;
    return (
      <header className="card-header">
        <div className="block-title">
          <h4 className="card-header-title">{title}</h4>
          <p>{email}</p>
        </div>
        <div className="block-close" onClick={this.onCloseClick}>
          <FontAwesomeIcon icon="times" />
        </div>
      </header>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="body-content">{this.props.description}</p>
        <Button />
      </div>
    )
  }
}

class Card extends React.Component {

  handleDoubleClick = () => {
    this.props.doubleClick();
  }

  render() {
    return (
      <article className="card" onDoubleClick={this.handleDoubleClick}>
        <CardHeader email={this.props.details.email} title={this.props.details.name} id={this.props.details.id} />
        <CardBody description={this.props.details.body} />
      </article>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);