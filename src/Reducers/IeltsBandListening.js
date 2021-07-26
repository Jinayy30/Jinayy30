export const IeltsBandListening = (
  state = "Please select IELTS listening score",
  action
) => {
  switch (action.type) {
    case "l4.5":
      return (state = "4.5");
    case "l5.0":
      return (state = "5.0");
    case "l5.5":
      return (state = "5.5");
    case "l6.0-7.0":
      return (state = "6.0 - 7.0");
    case "l7.5":
      return (state = "7.5");
    case "l8.0":
      return (state = "8.0");
    case "l8.5-9.0":
      return (state = "8.5 - 9.0");
    case "REMOVE":
      return (state = "Please select IELTS listening score");
    default:
      return state;
  }
};

// second language conditions

export const IeltsBandListeningsecond = (
  state = "Please select IELTS listening score",
  action
) => {
  switch (action.type) {
    case "sl4.5":
      return (state = "4.5");
    case "sl5.0":
      return (state = "5.0");
    case "sl5.5":
      return (state = "5.5");
    case "sl6.0-7.0":
      return (state = "6.0 - 7.0");
    case "sl7.5":
      return (state = "7.5");
    case "sl8.0":
      return (state = "8.0");
    case "sl8.5-9.0":
      return (state = "8.5 - 9.0");
    case "REMOVESECOND":
      return (state = "Please select IELTS listening score");
    default:
      return state;
  }
};


// CLB level

export const CLBlistening = (state = "", action) => {
    switch (action.type) {
      case "CLB4listening":
        return (state = "CLB 4");
      case "CLB5listening":
        return (state = "CLB 5");
      case "CLB6listening":
        return (state = "CLB 6");
      case "CLB7listening":
        return (state = "CLB 7");
      case "CLB8listening":
        return (state = "CLB 8");
      case "CLB9listening":
        return (state = "CLB 9");
      case "CLB10listening":
        return (state = "CLB 10");
      default:
        return state;
    }
  };
  

 
