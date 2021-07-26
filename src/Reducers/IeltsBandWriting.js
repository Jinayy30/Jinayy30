export const IeltsBandWriting = (
  state = "Please select IELTS writing score",
  action
) => {
  switch (action.type) {
    case "w4.0-4.5":
      return (state = "4.0 - 4.5");
    case "w5.0":
      return (state = "5.0");
    case "w5.5":
      return (state = "5.5");
    case "w6.0":
      return (state = "6.0");
    case "w6.5":
      return (state = "6.5");
    case "w7.0":
      return (state = "7.0");
    case "w7.5-9.0":
      return (state = "7.5 - 9.0");
    case "REMOVE":
      return (state = "Please select IELTS writing score");
    default:
      return state;
  }
};

// SECOND language conditions start here

export const IeltsBandWritingsecond = (
  state = "Please select IELTS writing score",
  action
) => {
  switch (action.type) {
    case "sw4.0-4.5":
      return (state = "4.0 - 4.5");
    case "sw5.0":
      return (state = "5.0");
    case "sw5.5":
      return (state = "5.5");
    case "sw6.0":
      return (state = "6.0");
    case "sw6.5":
      return (state = "6.5");
    case "sw7.0":
      return (state = "7.0");
    case "sw7.5-9.0":
      return (state = "7.5 - 9.0");
    case "REMOVESECOND":
      return (state = "Please select IELTS writing score");
    default:
      return state;
  }
};

/// CLB level

export const CLBwriting = (state = "", action) => {
  switch (action.type) {
    case "CLB4writing":
      return (state = "CLB 4");
    case "CLB5writing":
      return (state = "CLB 5");
    case "CLB6writing":
      return (state = "CLB 6");
    case "CLB7writing":
      return (state = "CLB 7");
    case "CLB8writing":
      return (state = "CLB 8");
    case "CLB9writing":
      return (state = "CLB 9");
    case "CLB10writing":
      return (state = "CLB 10");
    default:
      return state;
  }
};

