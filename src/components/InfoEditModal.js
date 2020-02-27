import React from 'react';

class InfoEditModal extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         modalShowHideClass : props.addNew ?  "modal fade modal-show" : "modal fade modal-hide"
    //     };
    // }

    // state = {
    //     modalShowHideClass: "modal fade modal-hide"
    // }

    // showModal = () => {
    //     this.setState({
    //         modalShowHideClass: "modal fade modal-show"
    //     });
    // }

    // hideModal = () => {
    //     this.setState({
    //         modalShowHideClass: "modal fade modal-hide"
    //     });
    // }

    render() {
        let modalClass = this.props.addNew ?  "modal-container modal-show" : "modal-container modal-hide";
        return (
            <div className={modalClass}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" >&times;</button>
                    <h4 className="modal-title">ARTICLE</h4>
                  </div>
                  <div className="modal-body">
                    <p>Title</p>
                    <input type='text' className="data-entry" required/>
                    <br></br>
                    <p>Description</p>
                    <textarea className="data-entry" required/>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" >Save</button>
                    <button type="button" className="btn btn-default" >Cancel</button>
                  </div>
                </div>
              </div>
            </div> 
        );
    }
}

export default InfoEditModal;