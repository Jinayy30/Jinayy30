import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useReactToPrint } from 'react-to-print';
import { useState, useEffect } from "react";
import {
  Button,
  Segment,
  Modal,
  Header,
} from "semantic-ui-react";
import { single, totalPoints, ageActions, educationActions } from "../Actions";
import ReactToPrint from 'react-to-print';
import { useDispatch, useSelector } from "react-redux";
//import { Footer } from '../Components/Footer';
//const marriegeStatus = useSelector((state) => state.marriage);

class ComponentToPrint extends React.PureComponent {
    
    render() {
        
      return (
       <div> 
          </div> 
      );
    }
  }

  export const PdfScore = () => {
    const componentRef = React.useRef();
    
  
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} />
      </div>
    );
  };


