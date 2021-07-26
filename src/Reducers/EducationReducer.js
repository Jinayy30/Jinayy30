export const EducationReducer = (
  state = "Please Select Your Education",
  action
) => {
  switch (action.type) {
    case "None":
      return (state = "None, or less than secondary (high school)");
    case "SECONDARYDIPLOMA":
      return (state = "Secondary diploma (high school graduation");
    case "ONEYEARPROGRAM":
      return (state =
        "One-year program at a university, college, trade or technical school, or other institute");
    case "TWOYEARPROGRAM":
      return (state =
        "Two-year program at a university, college, trade or technical school, or other institute");
    case "BACHELOR":
      return (state =
        "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)");
    case "TWOCERTIFICATES":
      return (state =
        "Two years or more certificates, diploma or degrees. One must be for a program of three or more years");
    case "MASTER":
      return (state =
        "Master's degree, or professional degree needed to practice in a licensed profession");
    case "DOCTORAL":
      return (state = "Doctoral level university degree (PhD)");
    default:
      return state;
  }
};

export const canadianEducation = (
  state = "Please Select Your Canadian Education",
  action
) => {
  switch (action.type) {
    case "SECONDARY":
      return (state = "Secondary(high school) or less");
    case "CERTIFICATE":
      return (state = "One or two year diploma or certificate");
    case "DEGREE":
      return (state =
        "Master, doctoral, professional or three year degree certificate");
    default:
      return state;
  }
};

export const educationSkilltransfer = (state = "", action) => {
  switch (action.type) {
    case "SKILLNONE":
      return (state = "None or less than secondary school");
    case "SKILLONEYEAR":
      return (state = "One year at university");
    case "SKILLTWOYEAR":
      return (state = "Two year university program");
    case "SKILLBACHELOR":
      return (state = "Bachelor");
    case "SKILLMASTER":
      return (state = "Master");
    case "SKILLPHD":
      return (state = "Phd / Doctoral");
    default:
      return state;
  }
};
