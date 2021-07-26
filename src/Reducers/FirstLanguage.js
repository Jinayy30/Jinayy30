const FirstLanguage = (state="", action)=>{
   
    switch(action.type){

      case "IELTS" :
          return state = "IELTS"
      case "CEL" :
          return state = "CELPIP-G"
      case "TCF" :
          return state = "TCF"
      case "TEF" :
          return state = "TEF"
      default :
          return state;


    }


}

export default FirstLanguage;