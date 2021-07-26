export const SecondCLBwriting = (state="",action)=>{
    switch(action.type){
      case "SCLB4writing":
        return (state = "CLB 4");
      case "SCLB5writing":
        return (state = "CLB 5");
      case "SCLB6writing":
        return (state = "CLB 6");
      case "SCLB7writing":
        return (state = "CLB 7");
      case "SCLB8writing":
        return (state = "CLB 8");
      case "SCLB9writing":
        return (state = "CLB 9");
      case "SCLB10writing":
        return (state = "CLB 10");
      default:
        return state;
    }
  };

  export const SecondCLBlistening = (state="", action)=>{
    switch (action.type){
      case "SCLB4listening":
        return (state = "CLB 4");
      case "SCLB5listening":
        return (state = "CLB 5");
      case "SCLB6listening":
        return (state = "CLB 6");
      case "SCLB7listening":
        return (state = "CLB 7");
      case "SCLB8listening":
        return (state = "CLB 8");
      case "SCLB9listening":
        return (state = "CLB 9");
      case "SCLB10listening":
        return (state = "CLB 10");
      default:
        return state;

    }
  };

  export const SecondCLBspeaking = (state="",action)=>{
    switch(action.type){
      case "SCLB4speaking":
        return (state = "CLB 4");
      case "SCLB5speaking":
        return (state = "CLB 5");
      case "SCLB6speaking":
        return (state = "CLB 6");
      case "SCLB7speaking":
        return (state = "CLB 7");
      case "SCLB8speaking":
        return (state = "CLB 8");
      case "SCLB9speaking":
        return (state = "CLB 9");
      case "SCLB10speaking":
        return (state = "CLB 10");
      default:
        return state;
    }
  };

  
  export const SecondCLBreading = (state="",action)=>{
    switch(action.type){
      case "SCLB4reading":
        return (state = "CLB 4");
      case "SCLB5reading":
        return (state = "CLB 5");
      case "SCLB6reading":
        return (state = "CLB 6");
      case "SCLB7reading":
        return (state = "CLB 7");
      case "SCLB8reading":
        return (state = "CLB 8");
      case "SCLB9reading":
        return (state = "CLB 9");
      case "SCLB10reading":
        return (state = "CLB 10");
      default:
        return state;
    }
  };
  