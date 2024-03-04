import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "@store/auth-reducer";

class HeaderContainer extends React.Component {
   
    render() {
        return  <Header {...this.props} />    
  
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.token.isAuth,
    login: state.token.login
});


export default connect(mapStateToProps, {logout})(HeaderContainer)