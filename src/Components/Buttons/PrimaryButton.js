import React from "react";
import styled from "styled-components";

const Button = styled.button`
    font-size: "18px";
    color: "black";
    width: "100px";
    height: "50px";
    border: "3px solid #373737";
    background-color: "transparent";
    padding: "5px";
`;

const PrimaryBtn = () => {

    return(
        <Btn text={{label: "Subscribe"}}/>
    )
};

const Btn = ({text}) =>{
    return (
        <button>{text.label}</button>
    );
};

export default PrimaryBtn;