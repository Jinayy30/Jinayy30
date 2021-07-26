export const TEFspeaking = (
  state = "please select TEF speaking score",
  action
) => {
  switch (action.type) {
    case "stef181-225":
      return (state = "181-225");
    case "stef226-270":
      return (state = "226-270");
    case "stef271-309":
      return (state = "271-309");
    case "stef310-348":
      return (state = "310-348");
    case "stef349-370":
      return (state = "349-370");
    case "stef371-392":
      return (state = "371-392");
    case "stef393-450":
      return (state = "393-450");
    case "REMOVE":
      return (state = "please select TEF speaking score");
    default:
      return state;
  }
};


// conditions for second language

export const TEFspeakingsecond = (
    state = "Please select TEF speaking score",
    action
  ) => {
    switch (action.type) {
      case "sstef181-225":
        return (state = "181-225");
      case "sstef226-270":
        return (state = "226-270");
      case "sstef271-309":
        return (state = "271-309");
      case "sstef310-348":
        return (state = "310-348");
      case "sstef349-370":
        return (state = "349-370");
      case "sstef371-392":
        return (state = "371-392");
      case "sstef393-450":
        return (state = "393-450");
      case "REMOVESECOND":
        return (state = "Please select TEF speaking score");
      default:
        return state;
    }
  };

export const TEFwriting = (
  state = "please select TEF writing score",
  action
) => {
  switch (action.type) {
    case "wtef181-225":
      return (state = "181-225");
    case "wtef226-270":
      return (state = "226-270");
    case "wtef271-309":
      return (state = "271-309");
    case "wtef310-348":
      return (state = "310-348");
    case "wtef349-370":
      return (state = "349-370");
    case "wtef371-392":
      return (state = "371-392");
    case "wtef393-450":
      return (state = "393-450");
    case "REMOVE":
      return (state = "please select TEF writing score");
    default:
      return state;
  }
};


// second language conditions for writing
export const TEFwritingsecond = (
    state = "Please select TEF writing score",
    action
  ) => {
    switch (action.type) {
      case "swtef181-225":
        return (state = "181-225");
      case "swtef226-270":
        return (state = "226-270");
      case "swtef271-309":
        return (state = "271-309");
      case "swtef310-348":
        return (state = "310-348");
      case "swtef349-370":
        return (state = "349-370");
      case "swtef371-392":
        return (state = "371-392");
      case "swtef393-450":
        return (state = "393-450");
      case "REMOVESECOND":
        return (state = "Please select TEF writing score");
      default:
        return state;
    }
  };

export const TEFreading = (
  state = "please select TEF reading score",
  action
) => {
  switch (action.type) {
    case "rtef121-150":
      return (state = "121-150");
    case "rtef151-180":
      return (state = "151-180");
    case "rtef181-206":
      return (state = "181-206");
    case "rtef207-232":
      return (state = "207-232");
    case "rtef233-247":
      return (state = "233-247");
    case "rtef248-262":
      return (state = "248-262");
    case "rtef263-300":
      return (state = "263-300");
    case "REMOVE":
      return (state = "please select TEF reading score");
    default:
      return state;
  }
};

//second language conditions for reading

export const TEFreadingsecond = (
    state = "Please select TEF reading score",
    action
  ) => {
    switch (action.type) {
      case "srtef121-150":
        return (state = "121-150");
      case "srtef151-180":
        return (state = "151-180");
      case "srtef181-206":
        return (state = "181-206");
      case "srtef207-232":
        return (state = "207-232");
      case "srtef233-247":
        return (state = "233-247");
      case "srtef248-262":
        return (state = "248-262");
      case "srtef263-300":
        return (state = "263-300");
      case "REMOVESECOND":
        return (state = "Please select TEF reading score");
      default:
        return state;
    }
  };

export const TEFlistening = (
  state = "please select TEF listening score",
  action
) => {
  switch (action.type) {
    case "ltef145-180":
      return (state = "145-180");
    case "ltef181-216":
      return (state = "181-216");
    case "ltef217-248":
      return (state = "217-248");
    case "ltef249-279":
      return (state = "249-279");
    case "ltef280-297":
      return (state = "280-297");
    case "ltef298-315":
      return (state = "298-315");
    case "ltef316-360":
      return (state = "316-360");
    case "REMOVE":
      return (state = "please select TEF listening score");
    default:
      return state;
  }
};

// second language conditions for listening

export const TEFlisteningsecond = (
    state = "Please select TEF listening score",
    action
  ) => {
    switch (action.type) {
      case "sltef145-180":
        return (state = "145-180");
      case "sltef181-216":
        return (state = "181-216");
      case "sltef217-248":
        return (state = "217-248");
      case "sltef249-279":
        return (state = "249-279");
      case "sltef280-297":
        return (state = "280-297");
      case "sltef298-315":
        return (state = "298-315");
      case "sltef316-360":
        return (state = "316-360");
      case "REMOVESECOND":
        return (state = "Please select TEF listening score");
      default:
        return state;
    }
  };
