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
import { single, totalPoints } from "./Actions";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
  const [open, setOpen] = useState(false);


  const dispatch = useDispatch();

  const marriegeStatus = useSelector((state) => state.marriage);
  const singlePoints = useSelector((state) => state.points);

  

  return (
    <div>
      Marriage Status
      <Container>
        <Segment>
          <Grid columns={2} padded>
            
            <Grid.Column>
              <Header>Please slect one of the option</Header>
              Marriage status: {marriegeStatus}
             
              <br></br>
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
            </Grid.Column>
           
          </Grid>
        </Segment>
      </Container>
    </div>
  );
};

export default Shop;
