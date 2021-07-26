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
import { useDispatch, useSelector } from "react-redux";
import {
  single,
  totalPoints,
  ageActions,
  educationActions,
  spouseCondition,
} from "../../Actions";

const SpouseExperience = () => {
  const [open, setOpen] = useState(false);
  const [Agepoints, setAgepoints] = useState(0);
  const [SpouseexperiencePoints, setSpouseexperiencePoints] = useState(0);
  let newpoint;
  const dispatch = useDispatch();
  let val = false;

  const marriegeStatus = useSelector((state) => state.marriage);
  const singlePoints = useSelector((state) => state.points.agepoints);
  const educationPoints = useSelector((state) => state.points.educationpoints);
  const ageStatus = useSelector((state) => state.age);
  const educationStatus = useSelector((state) => state.education);

  const spousecoming = useSelector((state) => state.spouseaccompanyingstatus);
  const spouseExperience = useSelector((state) => state.spouseexperience);

  useEffect(() => {
    dispatch(totalPoints("SPOUSEEXPERIENCEPOINTS", SpouseexperiencePoints));
   
    if (marriegeStatus === "single" || spousecoming === "Not accompanying") {
        dispatch(spouseCondition("REMOVESPOUSEEXP"));
        setSpouseexperiencePoints(0);
      }
    
    if(marriegeStatus === "married" || spousecoming === "Spouse accompanying") 
    {
      if(spouseExperience === "None or less than a year") 
      {
        setSpouseexperiencePoints(0);
      }
      if (spouseExperience === "1 year") {
        setSpouseexperiencePoints(5);
      }
      if (spouseExperience === "2 years") {
        setSpouseexperiencePoints(7);
      }
      if (spouseExperience === "3 years") {
        setSpouseexperiencePoints(8);
      }
      if (spouseExperience === "4 years") {
        setSpouseexperiencePoints(9);
      }
      if (spouseExperience === "5 years or more") {
        setSpouseexperiencePoints(10);
      }
    }
    
  
  }, [spousecoming, spouseExperience, marriegeStatus, SpouseexperiencePoints]);

  return (
    <div>
      <br></br>
      <div class="flex flex-col">
        <div class="bg-primary shadow-xl  rounded-3xl p-4">
          <div class="flex-none lg:flex">
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap bg-blue-500 text-white text-lg px-6 py-4 font-bold rounded-xl">
                <h2 class="flex-auto text-lg font-mono font-bold">
                  Spouse's experience in Canada in last 10 years?
                </h2>
              </div>
              <p class="mt-3"></p>
              <div class="flex py-4  text-sm text-gray-600">
                <div class="flex-1 inline-flex items-center">
                  <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                    Spouse experience: {spouseExperience}
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
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    closeOnDimmerClick={val}
                    open={open}
                    size="small"
                    trigger={
                      <button
                        class="mb-2 md:mb-0 bg-secondary font-semibold font-mono px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-green-600"
                        type="button"
                        aria-label="like"
                      >
                        {" "}
                        Select from here
                      </button>
                    }
                  >
                    <Header icon>
                      <Icon name="archive" />
                      Please select data from here
                    </Header>

                    <Modal.Content>
                      <p>
                        <Dropdown
                          placeholder={spouseExperience}
                          fluid
                          selection
                        >
                          <DropdownMenu>
                            <Dropdown.Item
                              onClick={() =>
                                dispatch(spouseCondition("SPOUSENONE"))
                              }
                            >
                              None or less than a year
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                dispatch(spouseCondition("SPOUSE1year"))
                              }
                            >
                              1 year
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                dispatch(spouseCondition("SPOUSE2year"))
                              }
                            >
                              2 years
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                dispatch(spouseCondition("SPOUSE3year"))
                              }
                            >
                              3 years
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                dispatch(spouseCondition("SPOUSE4year"))
                              }
                            >
                              4 years
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                dispatch(spouseCondition("SPOUSE5year"))
                              }
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
                              "SPOUSEEXPERIENCEPOINTS",
                              SpouseexperiencePoints
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
                    <span>Points: {SpouseexperiencePoints}</span>
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

export default SpouseExperience;
