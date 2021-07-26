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

const SpouseEducation = () => {
  const [open, setOpen] = useState(false);
  const [spouseducationPoints, setSPouseeducationPoints] = useState(0);
 
  const dispatch = useDispatch();
  let val = false;

  const marriegeStatus = useSelector((state) => state.marriage);
  const spousecoming = useSelector((state) => state.spouseaccompanyingstatus);
  const spouseeducationstatus = useSelector((state) => state.spouseeducation);

  useEffect(() => {
    dispatch(totalPoints("SPOUSEEDUCATIONPOINTS", spouseducationPoints));
    if (marriegeStatus === "single" || spousecoming === "Not accompanying") {
      setSPouseeducationPoints(0);
      dispatch(spouseCondition("REMOVESPOUSEEDU"));
    } // single and not accompanying conditions end here

    if (
      marriegeStatus === "married" ||
      spousecoming === "Spouse accompanying"
    ) {
      if (
        spouseeducationstatus === "None, or less than secondary (high school)"
      ) {
        setSPouseeducationPoints(0);
      }
      if (
        spouseeducationstatus === "Secondary diploma (high school graduation)"
      ) {
        setSPouseeducationPoints(2);
      }
      if (spouseeducationstatus === "One-year program at a university") {
        setSPouseeducationPoints(6);
      }
      if (spouseeducationstatus === "Two-year program at a university") {
        setSPouseeducationPoints(7);
      }
      if (spouseeducationstatus === "Bachelor's degree") {
        setSPouseeducationPoints(8);
      }
      if (spouseeducationstatus === "Two years or more certificates") {
        setSPouseeducationPoints(9);
      }
      if (spouseeducationstatus === "Master's degree") {
        setSPouseeducationPoints(10);
      }
      if (spouseeducationstatus === "Doctoral level university degree (PhD)") {
        setSPouseeducationPoints(10);
      }
    }  // married and accopanying constions end here
  }, [marriegeStatus, spouseeducationstatus, spouseducationPoints,spousecoming]);  // useEffect ends here

  return (
    <div>
      <br></br>
      <div class="flex flex-col">
        <div class="bg-primary shadow-xl  rounded-3xl p-4">
          <div class="flex-none lg:flex">
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap bg-blue-500 text-white text-lg px-6 py-4 font-bold rounded-xl">
                <h2 class="flex-auto text-lg font-mono font-bold">
                  Education level of your spouse?
                </h2>
              </div>
              <p class="mt-3"></p>
              <div class="flex py-4  text-sm text-gray-600">
                <div class="flex-1 inline-flex items-center">
                  <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                    Spouse Education: {spouseeducationstatus}
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
                      
                      Please select data from here
                    </Header>

                    <Modal.Content>
                      <p>
                        <Dropdown
                          placeholder={spouseeducationstatus}
                          fluid
                          selection
                        >
                          <DropdownMenu>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(
                                  spouseCondition("SPOUSEEDUCATIONNONE")
                                );
                              }}
                            >
                              None, or less than secondary (high school)
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(
                                  spouseCondition("SPOUSESECONDARYDIPLOMA")
                                );
                              }}
                            >
                              Secondary diploma (high school graduation)
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(
                                  spouseCondition("SPOUSEONEYEARPROGRAM")
                                );
                              }}
                            >
                              One-year program at a university, college, trade
                              or technical school, or other institute
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(
                                  spouseCondition("SPOUSETWOYEARPROGRAM")
                                );
                              }}
                            >
                              Two-year program at a university, college, trade
                              or technical school, or other institute
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(
                                  spouseCondition("SPOUSEBACHELORDEGREE")
                                );
                              }}
                            >
                              Bachelor's degree (three or more year program at a
                              university, college, trade or technical school, or
                              other institute)
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(
                                  spouseCondition("SPOUSETWOYEARCERTIFICATE")
                                );
                              }}
                            >
                              Two years or more certificates, diploma or
                              degrees. One must be for a program of three or
                              more years
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(spouseCondition("SPOUSEMASTER"));
                              }}
                            >
                              Master's degree, or professional degree needed to
                              practice in a licensed profession
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                dispatch(spouseCondition("SPOUSEPHD"));
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
                            totalPoints(
                              "SPOUSEEDUCATIONPOINTS",
                              spouseducationPoints
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
                    <span>Points: {spouseducationPoints}</span>
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

export default SpouseEducation;
