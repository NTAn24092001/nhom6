import React, { Component } from 'react';
import { connect } from 'react-redux';


class HomeFooter extends Component {

    render() {
        
        return (
            <div className="home-footer">
            <p>&copy; 2022 VY04-G06-TQA</p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.admin.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
