import React, { Component } from 'react';
import './resume.css';
import { Document, Page } from 'react-pdf';
import pdfFile from "./EvanCook20190518_web.pdf"

class Resume extends Component {
  
  render() {
  
    return (
      <div className="resume">
        
        
      <Document file={pdfFile}>

       <Page pageNumber={1}/>

      </Document>

      </div>
    );
  }
}

export default Resume;