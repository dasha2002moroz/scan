import React from 'react';
import {ResultPage} from "./ResultPage";
import {connect} from "react-redux";
import { getDetail } from "../../store/data-reducer";



class ResultContainer extends React.Component {

    render() {
        return <ResultPage {...this.props} />  
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.token.isAuth,
    token: state.token.token,
    data: state.data.data2,
    generalData: state.data.data,
    detail: state.data.detaildata
});

export default connect(mapStateToProps,{ getDetail })(ResultContainer);