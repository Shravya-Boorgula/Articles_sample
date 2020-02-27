import React from 'react';
import InfoEditModal from './InfoEditModal';

class Header extends React.Component {
    state = {
        showModal: false
    }

    handleAddClick = () => {
        this.setState({
            showModal: true
        });
    }

    render() {
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
                        <a href="#" className="nav-link" onClick = {this.handleAddClick}><span className="glyphicon glyphicon-plus"></span> Add </a>
                    </li>
                </ul>
            </nav>
            <InfoEditModal addNew = {this.state.showModal}/>
            </React.Fragment>
        );
    }
}

export default Header;