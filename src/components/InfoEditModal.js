import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../mappingStateDispatchToProps';

class InfoEditModal extends React.Component {

  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.email = React.createRef();
    this.description = React.createRef();
  }

  onSaveClick = () => {
    let title = this.title.current.value,
    email = this.email.current.value,
    details = this.description.current.value,
    newPostData = {
        postId: this.props.storeSize,
        id: this.props.storeSize,
        name: title,
        email: email,
        body: details
    };
    this.props.postsData.push(newPostData);
    this.props.addPostData(this.props.postsData);
    this.title.current.value = "";
    this.email.current.value = "";
    this.description.current.value = "";
    this.props.hideEditModal();
  }

  render() {
        let modalClass = this.props.showModalToEdit ?  "modal-container modal-show" : "modal-container modal-hide";
        console.log("render - from Modal");
        return (
            <div className={modalClass}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" onClick={this.props.hideEditModal}>&times;</button>
                    <h4 className="modal-title">ARTICLE</h4>
                  </div>
                  <div className="modal-body">
                    <p>Title</p>
                    <input type='text' className="data-entry" ref={this.title} required/>
                    <br></br>
                    <p>Email</p>
                    <input type='email' className="data-entry" ref={this.email} required/>
                    <br></br>
                    <p>Description</p>
                    <textarea className="data-entry" ref={this.description} required/>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={this.onSaveClick}>Save</button>
                    <button type="button" className="btn btn-default" onClick={this.props.hideEditModal}>Cancel</button>
                  </div>
                </div>
              </div>
            </div> 
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoEditModal);