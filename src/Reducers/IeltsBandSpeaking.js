export const IeltsBandSpeaking = (
  state = "Please select speaking score",
  action
) => {
  switch (action.type) {
    // ielts consditions start here
    case "s4.0-4.5":
      return (state = "4.0 - 4.5");
    case "s5.0":
      return (state = "5.0");
    case "s5.5":
      return (state = "5.5");
    case "s6.0":
      return (state = "6.0");
    case "s6.5":
      return (state = "6.5");
    case "s7.0":
      return (state = "7.0");
    case "s7.5-9.0":
      return (state = "7.5 - 9.0");
    case "REMOVE":
      return (state = "Please select IELTS speaking score");

    //ielts conditions end here
    default:
      return state;
  }
};

// ielts consditions start here second language
export const IeltsBandSpeakingsecond = (
  state = "Please select speaking score",
  action
) => {
  switch (action.type) {
    case "ss4.0-4.5":
      return (state = "4.0 - 4.5");
    case "ss5.0":
      return (state = "5.0");
    case "ss5.5":
      return (state = "5.5");
    case "ss6.0":
      return (state = "6.0");
    case "ss6.5":
      return (state = "6.5");
    case "ss7.0":
      return (state = "7.0");
    case "ss7.5-9.0":
      return (state = "7.5 - 9.0");
    case "REMOVESECOND":
      return (state = "Please select IELTS speaking score");

    //ielts conditions end here
    default:
      return state;
  }
};

export const CLBspeaking = (state = "", action) => {
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
};

