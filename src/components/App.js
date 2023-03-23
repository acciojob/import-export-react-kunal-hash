import React, { Component, useState } from "react";
import '../styles/App.css';
import InputQuery from "./InputQuery";
import SubHeading from "./SubHeading";
import Heading from "./Heading";
import SubmitButton from "./SubmitButton";

const App = () => {
  return (
    <div id="main">
      < Heading/>
      < InputQuery/>
      < SubHeading/>
      < SubmitButton/>
    </div>
  )
}


