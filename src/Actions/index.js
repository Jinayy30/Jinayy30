export const single = (e) => {
  return {
    type: e,
  };
};

export const totalPoints = (description, points) => {
  return {
    type: description,
    payload: points,
  };
};

export const ageActions = (age) => {
  return {
    type: age,
  };
};

export const educationActions = (education) => {
  return {
    type: education,
  };
};

export const firstLanguageCheck = (flang) => {
  return {
    type: flang,
  };
};

export const secondLanguageCheck = (slang) => {
  return {
    type: slang,
  };
};

//ielts language conditions for primary language start here
export const firstIeltsspeaking = (fieltsspeaking) => {
  return {
    type: fieltsspeaking,
  };
};

export const firstIeltslistening = (fieltslistening) => {
  return {
    type: fieltslistening,
  };
};

export const firstIeltsreading = (fieltsreading) => {
  return {
    type: fieltsreading,
  };
};

export const firstIeltswriting = (fieltswriting) => {
  return {
    type: fieltswriting,
  };
};

export const ieltsScore = (iscore) => {
  return {
    type: iscore,
  };
};

// ielts conditions end here

//CELPIP-G conditions start here
export const celpipscore = (celpip) => {
  return {
    type: celpip,
  };
};

// CELPIP-G conditions end here

// TCF conditions start here
export const tcfscore = (tcf) => {
  return {
    type: tcf,
  };
};

// TCF conditions end here

// TEF conditions start here
export const tefscore = (tef) => {
  return {
    type: tef,
  };
};

// TEF conditions end here

// work experience starts
export const experience = (work) => {
  return{
     type: work,
  };
};
 // workexperience ends here


 // finding out clb levels across first language selection
 export const clblevelspeaking = (clb) =>{
   return{
      type:clb,
   };
 };

 export const clblevelwriting = (clbwriting) =>{
  return{
     type:clbwriting,
  };
};

export const clblevelreading = (clbreading) =>{
  return{
     type:clbreading,
  };
};

export const clblevellistening = (clblistening) =>{
  return{
     type:clblistening,
  };
};

export const secondclblevel = (secondclb) =>{
  return{
    type:secondclb,
  };
};
// CLB conditions end here

// SPOUSE conditions start here

export const spouseCondition = (spouse) =>{
   return{
       type:spouse,
   };
};

export const spouseLanguage = (language)=>{
  return{
     type:language
  }
}

export const spouselanguagescore = (spousescore)=>{
  return{
    type:spousescore
  }
}

export const spouseCLBlevel = (spouseclb)=>{
  return{
    type:spouseclb
  }
}

// ADDITIONAL POINTS

export const additionalPoints = (add)=>{
  return{
    type:add
  }
}