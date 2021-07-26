export const ForeignWorkexperience = (
  state = "Please select total experience in last 10 years",
  action
) => {
  switch (action.type) {
    case "NONE":
      return (state = "None or less than a year");
    case "1year":
      return (state = "1 year");
    case "2year":
      return (state = "2 years");
    case "3year":
      return (state = "3 years");
    default:
      return state;
  }
};

export const CanadianWorkexperience = (
  state = "Please select Canadian work experience in last 10 years",
  action
) => {
  switch (action.type) {
    case "canNONE":
      return (state = "None or less than a year");
    case "can1year":
      return (state = "1 year");
    case "can2year":
      return (state = "2 years");
    case "can3year":
      return (state = "3 years");
    case "can4year":
      return (state = "4 years");
    case "can5year":
      return (state = "5 years or more");
    default:
      return state;
  }
};

export const ExperienceSkilltransfer = (state = "",action)=>{
 
  switch(action.type)
  {
    case "SKILLEXPNONE":
      return state = "None"
     case "SKILLEXP1OR2":
       return state = "1 year or 2 years"
      case "SKILLEXP3":
        return state = "3 years or more"
      default:
        return state;
  };
};
