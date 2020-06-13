import React, { Component } from 'react';
import './resume.css';
import Pdf from "./EvanCook20190522.pdf";
{/*import { Document, Page } from 'react-pdf';
import pdfFile from "./EvanCook20190522.pdf" */}


class Resume extends Component {
  
  render() {
  
    return (

      <div className = "resume">
        <a href = {Pdf} target = "_blank">Open PDF</a>
      </div>

    );
  }
}

export default Resume;