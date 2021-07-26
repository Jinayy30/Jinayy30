export const TCFspeaking = (
  state = "please select TCF speaking score",
  action
) => {
  switch (action.type) {
    case "stcf4-5":
      return (state = "4-5");
    case "stcf6":
      return (state = "6");
    case "stcf7-9":
      return (state = "7-9");
    case "stcf10-11":
      return (state = "10-11");
    case "stcf12-13":
      return (state = "12-13");
    case "stcf14-15":
      return (state = "14-15");
    case "stcf16-20":
      return (state = "16-20");
    case "REMOVE":
      return (state = "please select TCF speaking score");
    default:
      return state;
  }
};


// Second language conditions spekaing

export const TCFspeakingsecond = (
  state = "Please select TCF speaking score",
  action
) => {
  switch (action.type) {
    case "sstcf4-5":
      return (state = "4-5");
    case "sstcf6":
      return (state = "6");
    case "sstcf7-9":
      return (state = "7-9");
    case "sstcf10-11":
      return (state = "10-11");
    case "sstcf12-13":
      return (state = "12-13");
    case "sstcf14-15":
      return (state = "14-15");
    case "sstcf16-20":
      return (state = "16-20");
    case "REMOVESECOND":
      return (state = "Please select TCF speaking score");
    default:
      return state;
  }
};

export const TCFwriting = (
  state = "please select TCF writing score",
  action
) => {
  switch (action.type) {
    case "wtcf4-5":
      return (state = "4-5");
    case "wtcf6":
      return (state = "6");
    case "wtcf7-9":
      return (state = "7-9");
    case "wtcf10-11":
      return (state = "10-11");
    case "wtcf12-13":
      return (state = "12-13");
    case "wtcf14-15":
      return (state = "14-15");
    case "wtcf16-20":
      return (state = "16-20");
    case "REMOVE":
      return (state = "please select TCF writing score");
    default:
      return state;
  }
};


// second language condition fro writing

export const TCFwritingsecond = (
  state = "Please select TCF writing score",
  action
) => {
  switch (action.type) {
    case "swtcf4-5":
      return (state = "4-5");
    case "swtcf6":
      return (state = "6");
    case "swtcf7-9":
      return (state = "7-9");
    case "swtcf10-11":
      return (state = "10-11");
    case "swtcf12-13":
      return (state = "12-13");
    case "swtcf14-15":
      return (state = "14-15");
    case "swtcf16-20":
      return (state = "16-20");
    case "REMOVESECOND":
      return (state = "Please select TCF writing score");
    default:
      return state;
  }
};

export const TCFreading = (
  state = "please select TCF reading score",
  action
) => {
  switch (action.type) {
    case "rtcf342-374":
      return (state = "342-374");
    case "rtcf375-405":
      return (state = "375-405");
    case "rtcf406-452":
      return (state = "406-452");
    case "rtcf453-498":
      return (state = "453-498");
    case "rtcf499-523":
      return (state = "499-523");
    case "rtcf524-548":
      return (state = "524-548");
    case "rtcf549-699":
      return (state = "549-699");
    case "REMOVE":
      return (state = "please select TCF reading score");
    default:
      return state;
  }
};

// second language conditions reading

export const TCFreadingsecond = (
  state = "Please select TCF reading score",
  action
) => {
  switch (action.type) {
    case "srtcf342-374":
      return (state = "342-374");
    case "srtcf375-405":
      return (state = "375-405");
    case "srtcf406-452":
      return (state = "406-452");
    case "srtcf453-498":
      return (state = "453-498");
    case "srtcf499-523":
      return (state = "499-523");
    case "srtcf524-548":
      return (state = "524-548");
    case "srtcf549-699":
      return (state = "549-699");
    case "REMOVESECOND":
      return (state = "Please select TCF reading score");
    default:
      return state;
  }
};


export const TCFlistening = (
  state = "please select TCF listening score",
  action
) => {
  switch (action.type) {
    case "ltcf331-368":
      return (state = "331-368");
    case "ltcf369-397":
      return (state = "369-397");
    case "ltcf398-457":
      return (state = "398-457");
    case "ltcf458-502":
      return (state = "458-502");
    case "ltcf503-522":
      return (state = "503-522");
    case "ltcf523-548":
      return (state = "523-548");
    case "ltcf549-699":
      return (state = "549-699");
    case "REMOVE":
      return (state = "please select TCF listening score");
    default:
      return state;
  }
};

// second language conditions fro listening

export const TCFlisteningsecond = (
  state = "Please select TCF listening score",
  action
) => {
  switch (action.type) {
    case "sltcf331-368":
      return (state = "331-368");
    case "sltcf369-397":
      return (state = "369-397");
    case "sltcf398-457":
      return (state = "398-457");
    case "sltcf458-502":
      return (state = "458-502");
    case "sltcf503-522":
      return (state = "503-522");
    case "sltcf523-548":
      return (state = "523-548");
    case "sltcf549-699":
      return (state = "549-699");
    case "REMOVESECOND":
      return (state = "Please select TCF listening score");
    default:
      return state;
  }
};
