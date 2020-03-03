import React from 'react';
import {connect} from 'react-redux';
import InfoEditModal from './InfoEditModal';
import {mapStateToProps, mapDispatchToProps} from '../mappingStateDispatch';

class Header extends React.Component {
    render() {
        console.log("render - from Header", this.props);
        return (
            <React.Fragment>
            <nav className="navbar navbar-inverse">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">ARTICLES</a>
                </div>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item"> 
                        <a href="#" className="nav-link"><span className="glyphicon glyphicon-home"></span> Home </a>
                    </li>
                    <li className="nav-item"> 
                        <a href="#" className="nav-link" onClick = {this.props.showEditModal}><span className="glyphicon glyphicon-plus"></span> Add </a>
                    </li>
                </ul>
            </nav>
            <InfoEditModal/>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);