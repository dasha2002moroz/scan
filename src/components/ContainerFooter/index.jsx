import React from 'react';
import { Footer } from "./Footer";
import {connect} from "react-redux";


class FooterContainer extends React.Component {

    render() {
        return  <Footer {...this.props} />    
  
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.token.isAuth,
    login: state.token.login
});

connect(mapStateToProps)(FooterContainer)
export {FooterContainer}
