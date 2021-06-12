import React, {useState} from "react";
import Header from '../headfoot/Header'
import Footer from '../headfoot/Footer'
import DesignForm from "./DesignForm";
import "./DesignForm.scss";


const AddDesign = ({loginInfo}) => {

    return (
        <div>
            <Header/>
            <div className="form-outer-container">
                <div className="form-flex-container">
                    <DesignForm loginInfo={loginInfo}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AddDesign;


