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
  Radio,
} from "semantic-ui-react";
import {
  single,
  totalPoints,
  secondLanguageCheck,
  celpipscore,
  tcfscore,
  tefscore,
  firstLanguageCheck,
  firstIeltsspeaking,
  firstIeltslistening,
  firstIeltsreading,
  firstIeltswriting,
  secondclblevel,
} from "../Actions";
import { useDispatch, useSelector } from "react-redux";

const SecondLanguage = () => {
  // hooks to control modal opening and closing
  const [openielts, setOpenielts] = useState(false);
  const [opencel, setOpencel] = useState(false);
  const [opentcf, setOpentcf] = useState(false);
  const [opentef, setOpentef] = useState(false);

  const [Frenchbonus, setFrenchbonus] = useState(0);

  //useState to count individual CELPIP-G individual module score
  const [celpipdropdown, setCelpipdropdown] = useState("hide");
  const [ieltsdropdown, setIeltsdropdown] = useState("hide");
  const [tcfdropdown, setTcfdropdown] = useState("hide");
  const [tefdropdown, setTefdropdown] = useState("hide");

  const [openCheckboxone, setCheckboxone] = useState("hide");
  const [openOne, setOpenOne] = useState("hide");
  const dispatch = useDispatch();

  // all the global states to perform various functionality
  const marriegeStatus = useSelector((state) => state.marriage);
  const firstLanguageStatus = useSelector((state) => state.firstlanguage);
  const secondLanguageStatus = useSelector((state) => state.secondlanguage);

  // ielts global states
  const secondIeltsspeaking = useSelector((state) => state.secondieltsspeaking);
  const secondIeltswriting = useSelector((state) => state.secondieltswriting);
  const secondIetlsreading = useSelector((state) => state.secondieltsreading);
  const secondIeltslistening = useSelector(
    (state) => state.secondieltslistening
  );

  // CELPIP-g global states
  const secondCelspeaking = useSelector((state) => state.secondcelspeaking);
  const secondCelreading = useSelector((state) => state.secondcelreading);
  const secondCelwriting = useSelector((state) => state.secondcelwriting);
  const secondCellistening = useSelector((state) => state.secondcellistening);

  // TCF global states
  const secondTcfspeaking = useSelector((state) => state.secondtcfspeaking);
  const secondTcfwriting = useSelector((state) => state.secondtcfwriting);
  const secondTcfreading = useSelector((state) => state.secondtcfreading);
  const secondTcflistening = useSelector((state) => state.secondtcflistening);

  //TEF global states
  const secondTefspeaking = useSelector((state) => state.secondtefspeaking);
  const secondTefwriting = useSelector((state) => state.secondtefwriting);
  const secondTefreading = useSelector((state) => state.secondtefreading);
  const secondTeflistening = useSelector((state) => state.secondteflistening);

  // GLobal CLB states
  const CLBspeaking = useSelector((state)=>state.clbspeaking);
  const CLBwriting = useSelector((state)=>state.clbwriting);
  const CLBreading = useSelector((state)=>state.clbreading);
  const CLBlistening = useSelector((state)=>state.clblistening);

  const SECONDCLBspeaking = useSelector((state)=>state.secondclbspeaking);
  const SECONDCLBwriting = useSelector((state)=>state.secondclbwriting);
  const SECONDCLBreading = useSelector((state)=>state.secondclbreading);
  const SECONDCLBlistening = useSelector((state)=>state.secondclblistening);

  // FRENCH bonus global state

  const FrenchPoints = useSelector((state)=> state.points.frenchbonuspoints);

  // useStates to count individual ielts module score and Total of them
  const [speakingScore, setSpeakingScore] = useState(0);
  const [listeningScore, setListeningScore] = useState(0);
  const [writingScore, setWritingScore] = useState(0);
  const [readingScore, setReadingScore] = useState(0);
  const [secondLanguagetotal, setSecondLanguagetotal] = useState(0);

  useEffect(() => {
    // useEffect starts here
    dispatch(totalPoints("SECONDLANGUAGEPOINTS", secondLanguagetotal));
    dispatch(totalPoints( "FRENCHBONUSPOINTS", Frenchbonus));

    if (marriegeStatus === "single" || marriegeStatus === "married") {
      if (
        firstLanguageStatus === "IELTS" ||
        firstLanguageStatus === "CELPIP-G"
      ) {
        setOpenOne("show");
        setCheckboxone("hide");
      /*  if( secondLanguageStatus === "TCF(second)" || secondLanguageStatus === "TEF(second)")
       {
         //console.log("hello");

       } */
      }
      if (firstLanguageStatus === "TCF" || firstLanguageStatus === "TEF") {
        setCheckboxone("show");
        setOpenOne("hide");
      }

      //language conditions for IELTS
      if (secondLanguageStatus === "IELTS(second)") {
        setIeltsdropdown("show");
        setCelpipdropdown("hide");
        setTcfdropdown("hide");
        setTefdropdown("hide");

        if (secondIeltsspeaking === "Please select IELTS speaking score") {
          setSpeakingScore(0);
        }
        if (secondIeltsspeaking === "4.0 - 4.5") {
          setSpeakingScore(0);
        }
        if (secondIeltsspeaking === "5.0") {
          setSpeakingScore(1);
        }
        if (secondIeltsspeaking === "5.5") {
          setSpeakingScore(1);
        }
        if (secondIeltsspeaking === "6.0") {
          setSpeakingScore(3);
        }
        if (secondIeltsspeaking === "6.5") {
          setSpeakingScore(3);
        }
        if (secondIeltsspeaking === "7.0") {
          setSpeakingScore(6);
        }
        if (secondIeltsspeaking === "7.5 - 9.0") {
          setSpeakingScore(6);
        }

        // writing second ielts
        if (secondIeltswriting === "Please select IELTS writing score") {
          setWritingScore(0);
        }
        if (secondIeltswriting === "4.0 - 4.5") {
          setWritingScore(0);
        }
        if (secondIeltswriting === "5.0") {
          setWritingScore(1);
        }
        if (secondIeltswriting === "5.5") {
          setWritingScore(1);
        }
        if (secondIeltswriting === "6.0") {
          setWritingScore(3);
        }
        if (secondIeltswriting === "6.5") {
          setWritingScore(3);
        }
        if (secondIeltswriting === "7.0") {
          setWritingScore(6);
        }
        if (secondIeltswriting === "7.5 - 9.0") {
          setWritingScore(6);
        } // writing second ielts ends here

        if (secondIetlsreading === "Please select IELTS reading score") {
          setReadingScore(0);
        }
        if (secondIetlsreading === "3.5") {
          setReadingScore(0);
        }
        if (secondIetlsreading === "4.0- 4.5") {
          setReadingScore(1);
        }
        if (secondIetlsreading === "5.0 - 5.5") {
          setReadingScore(1);
        }
        if (secondIetlsreading === "6.0") {
          setReadingScore(3);
        }
        if (secondIetlsreading === "6.5") {
          setReadingScore(3);
        }
        if (secondIetlsreading === "7.0 - 7.5") {
          setReadingScore(6);
        }
        if (secondIetlsreading === "8.0 - 9.0") {
          setReadingScore(6);
        } // reading second end here

        if (secondIeltslistening === "Please select IELTS listening score") {
          setListeningScore(0);
        }
        if (secondIeltslistening === "4.5") {
          setListeningScore(0);
        }
        if (secondIeltslistening === "5.0") {
          setListeningScore(1);
        }
        if (secondIeltslistening === "5.5") {
          setListeningScore(1);
        }
        if (secondIeltslistening === "6.0 - 7.0") {
          setListeningScore(3);
        }
        if (secondIeltslistening === "7.5") {
          setListeningScore(3);
        }
        if (secondIeltslistening === "8.0") {
          setListeningScore(6);
        }
        if (secondIeltslistening === "8.5 - 9.0") {
          setListeningScore(6);
        }

        setSecondLanguagetotal(
          speakingScore + writingScore + readingScore + listeningScore
        );
      } // IELTS conditions end here

      if (secondLanguageStatus === "CELPIP-G(second)") {
        //CELPIP-G starts here
        setCelpipdropdown("show");
        setIeltsdropdown("hide");
        setTcfdropdown("hide");
        setTefdropdown("hide");

        if (secondCelspeaking === "Please select CELPIP-G speaking score") {
          // CELPIP-G speaking starts here
          setSpeakingScore(0);
        }
        if (secondCelspeaking === "4") {
          setSpeakingScore(0);
        }
        if (secondCelspeaking === "5") {
          setSpeakingScore(1);
        }
        if (secondCelspeaking === "6") {
          setSpeakingScore(1);
        }
        if (secondCelspeaking === "7") {
          setSpeakingScore(3);
        }
        if (secondCelspeaking === "8") {
          setSpeakingScore(3);
        }
        if (secondCelspeaking === "9") {
          setSpeakingScore(6);
        }
        if (secondCelspeaking === "10") {
          setSpeakingScore(6);
        } // CELPIP-G speaking ends here

        if (secondCelwriting === "Please select CELPIP-G writing score") {
          setWritingScore(0);
        }
        if (secondCelwriting === "4") {
          setWritingScore(0);
        }
        if (secondCelwriting === "5") {
          setWritingScore(1);
        }
        if (secondCelwriting === "6") {
          setWritingScore(1);
        }
        if (secondCelwriting === "7") {
          setWritingScore(3);
        }
        if (secondCelwriting === "8") {
          setWritingScore(3);
        }
        if (secondCelwriting === "9") {
          setWritingScore(6);
        }
        if (secondCelwriting === "10") {
          setWritingScore(6);
        }

        if (secondCelreading === "Please select CELPIP-G reading score") {
          setReadingScore(0);
        }
        if (secondCelreading === "4") {
          setReadingScore(0);
        }
        if (secondCelreading === "5") {
          setReadingScore(1);
        }
        if (secondCelreading === "6") {
          setReadingScore(1);
        }
        if (secondCelreading === "7") {
          setReadingScore(3);
        }
        if (secondCelreading === "8") {
          setReadingScore(3);
        }
        if (secondCelreading === "9") {
          setReadingScore(6);
        }
        if (secondCelreading === "10") {
          setReadingScore(6);
        }

        if (secondCellistening === "Please select CELPIP-G listening score") {
          setListeningScore(0);
        }
        if (secondCellistening === "4") {
          setListeningScore(0);
        }
        if (secondCellistening === "5") {
          setListeningScore(1);
        }
        if (secondCellistening === "6") {
          setListeningScore(1);
        }
        if (secondCellistening === "7") {
          setListeningScore(3);
        }
        if (secondCellistening === "8") {
          setListeningScore(3);
        }
        if (secondCellistening === "9") {
          setListeningScore(6);
        }
        if (secondCellistening === "10") {
          setListeningScore(6);
        }
        setSecondLanguagetotal(
          speakingScore + writingScore + readingScore + listeningScore
        );
      } // CELPIP-G ends here

      if (secondLanguageStatus === "TCF(second)") {
        // TCF second conditions start here
        setTcfdropdown("show");
        setIeltsdropdown("hide");
        setCelpipdropdown("hide");
        setTefdropdown("hide");

        if (secondTcfspeaking === "Please select TCF speaking score") {
          // TCF speaking second starts here
          setSpeakingScore(0);
        }
        if (secondTcfspeaking === "4-5") {
          setSpeakingScore(0);
        }
        if (secondTcfspeaking === "6") {
          setSpeakingScore(1);
        }
        if (secondTcfspeaking === "7-9") {
          setSpeakingScore(1);
        }
        if (secondTcfspeaking === "10-11") {
          setSpeakingScore(3);
        }
        if (secondTcfspeaking === "12-13") {
          setSpeakingScore(3);
        }
        if (secondTcfspeaking === "14-15") {
          setSpeakingScore(6);
        }
        if (secondTcfspeaking === "16-20") {
          setSpeakingScore(6);
        } // TCF speaking second ends here

        if (secondTcfwriting === "Please select TCF writing score") {
          // TCF writing second starts here
          setWritingScore(0);
        }
        if (secondTcfwriting === "4-5") {
          setWritingScore(0);
        }
        if (secondTcfwriting === "6") {
          setWritingScore(1);
        }
        if (secondTcfwriting === "7-9") {
          setWritingScore(1);
        }
        if (secondTcfwriting === "10-11") {
          setWritingScore(3);
        }
        if (secondTcfwriting === "12-13") {
          setWritingScore(3);
        }
        if (secondTcfwriting === "14-15") {
          setWritingScore(6);
        }
        if (secondTcfwriting === "16-20") {
          setWritingScore(6);
        } // TCF writing second ends here

        if (secondTcfreading === "Please select TCF reading score") {
          // TCF reading second starts here
          setReadingScore(0);
        }
        if (secondTcfreading === "342-374") {
          setReadingScore(0);
        }
        if (secondTcfreading === "375-405") {
          setReadingScore(1);
        }
        if (secondTcfreading === "406-452") {
          setReadingScore(1);
        }
        if (secondTcfreading === "453-498") {
          setReadingScore(3);
        }
        if (secondTcfreading === "499-523") {
          setReadingScore(3);
        }
        if (secondTcfreading === "524-548") {
          setReadingScore(6);
        }
        if (secondTcfreading === "549-699") {
          setReadingScore(6);
        } // TCF reading second ends here

        if (secondTcflistening === "Please select TCF listening score") {
          // TCF listening second starts here
          setListeningScore(0);
        }
        if (secondTcflistening === "331-368") {
          setListeningScore(0);
        }
        if (secondTcflistening === "369-397") {
          setListeningScore(1);
        }
        if (secondTcflistening === "398-457") {
          setListeningScore(1);
        }
        if (secondTcflistening === "458-502") {
          setListeningScore(3);
        }
        if (secondTcflistening === "503-522") {
          setListeningScore(3);
        }
        if (secondTcflistening === "523-548") {
          setListeningScore(6);
        }
        if (secondTcflistening === "549-699") {
          setListeningScore(6);
        } // TCF listening second ends here
        setSecondLanguagetotal(
          speakingScore + writingScore + readingScore + listeningScore
        );
      } // TCF second conditions end here

      if (secondLanguageStatus === "TEF(second)") {
        //TEF conditions start here
        setTefdropdown("show");
        setTcfdropdown("hide");
        setIeltsdropdown("hide");
        setCelpipdropdown("hide");

        if (secondTefspeaking === "Please select TEF speaking score") {
          // TEF second speaking starts here
          setSpeakingScore(0);
        }
        if (secondTefspeaking === "181-225") {
          setSpeakingScore(0);
        }
        if (secondTefspeaking === "226-270") {
          setSpeakingScore(1);
        }
        if (secondTefspeaking === "271-309") {
          setSpeakingScore(1);
        }
        if (secondTefspeaking === "310-348") {
          setSpeakingScore(3);
        }
        if (secondTefspeaking === "349-370") {
          setSpeakingScore(3);
        }
        if (secondTefspeaking === "371-392") {
          setSpeakingScore(6);
        }
        if (secondTefspeaking === "393-450") {
          setSpeakingScore(6);
        } // TEF second speaking ends here

        if (secondTefwriting === "Please select TEF writing score") {
          // TEF second reading starts here
          setWritingScore(0);
        }
        if (secondTefwriting === "181-225") {
          setWritingScore(0);
        }
        if (secondTefwriting === "226-270") {
          setWritingScore(1);
        }
        if (secondTefwriting === "271-309") {
          setWritingScore(1);
        }
        if (secondTefwriting === "310-348") {
          setWritingScore(3);
        }
        if (secondTefwriting === "349-370") {
          setWritingScore(3);
        }
        if (secondTefwriting === "371-392") {
          setWritingScore(6);
        }
        if (secondTefwriting === "393-450") {
          setWritingScore(6);
        } // TEF second writing ends here

        if (secondTefreading === "Please select TEF reading score") {
          // TEF second reading starts here
          setReadingScore(0);
        }
        if (secondTefreading === "121-150") {
          setReadingScore(0);
        }
        if (secondTefreading === "151-180") {
          setReadingScore(1);
        }
        if (secondTefreading === "181-206") {
          setReadingScore(1);
        }
        if (secondTefreading === "207-232") {
          setReadingScore(3);
        }
        if (secondTefreading === "233-247") {
          setReadingScore(3);
        }
        if (secondTefreading === "248-262") {
          setReadingScore(6);
        }
        if (secondTefreading === "263-300") {
          setReadingScore(6);
        } // TEF second reading ends here

        if (secondTeflistening === "Please select TEF listening score") {
          // TEF second listening starts here
          setListeningScore(0);
        }
        if (secondTeflistening === "145-180") {
          setListeningScore(0);
        }
        if (secondTeflistening === "181-216") {
          setListeningScore(1);
        }
        if (secondTeflistening === "217-248") {
          setListeningScore(1);
        }
        if (secondTeflistening === "249-279") {
          setListeningScore(3);
        }
        if (secondTeflistening === "280-297") {
          setListeningScore(3);
        }
        if (secondTeflistening === "298-315") {
          setListeningScore(6);
        }
        if (secondTeflistening === "316-360") {
          setListeningScore(6);
        } // TEF second listening ends here
        setSecondLanguagetotal(
          speakingScore + writingScore + readingScore + listeningScore
        );
      } // TEF conditions end here

      if (secondLanguageStatus === "Not applicable") {
        setSpeakingScore(0);
        setWritingScore(0);
        setReadingScore(0);
        setListeningScore(0);
        setFrenchbonus(0);
        setSecondLanguagetotal(
          speakingScore + writingScore + readingScore + listeningScore
        );
      }

      /* if((firstLanguageStatus === "TCF" || firstLanguageStatus === "TEF") || (secondLanguageStatus === "TCF(second)" || secondLanguageStatus === "TEF(second)"))
      {
        if((CLBspeaking === "CLB 7" || CLBspeaking === "CLB 8" || CLBspeaking === "CLB 9" || CLBspeaking === "CLB 10") && (CLBwriting === "CLB 7" || CLBwriting === "CLB 8" || CLBwriting === "CLB 9" || CLBwriting === "CLB 10") && (CLBreading === "CLB 7" || CLBreading === "CLB 8" || CLBreading === "CLB 9" || CLBreading === "CLB 10") && (CLBlistening === "CLB 7" || CLBlistening === "CLB 8" || CLBlistening === "CLB 9" || CLBlistening === "CLB 10"))
        {
             setFrenchbonus(25);
        }

        if((firstLanguageStatus === "IELTS" || firstLanguageStatus === "CELPIP-G") || (secondLanguageStatus === "CELPIP-G(second)" || secondLanguageStatus === "IELTS(second)"))
        {
           
        }
        
      } */

      if((firstLanguageStatus === "IELTS" || firstLanguageStatus === "CELPIP-G") && (secondLanguageStatus === "TCF(second)" || secondLanguageStatus === "TEF(second)"))
      {
       // console.log("hello clb 4  and second clb 7 and lower in eng");
        if( ((CLBspeaking === "CLB 4") && (CLBwriting === "CLB 4") && (CLBreading === "CLB 4") && (CLBlistening === "CLB 4")) && ( ((SECONDCLBspeaking === "CLB 7") || (SECONDCLBspeaking === "CLB 8") || (SECONDCLBspeaking === "CLB 9") || (SECONDCLBspeaking === "CLB 10")) && ((SECONDCLBwriting === "CLB 7") || (SECONDCLBwriting === "CLB 8") || (SECONDCLBwriting === "CLB 9") || (SECONDCLBwriting === "CLB 10")) && ((SECONDCLBreading === "CLB 7") || (SECONDCLBreading === "CLB 8") || (SECONDCLBreading === "CLB 9") || (SECONDCLBreading === "CLB 10")) && ((SECONDCLBlistening === "CLB 7") || (SECONDCLBlistening === "CLB 8") || (SECONDCLBlistening === "CLB 9") || (SECONDCLBlistening === "CLB 10")) ))
        {
          //console.log("hello clb 4  and second clb 7 and lower in eng");
          setFrenchbonus(25);

        }

        if( ( ((CLBspeaking === "CLB 5") && (CLBwriting === "CLB 5") && (CLBreading === "CLB 5") && (CLBlistening === "CLB 5")) || ((CLBspeaking === "CLB 6") && (CLBwriting === "CLB 6") && (CLBreading === "CLB 6") && (CLBlistening === "CLB 6")) || ((CLBspeaking === "CLB 7") && (CLBwriting === "CLB 7") && (CLBreading === "CLB 7") && (CLBlistening === "CLB 7")) || ((CLBspeaking === "CLB 8") && (CLBwriting === "CLB 8") && (CLBreading === "CLB 8") && (CLBlistening === "CLB 8")) || ((CLBspeaking === "CLB 9") && (CLBwriting === "CLB 9") && (CLBreading === "CLB 9") && (CLBlistening === "CLB 9")) || ((CLBspeaking === "CLB 10") && (CLBwriting === "CLB 10") && (CLBreading === "CLB 10") && (CLBlistening === "CLB 10")) || ((CLBspeaking === "CLB 5" || CLBspeaking === "CLB 6" || CLBspeaking === "CLB 7" || CLBspeaking === "CLB 8" || CLBspeaking === "CLB 9" || CLBspeaking === "CLB 10") && (CLBwriting === "CLB 5" || CLBwriting === "CLB 6" || CLBwriting === "CLB7" || CLBwriting === "CLB 8" || CLBwriting === "CLB 9" || CLBwriting === "CLB 10") && (CLBreading === "CLB 5" || CLBreading === "CLB 6" || CLBreading === "CLB 7" || CLBreading === "CLB 8" || CLBreading === "CLB 9" || CLBreading === "CLB 10") && (CLBlistening === "CLB 5" || CLBlistening === "CLB 6" || CLBlistening === "CLB 7" || CLBlistening === "CLB 8" || CLBlistening === "CLB 9" || CLBlistening === "CLB 10") )) && ( ((SECONDCLBspeaking === "CLB 7") || (SECONDCLBspeaking === "CLB 8") || (SECONDCLBspeaking === "CLB 9") || (SECONDCLBspeaking === "CLB 10")) && ((SECONDCLBwriting === "CLB 7") || (SECONDCLBwriting === "CLB 8") || (SECONDCLBwriting === "CLB 9") || (SECONDCLBwriting === "CLB 10")) && ((SECONDCLBreading === "CLB 7") || (SECONDCLBreading === "CLB 8") || (SECONDCLBreading === "CLB 9") || (SECONDCLBreading === "CLB 10")) && ((SECONDCLBlistening === "CLB 7") || (SECONDCLBlistening === "CLB 8") || (SECONDCLBlistening === "CLB 9") || (SECONDCLBlistening === "CLB 10")) ))
        {
             // console.log("THAT big clb conditions");
              setFrenchbonus(50);
        }

      }

      if((firstLanguageStatus === "TCF" || firstLanguageStatus === "TEF") && (secondLanguageStatus === "IELTS(second)" || secondLanguageStatus === "CELPIP-G(second)"))
      {
        if( ((SECONDCLBspeaking === "CLB 4") && (SECONDCLBwriting === "CLB 4") && (SECONDCLBreading === "CLB 4") && (SECONDCLBlistening === "CLB 4")) && ( ((CLBspeaking === "CLB 7") || (CLBspeaking === "CLB 8") || (CLBspeaking === "CLB 9") || (CLBspeaking === "CLB 10")) && ((CLBwriting === "CLB 7") || (CLBwriting === "CLB 8") || (CLBwriting === "CLB 9") || (CLBwriting === "CLB 10")) && ((CLBreading === "CLB 7") || (CLBreading === "CLB 8") || (CLBreading === "CLB 9") || (CLBreading === "CLB 10")) && ((CLBlistening === "CLB 7") || (CLBlistening === "CLB 8") || (CLBlistening === "CLB 9") || (CLBlistening === "CLB 10")) ))
        {
          //console.log("hello clb 4  and second clb 7 and lower in eng");
          setFrenchbonus(25);
        }

        if( ( ((SECONDCLBspeaking === "CLB 5") && (SECONDCLBwriting === "CLB 5") && (SECONDCLBreading === "CLB 5") && (SECONDCLBlistening === "CLB 5")) || ((SECONDCLBspeaking === "CLB 6") && (SECONDCLBwriting === "CLB 6") && (SECONDCLBreading === "CLB 6") && (SECONDCLBlistening === "CLB 6")) || ((SECONDCLBspeaking === "CLB 7") && (SECONDCLBwriting === "CLB 7") && (SECONDCLBreading === "CLB 7") && (SECONDCLBlistening === "CLB 7")) || ((SECONDCLBspeaking === "CLB 8") && (SECONDCLBwriting === "CLB 8") && (SECONDCLBreading === "CLB 8") && (SECONDCLBlistening === "CLB 8")) || ((SECONDCLBspeaking === "CLB 9") && (SECONDCLBwriting === "CLB 9") && (SECONDCLBreading === "CLB 9") && (SECONDCLBlistening === "CLB 9")) || ((SECONDCLBspeaking === "CLB 10") && (SECONDCLBwriting === "CLB 10") && (SECONDCLBreading === "CLB 10") && (SECONDCLBlistening === "CLB 10")) || ((SECONDCLBspeaking === "CLB 5" || SECONDCLBspeaking === "CLB 6" || SECONDCLBspeaking === "CLB 7" || SECONDCLBspeaking === "CLB 8" || SECONDCLBspeaking === "CLB 9" || SECONDCLBspeaking === "CLB 10") && (SECONDCLBwriting === "CLB 5" || SECONDCLBwriting === "CLB 6" || SECONDCLBwriting === "CLB7" || SECONDCLBwriting === "CLB 8" || SECONDCLBwriting === "CLB 9" || SECONDCLBwriting === "CLB 10") && (SECONDCLBreading === "CLB 5" || SECONDCLBreading === "CLB 6" || SECONDCLBreading === "CLB 7" || SECONDCLBreading === "CLB 8" || SECONDCLBreading === "CLB 9" || SECONDCLBreading === "CLB 10") && (SECONDCLBlistening === "CLB 5" || SECONDCLBlistening === "CLB 6" || SECONDCLBlistening === "CLB 7" || SECONDCLBlistening === "CLB 8" || SECONDCLBlistening === "CLB 9" || SECONDCLBlistening === "CLB 10") )) && ( ((CLBspeaking === "CLB 7") || (CLBspeaking === "CLB 8") || (CLBspeaking === "CLB 9") || (CLBspeaking === "CLB 10")) && ((CLBwriting === "CLB 7") || (CLBwriting === "CLB 8") || (CLBwriting === "CLB 9") || (CLBwriting === "CLB 10")) && ((CLBreading === "CLB 7") || (CLBreading === "CLB 8") || (CLBreading === "CLB 9") || (CLBreading === "CLB 10")) && ((CLBlistening === "CLB 7") || (CLBlistening === "CLB 8") || (CLBlistening === "CLB 9") || (CLBlistening === "CLB 10")) ))
        {
             // console.log("THAT big clb conditions");
              setFrenchbonus(50);
        }
      }

    } //Single and married conditions ends here

   // console.log("second", secondLanguageStatus);
  }, [
    marriegeStatus,
    firstLanguageStatus,
    secondLanguageStatus,
    secondIeltsspeaking,
    secondIeltswriting,
    secondIetlsreading,
    secondIeltslistening,
    secondCelspeaking,
    secondCelreading,
    secondCellistening,
    secondCelwriting,
    secondTcfspeaking,
    secondTcfwriting,
    secondTcfreading,
    secondTcflistening,
    secondTefspeaking,
    secondTefreading,
    secondTefwriting,
    secondTeflistening,
    speakingScore,
    writingScore,
    listeningScore,
    readingScore,
    secondLanguagetotal,
  ]); // useEffect ends here

 

  return (
    <div>
      {" "}
      {/* main div */}
      <br></br>
      <div class="flex flex-col">
        <div class="bg-primary shadow-xl  rounded-3xl p-4">
          <div class="flex-none lg:flex">
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap bg-blue-500 text-white text-lg px-6 py-4 font-bold rounded-xl">
                <h2 class="flex-auto text-lg font-mono font-bold">
                  Second language
                </h2>
                <h2 class="flex text-lg font-mono font-bold">toggle here</h2>
              </div>
              <div class="mt-3 md:mb-0 font-mono bg-white px-5 py-2 shadow-sm tracking-wider border text-black rounded-full  inline-flex items-center space-x-2 ">
                <b>
                  <span>
                    <div className={openCheckboxone}>
                      <Radio
                        label="IELTS"
                        checked={secondLanguageStatus === "IELTS(second)"}
                        onClick={() => {
                          dispatch(secondLanguageCheck("IELTS2"));
                          dispatch(celpipscore("REMOVESECOND"));
                          dispatch(tcfscore("REMOVESECOND"));
                          dispatch(tefscore("REMOVESECOND"));
                        }}
                      />
                      &nbsp;
                      <Radio
                        label="CELPIP-G"
                        checked={secondLanguageStatus === "CELPIP-G(second)"}
                        onClick={() => {
                          dispatch(secondLanguageCheck("CEL2"));
                          dispatch(firstIeltsspeaking("REMOVESECOND"));
                          dispatch(firstIeltswriting("REMOVESECOND"));
                          dispatch(firstIeltsreading("REMOVESECOND"));
                          dispatch(firstIeltslistening("REMOVESECOND"));
                          dispatch(tcfscore("REMOVESECOND"));
                          dispatch(tefscore("REMOVESECOND"));
                        }}
                      />
                    </div>
                    <div className={openOne}>
                      <Radio
                        label="TCF"
                        checked={secondLanguageStatus === "TCF(second)"}
                        onClick={() => {
                          dispatch(secondLanguageCheck("TCF2"));
                          dispatch(firstIeltsspeaking("REMOVESECOND"));
                          dispatch(firstIeltswriting("REMOVESECOND"));
                          dispatch(firstIeltsreading("REMOVESECOND"));
                          dispatch(firstIeltslistening("REMOVESECOND"));
                          dispatch(celpipscore("REMOVESECOND"));
                          dispatch(tefscore("REMOVESECOND"));
                        }}
                      />
                      &nbsp;
                      <Radio
                        label="TEF"
                        checked={secondLanguageStatus === "TEF(second)"}
                        onClick={() => {
                          dispatch(secondLanguageCheck("TEF2"));
                          dispatch(firstIeltsspeaking("REMOVESECOND"));
                          dispatch(firstIeltswriting("REMOVESECOND"));
                          dispatch(firstIeltsreading("REMOVESECOND"));
                          dispatch(firstIeltslistening("REMOVESECOND"));
                          dispatch(celpipscore("REMOVESECOND"));
                          dispatch(tcfscore("REMOVESECOND"));
                        }}
                      />
                    </div>
                    <div>
                      {" "}
                      <Radio
                        label="Not applicabel"
                        checked={secondLanguageStatus === "Not applicable"}
                        onClick={() => {
                          dispatch(secondLanguageCheck("NOTAPPLICABLE"));
                          dispatch(firstIeltsspeaking("REMOVESECOND"));
                          dispatch(firstIeltswriting("REMOVESECOND"));
                          dispatch(firstIeltsreading("REMOVESECOND"));
                          dispatch(firstIeltslistening("REMOVESECOND"));
                          dispatch(celpipscore("REMOVESECOND"));
                          dispatch(tcfscore("REMOVESECOND"));
                          dispatch(tefscore("REMOVESECOND"));
                        }}
                      />
                    </div>
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
                      Speaking: {secondIeltsspeaking}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Listening: {secondIeltslistening}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class={ieltsdropdown}>
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Writing: {secondIeltswriting}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Reading: {secondIetlsreading}
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
                      Speaking: {secondCelspeaking}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Listening: {secondCellistening}
                    </p>
                  </div>
                </div>
              </div>
              <div class={celpipdropdown}>
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Writing: {secondCelwriting}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Reading: {secondCelreading}
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
                      Speaking: {secondTcfspeaking}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Listening: {secondTcflistening}
                    </p>
                  </div>
                </div>
              </div>
              <div class={tcfdropdown}>
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Writing: {secondTcfwriting}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Reading: {secondTcfreading}
                    </p>
                  </div>
                </div>
              </div>
              {/* TCF section for individual score ends here */}
              {/* TEF sections for individual score starts here */}
              <div className={tefdropdown}>
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Speaking: {secondTefspeaking}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Listening: {secondTeflistening}
                    </p>
                  </div>
                </div>
              </div>
              <div class={tefdropdown}>
                <div class="flex py-4  text-sm text-gray-600">
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Writing: {secondTefwriting}
                    </p>
                  </div>
                  <div class="flex-1 inline-flex items-center">
                    <p class="px-6 font-mono py-2 text-white text-lg font-semibold">
                      Reading: {secondTefreading}
                    </p>
                  </div>
                </div>
              </div>
              {/* TEF sections for individial score ends here */}
              <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
              {/* IELTS dropdown starts here */}{" "}
              <div class="flex space-x-3 text-sm font-medium">
                <div class="flex-auto flex space-x-3">
                  <div className={ieltsdropdown}>
                    {" "}
                    {/* IELTS div starts here */}
                    <Modal
                      basic
                      onClose={() => setOpenielts(false)}
                      onOpen={() => setOpenielts(true)}
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
                      <Header>Please select data from here</Header>

                      <Modal.Content>
                        <p>
                          <Dropdown
                            placeholder={secondIeltsspeaking}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() =>
                                  {
                                    dispatch(firstIeltsspeaking("ss4.0-4.5"));
                                    dispatch(secondclblevel("SCLB4speaking"));
                                   
                                }}
                              >
                                4.0 - 4.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsspeaking("ss5.0"));
                                  dispatch(secondclblevel("SCLB5speaking"));}
                                }
                              >
                                5.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsspeaking("ss5.5"));
                                  dispatch(secondclblevel("SCLB6speaking"));
                                }}
                              >
                                5.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsspeaking("ss6.0"));
                                  dispatch(secondclblevel("SCLB7speaking"));
                                }}
                              >
                                6.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsspeaking("ss6.5"));
                                  dispatch(secondclblevel("SCLB8speaking"));
                                }}
                              >
                                6.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsspeaking("ss7.0"));
                                  dispatch(secondclblevel("SCLB9speaking"));
                                }}
                              >
                                7.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsspeaking("ss7.5-9.0"));
                                  dispatch(secondclblevel("SCLB10speaking"));
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
                            placeholder={secondIeltswriting}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltswriting("sw4.0-4.5"));
                                  dispatch(secondclblevel("SCLB4writing"));
                                }}
                              >
                                4.0 - 4.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltswriting("sw5.0"));
                                  dispatch(secondclblevel("SCLB5writing"));
                                }}
                              >
                                5.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltswriting("sw5.5"));
                                  dispatch(secondclblevel("SCLB6writing"));
                                }}
                              >
                                5.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltswriting("sw6.0"));
                                  dispatch(secondclblevel("SCLB7writing"));
                                }}
                              >
                                6.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltswriting("sw6.5"));
                                  dispatch(secondclblevel("SCLB8writing"));
                                }}
                              >
                                6.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltswriting("sw7.0"));
                                  dispatch(secondclblevel("SCLB9writing"));
                                }}
                              >
                                7.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltswriting("sw7.5-9.0"));
                                  dispatch(secondclblevel("SCLB10writing"));
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
                            placeholder={secondIetlsreading}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsreading("sr3.5"));
                                  dispatch(secondclblevel("SCLB4reading"));}
                                }
                              >
                                3.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsreading("sr4.0-4.5"));
                                  dispatch(secondclblevel("SCLB5reading"));
                                }}
                              >
                                4.0 - 4.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsreading("sr5.0-5.5"));
                                  dispatch(secondclblevel("SCLB6reading"));
                                }}
                              >
                                5.0 - 5.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsreading("sr6.0"));
                                  dispatch(secondclblevel("SCLB7reading"));
                                }}
                              >
                                6.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsreading("sr6.5"));
                                  dispatch(secondclblevel("SCLB8reading"));
                                }}
                              >
                                6.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsreading("sr7.0-7.5"));
                                  dispatch(secondclblevel("SCLB9reading"));
                                }}
                              >
                                7.0 - 7.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltsreading("sr8.0-9.0"));
                                  dispatch(secondclblevel("SCLB10reading"));
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
                            placeholder={secondIeltslistening}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltslistening("sl4.5"));
                                  dispatch(secondclblevel("SCLB4listening"));
                                }}
                              >
                                4.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltslistening("sl5.0"));
                                  dispatch(secondclblevel("SCLB5listening"));
                                }}
                              >
                                5.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltslistening("sl5.5"));
                                  dispatch(secondclblevel("SCLB6listening"));
                                }}
                              >
                                5.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltslistening("sl6.0-7.0"));
                                  dispatch(secondclblevel("SCLB7listening"));
                                }}
                              >
                                6.0 - 7.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltslistening("sl7.5"));
                                  dispatch(secondclblevel("SCLB8listening"));
                                }}
                              >
                                7.5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltslistening("sl8.0"));
                                  dispatch(secondclblevel("SCLB9listening"));
                                }}
                              >
                                8.0
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(firstIeltslistening("sl8.5-9.0"));
                                  dispatch(secondclblevel("SCLB10listening"));
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
                              totalPoints(
                                "SECONDLANGUAGEPOINTS",
                                secondLanguagetotal
                              )
                            );

                            dispatch(
                              totalPoints(
                                "FRENCHBONUSPOINTS",
                                Frenchbonus
                              )
                            );
                          }}
                        >
                          <Icon name="checkmark" /> Done
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </div>{" "}
                  {/* IELTS div ends here */}
                  {/* CELPIP-G div starts here */}
                  <div className={celpipdropdown}>
                    <Modal
                      basic
                      onClose={() => setOpencel(false)}
                      onOpen={() => setOpencel(true)}
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
                        Please select {secondLanguageStatus} data from here
                      </Header>

                      <Modal.Content>
                        <label>Speaking</label>
                        <p>
                          <Dropdown
                            placeholder={secondCelspeaking}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("sscel4"));
                                dispatch(secondclblevel("SCLB4speaking"));
                              }}
                              >
                                4
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("sscel5"));
                                dispatch(secondclblevel("SCLB5speaking"));}}
                              >
                                5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("sscel6"));
                                dispatch(secondclblevel("SCLB6speaking"));}}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("sscel7"));
                                dispatch(secondclblevel("SCLB7speaking"));}}
                              >
                                7
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("sscel8"));
                                dispatch(secondclblevel("SCLB8speaking"));}}
                              >
                                8
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("sscel9"));
                                dispatch(secondclblevel("SCLB9speaking"));}}
                              >
                                9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("sscel10"));
                                dispatch(secondclblevel("SCLB10speaking"));}}
                              >
                                10
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>

                        <label>Writing</label>
                        <p>
                          <Dropdown
                            placeholder={secondCelwriting}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("swcel4"));
                                dispatch(secondclblevel("SCLB4writing"));}}
                              >
                                4
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("swcel5"));
                                dispatch(secondclblevel("SCLB5writing"));}}
                              >
                                5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("swcel6"));
                                dispatch(secondclblevel("SCLB6writing"));}}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("swcel7"));
                                dispatch(secondclblevel("SCLB7writing"));}}
                              >
                                7
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("swcel8"));
                                dispatch(secondclblevel("SCLB8writing"));}}
                              >
                                8
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("swcel9"));
                                dispatch(secondclblevel("SCLB9writing"));}}
                              >
                                9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("swcel10"));
                                dispatch(secondclblevel("SCLB10writing"));}}
                              >
                                10
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>

                        <label>Reading</label>
                        <p>
                          <Dropdown
                            placeholder={secondCelreading}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => { dispatch(celpipscore("srcel4"));
                                dispatch(secondclblevel("SCLB4reading"));}}
                              >
                                4
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => { dispatch(celpipscore("srcel5"));
                                dispatch(secondclblevel("SCLB5reading"));}}
                              >
                                5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("srcel6"));
                                dispatch(secondclblevel("SCLB6reading"));}}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("srcel7"));
                                dispatch(secondclblevel("SCLB7reading"));}}
                              >
                                7
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("srcel8"));
                                dispatch(secondclblevel("SCLB8reading"));}}
                              >
                                8
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("srcel9"));
                                dispatch(secondclblevel("SCLB9reading"));}}
                              >
                                9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("srcel10"));
                                dispatch(secondclblevel("SCLB10reading"));}}
                              >
                                10
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>

                        <label>Listening</label>
                        <p>
                          <Dropdown
                            placeholder={secondCellistening}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("slcel4"));
                                dispatch(secondclblevel("SCLB4listening"));}}
                              >
                                4
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("slcel5"));
                                dispatch(secondclblevel("SCLB5listening"));}}
                              >
                                5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("slcel6"));
                                dispatch(secondclblevel("SCLB6listening"));}}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("slcel7"));
                                dispatch(secondclblevel("SCLB7listening"));}}
                              >
                                7
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("slcel8"));
                                dispatch(secondclblevel("SCLB8listening"));}}
                              >
                                8
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("slcel9"));
                                dispatch(secondclblevel("SCLB9listening"));}}
                              >
                                9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(celpipscore("slcel10"));
                                dispatch(secondclblevel("SCLB10listening"));}}
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
                              totalPoints(
                                "SECONDLANGUAGEPOINTS",
                                secondLanguagetotal
                              )
                            );

                            dispatch(
                              totalPoints(
                                "FRENCHBONUSPOINTS",
                                Frenchbonus
                              )
                            );
                          }}
                        >
                          <Icon name="checkmark" /> Done
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </div>
                  {/* CELPIP-G div ends here */}
                  {/* TCF dropdown starts here */}
                  <div className={tcfdropdown}>
                    <Modal
                      basic
                      onClose={() => setOpentcf(false)}
                      onOpen={() => setOpentcf(true)}
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
                        Please select {secondLanguageStatus} data from here
                      </Header>

                      <Modal.Content>
                        <label>Speaking</label>
                        <p>
                          <Dropdown
                            placeholder={secondTcfspeaking}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("sstcf4-5"));
                                dispatch(secondclblevel("SCLB4speaking"));}}
                              >
                                4-5
                              </Dropdown.Item>
                              <Dropdown.Item
                                  onClick={() => {dispatch(tcfscore("sstcf6"));
                                  dispatch(secondclblevel("SCLB5speaking"));}}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("sstcf7-9"));
                                dispatch(secondclblevel("SCLB6speaking"));}}
                              >
                                7-9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("sstcf10-11"));
                                dispatch(secondclblevel("SCLB7speaking"));}}
                              >
                                10-11
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("sstcf12-13"));
                                dispatch(secondclblevel("SCLB8speaking"));}}
                              >
                                12-13
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("sstcf14-15"));
                                dispatch(secondclblevel("SCLB9speaking"));}}
                              >
                                14-15
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("sstcf16-20"));
                                dispatch(secondclblevel("SCLB10speaking"));}}
                              >
                                16-20
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>
                        <label>Writing</label>
                        <p>
                          <Dropdown
                            placeholder={secondTcfwriting}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("swtcf4-5"));
                                dispatch(secondclblevel("SCLB4writing"));}}
                              >
                                4-5
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("swtcf6"));
                                dispatch(secondclblevel("SCLB5writing"));}}
                              >
                                6
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("swtcf7-9"));
                                dispatch(secondclblevel("SCLB6writing"));}}
                              >
                                7-9
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("swtcf10-11"));
                                dispatch(secondclblevel("SCLB7writing1"));}}
                              >
                                10-11
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("swtcf12-13"));
                                dispatch(secondclblevel("SCLB8writing"));}}
                              >
                                12-13
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("swtcf14-15"));
                                dispatch(secondclblevel("SCLB9writing"));}}
                              >
                                14-15
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => {dispatch(tcfscore("swtcf16-20"));
                                dispatch(secondclblevel("SCLB10writing"));}}
                              >
                                16-20
                              </Dropdown.Item>
                            </DropdownMenu>
                          </Dropdown>
                        </p>

                        <label>Reading</label>
                        <p>
                          <Dropdown
                            placeholder={secondTcfreading}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("srtcf342-374"));
                                  dispatch(secondclblevel("SCLB4reading"));
                                }}
                              >
                                342-374
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("srtcf375-405"));
                                  dispatch(secondclblevel("SCLB5reading"));
                                }}
                              >
                                375-405
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("srtcf406-452"));
                                  dispatch(secondclblevel("SCLB6reading"));
                                }}
                              >
                                406-452
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("srtcf453-498"));
                                  dispatch(secondclblevel("SCLB7reading"));
                                }}
                              >
                                453-498
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("srtcf499-523"));
                                  dispatch(secondclblevel("SCLB8reading"));
                                }}
                              >
                                499-523
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("srtcf524-548"));
                                  dispatch(secondclblevel("SCLB9reading"));
                                }}
                              >
                                524-548
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("srtcf549-699"));
                                  dispatch(secondclblevel("SCLB10reading"));
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
                            placeholder={secondTcflistening}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("sltcf331-368"));
                                  dispatch(secondclblevel("SCLB4listening"));
                                }}
                              >
                                331-368
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("sltcf369-397"));
                                  dispatch(secondclblevel("SCLB5listening"));
                                }}
                              >
                                369-397
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("sltcf398-457"));
                                  dispatch(secondclblevel("SCLB6listening"))
                                }}
                              >
                                398-457
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("sltcf458-502"));
                                  dispatch(secondclblevel("SCLB7listening"))
                                }}
                              >
                                458-502
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("sltcf503-522"));
                                  dispatch(secondclblevel("SCLB8listening"))
                                }}
                              >
                                503-522
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("sltcf523-548"));
                                  dispatch(secondclblevel("SCLB9listening"))
                                }}
                              >
                                523-548
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tcfscore("sltcf549-699"));
                                  dispatch(secondclblevel("SCLB10listening"))
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
                              totalPoints(
                                "SECONDLANGUAGEPOINTS",
                                secondLanguagetotal
                              )
                            );

                            dispatch(
                              totalPoints(
                                "FRENCHBONUSPOINTS",
                                Frenchbonus
                              )
                            );
                          }}
                        >
                          <Icon name="checkmark" /> Done
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </div>
                  {/* TCF dropdown ends here */}
                  <div className={tefdropdown}>
                    {" "}
                    {/* TEF dropdown starts here */}
                    <Modal
                      basic
                      onClose={() => setOpentef(false)}
                      onOpen={() => setOpentef(true)}
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
                        Please select {secondLanguageStatus} data from here
                      </Header>

                      <Modal.Content>
                        <label>Speaking</label>
                        <p>
                          <Dropdown
                            placeholder={secondTefspeaking}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sstef181-225"));
                                  dispatch(secondclblevel("SCLB4speaking"));
                                }}
                              >
                                181-225
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sstef226-270"));
                                  dispatch(secondclblevel("SCLB5speaking"));
                                }}
                              >
                                226-270
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sstef271-309"));
                                  dispatch(secondclblevel("SCLB6speaking"));
                                }}
                              >
                                271-309
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sstef310-348"));
                                  dispatch(secondclblevel("SCLB7speaking"));
                                }}
                              >
                                310-348
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sstef349-370"));
                                  dispatch(secondclblevel("SCLB8speaking"));
                                }}
                              >
                                349-370
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sstef371-392"));
                                  dispatch(secondclblevel("SCLB9speaking"));
                                }}
                              >
                                371-392
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sstef393-450"));
                                  dispatch(secondclblevel("SCLB10speaking"));
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
                            placeholder={secondTefwriting}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("swtef181-225"));
                                  dispatch(secondclblevel("SCLB4writing"));
                                }}
                              >
                                181-225
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("swtef226-270"));
                                  dispatch(secondclblevel("SCLB5writing"));
                                }}
                              >
                                226-270
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("swtef271-309"));
                                  dispatch(secondclblevel("SCLB6writing"));
                                }}
                              >
                                271-309
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("swtef310-348"));
                                  dispatch(secondclblevel("SCLB7writing"));
                                }}
                              >
                                310-348
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("swtef349-370"));
                                  dispatch(secondclblevel("SCLB8writing"));
                                }}
                              >
                                349-370
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("swtef371-392"));
                                  dispatch(secondclblevel("SCLB9writing"));
                                }}
                              >
                                371-392
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("swtef393-450"));
                                  dispatch(secondclblevel("SCLB10writing"));
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
                            placeholder={secondTefreading}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("srtef121-150"));
                                  dispatch(secondclblevel("SCLB4reading"));
                                }}
                              >
                                121-150
                              </Dropdown.Item>

                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("srtef151-180"));
                                  dispatch(secondclblevel("SCLB5reading"));
                                }}
                              >
                                151-180
                              </Dropdown.Item>

                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("srtef181-206"));
                                  dispatch(secondclblevel("SCLB6reading"));
                                }}
                              >
                                181-206
                              </Dropdown.Item>

                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("srtef207-232"));
                                  dispatch(secondclblevel("SCLB7reading"));
                                }}
                              >
                                207-232
                              </Dropdown.Item>

                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("srtef233-247"));
                                  dispatch(secondclblevel("SCLB8reading"));
                                }}
                              >
                                233-247
                              </Dropdown.Item>

                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("srtef248-262"));
                                  dispatch(secondclblevel("SCLB9reading"));
                                }}
                              >
                                248-262
                              </Dropdown.Item>

                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("srtef263-300"));
                                  dispatch(secondclblevel("SCLB10reading"));
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
                            placeholder={secondTeflistening}
                            fluid
                            selection
                          >
                            <DropdownMenu>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sltef145-180"));
                                  dispatch(secondclblevel("SCLB4listening"));
                                }}
                              >
                                145-180
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sltef181-216"));
                                  dispatch(secondclblevel("SCLB5listening"));
                                }}
                              >
                                181-216
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sltef217-248"));
                                  dispatch(secondclblevel("SCLB6listening"));
                                }}
                              >
                                217-248
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sltef249-279"));
                                  dispatch(secondclblevel("SCLB7listening"));
                                }}
                              >
                                249-279
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sltef280-297"));
                                  dispatch(secondclblevel("SCLB8listening"));
                                }}
                              >
                                280-297
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sltef298-315"));
                                  dispatch(secondclblevel("SCLB9listening"));
                                }}
                              >
                                298-315
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() =>
                                  {dispatch(tefscore("sltef316-360"));
                                  dispatch(secondclblevel("SCLB10listening"));
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
                              totalPoints(
                                "SECONDLANGUAGEPOINTS",
                                secondLanguagetotal
                              )
                            );

                            dispatch(
                              totalPoints(
                                "FRENCHBONUSPOINTS",
                                Frenchbonus
                              )
                            );
                          }}
                        >
                          <Icon name="checkmark" /> Done
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </div>{" "}
                  {/* TEF dropdown ends here */}
                </div>
                <div class="mb-2 md:mb-0 font-mono bg-white px-5 py-2 shadow-sm tracking-wider border text-black rounded-full  inline-flex items-center space-x-2">
                  <b>
                    <span>Points: {secondLanguagetotal}</span>
                  </b>
                </div>{" "}
                {/* points div ends here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> /* main div */
  );
};

export default SecondLanguage;
