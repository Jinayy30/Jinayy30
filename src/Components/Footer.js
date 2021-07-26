import { React, useState, useEffect } from "react";
import {
  Button,
  Segment,
  Modal,
  Header,
} from "semantic-ui-react";
import { single, totalPoints, ageActions, educationActions } from "../Actions";
import ReactToPrint from 'react-to-print';
import { useDispatch, useSelector } from "react-redux";
import { PdfScore } from "../PDF/PdfScore";


 const Footer = () => {
  let newpoint = 0;
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();

  //const marriegeStatus = useSelector((state) => state.marriage);
  const agePoints = useSelector((state) => state.points.agepoints);
  const educationPoints = useSelector((state) => state.points.educationpoints);
  const canadianeducationPoints = useSelector(
    (state) => state.points.canadianstudypoints
  );
  const firstlanguagePoints = useSelector(
    (state) => state.points.firstieltspoints
  );

  const secondlanguagePoints = useSelector(
    (state) => state.points.secondlanguagepoints
  );
  const workexperience = useSelector(
    (state) => state.points.foreignexperiencepoints
  );
  const skilltransferedu = useSelector(
    (state) => state.points.educationskilltranferpoints
  );
  const grandTotal = useSelector((state) => state.points.finalpoints);
  const skillexperiencetransfer = useSelector(
    (state) => state.points.workexperienceskilltranferpoints
  );
  const canadianexperiencepoints = useSelector(
    (state) => state.points.canadianexperiencepoints
  );
  const spouseeducationPoints = useSelector(
    (state) => state.points.spouseeducationpoints
  );

  const canadaexprpluseducation = useSelector(
    (state) => state.points.skillcanadianpluseducation
  );
  const [skilltranfer, setSkilltransfer] = useState(0);
  const Canadianwork = useSelector((state) => state.canadianexperience);
  const foreignWorkexperience = useSelector((state) => state.foreignexperience);
  const educationStatus = useSelector((state) => state.education);

  // EXTRA points

  const SiblingPoints = useSelector((state)=>state.points.siblingpoints);
  const NominationPoints = useSelector((state)=>state.points.provisionalnominationpoints);
  const Noc00Points = useSelector((state)=>state.points.noc00points);
  const Noc0abPoints = useSelector((state)=>state.points.noc0abpoints);
  const frenchPoints = useSelector((state)=>state.points.frenchbonuspoints);

  //SPOUSE points

  const SpouseLanguagePoints = useSelector((state)=> state.points.spouselanguagepoints);
  //const SpouseeducationPoints = useSelector((state)=> state.points.spouseeducationpoints);
  const SpouseexperiencePoints = useSelector ((state)=> state.points.spouseexperiencepoints);

  const [max, setMax] = useState(0);
  const [max1, setMax1] = useState(0);

  const [ExtraMax,setExtraMax] = useState(0);
  
  // skillcanadianpluseducation
  //educationskilltransferpoints

  useEffect(() => {
    if (
      Canadianwork !== "Please select Canadian work experience in last 10 years"
    ) {
      
      if ((canadaexprpluseducation + skilltransferedu) < 50) {
        setMax(canadaexprpluseducation + skilltransferedu);
        //console.log("maxg<50", max);
      }
      if ((canadaexprpluseducation + skilltransferedu) >= 50) {
        setMax(50);
       // console.log("maxg>=50", max);
      }
      if (canadaexprpluseducation == skilltransferedu) {
        if ((canadaexprpluseducation + skilltransferedu) < 50) {
          setMax(canadaexprpluseducation + skilltransferedu);
        }
       // console.log("max<=", max);
        if ((canadaexprpluseducation + skilltransferedu) >= 50) {
          setMax(50);
         // console.log("max>=", max);
        }
      }
    } else {
      setMax(skilltransferedu+workexperience);
     // console.log("maxgelse", max);
    }
  }, [canadaexprpluseducation, skilltransferedu, Canadianwork,workexperience]); // useEffect for checking conditions end here

  // workexperienceskilltransferpoints
  // foreignexperiencepoints

  useEffect(()=>{
    if(Canadianwork !== "Please select Canadian work experience in last 10 years" && foreignWorkexperience !== "Please select total experience in last 10 years")
    {
        if((skillexperiencetransfer + workexperience) < 50)
        {
          setMax1(skillexperiencetransfer + workexperience);
          //console.log("expmax<50",max1);
        }
        if((skillexperiencetransfer + workexperience) >= 50)
        {
          setMax1(50);
          //console.log("expmax>=50",max1);
        }
        if(skillexperiencetransfer == workexperience)
        {
          if((skillexperiencetransfer + workexperience)<50)
          {
            setMax1(skillexperiencetransfer + workexperience);
           // console.log("expmaxg<50",max1);
          }
          if((skillexperiencetransfer + workexperience)>=50)
          {
            setMax1(50);
           // console.log("expmaxg>=50",max1);
          }
        }
    }
    else{
      setMax1(skillexperiencetransfer);
    }
    
  },[Canadianwork,foreignWorkexperience,skillexperiencetransfer,workexperience]);


  useEffect(() => {

    if((SiblingPoints + NominationPoints + Noc00Points + Noc0abPoints + canadianeducationPoints + frenchPoints)> 600)
    {
         setExtraMax(600);
    }

    if((SiblingPoints + NominationPoints + Noc00Points + Noc0abPoints + canadianeducationPoints + frenchPoints)<= 600)
    {
         setExtraMax (SiblingPoints + NominationPoints + Noc00Points + Noc0abPoints + canadianeducationPoints + frenchPoints);
    }
  },[SiblingPoints,Noc00Points,Noc0abPoints,NominationPoints,canadianeducationPoints,frenchPoints]);

  useEffect(() => {
    //dispatch(totalPoints("SKILLTRANSFEREDUCATION",skilltranfer));

    newpoint =
      agePoints +
      educationPoints +
      firstlanguagePoints +
      canadianeducationPoints +
      secondlanguagePoints +
      canadianexperiencepoints +
      max +
      max1 +
      SpouseexperiencePoints+
      spouseeducationPoints+
      SpouseLanguagePoints+
      ExtraMax;
    //console.log("main points", newpoint);
  });

 


  return (
    <div>
      <br></br>
      <Segment>

      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='large'
      wrapped 
      trigger={<Button onClick={() => {
        //getmainPoints();
        dispatch(totalPoints("FINALPOINTS", newpoint));
       
        
      }}>Calculate points</Button>}
    >
      <Modal.Header>CRS score : {grandTotal}</Modal.Header>
      <Modal.Content image>
      
        <Modal.Description>
         <div className = "flex-auto text-lg px-6 py-4 font-bold rounded-xl font-mono "> <Header><h1>Core/human capital factors</h1></Header>
          <br></br>
          <p>
          Age : {agePoints}
          </p>
          <br></br>
          <p>Education : {educationPoints}</p>
          <br></br>
          <p>First official language language : {firstlanguagePoints}</p>
          <br></br>
          <p>Second official language : {secondlanguagePoints}</p>
          <br></br>
          <p>Canadian work experience : {canadianexperiencepoints}</p>
          <br></br>
          <Header>Subtotal - Core/Human capital factors : {agePoints + educationPoints + firstlanguagePoints + secondlanguagePoints + canadianexperiencepoints}</Header>
          </div>
          <br></br>


          <div className = "flex-auto text-lg px-6 py-4 font-bold rounded-xl font-mono "> <Header><h1>Spouse factors</h1></Header>
          <br></br>
          <p>
          Level of education : {spouseeducationPoints}
          </p>
          <br></br>
          <p>First language : {SpouseLanguagePoints}</p>
          <br></br>
          <p>Canadian work experience: {SpouseexperiencePoints}</p>
          <br></br>
          
         <div className = "flex-wrap bg-white rounded-xl text-white font-mono"> <Header>Subtotal - Core/Human capital factors : {spouseeducationPoints + SpouseLanguagePoints + SpouseexperiencePoints}</Header></div>
          </div>

          <br></br>
          <div className = "flex-auto text-lg px-6 py-4 font-bold rounded-xl font-mono "> <Header><h1>Skill transferability factors</h1></Header>
          <br></br>
          <Header><h1>Education</h1></Header>
          <br></br>
          <p>
          1). Official Language proficiency and education : {skilltransferedu}
          </p>
          <br></br>
          <p> 2). Canadian work experience and education : {canadaexprpluseducation}</p>
          <br></br>
          <p>Subtotal : {skilltransferedu + canadaexprpluseducation}</p>
          <br></br>
          
         <div className = "flex-wrap bg-white rounded-xl text-white font-mono"> <Header>Subtotal Skill transferability factors : {skilltransferedu + canadaexprpluseducation}</Header></div>
          </div>
        </Modal.Description>
        
      </Modal.Content>
      <Modal.Actions>
        
        <Button
          content="Done"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />

        <Button
          content="Print PDF"
          labelPosition='right'
          icon='print'
          color='blue'
          onClick={() => {setOpen(false);}}
          
     />
        
      </Modal.Actions>
    </Modal>
        

     {/*    <p3>Final Point: {grandTotal}</p3> */}
        
      </Segment>
      
    </div>
  );
};

export default Footer;


