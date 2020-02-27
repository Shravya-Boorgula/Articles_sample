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
        // let modalClass = this.props.addNew ?  "modal fade modal-show" : "modal fade modal-hide";
        return (
            <div className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" >&times;</button>
                    <h4 className="modal-title">Modal Header</h4>
                  </div>
                  <div className="modal-body">
                    <p>Some text in the modal.</p>
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