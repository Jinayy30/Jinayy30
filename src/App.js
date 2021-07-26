import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./Components/visibility.css";
import Home from "./Home";
import Shop from "./Shop";
import Navbar from "./Navbar";
import Routing from "./Routing";
import Age from "./Components/Age";
import Education from "./Components/Education";
import Navigation from "./Components/Navigation";
import WorkExperience from "./Components/WorkExperience";
import Spouse from './Components/SpouseFactors/Spouse';
import Footer from "./Components/Footer";
import FirstLanguage from "./Components/Firstlanguage/FirstLanguage";
import SecondLanguage from "./Components/SecondLanguage";
import MarrigialStatus from "./Components/MarrigialStatus";
import CanadianEducation from "./Components/CanadianEducation";
import CanadianExperience from "./Components/CanadianExperience";
//import EducationSkilltransfer from "./Components/EducationSkilltransfer";
import SpouseEducation from "./Components/SpouseFactors/SpouseEducation";
import SpouseExperience from "./Components/SpouseFactors/SpouseExperience";
import SpouseLanguageTest from "./Components/SpouseFactors/SpouseLanguageTest";
import ExtraPoints from "./Components/ExtraPoints/ExtraPoints";
import { single, totalPoints, ageActions, educationActions } from "./Actions";
import background from "/Users/jinay/nodeJs/seasons/src/img/coolbackground4.png";
import { useDispatch, useSelector } from "react-redux";

import {

  Segment,
} from "semantic-ui-react";
import MarriedStatus from "./Reducers/MarriedStatus";

const App = () => {
  const marriegeStatus = useSelector((state) => state.marriage);
  const ageStatus = useSelector((state) => state.age);
  const [open, setOpen] = useState("hide");
  const [openAll, setopenAll] = useState("hide");
  const [operEvery, setopenEvery] = useState("hide");
  const spousecoming = useSelector((state) => state.spouseaccompanyingstatus);

  //const [visible,setVisible] = useState("disabled");

  useEffect(() => {
  
    if (
      marriegeStatus === "Please select your marital status" ||
      ageStatus === "Please select your age"
    ) {
      setopenEvery("hide");
    } 
   else{
      setopenEvery("show");
    }

   //console.log("openEvery", operEvery);
  },[operEvery,ageStatus,marriegeStatus]);

  useEffect(() => {
    if(marriegeStatus === "married")
    {
      setOpen("show");
    }
    if(marriegeStatus === "single")
    {
      setOpen("hide");
    }
     //console.log("open", open);
  },[marriegeStatus,ageStatus,open]);

  useEffect(()=>{
  if(spousecoming === "Not accompanying")
  {
      setopenAll("hide");
  }
  if(spousecoming === "Spouse accompanying")
  {
    setopenAll("show");
  }
  },[spousecoming]);
  //div class= "disabled:opacity-100" disabled>

  return (
    <div>
      <Segment style={{ backgroundImage: `url(${background})` }}>
        <div>
          <Navigation />
        </div>
        <div class="content">
          <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
            <div>
              <MarrigialStatus />
            </div>
            <div>
              <Age />
            </div>

          </div>  {/* THIS DIVISION MANAGES WHETHER COMPONENTS NEEDS TO BE 2 colums in same raw or not LIKE age and marrige status */}
          
          <div className={operEvery}>
          <div className={open}>
            <Spouse />
           
           <div className ={openAll}> <div class="grid   gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
            <div>
            <SpouseEducation/>
            </div>
            <div>
            <SpouseExperience/>
            </div>
          </div>
          <SpouseLanguageTest/>
          </div> 

          </div>
          <div>
                <Education />
              </div>
              <div>
                <CanadianEducation />
              </div>
          <div>
            <FirstLanguage />
          </div>
          <div>
            <SecondLanguage />
          </div>
          <div>
            <WorkExperience />
          </div>
          <div>
            <CanadianExperience />
          </div>
          <div><ExtraPoints/></div>
          <div>
            <Footer />
          </div>
          </div>
          
        </div>{" "}
      </Segment>

      {/*  <BrowserRouter>
        <Routing/>
        <Navbar/>
        </BrowserRouter> */}
    </div>
  );
};

export default App;
