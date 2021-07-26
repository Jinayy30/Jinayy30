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
  Checkbox,
  DropdownMenu,
  DropdownItem,
} from "semantic-ui-react";
import { single, totalPoints, ageActions, educationActions } from "../Actions";
import { useDispatch, useSelector } from "react-redux";

const Education = () => {
  const [open, setOpen] = useState(false);

  const [EducationPoints, setEducationPoints] = useState(0);
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
    dispatch(totalPoints("EDUCATIONPOINTS", EducationPoints));
   // dispatch(totalPoints("SKILLTRANSFEREDUCATION",0));

    if (educationStatus === "Please Select Your Education") {
      setEducationPoints(0);
     //dispatch(totalPoints("SKILLTRANSFEREDUCATION",skilltranfer));
    }
    if (marriegeStatus === "single") {
      if (educationStatus === "None, or less than secondary (high school)") {
        setEducationPoints(0);
      }
      if (educationStatus === "Secondary diploma (high school graduation") {
        setEducationPoints(30);
      }
      if (
        educationStatus ===
        "One-year program at a university, college, trade or technical school, or other institute"
      ) {
        setEducationPoints(90);
      }
      if (
        educationStatus ===
        "Two-year program at a university, college, trade or technical school, or other institute"
      ) {
        setEducationPoints(98);
      }
      if (
        educationStatus ===
        "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
      ) {
        setEducationPoints(120);
      }
      if (
        educationStatus ===
        "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
      ) {
        setEducationPoints(128);
      }
      if (
        educationStatus ===
        "Master's degree, or professional degree needed to practice in a licensed profession"
      ) {
        setEducationPoints(135);
      }
      if (educationStatus == "Doctoral level university degree (PhD)") {
        setEducationPoints(150);
      }
    }

    if (marriegeStatus === "married") {
      if (educationStatus === "Please Select Your Education") {
        setEducationPoints(0);
      }
      if (educationStatus === "None, or less than secondary (high school)") {
        setEducationPoints(0);
      }
      if (educationStatus === "Secondary diploma (high school graduation") {
        setEducationPoints(28);
      }
      if (
        educationStatus ===
        "One-year program at a university, college, trade or technical school, or other institute"
      ) {
        setEducationPoints(84);
      }
      if (
        educationStatus ===
        "Two-year program at a university, college, trade or technical school, or other institute"
      ) {
        setEducationPoints(91);
      }
      if (
        educationStatus ===
        "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
      ) {
        setEducationPoints(112);
      }
      if (
        educationStatus ===
        "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
      ) {
        setEducationPoints(119);
      }
      if (
        educationStatus ===
        "Master's degree, or professional degree needed to practice in a licensed profession"
      ) {
        setEducationPoints(126);
      }
      if (educationStatus == "Doctoral level university degree (PhD)") {
        setEducationPoints(140);
      }
    }
  },[marriegeStatus,educationStatus,EducationPoints]);

  return (
    <div>
      <br></br>

      <div class="flex flex-col">
        <div class="bg-primary shadow-xl  rounded-3xl p-4">
          <div class="flex-none lg:flex">
            {/* <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                        <img src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                            alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"></img>
                    </div> */}
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap bg-blue-500 text-white text-lg px-6 py-4 font-bold rounded-xl">
                <h2 class="flex-auto text-lg font-mono font-bold">
                  What is your level of education?
                </h2>
                {/* <Checkbox toggle /> */}
              </div>
              
              <p class="mt-3"></p>
              <div class="flex py-4  text-sm text-gray-600">
                <div class="flex-1 inline-flex items-center">
                  <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                    Education: {educationStatus}
                  </p>
                </div>
              </div>

              <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div class="flex space-x-3 text-sm font-medium">
                <div class="flex-auto flex space-x-3">
                  <Modal
                    basic
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
                        <Dropdown placeholder= {educationStatus} fluid selection>
                          <DropdownMenu>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(educationActions("None"));
                                dispatch(educationActions("SKILLNONE"));
                              }}
                            >
                              None, or less than secondary (high school)
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(educationActions("SECONDARYDIPLOMA"));
                                dispatch(educationActions("SKILLNONE"));
                              }}
                            >
                              Secondary diploma (high school graduation)
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(educationActions("ONEYEARPROGRAM"));
                                dispatch(educationActions("SKILLONEYEAR"));
                              }}
                            >
                              One-year program at a university, college, trade
                              or technical school, or other institute
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(educationActions("TWOYEARPROGRAM"));
                                dispatch(educationActions("SKILLTWOYEAR"));
                              }}
                            >
                              Two-year program at a university, college, trade
                              or technical school, or other institute
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(educationActions("BACHELOR"));
                                dispatch(educationActions("SKILLBACHELOR"));
                              }}
                            >
                              Bachelor's degree (three or more year program at a
                              university, college, trade or technical school, or
                              other institute)
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(educationActions("TWOCERTIFICATES"));
                                dispatch(educationActions("SKILLMASTER"));
                              }}
                            >
                              Two years or more certificates, diploma or
                              degrees. One must be for a program of three or
                              more years
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(educationActions("MASTER"));
                                dispatch(educationActions("SKILLMASTER"));
                              }}
                            >
                              Master's degree, or professional degree needed to
                              practice in a licensed profession
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(educationActions("DOCTORAL"));
                                dispatch(educationActions("SKILLPHD"));
                              }}
                            >
                              Doctoral level university degree (PhD)
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
                            totalPoints("EDUCATIONPOINTS", EducationPoints)
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
                    <span>Points: {EducationPoints}</span>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="w-2/8 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden shadow-xl">
        <div class="bg-blue-900  text-white text-lg px-6 py-4 font-bold">
          Select your Education
        </div>

        <div class="flex justify items-center px-6 py-4">
          <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={<Button>Cilck Here</Button>}
          >
            <Header icon>
              <Icon name="archive" />
              Please select data from here
            </Header>

            <Modal.Content>
              <p>
                <Dropdown placeholder="Select Friend" fluid selection>
                  <DropdownMenu>
                    <Dropdown.Item
                      onClick={() => dispatch(educationActions("None"))}
                    >
                      None, or less than secondary (high school)
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        dispatch(educationActions("SECONDARYDIPLOMA"))
                      }
                    >
                      Secondary diploma (high school graduation
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        dispatch(educationActions("ONEYEARPROGRAM"))
                      }
                    >
                      One-year program at a university, college, trade or
                      technical school, or other institute
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        dispatch(educationActions("TWOYEARPROGRAM"))
                      }
                    >
                      Two-year program at a university, college, trade or
                      technical school, or other institute
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => dispatch(educationActions("BACHELOR"))}
                    >
                      Bachelor's degree (three or more year program at a
                      university, college, trade or technical school, or other
                      institute)
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        dispatch(educationActions("TWOCERTIFICATES"))
                      }
                    >
                      Two years or more certificates, diploma or degrees. One
                      must be for a program of three or more years
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => dispatch(educationActions("MASTER"))}
                    >
                      Master's degree, or professional degree needed to practice
                      in a licensed profession
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => dispatch(educationActions("DOCTORAL"))}
                    >
                      Doctoral level university degree (PhD)
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
                  dispatch(totalPoints("EDUCATIONPOINTS", EducationPoints));
                }}
              >
                <Icon name="checkmark" /> Done
              </Button>

            
            </Modal.Actions>
          </Modal>
        </div>

        

        <div class="bg-blue-100 py-4">
          <div class="flex items-center pt-3">
            <div class="ml-4">
              <p class="font-bold">Education: {educationStatus}</p>
            </div>
          </div>
          <div class="flex items-center pt-3">
            <div class="ml-4">
              <p class="font-bold">Education points: {educationPoints}</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Education;
