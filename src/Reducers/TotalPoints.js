const TotalPoints = (state = 0, actions) => {
  switch (actions.type) {
    case "AGEPOINTS":
      return {
        ...state,
        agepoints: actions.payload,
      };

    case "EDUCATIONPOINTS":
      return {
        ...state,
        educationpoints: actions.payload,
      };

    case "CANADIANEDUCATIONPOINTS":
      return {
        ...state,
        canadianstudypoints: actions.payload,
      };

    case "MARRIEDPOINTS":
      return {
        ...state,
        marriedpoints: actions.payload,
      };

    case "FIRSTIELTSPOINTS":
      return {
        ...state,
        firstieltspoints: actions.payload,
      };

    case "SECONDLANGUAGEPOINTS":
      return {
        ...state,
        secondlanguagepoints: actions.payload,
      };

    case "FOREIGNWORKEXPERIENCE":
      return {
        ...state,
        foreignexperiencepoints: actions.payload,
      };

    case "SKILLTRANSFEREDUCATION":
        return {
          ...state,
          educationskilltranferpoints: actions.payload,
        };

    case "CANADIANWORKEXPERIENCE":
      return {
        ...state,
        canadianexperiencepoints: actions.payload,
      };

    case "SKILLTRANSFEREXPERIENCE":
        return {
          ...state,
          workexperienceskilltranferpoints: actions.payload,
        };
    
    case "SKILLTRANSFERCANADIANPLUSEDUCATION":
          return {
            ...state,
            skillcanadianpluseducation: actions.payload,
          };
   
    case "SPOUSEEDUCATIONPOINTS":
            return {
              ...state,
              spouseeducationpoints: actions.payload,
            };
     case "SPOUSEEXPERIENCEPOINTS":
              return {
                ...state,
                spouseexperiencepoints: actions.payload,
              };
    
     case "SPOUSELANGUAGEPOINTS":
       return{
         ...state,
         spouselanguagepoints : actions.payload,
       };

       // EXTRA POINTS
    case "SIBLINGPOINTS":
       return{
         ...state,
         siblingpoints : actions.payload,

       };

    case "NOC00POINTS":
       return{
       ...state,
        noc00points: actions.payload,
       };

    case "NOC0ABPOINTS":
        return{
        ...state,
        noc0abpoints: actions.payload,
        };

    case "PROVISIONALNOMINATIONPOINTS":
       return{
        ...state,
        provisionalnominationpoints : actions.payload,
       };

    case "FRENCHBONUSPOINTS":
      return{
      ...state,
         frenchbonuspoints : actions.payload,
      };


    // EXTRA POINTS end here

    /* case "SPOUSEEXPERIENCEPOINTS":
       return{
       ...state,
         spouseexperiencepoints : actions.payload,
       }; */

    case "FINALPOINTS":
      return {
        ...state,
        finalpoints: actions.payload,
      };

  case "REMOVEPREVIOUS":
        return {
          removepoints: actions.payload,
        };

    default:
      return state;
  }
};

export default TotalPoints;
