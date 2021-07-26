export const IeltsBandReading = (
  state = "Please select IELTS reading score",
  action
) => {
  switch (action.type) {
    case "r3.5":
      return (state = "3.5");
    case "r4.0-4.5":
      return (state = "4.0 - 4.5");
    case "r5.0-5.5":
      return (state = "5.0 - 5.5");
    case "r6.0":
      return (state = "6.0");
    case "r6.5":
      return (state = "6.5");
    case "r7.0-7.5":
      return (state = "7.0 - 7.5");
    case "r8.0-9.0":
      return (state = "8.0 - 9.0");
    case "REMOVE":
      return (state = "Please select IELTS reading score");
    default:
      return state;
  }
};

// second language conditions
export const IeltsBandReadingsecond = (
  state = "Please select IELTS reading score",
  action
) => {
  switch (action.type) {
    case "sr3.5":
      return (state = "3.5");
    case "sr4.0-4.5":
      return (state = "4.0 - 4.5");
    case "sr5.0-5.5":
      return (state = "5.0 - 5.5");
    case "sr6.0":
      return (state = "6.0");
    case "sr6.5":
      return (state = "6.5");
    case "sr7.0-7.5":
      return (state = "7.0 - 7.5");
    case "sr8.0-9.0":
      return (state = "8.0 - 9.0");
    case "REMOVESECOND":
      return (state = "Please select IELTS reading score");
    default:
      return state;
  }
};

// CLB level

export const CLBreading = (state = "", action) => {
  switch (action.type) {
    case "CLB4reading":
      return (state = "CLB 4");
    case "CLB5reading":
      return (state = "CLB 5");
    case "CLB6reading":
      return (state = "CLB 6");
    case "CLB7reading":
      return (state = "CLB 7");
    case "CLB8reading":
      return (state = "CLB 8");
    case "CLB9reading":
      return (state = "CLB 9");
    case "CLB10reading":
      return (state = "CLB 10");
    default:
      return state;
  }
};

