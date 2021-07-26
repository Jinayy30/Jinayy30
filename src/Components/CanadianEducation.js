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

const CanadianEducation = () => {
  const [open, setOpen] = useState(false);

  const [CanadianEducationPoints, setCanadianEducationPoints] = useState(0);
  let newpoint;
  const dispatch = useDispatch();

  
  const canadianeducationStatus = useSelector(
    (state) => state.canadianeducation
  );

  useEffect(() => {
    dispatch(totalPoints("CANADIANEDUCATIONPOINTS", CanadianEducationPoints));

      if (canadianeducationStatus === "Please Select Your Canadian Education") {
        setCanadianEducationPoints(0);
      }
      if (canadianeducationStatus === "Secondary(high school) or less") {
        setCanadianEducationPoints(0);
      }
      if (
        canadianeducationStatus === "One or two year diploma or certificate"
      ) {
        setCanadianEducationPoints(15);
      }
      if (
        canadianeducationStatus ===
        "Master, doctoral, professional or three year degree certificate"
      ) {
        setCanadianEducationPoints(30);
      }
    
  },[canadianeducationStatus,CanadianEducationPoints]);

  return (
    <div>
      <br></br>

      <div class="flex flex-col">
        <div class="bg-primary shadow-xl rounded-3xl p-4">
          <div class="flex-none lg:flex">
            {/* <div class=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                  <img src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                      alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"></img>
              </div> */}
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap bg-blue-500 text-white text-lg px-6 py-4 font-bold rounded-xl">
                <h2 class="flex-auto text-lg font-mono font-bold">
                  Canadian Education
                </h2>
              </div>
              <p class="mt-3"></p>
              <div class="flex py-4  text-sm text-gray-600">
                <div class="flex-1 inline-flex items-center">
                  <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                    <b>Canadian education:</b> {canadianeducationStatus}
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
                        <Dropdown placeholder="Select Friend" fluid selection>
                          <DropdownMenu>
                            <Dropdown.Item
                              onClick={() =>
                                dispatch(educationActions("SECONDARY"))
                              }
                            >
                              Secondary(high school) or less
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                dispatch(educationActions("CERTIFICATE"))
                              }
                            >
                              One or two year diploma or certificate
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() =>
                                dispatch(educationActions("DEGREE"))
                              }
                            >
                              Master, doctoral, professional or three year
                              degree certificate
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
                              "CANADIANEDUCATIONPOINTS",
                              CanadianEducationPoints
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
                    <span>
                      Points: {CanadianEducationPoints}
                    </span>
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

export default CanadianEducation;
