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

const TEF =()=> {

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
                        <Dropdown.Item>181-225</Dropdown.Item>
                        <Dropdown.Item>226-270</Dropdown.Item>
                        <Dropdown.Item>271-309</Dropdown.Item>
                        <Dropdown.Item>310-348</Dropdown.Item>
                        <Dropdown.Item>349-370</Dropdown.Item>
                        <Dropdown.Item>371-392</Dropdown.Item>
                        <Dropdown.Item>392-450</Dropdown.Item>
                      </DropdownMenu>
                    </Dropdown>
                  </p>
                  <label>Writing</label>
                  <p>
                    <Dropdown placeholder="Select Writing Score" fluid selection>
                      <DropdownMenu>
                        <Dropdown.Item>181-225</Dropdown.Item>
                        <Dropdown.Item>226-270</Dropdown.Item>
                        <Dropdown.Item>271-309</Dropdown.Item>
                        <Dropdown.Item>310-348</Dropdown.Item>
                        <Dropdown.Item>349-370</Dropdown.Item>
                        <Dropdown.Item>371-392</Dropdown.Item>
                        <Dropdown.Item>393-450</Dropdown.Item>
                      </DropdownMenu>
                    </Dropdown>
                  </p>
    
                  <label>Reading</label>
                  <p>
                    <Dropdown placeholder="Select Reading Score" fluid selection>
                      <DropdownMenu>
                        <Dropdown.Item>121-150</Dropdown.Item>
                        <Dropdown.Item>151-180</Dropdown.Item>
                        <Dropdown.Item>181-206</Dropdown.Item>
                        <Dropdown.Item>207-232</Dropdown.Item>
                        <Dropdown.Item>233-247</Dropdown.Item>
                        <Dropdown.Item>248-262</Dropdown.Item>
                        <Dropdown.Item>263-300</Dropdown.Item>
                      </DropdownMenu>
                    </Dropdown>
                  </p>
                  
                  <label>Listening</label>
                  <p>
                    <Dropdown placeholder="Select Listening Score" fluid selection>
                      <DropdownMenu>
                        <Dropdown.Item>145-180</Dropdown.Item>
                        <Dropdown.Item>181-216</Dropdown.Item>
                        <Dropdown.Item>217-248</Dropdown.Item>
                        <Dropdown.Item>249-279</Dropdown.Item>
                        <Dropdown.Item>280-297</Dropdown.Item>
                        <Dropdown.Item>298-315</Dropdown.Item>
                        <Dropdown.Item>316-360</Dropdown.Item>
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

export default TEF;