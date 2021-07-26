export const SpouseComingstatus = (
  state = "Please select spouse accompanying status",
  action
) => {
  switch (action.type) {
    case "accompanying":
      return (state = "Spouse accompanying");
    case "notaccompanying":
      return (state = "Not accompanying");
    default:
      return state;
  }
};

export const SpousePR = (state = "Please select spouse PR status", action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const SpouseEducation = (
  state = "Please select spouse education",
  action
) => {
  switch (action.type) {
    case "SPOUSEEDUCATIONNONE":
      return (state = "None, or less than secondary (high school)");
    case "SPOUSESECONDARYDIPLOMA":
      return (state = "Secondary diploma (high school graduation)");
    case "SPOUSEONEYEARPROGRAM":
      return (state = "One-year program at a university");
    case "SPOUSETWOYEARPROGRAM":
      return (state = "Two-year program at a university");
    case "SPOUSEBACHELORDEGREE":
      return (state = "Bachelor's degree");
    case "SPOUSETWOYEARCERTIFICATE":
      return (state = "Two years or more certificates");
    case "SPOUSEMASTER":
      return (state = "Master's degree");
    case "SPOUSEPHD":
      return "Doctoral level university degree (PhD)";
    case "REMOVESPOUSEEDU":
      return (state = "Please select spouse education");
    default:
      return state;
  }
};

export const SpouseExperience = (
  state = "Please select spouse's experience",
  action
) => {
  switch (action.type) {
    case "SPOUSENONE":
      return (state = "None or less than a year");
    case "SPOUSE1year":
      return (state = "1 year");
    case "SPOUSE2year":
      return (state = "2 years");
    case "SPOUSE3year":
      return (state = "3 years");
    case "SPOUSE4year":
      return (state = "4 years");
    case "SPOUSE5year":
      return (state = "5 years or more");
    case "REMOVESPOUSEEXP":
      return (state = "Please select spouse's experience");
    default:
      return state;
  }
};

// SPOUSE langugae conditions start here
export const SpouseLanguageSelect = (state = "Not applicable", action) => {
  switch (action.type) {
    case "SpouseIELTS":
      return (state = "IELTS");
    case "SpouseCELPIP-G":
      return (state = "CELPIP-G");
    case "SpouseTCF":
      return (state = "TCF");
    case "SpouseTEF":
      return (state = "TEF");
    case "SpouseNotapplicable":
      return (state = "Not applicable");
    default:
      return state;
  }
};

// SPOUSE IELTS speaking score
export const SpouseSpeaking = (
  state = "Please select speaking score",
  action
) => {
  switch (action.type) {
    // IELS speaking
    case "spouses4.0-4.5":
      return (state = "4.0 - 4.5");
    case "spouses5.0":
      return (state = "5.0");
    case "spouses5.5":
      return (state = "5.5");
    case "spouses6.0":
      return (state = "6.0");
    case "spouses6.5":
      return (state = "6.5");
    case "spouses7.0":
      return (state = "7.0");
    case "spouses7.5-9.0":
      return (state = "7.5 - 9.0");

      // CEL speaking
      case "spousescel4":
        return (state = "4");
      case "spousescel5":
        return (state = "5");
      case "spousescel6":
        return (state = "6");
      case "spousescel7":
        return (state = "7");
      case "spousescel8":
        return (state = "8");
      case "spousescel9":
        return (state = "9");
      case "spousescel10":
        return (state = "10");
    
      // TEF speaking
      case "spousestef181-225":
        return (state = "181-225");
      case "spousestef226-270":
        return (state = "226-270");
      case "spousestef271-309":
        return (state = "271-309");
      case "spousestef310-348":
        return (state = "310-348");
      case "spousestef349-370":
        return (state = "349-370");
      case "spousestef371-392":
        return (state = "371-392");
      case "spousestef393-450":
        return (state = "393-450");
      
     // TCF speaking

     case "spousestcf4-5":
      return (state = "4-5");
    case "spousestcf6":
      return (state = "6");
    case "spousestcf7-9":
      return (state = "7-9");
    case "spousestcf10-11":
      return (state = "10-11");
    case "spousestcf12-13":
      return (state = "12-13");
    case "spousestcf14-15":
      return (state = "14-15");
    case "spousestcf16-20":
      return (state = "16-20");

    case "spouselanguageREMOVE":
      return (state = "Please select speaking score");
    default:
      return state;
  }
};

// SPOUSE WRITING SCORE
export const SpouseWriting = (
  state = "Please select writing score",
  action
) => {
  switch (action.type) {
    case "spousew4.0-4.5":
      return (state = "4.0 - 4.5");
    case "spousew5.0":
      return (state = "5.0");
    case "spousew5.5":
      return (state = "5.5");
    case "spousew6.0":
      return (state = "6.0");
    case "spousew6.5":
      return (state = "6.5");
    case "spousew7.0":
      return (state = "7.0");
    case "spousew7.5-9.0":
      return (state = "7.5 - 9.0");


    // CEL writing score
    case "spousewcel4":
        return (state = "4");
      case "spousewcel5":
        return (state = "5");
      case "spousewcel6":
        return (state = "6");
      case "spousewcel7":
        return (state = "7");
      case "spousewcel8":
        return (state = "8");
      case "spousewcel9":
        return (state = "9");
      case "spousewcel10":
        return (state = "10");

    // TEF writing
    case "spousewtef181-225":
      return (state = "181-225");
    case "spousewtef226-270":
      return (state = "226-270");
    case "spousewtef271-309":
      return (state = "271-309");
    case "spousewtef310-348":
      return (state = "310-348");
    case "spousewtef349-370":
      return (state = "349-370");
    case "spousewtef371-392":
      return (state = "371-392");
    case "spousewtef393-450":
      return (state = "393-450");

    // TCF writing

    case "spousewtcf4-5":
      return (state = "4-5");
    case "spousewtcf6":
      return (state = "6");
    case "spousewtcf7-9":
      return (state = "7-9");
    case "spousewtcf10-11":
      return (state = "10-11");
    case "spousewtcf12-13":
      return (state = "12-13");
    case "spousewtcf14-15":
      return (state = "14-15");
    case "spousewtcf16-20":
      return (state = "16-20");

    case "spouselanguageREMOVE":
      return (state = "Please select writing score");
    default:
      return state;
  }
};


//SPOUSE LISTENING SCORE
export const SpouseListening = (
  state = "Please select listening score",
  action
) => {
  switch (action.type) {
    // IELTS listening
    case "spousel4.5":
      return (state = "4.5");
    case "spousel5.0":
      return (state = "5.0");
    case "spousel5.5":
      return (state = "5.5");
    case "spousel6.0-7.0":
      return (state = "6.0 - 7.0");
    case "spousel7.5":
      return (state = "7.5");
    case "spousel8.0":
      return (state = "8.0");
    case "spousel8.5-9.0":
      return (state = "8.5 - 9.0");

    // CEL listening
    case "spouselcel4":
        return (state = "4");
      case "spouselcel5":
        return (state = "5");
      case "spouselcel6":
        return (state = "6");
      case "spouselcel7":
        return (state = "7");
      case "spouselcel8":
        return (state = "8");
      case "spouselcel9":
        return (state = "9");
      case "spouselcel10":
        return (state = "10");
      
    //TEF listening
    case "spouseltef145-180":
      return (state = "145-180");
    case "spouseltef181-216":
      return (state = "181-216");
    case "spouseltef217-248":
      return (state = "217-248");
    case "spouseltef249-279":
      return (state = "249-279");
    case "spouseltef280-297":
      return (state = "280-297");
    case "spouseltef298-315":
      return (state = "298-315");
    case "spouseltef316-360":
      return (state = "316-360");
    
    // TCF listening
    case "spouseltcf331-368":
      return (state = "331-368");
    case "spouseltcf369-397":
      return (state = "369-397");
    case "spouseltcf398-457":
      return (state = "398-457");
    case "spouseltcf458-502":
      return (state = "458-502");
    case "spouseltcf503-522":
      return (state = "503-522");
    case "spouseltcf523-548":
      return (state = "523-548");
    case "spouseltcf549-699":
      return (state = "549-699");

    case "spouselanguageREMOVE":
      return (state = "Please select listening score");
    default:
      return state;
  }
};

// SPOUSE READING SCORE
export const SpouseReading = (
  state = "Please select reading score",
  action
) => {
  switch (action.type) {

    // IELTS reading
    case "spouser3.5":
      return (state = "3.5");
    case "spouser4.0-4.5":
      return (state = "4.0 - 4.5");
    case "spouser5.0-5.5":
      return (state = "5.0 - 5.5");
    case "spouser6.0":
      return (state = "6.0");
    case "spouser6.5":
      return (state = "6.5");
    case "spouser7.0-7.5":
      return (state = "7.0 - 7.5");
    case "spouser8.0-9.0":
      return (state = "8.0 - 9.0");

    // CEL reading

    case "spousercel4":
      return (state = "4");
    case "spousercel5":
      return (state = "5");
    case "spousercel6":
      return (state = "6");
    case "spousercel7":
      return (state = "7");
    case "spousercel8":
      return (state = "8");
    case "spousercel9":
      return (state = "9");
    case "spousercel10":
      return (state = "10");
    
    // TCF reading

    case "spousertcf342-374":
      return (state = "342-374");
    case "spousertcf375-405":
      return (state = "375-405");
    case "spousertcf406-452":
      return (state = "406-452");
    case "spousertcf453-498":
      return (state = "453-498");
    case "spousertcf499-523":
      return (state = "499-523");
    case "spousertcf524-548":
      return (state = "524-548");
    case "spousertcf549-699":
      return (state = "549-699");

    // TEF reading
    case "spousertef121-150":
      return (state = "121-150");
    case "spousertef151-180":
      return (state = "151-180");
    case "spousertef181-206":
      return (state = "181-206");
    case "spousertef207-232":
      return (state = "207-232");
    case "spousertef233-247":
      return (state = "233-247");
    case "spousertef248-262":
      return (state = "248-262");
    case "spousertef263-300":
      return (state = "263-300");
      
    case "spouselanguageREMOVE":
      return (state = "Please select reading score");
    default:
      return state;
  }
};

// SPOUSE CLB LEVELS
export const SpouseCLBspeaking = (state = "", action) => {
    switch (action.type) {
      case "spouseCLB4speaking":
        return (state = "CLB 4");
      case "spouseCLB5speaking":
        return (state = "CLB 5");
      case "spouseCLB6speaking":
        return (state = "CLB 6");
      case "spouseCLB7speaking":
        return (state = "CLB 7");
      case "spouseCLB8speaking":
        return (state = "CLB 8");
      case "spouseCLB9speaking":
        return (state = "CLB 9");
      case "spouseCLB10speaking":
        return (state = "CLB 10");
    case "spouselanguageREMOVE":
            return (state = "");
      default:
        return state;
    }
  };

  export const SpouseCLBwriting = (state = "", action) => {
    switch (action.type) {
      case "spouseCLB4writing":
        return (state = "CLB 4");
      case "spouseCLB5writing":
        return (state = "CLB 5");
      case "spouseCLB6writing":
        return (state = "CLB 6");
      case "spouseCLB7writing":
        return (state = "CLB 7");
      case "spouseCLB8writing":
        return (state = "CLB 8");
      case "spouseCLB9writing":
        return (state = "CLB 9");
      case "spouseCLB10writing":
        return (state = "CLB 10");
      case "spouselanguageREMOVE":
            return (state = "");
      default:
        return state;
    }
  };
  
  export const SpouseCLBreading = (state = "", action) => {
    switch (action.type) {
      case "spouseCLB4reading":
        return (state = "CLB 4");
      case "spouseCLB5reading":
        return (state = "CLB 5");
      case "spouseCLB6reading":
        return (state = "CLB 6");
      case "spouseCLB7reading":
        return (state = "CLB 7");
      case "spouseCLB8reading":
        return (state = "CLB 8");
      case "spouseCLB9reading":
        return (state = "CLB 9");
      case "spouseCLB10reading":
        return (state = "CLB 10");
      case "spouselanguageREMOVE":
            return (state = "");
      default:
        return state;
    }
  };

  export const SpouseCLBlistening = (state = "", action) => {
    switch (action.type) {
      case "spouseCLB4listening":
        return (state = "CLB 4");
      case "spouseCLB5listening":
        return (state = "CLB 5");
      case "spouseCLB6listening":
        return (state = "CLB 6");
      case "spouseCLB7listening":
        return (state = "CLB 7");
      case "spouseCLB8listening":
        return (state = "CLB 8");
      case "spouseCLB9listening":
        return (state = "CLB 9");
      case "spouseCLB10listening":
        return (state = "CLB 10");
      case "spouselanguageREMOVE":
            return (state = "");
      default:
        return state;
    }
  };
  