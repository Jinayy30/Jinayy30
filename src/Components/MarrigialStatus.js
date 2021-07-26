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
import { single, totalPoints } from "../Actions";
import { useDispatch, useSelector } from "react-redux";

const MarrigialStatus = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const marriegeStatus = useSelector((state) => state.marriage);
  const singlePoints = useSelector((state) => state.points);

  return (
    <div>

     
          <div class="flex flex-col">
            <div class="bg-primary shadow-xl  rounded-3xl p-4">
              <div class="flex-none lg:flex">
                <div class="flex-auto ml-3 justify-evenly py-2">
                  <div class="flex flex-wrap bg-blue-500 text-white text-lg px-6 py-4 font-bold rounded-xl">
                    <h2 class="flex-auto text-lg font-mono font-bold">
                      What is your marital status?
                    </h2>
                  </div>
                  <p class="mt-3"></p>
                  <div class="flex py-4  text-sm text-gray-600">
                    <div class="flex-1 inline-flex items-center">
                      <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                        Marital status: {marriegeStatus}
                      </p>
                    </div>
                    {/*  <div class="flex-1 inline-flex items-center">
                               
                                <p class="">05-25-2021</p>
                            </div> */}
                  </div>

                  <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
                  <div class="flex text-sm font-bold items-center rounded-full">
                    {/*  <div class="flex-auto flex space-x-3">
                            <p class="px-6 py-2 font-bold">Marrigial status: Single</p>
                            </div> */}

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
                          <Dropdown
                            placeholder={marriegeStatus}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <DropdownItem
                                onClick={() => dispatch(single("SINGLE"))}
                              >
                                Never Married/Single
                              </DropdownItem>
                              <DropdownItem
                                onClick={() => dispatch(single("MARRIED"))}
                              >
                                Married
                              </DropdownItem>
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
                          }}
                        >
                          <Icon name="checkmark" /> Done
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </div>
                </div>
              </div>
           
        </div>
      </div>
      {/*  <div class="w-2/8 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden shadow-xl">
        <div class="bg-blue-500 text-white text-lg px-6 py-4 font-bold">
          Select your Marrigial Status
        </div>

        <div class="flex justify items-center px-6 py-4">
        <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size="small"
                trigger={<Button transition duration-500 ease-in-out bg-blue-600>Click Here</Button>}
              >
                <Header icon>
                  <Icon name="archive" />
                  Please select data from here
                </Header>

                <Modal.Content>
                  <p>
                    <Dropdown placeholder="Select Friend" fluid selection>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={() => dispatch(single("SINGLE"))}
                        >
                          Never sMarried/Single
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => dispatch(single("MARRIED"))}
                        >
                          Married
                        </DropdownItem>
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
              <p class="font-bold">Marrigial Status: {marriegeStatus}</p>
              
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MarrigialStatus;
