import React, { useState, useEffect } from "react";
import {connect} from "react-redux";
import {Info} from './Info';
import { Loader } from "@components/Loader";
import { render } from "react-dom";

const InfoContainer = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    console.log(isLoading)

    useEffect(() => {
            setTimeout(() => setIsLoading(false), 1000);
        }, []);   

    console.log("loader"+isLoading)
   
    render 
    if (isLoading) {
        return <Loader/>
    }
        return  <Info {...props} />
    
    }
  
  const mapStateToProps = (state) => ({
    usedCompanyCount: state.user.usedCompanyCount,
    companyLimit: state.user.companyLimit

  });

  export default connect(mapStateToProps)(InfoContainer);