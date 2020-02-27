import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                {/* <div className="container-fluid"> */}
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">ARTICLES</a>
                    </div>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item"> 
                            <a href="#" className="nav-link"><span className="glyphicon glyphicon-home"></span> Home </a>
                        </li>
                        <li className="nav-item"> 
                            <a href="#" className="nav-link"><span className="glyphicon glyphicon-plus"></span> Add </a>
                        </li>
                    </ul>
                {/* </div> */}
            </nav>
        );
    }
}

export default Header;