import { React, useState, useEffect } from "react";

import {
  Button,
  Header,
  Icon,
  Modal,
  Dropdown,
  Segment,
  DropdownMenu,
  DropdownItem,
  Radio,
} from "semantic-ui-react";
import {
  firstLanguageCheck,
  firstIeltsspeaking,
  firstIeltslistening,
  firstIeltsreading,
  firstIeltswriting,
  totalPoints,
} from "../../Actions";
import { useDispatch, useSelector } from "react-redux";

const TCF = () => {

    const [open, setOpen] = useState(false);

    const firstLanguageStatus = useSelector((state) => state.firstlanguage);
    const marriegeStatus = useSelector((state) => state.marriage);
 
    return(
      <div>
        <Modal
                basic
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                size="small"
                trigger={<Button>Cilck Here</Button>}
              >
                <Header>Please select {firstLanguageStatus} data from here</Header>
    
                <Modal.Content>
                <label>Speaking</label>
                  <p>
                    <Dropdown placeholder="Select Speaking Score" fluid selection>
                      <DropdownMenu>
                        <Dropdown.Item>4-5</Dropdown.Item>
                        <Dropdown.Item>6</Dropdown.Item>
                        <Dropdown.Item>7-9</Dropdown.Item>
                        <Dropdown.Item>10-11</Dropdown.Item>
                        <Dropdown.Item>12-13</Dropdown.Item>
                        <Dropdown.Item>14-15</Dropdown.Item>
                        <Dropdown.Item>16-20</Dropdown.Item>
                      </DropdownMenu>
                    </Dropdown>
                  </p>
                  <label>Writing</label>
                  <p>
                    <Dropdown placeholder="Select Writing Score" fluid selection>
                      <DropdownMenu>
                        <Dropdown.Item>4-5</Dropdown.Item>
                        <Dropdown.Item>6</Dropdown.Item>
                        <Dropdown.Item>7-9</Dropdown.Item>
                        <Dropdown.Item>10-11</Dropdown.Item>
                        <Dropdown.Item>12-13</Dropdown.Item>
                        <Dropdown.Item>14-15</Dropdown.Item>
                        <Dropdown.Item>16-20</Dropdown.Item>
                      </DropdownMenu>
                    </Dropdown>
                  </p>
    
                  <label>Reading</label>
                  <p>
                    <Dropdown placeholder="Select Reading Score" fluid selection>
                      <DropdownMenu>
                        <Dropdown.Item>342-374</Dropdown.Item>
                        <Dropdown.Item>375-405</Dropdown.Item>
                        <Dropdown.Item>406-452</Dropdown.Item>
                        <Dropdown.Item>453-498</Dropdown.Item>
                        <Dropdown.Item>499-523</Dropdown.Item>
                        <Dropdown.Item>524-548</Dropdown.Item>
                        <Dropdown.Item>549-699</Dropdown.Item>
                      </DropdownMenu>
                    </Dropdown>
                  </p>
                  
                  <label>Listening</label>
                  <p>
                    <Dropdown placeholder="Select Listening Score" fluid selection>
                      <DropdownMenu>
                        <Dropdown.Item>331-368</Dropdown.Item>
                        <Dropdown.Item>369-397</Dropdown.Item>
                        <Dropdown.Item>398-457</Dropdown.Item>
                        <Dropdown.Item>458-502</Dropdown.Item>
                        <Dropdown.Item>503-522</Dropdown.Item>
                        <Dropdown.Item>523-548</Dropdown.Item>
                        <Dropdown.Item>549-699</Dropdown.Item>
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
    
      );
};

export default TCF;