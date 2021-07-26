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
  celpipscore,
} from "../../Actions";
import { useDispatch, useSelector } from "react-redux";

const CELPIPG = () => {
  const [open, setOpen] = useState(false);

  const firstLanguageStatus = useSelector((state) => state.firstlanguage);
  const marriegeStatus = useSelector((state) => state.marriage);

  const dispatch = useDispatch();

  return (
    <div>
      <div class="flex justify items-center px-6 py-4">
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
                <Dropdown.Item onClick={() => dispatch(celpipscore("scel4"))}>4</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("scel5"))}>5</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("scel6"))}>6</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("scel7"))}>7</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("scel8"))}>8</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("scel9"))}>9</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("scel10"))}>10</Dropdown.Item>
              </DropdownMenu>
            </Dropdown>
          </p>

          <label>Writing</label>wcel4
          <p>
            <Dropdown placeholder="Select Writing Score" fluid selection>
              <DropdownMenu>
                <Dropdown.Item onClick={() => dispatch(celpipscore("wcel4"))}>4</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("wcel5"))}>5</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("wcel6"))}>6</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("wcel7"))}>7</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("wcel8"))}>8</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("wcel9"))}>9</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("wcel10"))}>10</Dropdown.Item>
              </DropdownMenu>
            </Dropdown>
          </p>
         
          <label>Reading</label>
          <p>
            <Dropdown placeholder="Select Reading Score" fluid selection>
              <DropdownMenu>
                <Dropdown.Item onClick={() => dispatch(celpipscore("rcel4"))}>4</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("rcel5"))}>5</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("rcel6"))}>6</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("rcel7"))}>7</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("rcel8"))}>8</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("rcel9"))}>9</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("rcel10"))}>10</Dropdown.Item>
              </DropdownMenu>
            </Dropdown>
          </p>

          <label>Listening</label>
          <p>
            <Dropdown placeholder="Select Listening Score" fluid selection>
              <DropdownMenu>
                <Dropdown.Item onClick={() => dispatch(celpipscore("lcel4"))}>4</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("lcel5"))}>5</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("lcel6"))}>6</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("lcel7"))}>7</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("lcel8"))}>8</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("lcel9"))}>9</Dropdown.Item>
                <Dropdown.Item onClick={() => dispatch(celpipscore("lcel10"))}>10</Dropdown.Item>
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
              //dispatch(totalPoints("FIRSTIELTSPOINTS", ieltstotal));
            }}
          >
            <Icon name="checkmark" /> Done
          </Button>
        </Modal.Actions>
      </Modal>
      </div>
    </div>
  );
};

export default CELPIPG;
