import { React, useState, useEffect } from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  Dropdown,
  Radio,
  DropdownMenu,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  single,
  totalPoints,
  spouseLanguage,
  spouselanguagescore,
  spouseCLBlevel,
} from "../../Actions";

const SpouseLanguageTest = () => {
 //const [open, setOpen] = useState(false);
  const [SpeakingPoints,setSpeakingPoints] = useState(0);
  const [WritingPoints, setWritingPoints] = useState(0);
  const [ReadingPoints, setReadingPoints] = useState(0);
  const [ListeningPoints, setListeningPoints] = useState(0);
  const [SpouseLanguagePoints, setSpouseLanguagePoints] = useState(0);

  const [openielts, setOpenielts] = useState(false);
  const [opencel, setOpencel] = useState(false);
  const [opentcf, setOpentcf] = useState(false);
  const [opentef, setOpentef] = useState(false);
 
  const dispatch = useDispatch();
  let val = false;
  //let spouseLanguagetotal;

  const marriegeStatus = useSelector((state) => state.marriage);
  const spousecoming = useSelector((state) => state.spouseaccompanyingstatus);
  const spouseeducationstatus = useSelector((state) => state.spouseeducation);
  const spouseLanguageselect = useSelector((state)=> state.spouselanguagetestselection);
  

  // Langauge states
  const speakingScore = useSelector((state)=> state.spousespeakingscore);
  const listeningScore = useSelector((state)=> state.spouselisteningscore);
  const writingScore = useSelector((state)=> state.spousewritingscore);
  const readingScore = useSelector((state)=>state.spousereadingscore);

  // SPOUSE CLB levels

  const CLBspeaking = useSelector((state)=>state.spouseclbspeaking);
  const CLBwriting = useSelector((state)=>state.spouseclbwriting);
  const CLBreading = useSelector((state)=>state.spouseclbreading);
  const CLBlistening = useSelector((state)=>state.spouseclblistening);

    //useState to count individual CELPIP-G individual module score
    const [celpipdropdown, setCelpipdropdown] = useState("hide");
    const [ieltsdropdown, setIeltsdropdown] = useState("hide");
    const [tcfdropdown, setTcfdropdown] = useState("hide");
    const [tefdropdown, setTefdropdown] = useState("hide");
    const [notapp, setNotapplicable] = useState("hide");

  useEffect(() => {
    dispatch(totalPoints("SPOUSELANGUAGEPOINTS",SpouseLanguagePoints) ); 
   if(spousecoming === "Spouse accompanying")
   {
       if(spouseLanguageselect === "Not applicable")
       {
        setIeltsdropdown("hide");
        setCelpipdropdown("hide");
        setTcfdropdown("hide");
        setTefdropdown("hide"); 
       }
      
       if(spouseLanguageselect === "IELTS")// SPOUSE IELTS STARTS HERE
       {
        setIeltsdropdown("show");
        setCelpipdropdown("hide");
        setTcfdropdown("hide");
        setTefdropdown("hide");  
        //console.log("i ama here iel", ieltsdropdown);
       }

       if(spouseLanguageselect === "CELPIP-G")
       {
        setIeltsdropdown("hide");
        setCelpipdropdown("show");
        setTcfdropdown("hide");
        setTefdropdown("hide");  
       // console.log("i ama here cel", celpipdropdown);
       
       }

       if(spouseLanguageselect === "TCF")
       {
        setIeltsdropdown("hide");
        setCelpipdropdown("hide");
        setTcfdropdown("show");
        setTefdropdown("hide");  
        //console.log("i ama here tcf", tcfdropdown);
       }

       if(spouseLanguageselect === "TEF")
       {
        setIeltsdropdown("hide");
        setCelpipdropdown("hide");
        setTcfdropdown("hide");
        setTefdropdown("show");  
        //console.log("i ama here tef", tefdropdown);
       }

       // CLB LEVEL 4 conditions
       if(CLBspeaking === "CLB 4")
       {
         setSpeakingPoints(0);
       }
       if(CLBlistening === "CLB 4")
       {
         setListeningPoints(0);
       }
       if(CLBreading === "CLB 4")
       {
         setReadingPoints(0);
       }
       if(CLBwriting === "CLB 4")
       {
         setWritingPoints(0);
       }

       // CLB LEVEL 5 and 6 conditions
       if(CLBwriting === "CLB 5" || CLBwriting === "CLB 6")
       {
         setWritingPoints(1);
       }
       if(CLBreading === "CLB 5" || CLBreading === "CLB 6")
       {
         setReadingPoints(1);
       }
       if(CLBlistening === "CLB 5" || CLBlistening === "CLB 6")
       {
         setListeningPoints(1);
       }
       if(CLBspeaking === "CLB 5" || CLBspeaking === "CLB 6")
       {
         setSpeakingPoints(1);
       }

       // CLB LEVEL 7 and 8 conditions
       if(CLBwriting === "CLB 7" || CLBwriting === "CLB 8")
       {
         setWritingPoints(3);
       }
       if(CLBreading === "CLB 7" || CLBreading === "CLB 8")
       {
         setReadingPoints(3);
       }
       if(CLBlistening === "CLB 7" || CLBlistening === "CLB 8")
       {
         setListeningPoints(3);
       }
       if(CLBspeaking === "CLB 7" || CLBspeaking === "CLB 8")
       {
         setSpeakingPoints(3);
       }

       //CLB LEVEL 9 and 10 conditions
       if(CLBwriting === "CLB 9" || CLBwriting === "CLB 10")
       {
         setWritingPoints(5);
         console.log("spousewriting",WritingPoints);
       }
       if(CLBreading === "CLB 9" || CLBreading === "CLB 10")
       {
         setReadingPoints(5);
         console.log("spousereading",ReadingPoints);
       }
       if(CLBlistening === "CLB 9" || CLBlistening === "CLB 10")
       {
         setListeningPoints(5);
         console.log("spouselistening",ListeningPoints);
       }
       if(CLBspeaking === "CLB 9" || CLBspeaking === "CLB 10")
       {
         setSpeakingPoints(5);
         console.log("spousespeaking",SpeakingPoints);
       }

       setSpouseLanguagePoints (SpeakingPoints + ListeningPoints + ReadingPoints + WritingPoints);

   }
  },[spouseLanguageselect,spousecoming,CLBlistening,CLBreading,CLBwriting,CLBspeaking,SpeakingPoints,ListeningPoints,ReadingPoints,WritingPoints]);   // useEffect ends here

  
  return (
    <div>
      <br></br>
      <div class="flex flex-col">
        <div class="bg-primary shadow-xl  rounded-3xl p-4">
          <div class="flex-none lg:flex">
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap bg-blue-500 text-white text-lg px-6 py-4 font-bold rounded-xl">
                <h2 class="flex-auto text-lg font-mono font-bold">
                  Spouse language test
                </h2>
              </div>
              <div class="mt-3 md:mb-0 font-mono bg-white px-5 py-2 shadow-sm tracking-wider border text-black rounded-full  inline-flex items-center space-x-2 ">
                <b>
                  <span>
                    &nbsp;
                    <Radio
                      label="IELTS"
                     checked={spouseLanguageselect === "IELTS"}
                      /* onClick={() => {
                        dispatch(firstLanguageCheck("IELTS"));
                        dispatch(totalPoints("FIRSTIELTSPOINTS", 0));
                        dispatch(celpipscore("REMOVE"));
                        dispatch(tcfscore("REMOVE"));
                        dispatch(spouselanguagescore("spouselanguageREMOVE"));
                      }} */
                      onClick={()=>{dispatch(spouseLanguage("SpouseIELTS"));
                      dispatch(spouselanguagescore("spouselanguageREMOVE"));
                    }}
                      
                    />
                    &nbsp;
                    <Radio
                      label="CELPIP-G"
                     checked={spouseLanguageselect === "CELPIP-G"}
                     onClick={()=>{dispatch(spouseLanguage("SpouseCELPIP-G"));
                     dispatch(spouselanguagescore("spouselanguageREMOVE"));
                    }}
                   /*    onClick={() => {
                        dispatch(firstLanguageCheck("CEL"));
                        dispatch(totalPoints("FIRSTIELTSPOINTS", 0));
                        dispatch(firstIeltsspeaking("REMOVE"));
                        dispatch(firstIeltswriting("REMOVE"));
                        dispatch(firstIeltsreading("REMOVE"));
                        dispatch(firstIeltslistening("REMOVE"));
                        dispatch(tcfscore("REMOVE"));
                        dispatch(tefscore("REMOVE"));
                      }} */
                    />
                    &nbsp;
                    <Radio
                      label="TCF"
                     checked={spouseLanguageselect === "TCF"}
                     onClick={()=>{dispatch(spouseLanguage("SpouseTCF"));
                     dispatch(spouselanguagescore("spouselanguageREMOVE"));
                    }}
                    /*   onClick={() => {
                        dispatch(firstLanguageCheck("TCF"));
                        dispatch(totalPoints("FIRSTIELTSPOINTS", 0));
                        dispatch(firstIeltsspeaking("REMOVE"));
                        dispatch(firstIeltswriting("REMOVE"));
                        dispatch(firstIeltsreading("REMOVE"));
                        dispatch(firstIeltslistening("REMOVE"));
                        dispatch(celpipscore("REMOVE"));
                        dispatch(tefscore("REMOVE"));
                      }} */
                    />
                    &nbsp;
                    <Radio
                      label="TEF"
                     checked={spouseLanguageselect === "TEF"}
                     onClick={()=>{dispatch(spouseLanguage("SpouseTEF"));
                     dispatch(spouselanguagescore("spouselanguageREMOVE"));
                    }}
                     /*  onClick={() => {
                        dispatch(firstLanguageCheck("TEF"));
                        dispatch(totalPoints("FIRSTIELTSPOINTS", 0));
                        dispatch(firstIeltsspeaking("REMOVE"));
                        dispatch(firstIeltswriting("REMOVE"));
                        dispatch(firstIeltsreading("REMOVE"));
                        dispatch(firstIeltslistening("REMOVE"));
                        dispatch(celpipscore("REMOVE"));
                        dispatch(tcfscore("REMOVE"));
                      }} */
                    />
                      &nbsp;
                    <Radio
                      label="Not applicable"
                     checked={spouseLanguageselect === "Not applicable"}
                     onClick={()=>{dispatch(spouseLanguage("SpouseNotapplicable"));
                    }}
                     /*  onClick={() => {
                        dispatch(firstLanguageCheck("TEF"));
                        dispatch(totalPoints("FIRSTIELTSPOINTS", 0));
                        dispatch(firstIeltsspeaking("REMOVE"));
                        dispatch(firstIeltswriting("REMOVE"));
                        dispatch(firstIeltsreading("REMOVE"));
                        dispatch(firstIeltslistening("REMOVE"));
                        dispatch(celpipscore("REMOVE"));
                        dispatch(tcfscore("REMOVE"));
                      }} */
                    />
                  </span>
                </b>
              </div>
              <p class="mt-3"></p>

              {/* <div class={ieltsdropdown}> */}
                {" "}
                {/* IELTS sections for individial score  starts here */}
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Speaking: {speakingScore}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Listening: {listeningScore}
                    </p>
                  </div>
                </div>
              {/* </div> */}
              {/* <div class={ieltsdropdown}> */}
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Writing: {writingScore}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Reading: {readingScore}
                    </p>
                  </div>
                </div>
              {/* </div>{" "} */}
              {/* IELTS sections for individual score ends here */}
                

              <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div class="flex space-x-3 text-sm font-medium">
                <div class="flex-auto flex space-x-3">
                
                <div className={ieltsdropdown}>

                  <Modal
                    basic
                    onClose={() => setOpenielts(false)}
                    onOpen={() => setOpenielts(true)}
                    closeOnDimmerClick={val}
                    open={openielts}
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
                    <Header>
                      
                    Please select {spouseLanguageselect} data from here
                    </Header>

                    <Modal.Content>
                    <label>Speaking</label>
                      <p>
                        <Dropdown
                          placeholder= {speakingScore}
                          fluid
                          selection
                        >
                          <DropdownMenu>
                          <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouses4.0-4.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB4speaking"));
                                }}
                              >
                                4.0 - 4.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouses5.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB5speaking"));
                                }}
                              >
                                5.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouses5.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB6speaking"));
                                }}
                              >
                                5.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouses6.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB7speaking"));
                                }}
                              >
                                6.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouses6.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB8speaking"));
                                }}
                              >
                                6.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouses7.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB9speaking"));
                                }}
                              >
                                7.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouses7.5-9.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB10speaking"));
                                }}
                              >
                                7.5 - 9.0
                              </Dropdown.Item>
                          </DropdownMenu>
                        </Dropdown>
                      </p>
                      <label>Writing</label>
                        <p>
                          <Dropdown
                            placeholder={writingScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousew4.0-4.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB4writing"));
                                }}
                              >
                                4.0 - 4.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousew5.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB5writing"));
                                }}
                              >
                                5.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousew5.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB6writing"));
                                }}
                              >
                                5.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousew6.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB7writing"));
                                }}
                              >
                                6.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousew6.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB8writing"));
                                }}
                              >
                                6.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousew7.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB9writing"));
                                }}
                              >
                                7.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousew7.5-9.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB10writing"));
                                }}
                              >
                                7.5 - 9.0
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>

                        <label>Reading</label>
                        <p>
                          <Dropdown
                            placeholder={readingScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouser3.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB4reading"));
                                }}
                              >
                                3.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouser4.0-4.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB5reading"));
                                }}
                              >
                                4.0 - 4.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouser5.0-5.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB6reading"));
                                }}
                              >
                                5.0 - 5.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouser6.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB7reading"));
                                }}
                              >
                                6.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouser6.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB8reading"));
                                }}
                              >
                                6.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouser7.0-7.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB9reading"));
                                }}
                              >
                                7.0 - 7.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouser8.0-9.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB10reading"));
                                }}
                              >
                                8.0 - 9.0
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>
                        <label>Listening</label>
                        <p>
                          <Dropdown
                            placeholder={listeningScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousel4.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB4listening"));
                                }}
                              >
                                4.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousel5.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB5listening"));
                                }}
                              >
                                5.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousel5.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB6listening"));
                                }}
                              >
                                5.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousel6.0-7.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB7listening"));
                                }}
                              >
                                6.0 - 7.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousel7.5"));
                                  dispatch(spouseCLBlevel ("spouseCLB8listening"));
                                }}
                              >
                                7.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousel8.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB9listening"));
                                }}
                              >
                                8.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousel8.5-9.0"));
                                  dispatch(spouseCLBlevel ("spouseCLB10listening"));
                                }}
                              >
                                8.5 - 9.0
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
                          setOpenielts(false);
                          dispatch(totalPoints("SPOUSELANGUAGEPOINTS",SpouseLanguagePoints) ); 
                        }}
                      >
                        <Icon name="checkmark" /> Done
                      </Button>
                    </Modal.Actions>
                  </Modal>
                </div>
                

                <div className={celpipdropdown}>
                    {/* CELPIP-G dropdown starts here */}
                    <Modal
                      basic
                      onClose={() => setOpencel(false)}
                      onOpen={() => setOpencel(true)}
                      closeOnDimmerClick={val}
                      open={opencel}
                      size="small"
                      trigger={
                        <button
                          class="mb-2 md:mb-0 bg-secondary font-semibold font-mono px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-green-600"
                          type="button"
                          aria-label="like"
                        >
                          Select from here cel
                        </button>
                      }
                    >
                      <Header>
                        Please select {spouseLanguageselect} data from here
                      </Header>

                      <Modal.Content>
                        <label>Speaking</label>
                        <p>
                          <Dropdown
                            placeholder={speakingScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousescel4"));
                                  dispatch(spouseCLBlevel("spouseCLB4speaking"));
                                }}
                              >
                                4
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousescel5"));
                                  dispatch(spouseCLBlevel("spouseCLB5speaking"));
                                }}
                              >
                                5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousescel6"));
                                  dispatch(spouseCLBlevel("spouseCLB6speaking"));
                                }}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousescel7"));
                                  dispatch(spouseCLBlevel("spouseCLB7speaking"));
                                }}
                              >
                                7
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousescel8"));
                                  dispatch(spouseCLBlevel("spouseCLB8speaking"));
                                }}
                              >
                                8
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousescel9"));
                                  dispatch(spouseCLBlevel("spouseCLB9speaking"));
                                }}
                              >
                                9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousescel10"));
                                  dispatch(spouseCLBlevel("spouseCLB10speaking"));
                                }}
                              >
                                10
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>

                        <label>Writing</label>
                        <p>
                          <Dropdown
                            placeholder={writingScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewcel4"));
                                  dispatch(spouseCLBlevel("spouseCLB4writing"));
                                }}
                              >
                                4
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewcel5"));
                                  dispatch(spouseCLBlevel("spouseCLB5writing"));
                                }}
                              >
                                5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewcel6"));
                                  dispatch(spouseCLBlevel("spouseCLB6writing"));
                                }}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewcel7"));
                                  dispatch(spouseCLBlevel("spouseCLB7writing"));
                                }}
                              >
                                7
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewcel8"));
                                  dispatch(spouseCLBlevel("spouseCLB8writing"));
                                }}
                              >
                                8
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewcel9"));
                                  dispatch(spouseCLBlevel("spouseCLB9writing"));
                                }}
                              >
                                9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewcel10"));
                                  dispatch(spouseCLBlevel("spouseCLB10writing"));
                                }}
                              >
                                10
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>

                        <label>Reading</label>
                        <p>
                          <Dropdown
                            placeholder={readingScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousercel4"));
                                  dispatch(spouseCLBlevel("spouseCLB4reading"));
                                }}
                              >
                                4
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousercel5"));
                                  dispatch(spouseCLBlevel("spouseCLB5reading"));
                                }}
                              >
                                5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousercel6"));
                                  dispatch(spouseCLBlevel("spouseCLB6reading"));
                                }}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousercel7"));
                                  dispatch(spouseCLBlevel("spouseCLB7reading"));
                                }}
                              >
                                7
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousercel8"));
                                  dispatch(spouseCLBlevel("spouseCLB8reading"));
                                }}
                              >
                                8
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousercel9"));
                                  dispatch(spouseCLBlevel("spouseCLB9reading"));
                                }}
                              >
                                9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousercel10"));
                                  dispatch(spouseCLBlevel("spouseCLB10reading"));
                                }}
                              >
                                10
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>

                        <label>Listening</label>
                        <p>
                          <Dropdown
                            placeholder={listeningScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouselcel4"));
                                  dispatch(spouseCLBlevel("spouseCLB4listening"));
                                }}
                              >
                                4
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouselcel5"));
                                  dispatch(spouseCLBlevel("spouseCLB5listening"));
                                }}
                              >
                                5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouselcel6"));
                                  dispatch(spouseCLBlevel("spouseCLB6listening"));
                                }}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouselcel7"));
                                  dispatch(spouseCLBlevel("spouseCLB7listening"));
                                }}
                              >
                                7
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouselcel8"));
                                  dispatch(spouseCLBlevel("spouseCLB8listening"));
                                }}
                              >
                                8
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouselcel9"));
                                  dispatch(spouseCLBlevel("spouseCLB9listening"));
                                }}
                              >
                                9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouselcel10"));
                                  dispatch(spouseCLBlevel("spouseCLB10listening"));
                                }}
                              >
                                10
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
                            setOpencel(false);
                            dispatch(totalPoints("SPOUSELANGUAGEPOINTS",SpouseLanguagePoints) ); 
                            /* dispatch(
                              totalPoints("FIRSTIELTSPOINTS", ietlstotal)
                            ); */
                            /* dispatch(
                              totalPoints("SKILLTRANSFEREDUCATION", skilltranfer)
                            ); */
                          }}
                        >
                          <Icon name="checkmark" /> Done
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </div>{" "}   {/* CELPIP-G dropdown ends here */}

                  <div className={tcfdropdown}>
                    {" "}
                    {/* TCF dropdown starts here */}
                    <Modal
                      basic
                      onClose={() => setOpentcf(false)}
                      onOpen={() => setOpentcf(true)}
                      closeOnDimmerClick={val}
                      open={opentcf}
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
                      <Header>
                        Please select {spouseLanguageselect} data from here
                      </Header>

                      <Modal.Content>
                        <label>Speaking</label>
                        <p>
                          <Dropdown
                            placeholder={speakingScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestcf4-5"));
                                  dispatch(spouseCLBlevel("spouseCLB4speaking"));
                                }}
                              >
                                4-5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestcf6"));
                                  dispatch(spouseCLBlevel("spouseCLB5speaking"));
                                }}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestcf7-9"));
                                  dispatch(spouseCLBlevel("spouseCLB6speaking"));
                                }}
                              >
                                7-9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestcf10-11"));
                                  dispatch(spouseCLBlevel("spouseCLB7speaking"));
                                }}
                              >
                                10-11
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestcf12-13"));
                                  dispatch(spouseCLBlevel("spouseCLB8speaking"));
                                }}
                              >
                                12-13
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestcf14-15"));
                                  dispatch(spouseCLBlevel("spouseCLB9speaking"));
                                }}
                              >
                                14-15
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestcf16-20"));
                                  dispatch(spouseCLBlevel("spouseCLB10speaking"));
                                }}
                              >
                                16-20
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>
                        <label>Writing</label>
                        <p>
                          <Dropdown
                            placeholder={writingScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtcf4-5"));
                                  dispatch(spouseCLBlevel("spouseCLB4writing"));
                                }}
                              >
                                4-5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtcf6"));
                                  dispatch(spouseCLBlevel("spouseCLB5writing"));
                                }}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtcf7-9"));
                                  dispatch(spouseCLBlevel("spouseCLB6writing"));
                                }}
                              >
                                7-9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtcf10-11"));
                                  dispatch(spouseCLBlevel("spouseCLB7writing"));
                                }}
                              >
                                10-11
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtcf12-13"));
                                  dispatch(spouseCLBlevel("spouseCLB8writing"));
                                }}
                              >
                                12-13
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtcf14-15"));
                                  dispatch(spouseCLBlevel("spouseCLB9writing"));
                                }}
                              >
                                14-15
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtcf16-20"));
                                  dispatch(spouseCLBlevel("spouseCLB10writing"));
                                }}
                              >
                                16-20
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>

                        <label>Reading</label>
                        <p>
                          <Dropdown
                            placeholder={readingScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertcf342-374"));
                                  dispatch(spouseCLBlevel("spouseCLB4reading"));
                                }}
                              >
                                342-374
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertcf375-405"));
                                  dispatch(spouseCLBlevel("spouseCLB5reading"));
                                }}
                              >
                                375-405
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertcf406-452"));
                                  dispatch(spouseCLBlevel("spouseCLB6reading"));
                                }}
                              >
                                406-452
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertcf453-498"));
                                  dispatch(spouseCLBlevel("spouseCLB7reading"));
                                }}
                              >
                                453-498
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertcf499-523"));
                                  dispatch(spouseCLBlevel("spouseCLB8reading"));
                                }}
                              >
                                499-523
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertcf524-548"));
                                  dispatch(spouseCLBlevel("spouseCLB9reading"));
                                }}
                              >
                                524-548
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertcf549-699"));
                                  dispatch(spouseCLBlevel("spouseCLB10reading"));
                                }}
                              >
                                549-699
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>

                        <label>Listening</label>
                        <p>
                          <Dropdown
                            placeholder={listeningScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltcf331-368"));
                                  dispatch(spouseCLBlevel("spouseCLB4listening"));
                                }}
                              >
                                331-368
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltcf369-397"));
                                  dispatch(spouseCLBlevel("spouseCLB5listening"));
                                }}
                              >
                                369-397
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltcf398-457"));
                                  dispatch(spouseCLBlevel("spouseCLB6listening"));
                                }}
                              >
                                398-457
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltcf458-502"));
                                  dispatch(spouseCLBlevel("spouseCLB7listening"));
                                }}
                              >
                                458-502
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltcf503-522"));
                                  dispatch(spouseCLBlevel("spouseCLB8listening"));
                                }}
                              >
                                503-522
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltcf523-548"));
                                  dispatch(spouseCLBlevel("spouseCLB9listening"));
                                }}
                              >
                                523-548
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltcf549-699"));
                                  dispatch(spouseCLBlevel("spouseCLB10listening"));
                                }}
                              >
                                549-699
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
                            setOpentcf(false);
                            dispatch(totalPoints("SPOUSELANGUAGEPOINTS",SpouseLanguagePoints) ); 
                           /*  dispatch(
                              totalPoints("FIRSTIELTSPOINTS", ietlstotal)
                            ); */
                            /*  dispatch(
                              totalPoints("SKILLTRANSFEREDUCATION", skilltranfer)
                            ); */
                          }}
                        >
                          <Icon name="checkmark" /> Done
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </div>{" "}
                  {/* TCF dropdown ends here */}
                  <div className={tefdropdown}>
                    {" "}
                    {/* tef dropdown starts here */}
                    <Modal
                      basic
                      onClose={() => setOpentef(false)}
                      onOpen={() => setOpentef(true)}
                      closeOnDimmerClick={val}
                      open={opentef}
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
                      <Header>
                        Please select {spouseLanguageselect} data from here
                      </Header>

                      <Modal.Content>
                        <label>Speaking</label>
                        <p>
                          <Dropdown
                            placeholder={speakingScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestef181-225"));
                                  dispatch(spouseCLBlevel("CLB4speaking"));
                                }}
                              >
                                181-225
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestef226-270"));
                                  dispatch(spouseCLBlevel("CLB5speaking"));
                                }}
                              >
                                226-270
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestef271-309"));
                                  dispatch(spouseCLBlevel("CLB6speaking"));
                                }}
                              >
                                271-309
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestef310-348"));
                                  dispatch(spouseCLBlevel("CLB7speaking"));
                                }}
                              >
                                310-348
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestef349-370"));
                                  dispatch(spouseCLBlevel("CLB8speaking"));
                                }}
                              >
                                349-370
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestef371-392"));
                                  dispatch(spouseCLBlevel("CLB9speaking"));
                                }}
                              >
                                371-392
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousestef393-450"));
                                  dispatch(spouseCLBlevel("CLB10speaking"));
                                }}
                              >
                                393-450
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>
                        <label>Writing</label>
                        <p>
                          <Dropdown
                            placeholder={writingScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtef181-225"));
                                  dispatch(spouseCLBlevel("spouseCLB4writing"));
                                }}
                              >
                                181-225
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtef226-270"));
                                  dispatch(spouseCLBlevel("spouseCLB5writing"));
                                }}
                              >
                                226-270
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtef271-309"));
                                  dispatch(spouseCLBlevel("spouseCLB6writing"));
                                }}
                              >
                                271-309
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtef310-348"));
                                  dispatch(spouseCLBlevel("spouseCLB7writing"));
                                }}
                              >
                                310-348
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtef349-370"));
                                  dispatch(spouseCLBlevel("spouseCLB8writing"));
                                }}
                              >
                                349-370
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtef371-392"));
                                  dispatch(spouseCLBlevel("spouseCLB9writing"));
                                }}
                              >
                                371-392
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousewtef393-450"));
                                  dispatch(spouseCLBlevel("spouseCLB10writing"));
                                }}
                              >
                                393-450
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>

                        <label>Reading</label>
                        <p>
                          <Dropdown
                            placeholder={readingScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertef121-150"));
                                  dispatch(spouseCLBlevel("spouseCLB4reading"));
                                }}
                              >
                                121-150
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertef151-180"));
                                  dispatch(spouseCLBlevel("spouseCLB5reading"));
                                }}
                              >
                                151-180
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertef181-206"));
                                  dispatch(spouseCLBlevel("spouseCLB6reading"));
                                }}
                              >
                                181-206
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertef207-232"));
                                  dispatch(spouseCLBlevel("spouseCLB7reading"));
                                }}
                              >
                                207-232
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertef223-247"));
                                  dispatch(spouseCLBlevel("spouseCLB8reading"));
                                }}
                              >
                                233-247
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertef248-262"));
                                  dispatch(spouseCLBlevel("spouseCLB9reading"));
                                }}
                              >
                                248-262
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spousertef263-300"));
                                  dispatch(spouseCLBlevel("spouseCLB10reading"));
                                }}
                              >
                                263-300
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>

                        <label>Listening</label>
                        <p>
                          <Dropdown
                            placeholder={listeningScore}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltef145-180"));
                                  dispatch(spouseCLBlevel("spouseCLB4listening"));
                                }}
                              >
                                145-180
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltef181-216"));
                                  dispatch(spouseCLBlevel("spouseCLB5listening"));
                                }}
                              >
                                181-216
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltef217-248"));
                                  dispatch(spouseCLBlevel("spouseCLB6listening"));
                                }}
                              >
                                217-248
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltef249-279"));
                                  dispatch(spouseCLBlevel("spouseCLB7listening"));
                                }}
                              >
                                249-279
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltef280-297"));
                                  dispatch(spouseCLBlevel("spouseCLB8listening"));
                                }}
                              >
                                280-297
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltef298-315"));
                                  dispatch(spouseCLBlevel("spouseCLB9listening"));
                                }}
                              >
                                298-315
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(spouselanguagescore("spouseltef316-360"));
                                  dispatch(spouseCLBlevel("spouseCLB10listening"));
                                }}
                              >
                                316-360
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
                            setOpentef(false);
                            dispatch(totalPoints("SPOUSELANGUAGEPOINTS",SpouseLanguagePoints) ); 
                            /* dispatch(
                              totalPoints("FIRSTIELTSPOINTS", ietlstotal)
                            ); */
                            /* dispatch(
                              totalPoints("SKILLTRANSFEREDUCATION", skilltranfer)
                            ); */
                          }}
                        >
                          <Icon name="checkmark" /> Done
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </div>{" "}{/* tef dropdown ends here */}
                  </div>

                <div class="mb-2 md:mb-0 font-mono bg-white px-5 py-2 shadow-sm tracking-wider border text-black rounded-full  inline-flex items-center space-x-2 ">
                  <b>
                    <span>Points: {SpouseLanguagePoints}</span>
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

export default SpouseLanguageTest;
