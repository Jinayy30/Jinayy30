import { React, useState, useEffect } from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  Dropdown,
  Segment,
  Container,
  Grid,
  DropdownMenu,
  DropdownItem,
} from "semantic-ui-react";
import { single, totalPoints, ageActions, educationActions } from "../Actions";
import { useDispatch, useSelector } from "react-redux";

const EducationSkilltransfer = () =>{


    const [skilltranfer, setSkilltransfer] = useState(0);
  let newpoint;
  const dispatch = useDispatch();

  const marriegeStatus = useSelector((state) => state.marriage);
  const singlePoints = useSelector((state) => state.points.agepoints);
  const educationPoints = useSelector((state) => state.points.educationpoints);
  const ageStatus = useSelector((state) => state.age);
  const educationStatus = useSelector((state) => state.education);

  const clbLevelSpeaking = useSelector((state) => state.clbspeaking);
  const clbLevelWriting = useSelector((state) => state.clbwriting);
  const clbLevelReading = useSelector((state) => state.clbreading);
  const clbLevelListening = useSelector((state) => state.clblistening);

  useEffect(() => {
    if (educationStatus === "None, or less than secondary (high school)") {
        if (
          (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
          (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
          (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
          (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
        ) {
          setSkilltransfer(0);
        }
      }
  
      if (educationStatus === "Secondary diploma (high school graduation") {
        if (
          (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
          (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
          (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
          (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
        ) {
          setSkilltransfer(0);
        }
      }
  
      if (
        educationStatus ===
        "One-year program at a university, college, trade or technical school, or other institute"
      ) {
        if (
          (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
          (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
          (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
          (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
        ) {
          setSkilltransfer(25);
        }
      }
  
      if (educationStatus ==="Two-year program at a university, college, trade or technical school, or other institute") {
        if (
          (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
          (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
          (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
          (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
        ) {
          setSkilltransfer(25);
        }
      }
  
      if (
        educationStatus ===
        "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
      ) {
        if (
          (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
          (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
          (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
          (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
        ) {
          setSkilltransfer(25);
        }
      }
  
      if (
        educationStatus ===
        "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
      ) {
        if (
          (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
          (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
          (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
          (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
        ) {
          setSkilltransfer(50);
        }
      }
  
      if (
        educationStatus ===
        "Master's degree, or professional degree needed to practice in a licensed profession"
      ) {
        if (
          (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
          (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
          (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
          (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
        ) {
          setSkilltransfer(50);
        }
      }
  
      if (educationStatus == "Doctoral level university degree (PhD)") {
        if (
          (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
          (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
          (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
          (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
        ) {
          setSkilltransfer(50);
        }
      }
      dispatch(totalPoints("SKILLTRANSFEREDUCATION",skilltranfer));
  });

};

export default EducationSkilltransfer;