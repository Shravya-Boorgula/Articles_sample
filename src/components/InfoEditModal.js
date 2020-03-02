import React from 'react';

class InfoEditModal extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         modalShowHideClass : ""
    //     };
    // }

    // state = {
    //     modalShowHideClass: "modal fade modal-hide"
    // }

    // hideModal = () => {
    //     this.setState({
    //         modalShowHideClass: "modal-container modal-hide"
    //     });
    // }

    render() {
        let modalClass = this.props.addNew ?  "modal-container modal-show" : "modal-container modal-hide";
        console.log("render - from Modal");
        return (
            <div className={modalClass}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" onClick={this.props.onCloseModal}>&times;</button>
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
                    <button type="button" className="btn btn-default" onClick={this.props.onCloseModal}>Save</button>
                    <button type="button" className="btn btn-default" onClick={this.props.onCloseModal}>Cancel</button>
                  </div>
                </div>
              </div>
            </div> 
        );
    }
}

export default InfoEditModal;