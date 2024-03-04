import React from 'react';
import Home from "./HomePage";
import {connect} from "react-redux";


class HomeContainer extends React.Component {

    render() {
        return <Home {...this.props} />
        
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.token.isAuth,
    generalData: state.token.login,
    
});

export default connect(mapStateToProps)(HomeContainer) 