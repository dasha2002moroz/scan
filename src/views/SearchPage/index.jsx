import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../../store/data-reducer";


import SearchPage  from "./SearchPage";

const SearchReduxForm = reduxForm({form: 'search'})(SearchPage);

const SearchContainer = (props) => { 
  const navigate = useNavigate();
  const onSubmit = (formData) => {
      props.getData(props.token, formData.inn, formData.tonality, formData.documentCount, formData.startDate, formData.endDate, formData.completeness,
        formData.businessContext, formData.mainRole, formData.riskFactors, formData.technicalNews, formData.announcements, formData.newsDigests);
      navigate('/result')
        }
  

  // if (!props.isAuth) {
  //   return <Navigate to={"/login"} />
  // }

  return (
    <div>
      <SearchReduxForm onSubmit={onSubmit} />
    </div>
)}

const mapStateToProps = (state) => ({
  isAuth: state.token.isAuth,
  token: state.token.token,
  startDate: "2019-01-01T00:00:00+03:00",
  endDate: "2022-08-31T23:59:59+03:00",
  limit: 10

})
console.log({getData})
export default connect(mapStateToProps, {getData})(SearchContainer);
