export const CELspeaking = (state="Please select CELPIP-G speaking score",action) => {
  switch (action.type) {
    // CELPIP-G conditions start here

    case "scel4":
      return (state = "4");
    case "scel5":
      return (state = "5");
    case "scel6":
      return (state = "6");
    case "scel7":
      return (state = "7");
    case "scel8":
      return (state = "8");
    case "scel9":
      return (state = "9");
    case "scel10":
      return (state = "10");
    case "REMOVE":
        return (state = "Please select CELPIP-G speaking score");

    default:
      return state;
  }
};

    // CELPIP-G second conditions start here speaking
export const CELspeakingsecond = (state="Please select CELPIP-G speaking score",action) => {
  switch (action.type) {

    case "sscel4":
      return (state = "4");
    case "sscel5":
      return (state = "5");
    case "sscel6":
      return (state = "6");
    case "sscel7":
      return (state = "7");
    case "sscel8":
      return (state = "8");
    case "sscel9":
      return (state = "9");
    case "sscel10":
      return (state = "10");
    case "REMOVESECOND":
        return (state = "Please select CELPIP-G speaking score");

    default:
      return state;
  }
};

export const CELreading = (state="Please select CELPIP-G reading score",action) => {
  switch (action.type) {
    // CELPIP-G conditions start here

    case "rcel4":
      return (state = "4");
    case "rcel5":
      return (state = "5");
    case "rcel6":
      return (state = "6");
    case "rcel7":
      return (state = "7");
    case "rcel8":
      return (state = "8");
    case "rcel9":
      return (state = "9");
    case "rcel10":
      return (state = "10");
      case "REMOVE":
        return (state = "Please select CELPIP-G reading score");

    default:
      return state;
  }
};

// second language conditions start here

export const CELreadingsecond = (state="Please select CELPIP-G reading score",action) => {
  switch (action.type) {
    // CELPIP-G conditions start here

    case "srcel4":
      return (state = "4");
    case "srcel5":
      return (state = "5");
    case "srcel6":
      return (state = "6");
    case "srcel7":
      return (state = "7");
    case "srcel8":
      return (state = "8");
    case "srcel9":
      return (state = "9");
    case "srcel10":
      return (state = "10");
      case "REMOVESECOND":
        return (state = "Please select CELPIP-G reading score");

    default:
      return state;
  }
};


export const CELwriting = (state="Please select CELPIP-G writing score",action) => {
    switch (action.type) {
      // CELPIP-G conditions start here
  
      case "wcel4":
        return (state = "4");
      case "wcel5":
        return (state = "5");
      case "wcel6":
        return (state = "6");
      case "wcel7":
        return (state = "7");
      case "wcel8":
        return (state = "8");
      case "wcel9":
        return (state = "9");
      case "wcel10":
        return (state = "10");
      case "REMOVE":
            return (state = "Please select CELPIP-G writing score");
  
      default:
        return state;
    }
  };

  export const CELwritingsecond = (state="Please select CELPIP-G writing score",action) => {
    switch (action.type) {
      // CELPIP-G conditions second language start here
  
      case "swcel4":
        return (state = "4");
      case "swcel5":
        return (state = "5");
      case "swcel6":
        return (state = "6");
      case "swcel7":
        return (state = "7");
      case "swcel8":
        return (state = "8");
      case "swcel9":
        return (state = "9");
      case "swcel10":
        return (state = "10");
      case "REMOVESECOND":
            return (state = "Please select CELPIP-G writing score");
  
      default:
        return state;
    }
  };


  export const CELlistening = (state="Please select CELPIP-G listening score",action) => {
    switch (action.type) {
      // CELPIP-G conditions start here
  
      case "lcel4":
        return (state = "4");
      case "lcel5":
        return (state = "5");
      case "lcel6":
        return (state = "6");
      case "lcel7":
        return (state = "7");
      case "lcel8":
        return (state = "8");
      case "lcel9":
        return (state = "9");
      case "lcel10":
        return (state = "10");
      case "REMOVE":
            return (state = "Please select CELPIP-G listening score");
  
      default:
        return state;
    }
  };

  export const CELlisteningsecond = (state="Please select CELPIP-G listening score",action) => {
    switch (action.type) {
      // CELPIP-G conditions second start here
  
      case "slcel4":
        return (state = "4");
      case "slcel5":
        return (state = "5");
      case "slcel6":
        return (state = "6");
      case "slcel7":
        return (state = "7");
      case "slcel8":
        return (state = "8");
      case "slcel9":
        return (state = "9");
      case "slcel10":
        return (state = "10");
      case "REMOVESECOND":
            return (state = "Please select CELPIP-G listening score");
  
      default:
        return state;
    }
  };


// CELPIP conditions ends here



// CLB levels

/* export const CLBspeaking = (state = "", action) => {
  switch (action.type) {
    case "CLB4speaking":
      return (state = "CLB 4");
    case "CLB5speaking":
      return (state = "CLB 5");
    case "CLB6speaking":
      return (state = "CLB 6");
    case "CLB7speaking":
      return (state = "CLB 7");
    case "CLB8speaking":
      return (state = "CLB 8");
    case "CLB9speaking":
      return (state = "CLB 9");
    case "CLB10speaking":
      return (state = "CLB 10");
    default:
      return state;
  }
}; */