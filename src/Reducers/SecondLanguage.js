const SecondLanguage = (state="", action)=>{
   
    switch(action.type){

      case "IELTS2" :
          return state = "IELTS(second)"
      case "CEL2" :
          return state = "CELPIP-G(second)"
      case "TCF2" :
          return state = "TCF(second)"
      case "TEF2" :
          return state = "TEF(second)"
      case "NOTAPPLICABLE" :
          return state = "Not applicable"
      default :
          return state;


    }


}

export default SecondLanguage;