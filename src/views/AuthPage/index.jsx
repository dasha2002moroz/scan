import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "@store/auth-reducer";

import AuthPage from "./AuthPage";

const LoginReduxForm = reduxForm({form: 'login'})(AuthPage);

const Login = (props) => {
  const onSubmit = (formData) => {
      console.log(props.login(formData.login, formData.password).then(result => alert(result)));
      }
  
  if (props.isAuth) {
    return <Navigate to={"/"} />
  } 

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
)}

const mapStateToProps = (state) => ({
  isAuth: state.token.isAuth
})

export default connect(mapStateToProps, {login})(Login)