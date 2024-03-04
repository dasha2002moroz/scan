import "@styles/App.css";

import React, { Component, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';

import {connect, Provider} from "react-redux";
import {compose} from "redux";

import { store } from "./store/store";
import {initializeApp} from "./store/app-reducer";

import  HeaderContainer   from "@components/ContainerHeader/index";
import { FooterContainer }  from "@components/ContainerFooter";

import  HomeContainer   from "@views/HomePage";
import  SearchContainer   from "@views/SearchPage/index";
import  ResultContainer   from "@views/ResultPage";
import  LoginContainer  from "./views/AuthPage";


export const withRouter = (Component) =>{
  const Wrapper = (props) =>{
      const history = useNavigate();
      return <Component history={history} {...props}/>
  } 
  return Wrapper;
}

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        return (
                    <div className='app-wrapper'>
                         <HeaderContainer/>
                        <div className='app-wrapper-content'>
                        {this.props.isAuth}
                        <Routes> 
                              <Route path="/" element={<HomeContainer />} /> 
                              <Route path="/login" element={<LoginContainer />} />   
                              <Route path="/search" element={<SearchContainer />} />   
                              <Route path="/result" element={<ResultContainer />} />              
                        </Routes>
                      
                        </div>
                        <FooterContainer />  
                    </div>
        )
    }}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isAuth: state.token.isAuth
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const ScanApp = (props) => {
   return (
    
        <Provider store={store}>
            <AppContainer />
        </Provider>
     
)}

export { ScanApp }