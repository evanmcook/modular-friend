import React, { Component } from 'react';
import './resume.css';
import Pdf from "./EvanCook20221016.pdf";
{/*import { Document, Page } from 'react-pdf';
import pdfFile from "./EvanCook20190522.pdf" */}


class Resume extends Component {
  
  render() {
  
    return (

      <div className = "resume">
        <a href = {Pdf} target = "_blank" rel="noopener noreferrer">Open PDF</a>
      </div>

    );
  }
}

export default Resume;