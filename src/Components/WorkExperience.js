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
import { single, totalPoints, experience, firstIeltswriting } from "../Actions";
import { useDispatch, useSelector } from "react-redux";

const WorkExperience = () => {
  const [open, setOpen] = useState(false);
  const [experiencePoints, setexperiencePoints] = useState(0);

  let val = false;

  const dispatch = useDispatch();

  const marriegeStatus = useSelector((state) => state.marriage);
  const singlePoints = useSelector((state) => state.points);
  const foreignWorkexperience = useSelector((state) => state.foreignexperience);

  const foreign = useSelector((state) => state.points.foreignexperiencepoints);

  //All global states for different functionality (ielts)

  const clbLevelSpeaking = useSelector((state) => state.clbspeaking);
  const clbLevelWriting = useSelector((state) => state.clbwriting);
  const clbLevelReading = useSelector((state) => state.clbreading);
  const clbLevelListening = useSelector((state) => state.clblistening);

 

  useEffect(() => {
    // useEffect starts here
    dispatch(totalPoints("FOREIGNWORKEXPERIENCE", experiencePoints));
    
    if (foreignWorkexperience === "None or less than a year") {
      setexperiencePoints(0);
    }

    if (
      foreignWorkexperience === "1 year" ||
      foreignWorkexperience === "2 years"
    ) {
      // 1 OR 2 YEARS OF experience starts here
      /* if (
        // CEL conditions
        (firstCelspeaking === "9" || firstCelspeaking === "10") &&
        (firstCelwriting === "9" || firstCelwriting === "10") &&
        (firstCelreading === "9" || firstCelreading === "10") &&
        (firstCellistening === "9" || firstCellistening === "10")
        ) {
        setexperiencePoints(25);
        
      }  // CEL conditions ends here */

      if (
        (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(25);
      }

      //COMBINATION 1

      // reading less than 9 and all grEATER than 7
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(13);
      }

      // speaking less tha  9 and all greater than 7
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(13);
      }

      // writing less than 9 and all greater than 7

      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(13);
      }

      // listening less than 9 and all greater than 7

      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(13);
      }

      // COMBINATION 1 ENDS HERE

      // COMBINATION 2

      // reading and speaking less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(13);
      }

      //writing and listening less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(13);
      }

      // COMBINATION 2 ENDS here

      // COMBINATION 3

      // speaking and writing less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(13);
      }

      // reading and listening less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(13);
      }

      // COMBINATION 3 ends here

      // COMBINATION 4

      // reading and writing less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(13);
      }

      // speaking and listening less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(13);
      }

      // COMBINATION 4 ENDS here

      // COMBINATION 5

      //only SPEAKING greater than 9 else less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(13);
      }

      // only READING greater than 9 else less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(13);
      }

      // only WRITING greater than 9 else lesss than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 19") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(13);
      }

      // only LISTENING greater than 9 else less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(13);
      }

      // COMBINATION 5 ENDS HERE

      // COMBINATION 6

      // all BANDS CLB 7 or 8
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(13);
      }
      // COMBINATION 6 ends here
    } // 1 OR 2 YEARS OF experience end here

    if (foreignWorkexperience === "3 years") {
      // 3 Years or more conditions start here

      if (
        (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(50);
        console.log("hello clb 9");
      }

      // COMBINATION 1
      //reading less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(25);
      }

      // speaking less tha  9 and all greater than 7
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(25);
      }

      // writing less than 9 and all greater than 7

      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(25);
      }

      // listening less than 9 and all greater than 7

      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(25);
      }

      // COMBINATION 1 ENDS HERE

      // COMBINATION 2

      // reading and speaking less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(25);
      }

      //writing and listening less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(25);
      }

      // COMBINATION 2 ENDS here

      // COMBINATION 3

      // speaking and writing less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(25);
      }

      // reading and listening less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(25);
      }

      // COMBINATION 3 ends here

      // COMBINATION 4

      // reading and writing less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(25);
      }

      // speaking and listening less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(25);
      }

      // COMBINATION 4 ENDS here

      // COMBINATION 5

      //only SPEAKING greater than 9 else less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(25);
      }

      // only READING greater than 9 else less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(25);
      }

      // only WRITING greater than 9 else lesss than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 19") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(25);
      }

      // only LISTENING greater than 9 else less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setexperiencePoints(25);
      }

      // COMBINATION 5 ENDS HERE

      // COMBINATION 6

      // all BANDS CLB 7 or 8
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setexperiencePoints(25);
      }
      // COMBINATION 6 ends here
    } // 3 years or more conditions end here
  },[foreignWorkexperience,clbLevelListening,clbLevelReading,clbLevelSpeaking,clbLevelWriting,experiencePoints]); // useEffect ends here

  return (
    <div>
      <br></br>

      <div class="flex flex-col">
        <div class="bg-primary shadow-xl  rounded-3xl p-4">
          <div class="flex-none lg:flex">
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap bg-blue-500 text-white text-lg px-6 py-4 font-bold rounded-xl">
                <h2 class="flex-auto text-lg font-mono font-bold">
                  Work experience
                </h2>
              </div>
              <p class="mt-3"></p>
              <div class="flex py-4  text-sm text-gray-600">
                <div class="flex-1 inline-flex items-center">
                  <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                    Work experience: {foreignWorkexperience}
                  </p>
                </div>
                {/*  <div class="flex-1 inline-flex items-center">
                     
                      <p class="">05-25-2021</p>
                  </div> */}
              </div>

              <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div class="flex space-x-3 text-sm font-medium">
                <div class="flex-auto flex space-x-3">
                  <Modal
                    basic
                    closeOnDimmerClick={val}
                    dimmer="blurring"
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    size="small"
                    trigger={
                      <button
                        class="mb-2 md:mb-0 bg-secondary font-semibold font-mono px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-green-600"
                        type="button"
                        aria-label="like"
                      >
                        Select from here
                      </button>
                    }
                  >
                    <Header>Please select data from here</Header>

                    <Modal.Content>
                      <p>
                        <Dropdown
                          placeholder={foreignWorkexperience}
                          fluid
                          selection
                        >
                          <DropdownMenu>
                            <Dropdown.Item
                              onClick={() => dispatch(experience("NONE"))}
                            >
                              None or less than a year
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => dispatch(experience("1year"))}
                            >
                              1 year
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => dispatch(experience("2year"))}
                            >
                              2 years
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => dispatch(experience("3year"))}
                            >
                              3 years or more
                            </Dropdown.Item>
                          </DropdownMenu>
                        </Dropdown>
                      </p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button
                        color="green"
                        inverted
                        onClick={() => {
                          setOpen(false);
                          dispatch(
                            totalPoints(
                              "FOREIGNWORKEXPERIENCE",
                              experiencePoints
                            )
                          );
                        }}
                      >
                        <Icon name="checkmark" /> Done
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </div>
                <div class="mb-2 md:mb-0 font-mono bg-white px-5 py-2 shadow-sm tracking-wider border text-black rounded-full  inline-flex items-center space-x-2 ">
                  <b>
                    <span>Points: {experiencePoints}</span>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
