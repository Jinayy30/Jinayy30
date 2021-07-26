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
  Radio,
} from "semantic-ui-react";
import { single, totalPoints, experience, firstIeltswriting } from "../Actions";
import { useDispatch, useSelector } from "react-redux";

const CanadianExperience = () => {
  const [open, setOpen] = useState(false);
  const [experiencePoints, setexperiencePoints] = useState(0);
  const [skilltransfer, setSkilltransfer] = useState(0);
  const [canadianplusdegree, setCanadianplusdegree] = useState(0);
  const [radio, setRadio] = useState(false);

  let val = false;

  const dispatch = useDispatch();

  // other states for POINTS and general functionality
  const marriegeStatus = useSelector((state) => state.marriage);
  const educationStatus = useSelector((state) => state.education);
  //const singlePoints = useSelector((state) => state.points);
  const foreignWorkexperience = useSelector((state) => state.foreignexperience);
  const Canadianwork = useSelector((state) => state.canadianexperience);
  const Skilltransferexperience = useSelector(
    (state) => state.skilltransferexperience
  );
  const canadianpoints = useSelector(
    (state) => state.points.canadianexperiencepoints
  );

  const foreign = useSelector((state) => state.points.foreignexperiencepoints);

  //All global states for different functionality (ielts)

  useEffect(() => {
    // useEffect starts here
    dispatch(totalPoints("SKILLTRANSFEREXPERIENCE", skilltransfer));
    dispatch(totalPoints("CANADIANWORKEXPERIENCE", experiencePoints));
    dispatch(totalPoints("SKILLTRANSFERCANADIANPLUSEDUCATION",canadianplusdegree));

    if (marriegeStatus === "single") {
      if (Canadianwork === "None or less than a year") {
        setexperiencePoints(0);
        setSkilltransfer(0);
        setCanadianplusdegree(0);
      }
      if (foreignWorkexperience === "None or less than a year") {
        setSkilltransfer(0);
      }
      if (Canadianwork === "1 year") {
        setexperiencePoints(40);
        if (
          foreignWorkexperience === "1 year" ||
          foreignWorkexperience === "2 years"
        ) {
          setSkilltransfer(13);
        }
        if (foreignWorkexperience === "3 years") {
          setSkilltransfer(25);
        }

        if (educationStatus === "None, or less than secondary (high school)") {
          setCanadianplusdegree(0);
        }

        if (educationStatus === "Secondary diploma (high school graduation") {
          setCanadianplusdegree(0);
        }

        if (
          educationStatus ===
          "One-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(13);
        }

        if (
          educationStatus ===
          "Two-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(13);
        }

        if (
          educationStatus ===
          "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
        ) {
          setCanadianplusdegree(13);
        }

        if (
          educationStatus ===
          "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Master's degree, or professional degree needed to practice in a licensed profession"
        ) {
          setCanadianplusdegree(25);
        }

        if (educationStatus === "Doctoral level university degree (PhD)") {
          setCanadianplusdegree(25);
        }
      } // 1 year condition end here
      if (Canadianwork === "2 years") {
        setexperiencePoints(53);
        if (
          foreignWorkexperience === "1 year" ||
          foreignWorkexperience === "2 years"
        ) {
          setSkilltransfer(25);
        }
        if (foreignWorkexperience === "3 years") {
          setSkilltransfer(50);
        }

        if (educationStatus === "None, or less than secondary (high school)") {
          setCanadianplusdegree(0);
        }

        if (educationStatus === "Secondary diploma (high school graduation") {
          setCanadianplusdegree(0);
        }

        if (
          educationStatus ===
          "One-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Two-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
        ) {
          setCanadianplusdegree(50);
        }

        if (
          educationStatus ===
          "Master's degree, or professional degree needed to practice in a licensed profession"
        ) {
          setCanadianplusdegree(50);
        }

        if (educationStatus === "Doctoral level university degree (PhD)") {
          setCanadianplusdegree(50);
        }
      } // 2 years conditions end here

      if (Canadianwork === "3 years") {
        setexperiencePoints(64);
        if (
          foreignWorkexperience === "1 year" ||
          foreignWorkexperience === "2 years"
        ) {
          setSkilltransfer(25);
        }
        if (foreignWorkexperience === "3 years") {
          setSkilltransfer(50);
        }

        if (educationStatus === "None, or less than secondary (high school)") {
          setCanadianplusdegree(0);
        }

        if (educationStatus === "Secondary diploma (high school graduation") {
          setCanadianplusdegree(0);
        }

        if (
          educationStatus ===
          "One-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Two-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
        ) {
          setCanadianplusdegree(50);
        }

        if (
          educationStatus ===
          "Master's degree, or professional degree needed to practice in a licensed profession"
        ) {
          setCanadianplusdegree(50);
          console.log("hello i am her",canadianplusdegree);
        }

        if (educationStatus === "Doctoral level university degree (PhD)") {
          setCanadianplusdegree(50);
        }
      } // 3 years conditions end here

      if (Canadianwork === "4 years") {
        setexperiencePoints(72);
        if (
          foreignWorkexperience === "1 year" ||
          foreignWorkexperience === "2 years"
        ) {
          setSkilltransfer(25);
        }
        if (foreignWorkexperience === "3 years") {
          setSkilltransfer(50);
        }

        if (educationStatus === "None, or less than secondary (high school)") {
          setCanadianplusdegree(0);
        }

        if (educationStatus === "Secondary diploma (high school graduation") {
          setCanadianplusdegree(0);
        }

        if (
          educationStatus ===
          "One-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Two-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
        ) {
          setCanadianplusdegree(50);
        }

        if (
          educationStatus ===
          "Master's degree, or professional degree needed to practice in a licensed profession"
        ) {
          setCanadianplusdegree(50);
        }

        if (educationStatus === "Doctoral level university degree (PhD)") {
          setCanadianplusdegree(50);
        }
      } // 4 years conditions end here

      if (Canadianwork === "5 years or more") {
        setexperiencePoints(80);
        if (
          foreignWorkexperience === "1 year" ||
          foreignWorkexperience === "2 years"
        ) {
          setSkilltransfer(25);
        }
        if (foreignWorkexperience === "3 years") {
          setSkilltransfer(50);
        }

        if (educationStatus === "None, or less than secondary (high school)") {
          setCanadianplusdegree(0);
        }

        if (educationStatus === "Secondary diploma (high school graduation") {
          setCanadianplusdegree(0);
        }

        if (
          educationStatus ===
          "One-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Two-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
        ) {
          setCanadianplusdegree(50);
        }

        if (
          educationStatus ===
          "Master's degree, or professional degree needed to practice in a licensed profession"
        ) {
          setCanadianplusdegree(50);
        }

        if (educationStatus === "Doctoral level university degree (PhD)") {
          setCanadianplusdegree(50);
        }
      } /// 5 years conditions end here
    } // Single conditions end here

    if (marriegeStatus === "married") {
      if (Canadianwork === "None or less than a year") {
        setexperiencePoints(0);
        setSkilltransfer(0);
        setCanadianplusdegree(0);
      }
      if (foreignWorkexperience === "None or less than a year") {
        setSkilltransfer(0);
      }
      if (Canadianwork === "1 year") {
        setexperiencePoints(35);
        if (
          foreignWorkexperience === "1 year" ||
          foreignWorkexperience === "2 years"
        ) {
          setSkilltransfer(13);
        }
        if (foreignWorkexperience === "3 years") {
          setSkilltransfer(25);
        }

        if (educationStatus === "None, or less than secondary (high school)") {
          setCanadianplusdegree(0);
        }

        if (educationStatus === "Secondary diploma (high school graduation") {
          setCanadianplusdegree(0);
        }

        if (
          educationStatus ===
          "One-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(13);
        }

        if (
          educationStatus ===
          "Two-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(13);
        }

        if (
          educationStatus ===
          "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
        ) {
          setCanadianplusdegree(13);
        }

        if (
          educationStatus ===
          "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
        ) {
          setCanadianplusdegree(25);
        }

        if (
          educationStatus ===
          "Master's degree, or professional degree needed to practice in a licensed profession"
        ) {
          setCanadianplusdegree(25);
        }

        if (educationStatus === "Doctoral level university degree (PhD)") {
          setCanadianplusdegree(25);
        }
      }  // married 1 year conditions end here


      if (Canadianwork === "2 years") {
        setexperiencePoints(46);
        if (
          foreignWorkexperience === "1 year" ||
          foreignWorkexperience === "2 years"
        ) {
          setSkilltransfer(25);
        }
        if (foreignWorkexperience === "3 years") {
          setSkilltransfer(50);
        }

        if (educationStatus === "None, or less than secondary (high school)") {
          setCanadianplusdegree(0);
        }
    
        if (educationStatus === "Secondary diploma (high school graduation") {
          setCanadianplusdegree(0);
        }
    
        if (
          educationStatus ===
          "One-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }
    
        if (
          educationStatus ===
          "Two-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }
    
        if (
          educationStatus ===
          "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
        ) {
          setCanadianplusdegree(25);
        }
    
        if (
          educationStatus ===
          "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
        ) {
          setCanadianplusdegree(50);
        }
    
        if (
          educationStatus ===
          "Master's degree, or professional degree needed to practice in a licensed profession"
        ) {
          setCanadianplusdegree(50);
        }
    
        if (educationStatus === "Doctoral level university degree (PhD)") {
          setCanadianplusdegree(50);
        }
      } // married 2 years condition end here


      if (Canadianwork === "3 years") {
        setexperiencePoints(56);
        if (
          foreignWorkexperience === "1 year" ||
          foreignWorkexperience === "2 years"
        ) {
          setSkilltransfer(25);
        }
        if (foreignWorkexperience === "3 years") {
          setSkilltransfer(50);
        }

        if (educationStatus === "None, or less than secondary (high school)") {
          setCanadianplusdegree(0);
        }
    
        if (educationStatus === "Secondary diploma (high school graduation") {
          setCanadianplusdegree(0);
        }
    
        if (
          educationStatus ===
          "One-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }
    
        if (
          educationStatus ===
          "Two-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }
    
        if (
          educationStatus ===
          "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
        ) {
          setCanadianplusdegree(25);
        }
    
        if (
          educationStatus ===
          "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
        ) {
          setCanadianplusdegree(50);
        }
    
        if (
          educationStatus ===
          "Master's degree, or professional degree needed to practice in a licensed profession"
        ) {
          setCanadianplusdegree(50);
        }
    
        if (educationStatus === "Doctoral level university degree (PhD)") {
          setCanadianplusdegree(50);
        }
      } // married 3 years end conditions here

      if (Canadianwork === "4 years") {
        setexperiencePoints(63);
        if (
          foreignWorkexperience === "1 year" ||
          foreignWorkexperience === "2 years"
        ) {
          setSkilltransfer(25);
        }
        if (foreignWorkexperience === "3 years") {
          setSkilltransfer(50);
        }

        if (educationStatus === "None, or less than secondary (high school)") {
          setCanadianplusdegree(0);
        }
    
        if (educationStatus === "Secondary diploma (high school graduation") {
          setCanadianplusdegree(0);
        }
    
        if (
          educationStatus ===
          "One-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }
    
        if (
          educationStatus ===
          "Two-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }
    
        if (
          educationStatus ===
          "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
        ) {
          setCanadianplusdegree(25);
        }
    
        if (
          educationStatus ===
          "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
        ) {
          setCanadianplusdegree(50);
        }
    
        if (
          educationStatus ===
          "Master's degree, or professional degree needed to practice in a licensed profession"
        ) {
          setCanadianplusdegree(50);
        }
    
        if (educationStatus === "Doctoral level university degree (PhD)") {
          setCanadianplusdegree(50);
        }
      } // married 4 years condtions end here

      if (Canadianwork === "5 years or more") {
        setexperiencePoints(70);
        if (
          foreignWorkexperience === "1 year" ||
          foreignWorkexperience === "2 years"
        ) {
          setSkilltransfer(25);
        }
        if (foreignWorkexperience === "3 years") {
          setSkilltransfer(50);
        }

        if (educationStatus === "None, or less than secondary (high school)") {
          setCanadianplusdegree(0);
        }
    
        if (educationStatus === "Secondary diploma (high school graduation") {
          setCanadianplusdegree(0);
        }
    
        if (
          educationStatus ===
          "One-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }
    
        if (
          educationStatus ===
          "Two-year program at a university, college, trade or technical school, or other institute"
        ) {
          setCanadianplusdegree(25);
        }
    
        if (
          educationStatus ===
          "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)"
        ) {
          setCanadianplusdegree(25);
        }
    
        if (
          educationStatus ===
          "Two years or more certificates, diploma or degrees. One must be for a program of three or more years"
        ) {
          setCanadianplusdegree(50);
        }
    
        if (
          educationStatus ===
          "Master's degree, or professional degree needed to practice in a licensed profession"
        ) {
          setCanadianplusdegree(50);
        }
    
        if (educationStatus === "Doctoral level university degree (PhD)") {
          setCanadianplusdegree(50);
        }
      }  // marreid 5 years condition ends here

    } // married conditions end here

    
  }, [
    marriegeStatus,
    Canadianwork,
    foreignWorkexperience,
    experiencePoints,
    skilltransfer,
    Skilltransferexperience,
    educationStatus,
    canadianplusdegree
  ]); // UseEffect ends here

  return (
    <div>
      <br></br>
      <div class="flex flex-col">
        <div class="bg-primary shadow-xl  rounded-3xl p-4">
          <div class="flex-none lg:flex">
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap bg-blue-500 text-white text-lg px-6 py-4 font-bold rounded-xl">
                <h2 class="flex-auto text-lg font-mono font-bold">
                  Canadian experience
                </h2>
              </div>
              <p class="mt-3"></p>
              <div class="flex py-4  text-sm text-gray-600">
                <div class="flex-1 inline-flex items-center">
                  <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                    Canadian work experience: {Canadianwork}
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
                        <Dropdown placeholder={Canadianwork} fluid selection>
                          <DropdownMenu>
                            <Dropdown.Item
                              onClick={() => dispatch(experience("canNONE"))}
                            >
                              None or less than a year
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => dispatch(experience("can1year"))}
                            >
                              1 year
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => dispatch(experience("can2year"))}
                            >
                              2 years
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => dispatch(experience("can3year"))}
                            >
                              3 years
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => dispatch(experience("can4year"))}
                            >
                              4 years
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => dispatch(experience("can5year"))}
                            >
                              5 years or more
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
                              "CANADIANWORKEXPERIENCE",
                              experiencePoints
                            )
                          );
                          dispatch(
                            totalPoints(
                              "SKILLTRANSFEREXPERIENCE",
                              skilltransfer
                            )
                          );
                          dispatch(totalPoints("SKILLTRANSFERCANADIANPLUSEDUCATION",canadianplusdegree));
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

export default CanadianExperience;
