import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);

class ArticlesContainer extends React.Component {
    constructor() {
        super();  
        this.state = {
          postData: {}
        }
      }
     
      componentDidUpdate(prevProps, prevState) {
        if(prevProps.posts !== this.props.posts){
          this.setState({
            postData: this.props.posts
          });
        }
      }
    
      render() {
        return (
        <div className="app-card-list" id="app-card-list">
            {
              this.state.postData && Object
              .keys(this.state.postData)
              .map(key => <Card key={key} index={key} details={this.state.postData[key]}/>)
            }
        </div>
        );
      }
}
  
class Button extends React.Component {
    render() {
        return (
            <button className="button button-primary">
                <i className="fa fa-chevron-right"></i> Read more
            </button>
        )
    }
}

class CardHeader extends React.Component {
    render() {
        const { email, title } = this.props;
        return (
            <header className="card-header">
              <div className="block-title">
                <h4 className="card-header-title">{title}</h4>
                <p>{email}</p>
              </div>  
              <div className="block-close">
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
    render() {
        return (
            <article className="card">
                <CardHeader email={this.props.details.email} title={this.props.details.name} />
                <CardBody description={this.props.details.body} />
            </article>
        )
    }
}

export default ArticlesContainer;