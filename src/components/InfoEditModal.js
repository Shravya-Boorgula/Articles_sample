import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../mappingStateDispatchToProps';

class InfoEditModal extends React.Component {

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
                    <p>Category</p>
                    <select className="browser-default custom-select data-entry" placeholder="select">
                      <option value="travel">Travel</option>
                      <option value="development">Programming</option>
                      <option value="news">News</option>
                    </select>
                    <br></br>
                    <p>Title</p>
                    <input type='text' className="data-entry" required/>
                    <br></br>
                    <p>Description</p>
                    <textarea className="data-entry" required/>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" onClick={this.props.hideEditModal}>Save</button>
                    <button type="button" className="btn btn-default" onClick={this.props.hideEditModal}>Cancel</button>
                  </div>
                </div>
              </div>
            </div> 
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoEditModal);