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
import { single, totalPoints, ageActions } from "../Actions";
import { useDispatch, useSelector } from "react-redux";

const Age = () => {
  const [open, setOpen] = useState(false);
  const [Agepoints, setAgepoints] = useState(0);

  const dispatch = useDispatch();

  const marriegeStatus = useSelector((state) => state.marriage);
  //const singlePoints = useSelector((state) => state.points.agepoints);
  const ageStatus = useSelector((state) => state.age);

  useEffect(() => {
    dispatch(totalPoints("AGEPOINTS", Agepoints)); // sendind default points because if user clicks score buttom without selecting any other area than this will help to retun score
    if (ageStatus === "Please select your age") {
      setAgepoints(0);
    }
    if (marriegeStatus === "single") {
      if (ageStatus === "17 or less") {
        setAgepoints(0);
      }
      if (ageStatus === "18") {
        setAgepoints(99);
      }
      if (ageStatus === "19") {
        setAgepoints(105);
      }
      if (ageStatus === "20 to 29") {
        setAgepoints(110);
      }
      if (ageStatus === "30") {
        setAgepoints(105);
      }
      if (ageStatus === "31") {
        setAgepoints(99);
      }
      if (ageStatus === "32") {
        setAgepoints(94);
      }
      if (ageStatus === "33") {
        setAgepoints(88);
      }
      if (ageStatus === "34") {
        setAgepoints(83);
      }
      if (ageStatus === "35") {
        setAgepoints(77);
      }
      if (ageStatus === "36") {
        setAgepoints(72);
      }
      if (ageStatus === "37") {
        setAgepoints(66);
      }
      if (ageStatus === "38") {
        setAgepoints(61);
      }
      if (ageStatus === "39") {
        setAgepoints(55);
      }
      if (ageStatus === "40") {
        setAgepoints(50);
      }
      if (ageStatus === "41") {
        setAgepoints(39);
      }
      if (ageStatus === "42") {
        setAgepoints(28);
      }
      if (ageStatus === "43") {
        setAgepoints(17);
      }
      if (ageStatus === "44") {
        setAgepoints(6);
      }
      if (ageStatus === "45 or more") {
        setAgepoints(0);
      }
    } // single conditions end here

    if(marriegeStatus === "married")
    {
      if (ageStatus === "17 or less") {
        setAgepoints(0);
      }
      if (ageStatus === "18") {
        setAgepoints(90);
      }
      if (ageStatus === "19") {
        setAgepoints(95);
      }
      if (ageStatus === "20 to 29") {
        setAgepoints(100);
      }
      if (ageStatus === "30") {
        setAgepoints(95);
      }
      if (ageStatus === "31") {
        setAgepoints(90);
      }
      if (ageStatus === "32") {
        setAgepoints(85);
      }
      if (ageStatus === "33") {
        setAgepoints(80);
      }
      if (ageStatus === "34") {
        setAgepoints(75);
      }
      if (ageStatus === "35") {
        setAgepoints(70);
      }
      if (ageStatus === "36") {
        setAgepoints(65);
      }
      if (ageStatus === "37") {
        setAgepoints(60);
      }
      if (ageStatus === "38") {
        setAgepoints(55);
      }
      if (ageStatus === "39") {
        setAgepoints(50);
      }
      if (ageStatus === "40") {
        setAgepoints(45);
      }
      if (ageStatus === "41") {
        setAgepoints(35);
      }
      if (ageStatus === "42") {
        setAgepoints(25);
      }
      if (ageStatus === "43") {
        setAgepoints(15);
      }
      if (ageStatus === "44") {
        setAgepoints(5);
      }
      if (ageStatus === "45 or more") {
        setAgepoints(0);
      }
    } /// married conditions end here
  },[ageStatus,Agepoints,marriegeStatus]);

  return (
    <div>
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
                  How old are you?
                </h2>
              </div>
              <p class="mt-3"></p>
              <div class="flex py-4  text-sm text-gray-600">
                <div class="flex-1 inline-flex items-center">
                  <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                    Age: {ageStatus}
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
                      <Dropdown placeholder={ageStatus} fluid selection>
                        <DropdownMenu>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("17orless"))}
                          >
                            17 years of age or less
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("18"))}
                          >
                            18 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("19"))}
                          >
                            19 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("20to29"))}
                          >
                            20 to 29 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("30"))}
                          >
                            30 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("31"))}
                          >
                            31 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("32"))}
                          >
                            32 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("33"))}
                          >
                            33 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("34"))}
                          >
                            34 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("35"))}
                          >
                            35 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("36"))}
                          >
                            36 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("37"))}
                          >
                            37 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("38"))}
                          >
                            38 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("39"))}
                          >
                            39 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("40"))}
                          >
                            40 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("41"))}
                          >
                            41 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("42"))}
                          >
                            42 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("43"))}
                          >
                            43 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("44"))}
                          >
                            44 years of age
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => dispatch(ageActions("45ormore"))}
                          >
                            45 years of age
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
                        dispatch(totalPoints("AGEPOINTS", Agepoints));
                      }}
                    >
                      <Icon name="checkmark" /> Done
                    </Button>
                  </Modal.Actions>
                </Modal>
                 
                </div>
                <div class="mb-2 md:mb-0 font-mono bg-white px-5 py-2 shadow-sm tracking-wider border text-black rounded-full  inline-flex items-center space-x-2 ">
                    <b>
                      <span>Points: {Agepoints}</span>
                    </b>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="w-1/8 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden shadow-xl">
        <div class="bg-blue-500 text-white text-lg px-6 py-4 font-bold">
          Select your Age
        </div>

        <div class="flex justify items-center px-6 py-4">
          <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={<Button>Click Here</Button>}
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
                      onClick={() => dispatch(ageActions("17orless"))}
                    >
                      17 years of age or less
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("18"))}>
                      18 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("19"))}>
                      19 years of age
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => dispatch(ageActions("20to29"))}
                    >
                      20 to 29 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("30"))}>
                      30 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("31"))}>
                      31 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("32"))}>
                      32 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("33"))}>
                      33 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("34"))}>
                      34 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("35"))}>
                      35 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("36"))}>
                      36 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("37"))}>
                      37 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("38"))}>
                      38 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("39"))}>
                      39 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("40"))}>
                      40 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("41"))}>
                      41 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("42"))}>
                      42 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("43"))}>
                      43 years of age
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(ageActions("44"))}>
                      44 years of age
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => dispatch(ageActions("45ormore"))}
                    >
                      45 years of age
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
                  dispatch(totalPoints("AGEPOINTS", Agepoints));
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
              <p class="font-bold">Age: {ageStatus}</p>
            </div>
          </div>
          <div class="flex items-center pt-3">
            <div class="ml-4">
              <p class="font-bold">Age points: {Agepoints}</p>
            </div>
          </div>
          
        </div>
      </div> */}
    </div>
  );
};

export default Age;
