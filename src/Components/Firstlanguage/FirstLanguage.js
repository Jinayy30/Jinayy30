import { React, useState, useEffect } from "react";
import "../visibility.css";

import CELPIPG from "./CELPIPG";
import TCF from "./TCF";
import TEF from "./TEF";

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
  ItemExtra,
} from "semantic-ui-react";
import {
  firstLanguageCheck,
  firstIeltsspeaking,
  firstIeltslistening,
  firstIeltsreading,
  firstIeltswriting,
  totalPoints,
  celpipscore,
  tcfscore,
  tefscore,
  clblevelspeaking,
  clblevelwriting,
  clblevelreading,
  clblevellistening,
  educationActions,
} from "../../Actions";
import { useDispatch, useSelector } from "react-redux";

const FirstLanguage = () => {
  //let ieltstotal=0;
  let val = false;

  //states to maintain useState functinality for opening and closing individual modals
  const [openielts, setOpenielts] = useState(false);
  const [opencel, setOpencel] = useState(false);
  const [opentcf, setOpentcf] = useState(false);
  const [opentef, setOpentef] = useState(false);

  // useStates to count individual ielts module score
  const [speakingScore, setSpeakingScore] = useState(0);
  const [listeningScore, setListeningScore] = useState(0);
  const [writingScore, setWritingScore] = useState(0);
  const [readingScore, setReadingScore] = useState(0);
  const [ietlstotal, setIeltstotal] = useState(0);
  const [skilltranfer, setSkilltransfer] = useState(0);

  //useState to count individual CELPIP-G individual module score
  const [celpipdropdown, setCelpipdropdown] = useState("hide");
  const [ieltsdropdown, setIeltsdropdown] = useState("hide");
  const [tcfdropdown, setTcfdropdown] = useState("hide");
  const [tefdropdown, setTefdropdown] = useState("hide");

  const dispatch = useDispatch();

  //All global states for different functionality (ielts)
  const marriegeStatus = useSelector((state) => state.marriage);
  const firstLanguageStatus = useSelector((state) => state.firstlanguage);
  const firstIeltsSpeaking = useSelector((state) => state.firstieltsspeaking);
  const firstIeltsListening = useSelector((state) => state.firstieltslistening);
  const firstieltsReading = useSelector((state) => state.firstieltsreading);
  const firstieltsWriting = useSelector((state) => state.firstieltswriting);
  const educationStatus = useSelector((state) => state.education);

  const clbLevelSpeaking = useSelector((state) => state.clbspeaking);
  const clbLevelWriting = useSelector((state) => state.clbwriting);
  const clbLevelReading = useSelector((state) => state.clbreading);
  const clbLevelListening = useSelector((state) => state.clblistening);

  //All global states for different functionality (CELPIP-G)
  const firstCelspeaking = useSelector((state) => state.firstcelspeaking);
  const firstCelwriting = useSelector((state) => state.firstcelwriting);
  const firstCelreading = useSelector((state) => state.firstcelreading);
  const firstCellistening = useSelector((state) => state.firstcellistening);

  //All global states for different functionality (TCF)
  const firstTcfspeaking = useSelector((state) => state.firsttcfspeaking);
  const firstTcfwriting = useSelector((state) => state.firsttcfwriting);
  const firstTcfreading = useSelector((state) => state.firsttcfreading);
  const firstTcflistening = useSelector((state) => state.firsttcflistening);

  //All global states for different functionality (TEF)
  const firstTefspeaking = useSelector((state) => state.firsttefspeaking);
  const firstTefwriting = useSelector((state) => state.firsttefwriting);
  const firstTefreading = useSelector((state) => state.firsttefreading);
  const firstTeflistening = useSelector((state) => state.firstteflistening);

  //global state fro total first language points
  const firstlanguagePoints = useSelector(
    (state) => state.points.firstieltspoints
  );

  /* function handleClick  () {
   
    dispatch(totalPoints("SKILLTRANSFEREDUCATION",skilltranfer));
  } */

  //useEffect starts
  useEffect(() => {
    dispatch(totalPoints("FIRSTIELTSPOINTS", ietlstotal));
    dispatch(totalPoints("SKILLTRANSFEREDUCATION", skilltranfer));
    //console.log("this is test", firstlanguagePoints);
    if (marriegeStatus === "single") {
      /* single condiion starts here */
      if (firstLanguageStatus === "IELTS") {
        //ielts condition
        setIeltsdropdown("show");
        setCelpipdropdown("hide");
        setTcfdropdown("hide");
        setTefdropdown("hide");
        //ielts speaking
        if (firstIeltsSpeaking === "Please select IELTS speaking score") {
          setSpeakingScore(0);
        }
        if (firstIeltsSpeaking === "4.0 - 4.5") {
          setSpeakingScore(6);
        }
        if (firstIeltsSpeaking === "5.0") {
          setSpeakingScore(6);
        }
        if (firstIeltsSpeaking === "5.5") {
          setSpeakingScore(9);
        }
        if (firstIeltsSpeaking === "6.0") {
          setSpeakingScore(17);
        }
        if (firstIeltsSpeaking === "6.5") {
          setSpeakingScore(23);
        }
        if (firstIeltsSpeaking === "7.0") {
          setSpeakingScore(31);
        }
        if (firstIeltsSpeaking === "7.5 - 9.0") {
          setSpeakingScore(34);
        }

        //ielts listening
        if (firstIeltsListening === "Please select IELTS listening score") {
          setListeningScore(0);
        }
        if (firstIeltsListening === "4.5") {
          setListeningScore(6);
        }
        if (firstIeltsListening === "5.0") {
          setListeningScore(6);
        }
        if (firstIeltsListening === "5.5") {
          setListeningScore(9);
        }
        if (firstIeltsListening === "6.0 - 7.0") {
          setListeningScore(17);
        }
        if (firstIeltsListening === "7.5") {
          setListeningScore(23);
        }
        if (firstIeltsListening === "8.0") {
          setListeningScore(31);
        }
        if (firstIeltsListening === "8.5 - 9.0") {
          setListeningScore(34);
        }

        // ielts reading

        if (firstieltsReading === "Please select IELTS reading score") {
          setReadingScore(0);
        }
        if (firstieltsReading === "3.5") {
          setReadingScore(6);
        }
        if (firstieltsReading === "4.0 - 4.5") {
          setReadingScore(6);
        }
        if (firstieltsReading === "5.0 - 5.5") {
          setReadingScore(9);
        }
        if (firstieltsReading === "6.0") {
          setReadingScore(17);
        }
        if (firstieltsReading === "6.5") {
          setReadingScore(23);
        }
        if (firstieltsReading === "7.0 - 7.5") {
          setReadingScore(31);
        }
        if (firstieltsReading === "8.0 - 9.0") {
          setReadingScore(34);
        }

        // ieltswriting
        if (firstieltsWriting === "Please select IELTS writing score") {
          setWritingScore(0);
        }
        if (firstieltsWriting === "4.0") {
          setWritingScore(6);
        }
        if (firstieltsWriting === "5.0") {
          setWritingScore(6);
        }
        if (firstieltsWriting === "5.5") {
          setWritingScore(9);
        }
        if (firstieltsWriting === "6.0") {
          setWritingScore(17);
        }
        if (firstieltsWriting === "6.5") {
          setWritingScore(23);
        }
        if (firstieltsWriting === "7.0") {
          setWritingScore(31);
        }
        if (firstieltsWriting === "7.5 - 9.0") {
          setWritingScore(34);
        }
        setIeltstotal(
          speakingScore + listeningScore + readingScore + writingScore
        );
      } //Ielts ends here

      //CLEPIP-G starts here
      if (firstLanguageStatus === "CELPIP-G") {
        setCelpipdropdown("show");
        setIeltsdropdown("hide");
        setTcfdropdown("hide");
        setTefdropdown("hide");

        //Speaking
        if (firstCelspeaking === "Please select CELPIP-G speaking score") {
          setSpeakingScore(0);
        }

        if (firstCelspeaking === "4") {
          setSpeakingScore(6);
        }

        if (firstCelspeaking === "5") {
          setSpeakingScore(6);
        }

        if (firstCelspeaking === "6") {
          setSpeakingScore(9);
        }

        if (firstCelspeaking === "7") {
          setSpeakingScore(17);
        }

        if (firstCelspeaking === "8") {
          setSpeakingScore(23);
        }

        if (firstCelspeaking === "9") {
          setSpeakingScore(31);
        }

        if (firstCelspeaking === "10") {
          setSpeakingScore(34);
        }

        //Writing
        if (firstCelwriting === "Please select CELPIP-G writing score") {
          setWritingScore(0);
        }

        if (firstCelwriting === "4") {
          setWritingScore(6);
        }

        if (firstCelwriting === "5") {
          setWritingScore(6);
        }

        if (firstCelwriting === "6") {
          setWritingScore(9);
        }

        if (firstCelwriting === "7") {
          setWritingScore(17);
        }

        if (firstCelwriting === "8") {
          setWritingScore(23);
        }

        if (firstCelwriting === "9") {
          setWritingScore(31);
        }

        if (firstCelwriting === "10") {
          setWritingScore(34);
        }

        //Reading
        if (firstCelreading === "Please select CELPIP-G reading score") {
          setReadingScore(0);
        }
        if (firstCelreading === "4") {
          setReadingScore(6);
        }

        if (firstCelreading === "5") {
          setReadingScore(6);
        }

        if (firstCelreading === "6") {
          setReadingScore(9);
        }

        if (firstCelreading === "7") {
          setReadingScore(17);
        }

        if (firstCelreading === "8") {
          setReadingScore(23);
        }

        if (firstCelreading === "9") {
          setReadingScore(31);
        }

        if (firstCelreading === "10") {
          setReadingScore(34);
        }

        //Listening
        if (firstCellistening === "Please select CELPIP-G listening score") {
          setListeningScore(0);
        }
        if (firstCellistening === "4") {
          setListeningScore(6);
        }

        if (firstCellistening === "5") {
          setListeningScore(6);
        }

        if (firstCellistening === "6") {
          setListeningScore(9);
        }

        if (firstCellistening === "7") {
          setListeningScore(17);
        }

        if (firstCellistening === "8") {
          setListeningScore(23);
        }

        if (firstCellistening === "9") {
          setListeningScore(31);
        }

        if (firstCellistening === "10") {
          setListeningScore(34);
        }

        setIeltstotal(
          speakingScore + listeningScore + readingScore + writingScore
        );
      } // CLEPIP-G ends here

      //TCF starts here
      if (firstLanguageStatus === "TCF") {
        setTcfdropdown("show");
        setIeltsdropdown("hide");
        setCelpipdropdown("hide");
        setTefdropdown("hide");

        // Speaking

        if (firstTcfspeaking === "4-5") {
          setSpeakingScore(6);
        }
        if (firstTcfspeaking === "6") {
          setSpeakingScore(6);
        }
        if (firstTcfspeaking === "7-9") {
          setSpeakingScore(9);
        }
        if (firstTcfspeaking === "10-11") {
          setSpeakingScore(17);
        }
        if (firstTcfspeaking === "12-13") {
          setSpeakingScore(23);
        }
        if (firstTcfspeaking === "14-15") {
          setSpeakingScore(31);
        }
        if (firstTcfspeaking === "16-20") {
          setSpeakingScore(34);
        }
        if (firstTcfspeaking === "please select TCF speaking score") {
          setSpeakingScore(0);
        }

        //writing

        if (firstTcfwriting === "4-5") {
          setWritingScore(6);
        }
        if (firstTcfwriting === "6") {
          setWritingScore(6);
        }
        if (firstTcfwriting === "7-9") {
          setWritingScore(9);
        }
        if (firstTcfwriting === "10-11") {
          setWritingScore(17);
        }
        if (firstTcfwriting === "12-13") {
          setWritingScore(23);
        }
        if (firstTcfwriting === "14-15") {
          setWritingScore(31);
        }
        if (firstTcfwriting === "16-20") {
          setWritingScore(34);
        }
        if (firstTcfwriting === "please select TCF writing score") {
          setWritingScore(0);
        }

        //Reading
        if (firstTcfreading === "342-374") {
          setReadingScore(6);
        }
        if (firstTcfreading === "375-405") {
          setReadingScore(6);
        }
        if (firstTcfreading === "406-452") {
          setReadingScore(9);
        }
        if (firstTcfreading === "453-498") {
          setReadingScore(17);
        }
        if (firstTcfreading === "499-523") {
          setReadingScore(23);
        }
        if (firstTcfreading === "524-548") {
          setReadingScore(31);
        }
        if (firstTcfreading === "549-699") {
          setReadingScore(34);
        }
        if (firstTcfreading === "please select TCF reading score") {
          setReadingScore(0);
        }

        //listening

        if (firstTcflistening === "331-368") {
          setListeningScore(6);
        }
        if (firstTcflistening === "369-397") {
          setListeningScore(6);
        }
        if (firstTcflistening === "398-457") {
          setListeningScore(9);
        }
        if (firstTcflistening === "458-502") {
          setListeningScore(17);
        }
        if (firstTcflistening === "503-522") {
          setListeningScore(23);
        }
        if (firstTcflistening === "523-548") {
          setListeningScore(31);
        }
        if (firstTcflistening === "549-699") {
          setListeningScore(34);
        }
        if (firstTcflistening === "please select TCF listening score") {
          setListeningScore(0);
        }

        setIeltstotal(
          speakingScore + listeningScore + readingScore + writingScore
        );
      } //TCF ends here

      //TEF starts here
      if (firstLanguageStatus === "TEF") {
        setTefdropdown("show");
        setTcfdropdown("hide");
        setIeltsdropdown("hide");
        setCelpipdropdown("hide");

        //Speaking
        if (firstTefspeaking === "181-225") {
          setSpeakingScore(6);
        }
        if (firstTefspeaking === "226-270") {
          setSpeakingScore(6);
        }
        if (firstTefspeaking === "271-309") {
          setSpeakingScore(9);
        }
        if (firstTefspeaking === "310-348") {
          setSpeakingScore(17);
        }
        if (firstTefspeaking === "349-370") {
          setSpeakingScore(23);
        }
        if (firstTefspeaking === "371-392") {
          setSpeakingScore(31);
        }
        if (firstTefspeaking === "393-450") {
          setSpeakingScore(34);
        }

        //Writing
        if (firstTefwriting === "181-225") {
          setWritingScore(6);
        }
        if (firstTefwriting === "226-270") {
          setWritingScore(6);
        }
        if (firstTefwriting === "271-309") {
          setWritingScore(9);
        }
        if (firstTefwriting === "310-348") {
          setWritingScore(17);
        }
        if (firstTefwriting === "349-370") {
          setWritingScore(23);
        }
        if (firstTefwriting === "371-392") {
          setWritingScore(31);
        }
        if (firstTefwriting === "393-450") {
          setWritingScore(34);
        }

        //Reading
        if (firstTefreading === "121-150") {
          setReadingScore(6);
        }
        if (firstTefreading === "151-180") {
          setReadingScore(6);
        }
        if (firstTefreading === "181-206") {
          setReadingScore(9);
        }
        if (firstTefreading === "207-232") {
          setReadingScore(17);
        }
        if (firstTefreading === "233-247") {
          setReadingScore(23);
        }
        if (firstTefreading === "248-262") {
          setReadingScore(31);
        }
        if (firstTefreading === "263-300") {
          setReadingScore(34);
        }

        //Listening
        if (firstTeflistening === "145-180") {
          setListeningScore(6);
        }
        if (firstTeflistening === "181-216") {
          setListeningScore(6);
        }
        if (firstTeflistening === "217-248") {
          setListeningScore(9);
        }
        if (firstTeflistening === "249-279") {
          setListeningScore(17);
        }
        if (firstTeflistening === "280-297") {
          setListeningScore(23);
        }
        if (firstTeflistening === "298-315") {
          setListeningScore(31);
        }
        if (firstTeflistening === "316-360") {
          setListeningScore(34);
        }

        setIeltstotal(
          speakingScore + listeningScore + readingScore + writingScore
        );
      } //TEF ends here
    } //Single Condition ends here

    //Married conditions starts here
    if (marriegeStatus === "married") {
      if (firstLanguageStatus === "IELTS") {
        //ielts condition married
        setIeltsdropdown("show");
        setCelpipdropdown("hide");
        setTcfdropdown("hide");
        setTefdropdown("hide");

        //ielts speaking MARRIED
        if (firstIeltsSpeaking === "Please select IELTS speaking score") {
          setSpeakingScore(0);
        }
        if (firstIeltsSpeaking === "4.0 - 4.5") {
          setSpeakingScore(6);
        }
        if (firstIeltsSpeaking === "5.0") {
          setSpeakingScore(6);
        }
        if (firstIeltsSpeaking === "5.5") {
          setSpeakingScore(8);
        }
        if (firstIeltsSpeaking === "6.0") {
          setSpeakingScore(16);
        }
        if (firstIeltsSpeaking === "6.5") {
          setSpeakingScore(22);
        }
        if (firstIeltsSpeaking === "7.0") {
          setSpeakingScore(29);
        }
        if (firstIeltsSpeaking === "7.5 - 9.0") {
          setSpeakingScore(32);
        }

        //ielts listening MARRIED
        if (firstIeltsListening === "Please select IELTS listening score") {
          setListeningScore(0);
        }
        if (firstIeltsListening === "4.5") {
          setListeningScore(6);
        }
        if (firstIeltsListening === "5.0") {
          setListeningScore(6);
        }
        if (firstIeltsListening === "5.5") {
          setListeningScore(8);
        }
        if (firstIeltsListening === "6.0 - 7.0") {
          setListeningScore(16);
        }
        if (firstIeltsListening === "7.5") {
          setListeningScore(22);
        }
        if (firstIeltsListening === "8.0") {
          setListeningScore(29);
        }
        if (firstIeltsListening === "8.5 - 9.0") {
          setListeningScore(32);
        }

        // ielts reading MARRIED

        if (firstieltsReading === "Please select IELTS reading score") {
          setReadingScore(0);
        }
        if (firstieltsReading === "3.5") {
          setReadingScore(6);
        }
        if (firstieltsReading === "4.0 - 4.5") {
          setReadingScore(6);
        }
        if (firstieltsReading === "5.0 - 5.5") {
          setReadingScore(8);
        }
        if (firstieltsReading === "6.0") {
          setReadingScore(16);
        }
        if (firstieltsReading === "6.5") {
          setReadingScore(22);
        }
        if (firstieltsReading === "7.0 - 7.5") {
          setReadingScore(29);
        }
        if (firstieltsReading === "8.0 - 9.0") {
          setReadingScore(32);
        }

        // ieltswriting MARRIED
        if (firstieltsWriting === "Please select IELTS writing score") {
          setWritingScore(0);
        }
        if (firstieltsWriting === "4.0") {
          setWritingScore(6);
        }
        if (firstieltsWriting === "5.0") {
          setWritingScore(6);
        }
        if (firstieltsWriting === "5.5") {
          setWritingScore(8);
        }
        if (firstieltsWriting === "6.0") {
          setWritingScore(16);
        }
        if (firstieltsWriting === "6.5") {
          setWritingScore(22);
        }
        if (firstieltsWriting === "7.0") {
          setWritingScore(29);
        }
        if (firstieltsWriting === "7.5 - 9.0") {
          setWritingScore(32);
        }
        setIeltstotal(
          speakingScore + listeningScore + readingScore + writingScore
        );
      } //Ielts ends here

      //CLEPIP-G starts here MARRIED
      if (firstLanguageStatus === "CELPIP-G") {
        setCelpipdropdown("show");
        setIeltsdropdown("hide");
        setTcfdropdown("hide");
        setTefdropdown("hide");

        //Speaking MARRIED
        if (firstCelspeaking === "Please select CELPIP-G speaking score") {
          setSpeakingScore(0);
        }

        if (firstCelspeaking === "4") {
          setSpeakingScore(6);
        }

        if (firstCelspeaking === "5") {
          setSpeakingScore(6);
        }

        if (firstCelspeaking === "6") {
          setSpeakingScore(8);
        }

        if (firstCelspeaking === "7") {
          setSpeakingScore(16);
        }

        if (firstCelspeaking === "8") {
          setSpeakingScore(22);
        }

        if (firstCelspeaking === "9") {
          setSpeakingScore(29);
        }

        if (firstCelspeaking === "10") {
          setSpeakingScore(32);
        }

        //Writing MARRIED
        if (firstCelwriting === "Please select CELPIP-G writing score") {
          setWritingScore(0);
        }

        if (firstCelwriting === "4") {
          setWritingScore(6);
        }

        if (firstCelwriting === "5") {
          setWritingScore(6);
        }

        if (firstCelwriting === "6") {
          setWritingScore(8);
        }

        if (firstCelwriting === "7") {
          setWritingScore(16);
        }

        if (firstCelwriting === "8") {
          setWritingScore(22);
        }

        if (firstCelwriting === "9") {
          setWritingScore(29);
        }

        if (firstCelwriting === "10") {
          setWritingScore(32);
        }

        //Reading MARRIED
        if (firstCelreading === "Please select CELPIP-G reading score") {
          setReadingScore(0);
        }
        if (firstCelreading === "4") {
          setReadingScore(6);
        }

        if (firstCelreading === "5") {
          setReadingScore(6);
        }

        if (firstCelreading === "6") {
          setReadingScore(8);
        }

        if (firstCelreading === "7") {
          setReadingScore(16);
        }

        if (firstCelreading === "8") {
          setReadingScore(22);
        }

        if (firstCelreading === "9") {
          setReadingScore(29);
        }

        if (firstCelreading === "10") {
          setReadingScore(32);
        }

        //Listening MARRIED
        if (firstCellistening === "Please select CELPIP-G listening score") {
          setListeningScore(0);
        }
        if (firstCellistening === "4") {
          setListeningScore(6);
        }

        if (firstCellistening === "5") {
          setListeningScore(6);
        }

        if (firstCellistening === "6") {
          setListeningScore(8);
        }

        if (firstCellistening === "7") {
          setListeningScore(17);
        }

        if (firstCellistening === "8") {
          setListeningScore(16);
        }

        if (firstCellistening === "9") {
          setListeningScore(29);
        }

        if (firstCellistening === "10") {
          setListeningScore(32);
        }

        setIeltstotal(
          speakingScore + listeningScore + readingScore + writingScore
        );
      } // CLEPIP-G ends here

      //TCF starts here MARRIED
      if (firstLanguageStatus === "TCF") {
        setTcfdropdown("show");
        setIeltsdropdown("hide");
        setCelpipdropdown("hide");
        setTefdropdown("hide");

        // Speaking MARRIED

        if (firstTcfspeaking === "4-5") {
          setSpeakingScore(6);
        }
        if (firstTcfspeaking === "6") {
          setSpeakingScore(6);
        }
        if (firstTcfspeaking === "7-9") {
          setSpeakingScore(8);
        }
        if (firstTcfspeaking === "10-11") {
          setSpeakingScore(16);
        }
        if (firstTcfspeaking === "12-13") {
          setSpeakingScore(22);
        }
        if (firstTcfspeaking === "14-15") {
          setSpeakingScore(29);
        }
        if (firstTcfspeaking === "16-20") {
          setSpeakingScore(32);
        }
        if (firstTcfspeaking === "please select TCF speaking score") {
          setSpeakingScore(0);
        }

        //writing MARRIED

        if (firstTcfwriting === "4-5") {
          setWritingScore(6);
        }
        if (firstTcfwriting === "6") {
          setWritingScore(6);
        }
        if (firstTcfwriting === "7-9") {
          setWritingScore(8);
        }
        if (firstTcfwriting === "10-11") {
          setWritingScore(16);
        }
        if (firstTcfwriting === "12-13") {
          setWritingScore(22);
        }
        if (firstTcfwriting === "14-15") {
          setWritingScore(29);
        }
        if (firstTcfwriting === "16-20") {
          setWritingScore(32);
        }
        if (firstTcfwriting === "please select TCF writing score") {
          setWritingScore(0);
        }

        //Reading MARRIED
        if (firstTcfreading === "342-374") {
          setReadingScore(6);
        }
        if (firstTcfreading === "375-405") {
          setReadingScore(6);
        }
        if (firstTcfreading === "406-452") {
          setReadingScore(8);
        }
        if (firstTcfreading === "453-498") {
          setReadingScore(16);
        }
        if (firstTcfreading === "499-523") {
          setReadingScore(22);
        }
        if (firstTcfreading === "524-548") {
          setReadingScore(29);
        }
        if (firstTcfreading === "549-699") {
          setReadingScore(32);
        }
        if (firstTcfreading === "please select TCF reading score") {
          setReadingScore(0);
        }

        //listening MARRIED

        if (firstTcflistening === "331-368") {
          setListeningScore(6);
        }
        if (firstTcflistening === "369-397") {
          setListeningScore(6);
        }
        if (firstTcflistening === "398-457") {
          setListeningScore(8);
        }
        if (firstTcflistening === "458-502") {
          setListeningScore(16);
        }
        if (firstTcflistening === "503-522") {
          setListeningScore(22);
        }
        if (firstTcflistening === "523-548") {
          setListeningScore(29);
        }
        if (firstTcflistening === "549-699") {
          setListeningScore(32);
        }
        if (firstTcflistening === "please select TCF listening score") {
          setListeningScore(0);
        }

        setIeltstotal(
          speakingScore + listeningScore + readingScore + writingScore
        );
      } //TCF ends here

      //TEF starts here MARRIED
      if (firstLanguageStatus === "TEF") {
        setTefdropdown("show");
        setTcfdropdown("hide");
        setIeltsdropdown("hide");
        setCelpipdropdown("hide");

        //Speaking MARRIED
        if (firstTefspeaking === "181-225") {
          setSpeakingScore(6);
        }
        if (firstTefspeaking === "226-270") {
          setSpeakingScore(6);
        }
        if (firstTefspeaking === "271-309") {
          setSpeakingScore(8);
        }
        if (firstTefspeaking === "310-348") {
          setSpeakingScore(16);
        }
        if (firstTefspeaking === "349-370") {
          setSpeakingScore(22);
        }
        if (firstTefspeaking === "371-392") {
          setSpeakingScore(29);
        }
        if (firstTefspeaking === "393-450") {
          setSpeakingScore(32);
        }

        //Writing MARRIED
        if (firstTefwriting === "181-225") {
          setWritingScore(6);
        }
        if (firstTefwriting === "226-270") {
          setWritingScore(6);
        }
        if (firstTefwriting === "271-309") {
          setWritingScore(8);
        }
        if (firstTefwriting === "310-348") {
          setWritingScore(16);
        }
        if (firstTefwriting === "349-370") {
          setWritingScore(22);
        }
        if (firstTefwriting === "371-392") {
          setWritingScore(29);
        }
        if (firstTefwriting === "393-450") {
          setWritingScore(32);
        }

        //Reading MARRIED
        if (firstTefreading === "121-150") {
          setReadingScore(6);
        }
        if (firstTefreading === "151-180") {
          setReadingScore(6);
        }
        if (firstTefreading === "181-206") {
          setReadingScore(8);
        }
        if (firstTefreading === "207-232") {
          setReadingScore(16);
        }
        if (firstTefreading === "233-247") {
          setReadingScore(22);
        }
        if (firstTefreading === "248-262") {
          setReadingScore(29);
        }
        if (firstTefreading === "263-300") {
          setReadingScore(32);
        }

        //Listening MARRIED
        if (firstTeflistening === "145-180") {
          setListeningScore(6);
        }
        if (firstTeflistening === "181-216") {
          setListeningScore(6);
        }
        if (firstTeflistening === "217-248") {
          setListeningScore(8);
        }
        if (firstTeflistening === "249-279") {
          setListeningScore(16);
        }
        if (firstTeflistening === "280-297") {
          setListeningScore(22);
        }
        if (firstTeflistening === "298-315") {
          setListeningScore(29);
        }
        if (firstTeflistening === "316-360") {
          setListeningScore(32);
        }

        setIeltstotal(
          speakingScore + listeningScore + readingScore + writingScore
        );
      } //TEF ends here
    } // Married conditions end here

    // SKILL TRANSFER CONDITIONS START HERE
    if (educationStatus === "None, or less than secondary (high school)") {
      setSkilltransfer(0);
      /* if (
        (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(0);
      } */
    }

    if (educationStatus === "Secondary diploma (high school graduation") {
      setSkilltransfer(0);
      /* if (
        (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(0);
      } */
    }

    if (educationStatus === "One-year program at a university, college, trade or technical school, or other institute" || educationStatus ===
    "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)" || educationStatus ===
    "Two years or more certificates, diploma or degrees. One must be for a program of three or more years") {
      if (
        (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(25);
      }  // all CLB 9 and 10 ends here

       //COMBINATION 1

      // reading less than 9 and all grEATER than 7
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(13);
      }

      // speaking less tha  9 and all greater than 7
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(13);
      }

      // writing less than 9 and all greater than 7

      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(13);
      }

      // listening less than 9 and all greater than 7

      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(13);
      }

      // COMBINATION 1 ENDS HERE

      // COMBINATION 2

      // reading and speaking less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(13);
      }

      //writing and listening less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(13);
      }

      // COMBINATION 2 ENDS here

      // COMBINATION 3

      // speaking and writing less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(13);
      }

      // reading and listening less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(13);
      }

      // COMBINATION 3 ends here

      // COMBINATION 4

      // reading and writing less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(13);
      }

      // speaking and listening less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(13);
      }

      // COMBINATION 4 ENDS here

      // COMBINATION 5

      //only SPEAKING greater than 9 else less than 9
      if (
        (
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(13);
      }

      // only READING greater than 9 else less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(13);
      }

      // only WRITING greater than 9 else lesss than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(13);
      }

      // only LISTENING greater than 9 else less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(13);
      }

      // COMBINATION 5 ENDS HERE

      // COMBINATION 6

      // all BANDS CLB 7 or 8
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(13);
      }

      //all bands less than 7
      if((clbLevelListening === "CLB 4" || clbLevelListening === "CLB 5" || clbLevelListening === "CLB 5") || (clbLevelReading === "CLB 4" || clbLevelReading === "CLB 5" || clbLevelReading === "CLB 6") || (clbLevelWriting === "CLB 4" || clbLevelWriting === "CLB 5" || clbLevelWriting === "CLB 6") || (clbLevelSpeaking === "CLB 4" || clbLevelSpeaking === "CLB 5" || clbLevelSpeaking === "CLB 6") )
     {
       setSkilltransfer(0);
     }


    }  // all condition for post-secondary , bachelor ends here

   
    if (
      educationStatus ===
      "Two years or more certificates, diploma or degrees. One must be for a program of three or more years" ||  educationStatus ===
      "Master's degree, or professional degree needed to practice in a licensed profession" || educationStatus == "Doctoral level university degree (PhD)") {
      if (
        (clbLevelSpeaking === "CLB 9" || clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 9" || clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 9" || clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 9" || clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(50);
      }  // CLB 9 and 10 conditions end here

       //COMBINATION 1

      // reading less than 9 and all grEATER than 7
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(25);
      }

      // speaking less tha  9 and all greater than 7
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(25);
      }

      // writing less than 9 and all greater than 7

      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(25);
      }

      // listening less than 9 and all greater than 7

      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(25);
      }

      // COMBINATION 1 ENDS HERE

      // COMBINATION 2

      // reading and speaking less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(25);
      }

      //writing and listening less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(25);
      }

      // COMBINATION 2 ENDS here

      // COMBINATION 3

      // speaking and writing less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(25);
      }

      // reading and listening less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(25);
      }

      // COMBINATION 3 ends here

      // COMBINATION 4

      // reading and writing less than 9
      if (
        (clbLevelSpeaking === "CLB 7" ||
          clbLevelSpeaking === "CLB 8" ||
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" ||
          clbLevelListening === "CLB 8" ||
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(25);
      }

      // speaking and listening less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" ||
          clbLevelWriting === "CLB 8" ||
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" ||
          clbLevelReading === "CLB 8" ||
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(25);
      }

      // COMBINATION 4 ENDS here

      // COMBINATION 5

      //only SPEAKING greater than 9 else less than 9
      if (
        (
          clbLevelSpeaking === "CLB 9" ||
          clbLevelSpeaking === "CLB 10") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(25);
      }

      // only READING greater than 9 else less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (
          clbLevelReading === "CLB 9" ||
          clbLevelReading === "CLB 10") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(25);
        console.log("a am here at 9 8 8 7");
      }

      // only WRITING greater than 9 else lesss than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (
          clbLevelWriting === "CLB 9" ||
          clbLevelWriting === "CLB 10") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(25);
      }

      // only LISTENING greater than 9 else less than 9
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (
          clbLevelListening === "CLB 9" ||
          clbLevelListening === "CLB 10")
      ) {
        setSkilltransfer(25);
      }

      // COMBINATION 5 ENDS HERE

      // COMBINATION 6

      // all BANDS CLB 7 or 8
      if (
        (clbLevelSpeaking === "CLB 7" || clbLevelSpeaking === "CLB 8") &&
        (clbLevelWriting === "CLB 7" || clbLevelWriting === "CLB 8") &&
        (clbLevelReading === "CLB 7" || clbLevelReading === "CLB 8") &&
        (clbLevelListening === "CLB 7" || clbLevelListening === "CLB 8")
      ) {
        setSkilltransfer(25);
      }

     //all bands less than 7
     if((clbLevelListening === "CLB 4" || clbLevelListening === "CLB 5" || clbLevelListening === "CLB 5") || (clbLevelReading === "CLB 4" || clbLevelReading === "CLB 5" || clbLevelReading === "CLB 6") || (clbLevelWriting === "CLB 4" || clbLevelWriting === "CLB 5" || clbLevelWriting === "CLB 6") || (clbLevelSpeaking === "CLB 4" || clbLevelSpeaking === "CLB 5" || clbLevelSpeaking === "CLB 6") )
     {
       setSkilltransfer(0);
     }
     /* else
    {
     setSkilltransfer(0);
    console.log("i am here at else");
    } */

    }  // SKILL TRANSFER CONDITIONS END HERE

    //console.log(ieltstotal);
    console.log("skiill", skilltranfer);
  }, [
    marriegeStatus,
    firstLanguageStatus,
    educationStatus,
    speakingScore,
    listeningScore,
    writingScore,
    readingScore,
    ietlstotal,
    firstIeltsSpeaking,
    firstIeltsListening,
    firstieltsReading,
    firstieltsWriting,
    clbLevelSpeaking,
    clbLevelWriting,
    clbLevelReading,
    clbLevelListening,
    firstCelspeaking,
    firstCelwriting,
    firstCelreading,
    firstCellistening,
    firstTcflistening,
    firstTcfreading,
    firstTcfwriting,
    firstTcfspeaking,
    firstTeflistening,
    firstTefreading,
    firstTefwriting,
    firstTefspeaking,
    firstlanguagePoints,
    skilltranfer,
  ]);
  //useEffect ENDS

  return (
    /* main div starts */
    <div>
      <br></br>

      <div class="flex flex-col">
        <div class="bg-primary shadow-xl  rounded-3xl p-4">
          <div class="flex-none lg:flex">
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap bg-blue-500 text-white text-lg px-6 py-4 font-bold rounded-xl">
                <h2 class="flex-auto text-lg font-mono font-bold">
                  First official language
                </h2>
              </div>
              <div class="mt-3 md:mb-0 font-mono bg-white px-5 py-2 shadow-sm tracking-wider border text-black rounded-full  inline-flex items-center space-x-2 ">
                <b>
                  <span>
                    &nbsp;
                    <Radio
                      label="IELTS"
                      checked={firstLanguageStatus === "IELTS"}
                      onClick={() => {
                        dispatch(firstLanguageCheck("IELTS"));
                        dispatch(totalPoints("FIRSTIELTSPOINTS", 0));
                        dispatch(celpipscore("REMOVE"));
                        dispatch(tcfscore("REMOVE"));
                        dispatch(tefscore("REMOVE"));
                      }}
                    />
                    &nbsp;
                    <Radio
                      label="CELPIP-G"
                      checked={firstLanguageStatus === "CELPIP-G"}
                      onClick={() => {
                        dispatch(firstLanguageCheck("CEL"));
                        dispatch(totalPoints("FIRSTIELTSPOINTS", 0));
                        dispatch(firstIeltsspeaking("REMOVE"));
                        dispatch(firstIeltswriting("REMOVE"));
                        dispatch(firstIeltsreading("REMOVE"));
                        dispatch(firstIeltslistening("REMOVE"));
                        dispatch(tcfscore("REMOVE"));
                        dispatch(tefscore("REMOVE"));
                      }}
                    />
                    &nbsp;
                    <Radio
                      label="TCF"
                      checked={firstLanguageStatus === "TCF"}
                      onClick={() => {
                        dispatch(firstLanguageCheck("TCF"));
                        dispatch(totalPoints("FIRSTIELTSPOINTS", 0));
                        dispatch(firstIeltsspeaking("REMOVE"));
                        dispatch(firstIeltswriting("REMOVE"));
                        dispatch(firstIeltsreading("REMOVE"));
                        dispatch(firstIeltslistening("REMOVE"));
                        dispatch(celpipscore("REMOVE"));
                        dispatch(tefscore("REMOVE"));
                      }}
                    />
                    &nbsp;
                    <Radio
                      label="TEF"
                      checked={firstLanguageStatus === "TEF"}
                      onClick={() => {
                        dispatch(firstLanguageCheck("TEF"));
                        dispatch(totalPoints("FIRSTIELTSPOINTS", 0));
                        dispatch(firstIeltsspeaking("REMOVE"));
                        dispatch(firstIeltswriting("REMOVE"));
                        dispatch(firstIeltsreading("REMOVE"));
                        dispatch(firstIeltslistening("REMOVE"));
                        dispatch(celpipscore("REMOVE"));
                        dispatch(tcfscore("REMOVE"));
                      }}
                    />
                  </span>
                </b>
              </div>
              <p class="mt-3"></p>
              <div class={ieltsdropdown}>
                {" "}
                {/* IELTS sections for individial score  starts here */}
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Speaking: {firstIeltsSpeaking}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Listening: {firstIeltsListening}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class={ieltsdropdown}>
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Writing: {firstieltsWriting}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Reading: {firstieltsReading}
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* IELTS sections for individual score ends here */}
              <div class={celpipdropdown}>
                {" "}
                {/* CELPIP-G sections for individial score  starts here */}
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Speaking: {firstCelspeaking}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Listening: {firstCellistening}
                    </p>
                  </div>
                </div>
              </div>
              <div class={celpipdropdown}>
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Writing: {firstCelwriting}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Reading: {firstCelreading}
                    </p>
                  </div>
                </div>
              </div>
              {/* CELPIP-G section for individual score ends here */}
              {/* TCF section for individual score starts here */}
              <div className={tcfdropdown}>
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Speaking: {firstTcfspeaking}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Listening: {firstTcflistening}
                    </p>
                  </div>
                </div>
              </div>
              <div class={tcfdropdown}>
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Writing: {firstTcfwriting}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Reading: {firstTcfreading}
                    </p>
                  </div>
                </div>
              </div>
              {/* TCF section for individual score ends here */}
              {/* TEF section for individual score starts here */}
              <div className={tefdropdown}>
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Speaking: {firstTefspeaking}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Listening: {firstTeflistening}
                    </p>
                  </div>
                </div>
              </div>
              <div class={tefdropdown}>
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Writing: {firstTefwriting}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Reading: {firstTefreading}
                    </p>
                  </div>
                </div>
              </div>
              {/* TEF section for individual score ends here */}
              <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div class="flex space-x-3 text-sm font-medium">
                {" "}
                {/* section for modal and points starts here */}
                <div class="flex-auto flex space-x-3">
                  <div className={ieltsdropdown}>
                    {/* IELTS dropdown starts here */}
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
                          Select from here
                        </button>
                      }
                    >
                      <Header>
                        Please select {firstLanguageStatus} data from here
                      </Header>

                      <Modal.Content>
                        <label>Speaking</label>
                        <p>
                          <Dropdown
                            placeholder={firstIeltsSpeaking}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsspeaking("s4.0-4.5"));
                                  dispatch(clblevelspeaking("CLB4speaking"));
                                }}
                              >
                                4.0 - 4.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsspeaking("s5.0"));
                                  dispatch(clblevelspeaking("CLB5speaking"));
                                }}
                              >
                                5.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsspeaking("s5.5"));
                                  dispatch(clblevelspeaking("CLB6speaking"));
                                }}
                              >
                                5.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsspeaking("s6.0"));
                                  dispatch(clblevelspeaking("CLB7speaking"));
                                }}
                              >
                                6.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsspeaking("s6.5"));
                                  dispatch(clblevelspeaking("CLB8speaking"));
                                }}
                              >
                                6.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsspeaking("s7.0"));
                                  dispatch(clblevelspeaking("CLB9speaking"));
                                }}
                              >
                                7.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsspeaking("s7.5-9.0"));
                                  dispatch(clblevelspeaking("CLB10speaking"));
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
                            placeholder={firstieltsWriting}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltswriting("w4.0-4.5"));
                                  dispatch(clblevelwriting("CLB4writing"));
                                }}
                              >
                                4.0 - 4.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltswriting("w5.0"));
                                  dispatch(clblevelwriting("CLB5writing"));
                                }}
                              >
                                5.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltswriting("w5.5"));
                                  dispatch(clblevelwriting("CLB6writing"));
                                }}
                              >
                                5.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltswriting("w6.0"));
                                  dispatch(clblevelwriting("CLB7writing"));
                                }}
                              >
                                6.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltswriting("w6.5"));
                                  dispatch(clblevelwriting("CLB8writing"));
                                }}
                              >
                                6.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltswriting("w7.0"));
                                  dispatch(clblevelwriting("CLB9writing"));
                                }}
                              >
                                7.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltswriting("w7.5-9.0"));
                                  dispatch(clblevelwriting("CLB10writing"));
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
                            placeholder={firstieltsReading}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsreading("r3.5"));
                                  dispatch(clblevelreading("CLB4reading"));
                                }}
                              >
                                3.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsreading("r4.0-4.5"));
                                  dispatch(clblevelreading("CLB5reading"));
                                }}
                              >
                                4.0 - 4.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsreading("r5.0-5.5"));
                                  dispatch(clblevelreading("CLB6reading"));
                                }}
                              >
                                5.0 - 5.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsreading("r6.0"));
                                  dispatch(clblevelreading("CLB7reading"));
                                }}
                              >
                                6.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsreading("r6.5"));
                                  dispatch(clblevelreading("CLB8reading"));
                                }}
                              >
                                6.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsreading("r7.0-7.5"));
                                  dispatch(clblevelreading("CLB9reading"));
                                }}
                              >
                                7.0 - 7.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltsreading("r8.0-9.0"));
                                  dispatch(clblevelreading("CLB10reading"));
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
                            placeholder={firstIeltsListening}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltslistening("l4.5"));
                                  dispatch(clblevellistening("CLB4listening"));
                                }}
                              >
                                4.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltslistening("l5.0"));
                                  dispatch(clblevellistening("CLB5listening"));
                                }}
                              >
                                5.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltslistening("l5.5"));
                                  dispatch(clblevellistening("CLB6listening"));
                                }}
                              >
                                5.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltslistening("l6.0-7.0"));
                                  dispatch(clblevellistening("CLB7listening"));
                                }}
                              >
                                6.0 - 7.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltslistening("l7.5"));
                                  dispatch(clblevellistening("CLB8listening"));
                                }}
                              >
                                7.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltslistening("l8.0"));
                                  dispatch(clblevellistening("CLB9listening"));
                                }}
                              >
                                8.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(firstIeltslistening("l8.5-9.0"));
                                  dispatch(clblevellistening("CLB10listening"));
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
                            dispatch(
                              totalPoints("FIRSTIELTSPOINTS", ietlstotal)
                            );
                            /* dispatch(
                              totalPoints("SKILLTRANSFEREDUCATION", skilltranfer)
                            ); */
                          }}
                        >
                          <Icon name="checkmark" /> Done
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </div>
                  {/* IELTS dropdown ends here */}
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
                          Select from here
                        </button>
                      }
                    >
                      <Header>
                        Please select {firstLanguageStatus} data from here
                      </Header>

                      <Modal.Content>
                        <label>Speaking</label>
                        <p>
                          <Dropdown
                            placeholder={firstCelspeaking}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("scel4"));
                                  dispatch(clblevelspeaking("CLB4speaking"));
                                }}
                              >
                                4
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("scel5"));
                                  dispatch(clblevelspeaking("CLB5speaking"));
                                }}
                              >
                                5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("scel6"));
                                  dispatch(clblevelspeaking("CLB6speaking"));
                                }}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("scel7"));
                                  dispatch(clblevelspeaking("CLB7speaking"));
                                }}
                              >
                                7
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("scel8"));
                                  dispatch(clblevelspeaking("CLB8speaking"));
                                }}
                              >
                                8
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("scel9"));
                                  dispatch(clblevelspeaking("CLB9speaking"));
                                }}
                              >
                                9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("scel10"));
                                  dispatch(clblevelspeaking("CLB10speaking"));
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
                            placeholder={firstCelwriting}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("wcel4"));
                                  dispatch(clblevelspeaking("CLB4writing"));
                                }}
                              >
                                4
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("wcel5"));
                                  dispatch(clblevelspeaking("CLB5writing"));
                                }}
                              >
                                5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("wcel6"));
                                  dispatch(clblevelspeaking("CLB6writing"));
                                }}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("wcel7"));
                                  dispatch(clblevelspeaking("CLB7writing"));
                                }}
                              >
                                7
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("wcel8"));
                                  dispatch(clblevelspeaking("CLB8writing"));
                                }}
                              >
                                8
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("wcel9"));
                                  dispatch(clblevelspeaking("CLB9writing"));
                                }}
                              >
                                9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("wcel10"));
                                  dispatch(clblevelspeaking("CLB10writing"));
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
                            placeholder={firstCelreading}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("rcel4"));
                                  dispatch(clblevelspeaking("CLB4reading"));
                                }}
                              >
                                4
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("rcel5"));
                                  dispatch(clblevelspeaking("CLB5reading"));
                                }}
                              >
                                5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("rcel6"));
                                  dispatch(clblevelspeaking("CLB6reading"));
                                }}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("rcel7"));
                                  dispatch(clblevelspeaking("CLB7reading"));
                                }}
                              >
                                7
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("rcel8"));
                                  dispatch(clblevelspeaking("CLB8reading"));
                                }}
                              >
                                8
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("rcel9"));
                                  dispatch(clblevelspeaking("CLB9reading"));
                                }}
                              >
                                9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("rcel10"));
                                  dispatch(clblevelspeaking("CLB10reading"));
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
                            placeholder={firstCellistening}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("lcel4"));
                                  dispatch(clblevelspeaking("CLB4listening"));
                                }}
                              >
                                4
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("lcel5"));
                                  dispatch(clblevelspeaking("CLB5listening"));
                                }}
                              >
                                5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("lcel6"));
                                  dispatch(clblevelspeaking("CLB6listening"));
                                }}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("lcel7"));
                                  dispatch(clblevelspeaking("CLB7listening"));
                                }}
                              >
                                7
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("lcel8"));
                                  dispatch(clblevelspeaking("CLB8listening"));
                                }}
                              >
                                8
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("lcel9"));
                                  dispatch(clblevelspeaking("CLB9listening"));
                                }}
                              >
                                9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(celpipscore("lcel10"));
                                  dispatch(clblevelspeaking("CLB10listening"));
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
                            dispatch(
                              totalPoints("FIRSTIELTSPOINTS", ietlstotal)
                            );
                            /* dispatch(
                              totalPoints("SKILLTRANSFEREDUCATION", skilltranfer)
                            ); */
                          }}
                        >
                          <Icon name="checkmark" /> Done
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </div>{" "}
                  {/* CELPIP-G dropdown ends here */}
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
                        Please select {firstLanguageStatus} data from here
                      </Header>

                      <Modal.Content>
                        <label>Speaking</label>
                        <p>
                          <Dropdown
                            placeholder={firstTcfspeaking}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("stcf4-5"));
                                  dispatch(clblevelspeaking("CLB4speaking"));
                                }}
                              >
                                4-5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("stcf6"));
                                  dispatch(clblevelspeaking("CLB5speaking"));
                                }}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("stcf7-9"));
                                  dispatch(clblevelspeaking("CLB6speaking"));
                                }}
                              >
                                7-9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("stcf10-11"));
                                  dispatch(clblevelspeaking("CLB7speaking"));
                                }}
                              >
                                10-11
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("stcf12-13"));
                                  dispatch(clblevelspeaking("CLB8speaking"));
                                }}
                              >
                                12-13
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("stcf14-15"));
                                  dispatch(clblevelspeaking("CLB9speaking"));
                                }}
                              >
                                14-15
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("stcf16-20"));
                                  dispatch(clblevelspeaking("CLB10speaking"));
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
                            placeholder={firstTcfwriting}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("wtcf4-5"));
                                  dispatch(clblevelwriting("CLB4writing"));
                                }}
                              >
                                4-5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("wtcf6"));
                                  dispatch(clblevelwriting("CLB5writing"));
                                }}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("wtcf7-9"));
                                  dispatch(clblevelwriting("CLB6writing"));
                                }}
                              >
                                7-9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("wtcf10-11"));
                                  dispatch(clblevelwriting("CLB7writing"));
                                }}
                              >
                                10-11
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("wtcf12-13"));
                                  dispatch(clblevelwriting("CLB8writing"));
                                }}
                              >
                                12-13
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("wtcf14-15"));
                                  dispatch(clblevelwriting("CLB9writing"));
                                }}
                              >
                                14-15
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("wtcf16-20"));
                                  dispatch(clblevelwriting("CLB10writing"));
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
                            placeholder={firstTcfreading}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("rtcf342-374"));
                                  dispatch(clblevelspeaking("CLB4reading"));
                                }}
                              >
                                342-374
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("rtcf375-405"));
                                  dispatch(clblevelspeaking("CLB5reading"));
                                }}
                              >
                                375-405
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("rtcf406-452"));
                                  dispatch(clblevelspeaking("CLB6reading"));
                                }}
                              >
                                406-452
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("rtcf453-498"));
                                  dispatch(clblevelspeaking("CLB7reading"));
                                }}
                              >
                                453-498
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("rtcf499-523"));
                                  dispatch(clblevelspeaking("CLB8reading"));
                                }}
                              >
                                499-523
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("rtcf524-548"));
                                  dispatch(clblevelspeaking("CLB9reading"));
                                }}
                              >
                                524-548
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("rtcf549-699"));
                                  dispatch(clblevelspeaking("CLB10reading"));
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
                            placeholder={firstTcflistening}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("ltcf331-368"));
                                  dispatch(clblevelspeaking("CLB4listening"));
                                }}
                              >
                                331-368
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("ltcf369-397"));
                                  dispatch(clblevelspeaking("CLB5listening"));
                                }}
                              >
                                369-397
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("ltcf398-457"));
                                  dispatch(clblevelspeaking("CLB6listening"));
                                }}
                              >
                                398-457
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("ltcf458-502"));
                                  dispatch(clblevelspeaking("CLB7listening"));
                                }}
                              >
                                458-502
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("ltcf503-522"));
                                  dispatch(clblevelspeaking("CLB8listening"));
                                }}
                              >
                                503-522
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("ltcf523-548"));
                                  dispatch(clblevelspeaking("CLB9listening"));
                                }}
                              >
                                523-548
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tcfscore("ltcf549-699"));
                                  dispatch(clblevelspeaking("CLB10listening"));
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
                            dispatch(
                              totalPoints("FIRSTIELTSPOINTS", ietlstotal)
                            );
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
                        Please select {firstLanguageStatus} data from here
                      </Header>

                      <Modal.Content>
                        <label>Speaking</label>
                        <p>
                          <Dropdown
                            placeholder={firstTefspeaking}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("stef181-225"));
                                  dispatch(clblevelspeaking("CLB4speaking"));
                                }}
                              >
                                181-225
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("stef226-270"));
                                  dispatch(clblevelspeaking("CLB5speaking"));
                                }}
                              >
                                226-270
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("stef271-309"));
                                  dispatch(clblevelspeaking("CLB6speaking"));
                                }}
                              >
                                271-309
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("stef310-348"));
                                  dispatch(clblevelspeaking("CLB7speaking"));
                                }}
                              >
                                310-348
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("stef349-370"));
                                  dispatch(clblevelspeaking("CLB8speaking"));
                                }}
                              >
                                349-370
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("stef371-392"));
                                  dispatch(clblevelspeaking("CLB9speaking"));
                                }}
                              >
                                371-392
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("stef393-450"));
                                  dispatch(clblevelspeaking("CLB10speaking"));
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
                            placeholder={firstTefwriting}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("wtef181-225"));
                                  dispatch(clblevelspeaking("CLB4writing"));
                                }}
                              >
                                181-225
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("wtef226-270"));
                                  dispatch(clblevelspeaking("CLB5writing"));
                                }}
                              >
                                226-270
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("wtef271-309"));
                                  dispatch(clblevelspeaking("CLB6writing"));
                                }}
                              >
                                271-309
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("wtef310-348"));
                                  dispatch(clblevelspeaking("CLB7writing"));
                                }}
                              >
                                310-348
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("wtef349-370"));
                                  dispatch(clblevelspeaking("CLB8writing"));
                                }}
                              >
                                349-370
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("wtef371-392"));
                                  dispatch(clblevelspeaking("CLB9writing"));
                                }}
                              >
                                371-392
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("wtef393-450"));
                                  dispatch(clblevelspeaking("CLB10writing"));
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
                            placeholder={firstTefreading}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("rtef121-150"));
                                  dispatch(clblevelspeaking("CLB4reading"));
                                }}
                              >
                                121-150
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("rtef151-180"));
                                  dispatch(clblevelspeaking("CLB5reading"));
                                }}
                              >
                                151-180
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("rtef181-206"));
                                  dispatch(clblevelspeaking("CLB6reading"));
                                }}
                              >
                                181-206
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("rtef207-232"));
                                  dispatch(clblevelspeaking("CLB7reading"));
                                }}
                              >
                                207-232
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("rtef223-247"));
                                  dispatch(clblevelspeaking("CLB8reading"));
                                }}
                              >
                                233-247
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("rtef248-262"));
                                  dispatch(clblevelspeaking("CLB9reading"));
                                }}
                              >
                                248-262
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("rtef263-300"));
                                  dispatch(clblevelspeaking("CLB10reading"));
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
                            placeholder={firstTeflistening}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("ltef145-180"));
                                  dispatch(clblevelspeaking("CLB4listening"));
                                }}
                              >
                                145-180
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("ltef181-216"));
                                  dispatch(clblevelspeaking("CLB5listening"));
                                }}
                              >
                                181-216
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("ltef217-248"));
                                  dispatch(clblevelspeaking("CLB6listening"));
                                }}
                              >
                                217-248
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("ltef249-279"));
                                  dispatch(clblevelspeaking("CLB7listening"));
                                }}
                              >
                                249-279
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("ltef280-297"));
                                  dispatch(clblevelspeaking("CLB8listening"));
                                }}
                              >
                                280-297
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("ltef298-315"));
                                  dispatch(clblevelspeaking("CLB9listening"));
                                }}
                              >
                                298-315
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {
                                  dispatch(tefscore("ltef316-360"));
                                  dispatch(clblevelspeaking("CLB10listening"));
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
                            dispatch(
                              totalPoints("FIRSTIELTSPOINTS", ietlstotal)
                            );
                            /* dispatch(
                              totalPoints("SKILLTRANSFEREDUCATION", skilltranfer)
                            ); */
                          }}
                        >
                          <Icon name="checkmark" /> Done
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </div>{" "}
                  {/* tef dropdown ends here */}
                </div>
                <div class="mb-2 md:mb-0 font-mono bg-white px-5 py-2 shadow-sm tracking-wider border text-black rounded-full  inline-flex items-center space-x-2 ">
                  <b>
                    <span>Points: {firstlanguagePoints}</span>
                  </b>
                </div>
              </div>{" "}
              {/* modal div that contains points and modal*/}
            </div>
          </div>
        </div>
      </div>
    </div> /* main div Ends */
  );
};

export default FirstLanguage;
