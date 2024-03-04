import React from 'react';
import {connect} from "react-redux";
import {Account} from './Account';
import { logout } from '../../store/auth-reducer';




class AccountContainer extends React.Component {

    render() {
        return <Account {...this.props} />  
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.token.isAuth,
    name: state.token.login

});

export default connect(mapStateToProps, {logout})(AccountContainer);