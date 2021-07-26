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
import { single, totalPoints, ageActions, educationActions,spouseCondition } from '../../Actions';

const Spouse = () => {
  const [open, setOpen] = useState(false);
  const [Agepoints, setAgepoints] = useState(0);
  const [EducationPoints, setEducationPoints] = useState(0);
  let newpoint;
  const dispatch = useDispatch();

  const marriegeStatus = useSelector((state) => state.marriage);
  const singlePoints = useSelector((state) => state.points.agepoints);
  const educationPoints = useSelector((state) => state.points.educationpoints);
  const ageStatus = useSelector((state) => state.age);
  const educationStatus = useSelector((state) => state.education);

  const spousecoming = useSelector((state) =>state.spouseaccompanyingstatus);

  /* useEffect(() => {
    
  },[marriegeStatus,spousecoming]); */

  return (
    <div>
<br></br>
<div class="flex flex-col">
  <div class="bg-primary shadow-xl  rounded-3xl p-4">
    <div class="flex-none lg:flex">
      <div class="flex-auto ml-3 justify-evenly py-2">
        <div class="flex flex-wrap bg-blue-500 text-white text-lg px-6 py-4 font-bold rounded-xl">
          <h2 class="flex-auto text-lg font-mono font-bold">
          Will your spouse or common-law partner come with you to Canada?
          </h2>
        </div>
        <p class="mt-3"></p>
        <div class="flex py-4  text-sm text-gray-600">
          <div class="flex-1 inline-flex items-center">
            <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
              Spouse accompanying status: {spousecoming}
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
                open={open}
                size="small"
                trigger={ <button
                  class="mb-2 md:mb-0 bg-secondary font-semibold font-mono px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-green-600"
                  type="button"
                  aria-label="like"
                > Select from here
                </button>}
              >
                <Header icon>
                  <Icon name="archive" />
                  Please select data from here
                </Header>

                <Modal.Content>
                  <p>
                    <Dropdown placeholder={spousecoming} fluid selection>
                      <DropdownMenu>
                        <DropdownItem
                          onClick={() => dispatch(spouseCondition("accompanying"))}
                        >
                          Accompanying
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => dispatch(spouseCondition("notaccompanying"))}
                        >
                          Not Accompanying
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
                     // dispatch(totalPoints("EDUCATIONPOINTS", EducationPoints));
                    }}
                  >
                    <Icon name="checkmark" /> Done
                  </Button>

                </Modal.Actions>
              </Modal>
                </div>
               {/*  <div class="mb-2 md:mb-0 font-mono bg-white px-5 py-2 shadow-sm tracking-wider border text-black rounded-full  inline-flex items-center space-x-2 ">
                    <b>
                      <span>Points: </span>
                    </b>
                  </div> */}
              </div>
      </div>
    </div>
 
</div>
</div>
     {/*  Spouse
      <Container>
        <Segment>
          <Grid columns={2} padded>
            <Grid.Column>
              <Header>Please slect one of the option for education</Header>
              education: {educationStatus} {EducationPoints}
              <br></br>
              
            </Grid.Column>
            <Grid.Column>
              <Header>Please slect one of the option</Header>
              <Modal
                  basic
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  open={open}
                  size="small"
                  trigger={<Button>Basic Modal</Button>}
                >
                  <Header icon>
                    <Icon name="archive" />
                    Please select data from here
                  </Header>
                  <Modal.Content>
                    <p>
                      <Dropdown placeholder="Select Friend" fluid selection>
                      <DropdownMenu>
                          <DropdownItem>Never Married/Single</DropdownItem>
                          <DropdownItem>Married</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color="green" inverted onClick={() => setOpen(false)}>
                      <Icon name="checkmark" /> Yes
                    </Button>
                  </Modal.Actions>
                </Modal>
              <Button onClick={() => getmainPoints()}>CLikto get points</Button>
              Points: {newpoint}
            </Grid.Column>
          </Grid>
        </Segment>
      </Container> */}
    </div>
  );
};

export default Spouse;
