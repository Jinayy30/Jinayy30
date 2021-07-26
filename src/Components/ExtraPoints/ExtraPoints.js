import { React, useState, useEffect } from "react";
import "../visibility.css";
import {
  Button,
  Header,
  Icon,
  Modal,
  Dropdown,
  Radio,
  DropdownMenu,
  Checkbox,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  single,
  totalPoints,
  spouseLanguage,
  spouselanguagescore,
  spouseCLBlevel,
  additionalPoints,
} from "../../Actions";

const ExtraPoints = () => {
  const dispatch = useDispatch();

  
  // CONTROLLING checkbox action
  const [Checksibling, setChecksibling] = useState(false);
  const [Checknoc00, setChecknoc00] = useState(false);
  const [Checknoc0AB, setChecknoc0AB] = useState(false);
  const [Checknomination, setChecknomination] = useState(false);
  const [Hide,setHide] = useState(false);
  const [Hide1,setHide1] = useState(false);

  // useStates to calculate points

  const [SiblingPoints,setSiblingPoints] = useState(0);
  const [Noc00Points,setNoc00Points] = useState(0);
  const [Noc0abPoints,setNoc0abPoints] = useState(0);
  const [NominationPoints,setNominationPoints] = useState(0);

  // GLOBAL state
  const globalNoc0ab = useSelector((state) => state.employmentnoc0ab);
  const globalNoc0 = useSelector((state) => state.employmentnoc0);
  const globalProvisionalNomination = useSelector(
    (state) => state.provisionalnominationextra
  );
  const globalSiblingExtra = useSelector((state) => state.siblingstatus);
  const CanadianEducation = useSelector((state)=> state.canadianeducation);

  // SEPARATE functions and useEffect hooks to handle clicks on checkboxes
  function handleClick() {
   
    return setChecknoc0AB(!Checknoc0AB);
    
  }

  function handleClickOne() {

    return setChecknoc00(!Checknoc00);
    
  }

  function handleClickTwo() {
    return setChecknomination(!Checknomination);
  }

  function handleClickThree() {
    return setChecksibling(!Checksibling);
  }

  useEffect(() => {
   if (Checknoc0AB == true) {
      dispatch(additionalPoints("employmentnoc0abChecked"));
      //console.log(Checknoc0AB);
      setNoc0abPoints(50);
      dispatch(totalPoints("NOC0ABPOINTS",Noc0abPoints));
   //   dispatch(additionalPoints("noemploymentnoc0Checked"));
       //setChecknoc00(false);
    }
    if (Checknoc0AB == false /* || globalNoc0ab === "NO" */) {
      dispatch(additionalPoints("noemploymentnoc0abChecked"));
      setNoc0abPoints(0);
      dispatch(totalPoints("NOC0ABPOINTS",Noc0abPoints));
      //console.log(Checknoc0AB);
    }
    
  }, [Checknoc0AB,Noc0abPoints]);

   useEffect(() => {
    if (Checknoc00 == true/*  || globalNoc0 === "YES" */) {
      dispatch(additionalPoints("employmentnoc0Checked"));
      setNoc00Points(200);
      dispatch(totalPoints("NOC00POINTS",Noc00Points));
      //dispatch(additionalPoints("noemploymentnoc0abChecked"));
     // setChecknoc0AB(false);
      //console.log("00",Checknoc00);
    }
    if (Checknoc00 == false /* || globalNoc0 === "NO" */) {
      dispatch(additionalPoints("noemploymentnoc0Checked"));
      setNoc00Points(0);
      dispatch(totalPoints("NOC00POINTS",Noc00Points));
      // console.log("00",Checknoc00);
    }
  }, [Checknoc00,Noc00Points]); 

  useEffect(() => {
    if (Checksibling == true) {
      dispatch(additionalPoints("siblingChecked"));
      setSiblingPoints(15);
      dispatch(totalPoints("SIBLINGPOINTS",SiblingPoints));
     // console.log(SiblingPoints);
    //  console.log(Checksibling);
    }
    if (Checksibling == false) {
      dispatch(additionalPoints("nosiblingChecked"));
      setSiblingPoints(0);
      dispatch(totalPoints("SIBLINGPOINTS",SiblingPoints));  
     // console.log(SiblingPoints);
     // console.log(Checksibling);
    }
  }, [Checksibling,SiblingPoints]);

  useEffect(() => {
    if (Checknomination == true) {
      dispatch(additionalPoints("provinsionalChecked"));
      setNominationPoints(600);
      dispatch(totalPoints("PROVISIONALNOMINATIONPOINTS",NominationPoints)); 
      //dispatch(totalPoints("SPOUSELANGUAGEPOINTS",SpouseLanguagePoints) ); 
    }
    if (Checknomination == false) {
      dispatch(additionalPoints("noprovinsionalChecked"));
      setNominationPoints(0);
      dispatch(totalPoints("PROVISIONALNOMINATIONPOINTS",NominationPoints)); 
    }
  }, [Checknomination,NominationPoints]);

  return (
    <div>
      <br></br>
      <div class="flex flex-col">
        <div class="bg-primary shadow-xl  rounded-3xl p-4">
          <div class="flex-none lg:flex">
            <div class="flex-auto ml-3 justify-evenly py-2">
              <div class="flex flex-wrap bg-blue-500 text-white text-lg px-6 py-4 font-bold rounded-xl">
                <h2 class="flex-auto text-lg font-mono font-bold">
                  Additional points
                </h2>
              </div>
              <p class="mt-3"></p>
              <div class="flex py-4  text-sm text-gray-600">
                <div class="flex-1 inline-flex items-center">
                  <p class="px-6 font-mono py-2 text-black text-lg font-semibold bg-white rounded-xl">
                    <Checkbox
                      label="Brother or sister(PR/citizen) living in Canada"
                      checked={Checksibling}
                      onChange={handleClickThree}
                      
                    />
                  </p>
                </div>
                <div class="flex-1 inline-flex items-center">
                  <p class="px-6 font-mono py-2 text-black text-lg font-semibold bg-white rounded-xl">
                   <Checkbox
                      label="Arranged employment - NOC 00"
                      checked={Checknoc00}
                      onChange={handleClickOne}
                      onClick={()=>{setChecknoc0AB(false);}}
                    />
                  </p>
                </div>
              </div>

              <div class="flex py-4  text-sm text-gray-600">
                <div class="flex-1 inline-flex items-center">
                  <p class="px-6 font-mono py-2 text-black text-lg font-semibold bg-white rounded-xl">
                    <Checkbox
                      label="Provincial or territorial nomination"
                      checked={Checknomination}
                      onChange={handleClickTwo}
                    />
                  </p>
                </div>
                <div class="flex-1 inline-flex items-center">
                  <p class="px-6 font-mono py-2 text-black text-lg font-semibold bg-white rounded-xl">
                    <Checkbox
                      label="Arranged employment – any other NOC 0, A or B"
                      checked={Checknoc0AB}
                      onChange={handleClick}
                      onClick={()=>{setChecknoc00(false);}}
                    />
                    {/* //onClick={()=>{dispatch(additionalPoints("employmentnoc0abChecked"));}}/> */}
                  </p>
                </div>
              </div>

              <div class="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div class="flex space-x-3 text-sm font-medium">
                <div class="flex-auto flex space-x-3"></div>
                <div class="mb-2 md:mb-0 font-mono bg-white px-5 py-2 shadow-sm tracking-wider border text-black rounded-full  inline-flex items-center space-x-2 ">
                  <b>
                    <span>Points: </span>
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

export default ExtraPoints;
