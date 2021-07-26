

const MarriedStatus = (state='Please select your marital status',action) =>{
    switch(action.type){
      case "SINGLE":
          return state="single"
      case "MARRIED":
          return state="married"
      default:
          return state;
    }

}

export default MarriedStatus;