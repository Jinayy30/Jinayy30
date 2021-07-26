const AgeReducer = (state="Please select your age",action)=>{

switch(action.type){

    case "17orless" :
     return state = "17 or less"
 
 case "18" :
     return state = "18"
 case "19" :
     return state = "19"
 case "20to29" :
     return state = "20 to 29"
 case "30" :
     return state = "30"
 case "31" :
     return state = "31"
 case "32" :
     return state = "32"
 case "33" :
     return state = "33"
 case "34" :
     return state = "34"
 case "35" :
     return state = "35"
 case "36" :
     return state = "36"
 case "37" :
     return state = "37"
 case "38" :
     return state = "38"
 case "39" :
     return state = "39"
 case "40" :
     return state = "40"
 case "41" :
      return state = "41"
 case "42" :
      return state = "42"
 case "43" :
      return state = "43"
 case "44" :
      return state = "44"
 case "45ormore" :
      return state = "45 or more"
default :
      return state;

}

}


export default AgeReducer;