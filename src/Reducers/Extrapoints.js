export const SiblingExtra = (state = "NO", action) => {
  switch (action.type) {
    case "siblingChecked":
      return (state = "YES");
    case "nosiblingChecked":
      return (state = "NO");
    default:
      return state;
  }
};

export const ProvisionalNomination = (state = "NO", action) => {
  switch (action.type) {
    case "provinsionalChecked":
      return (state = "YES");
    case "noprovinsionalChecked":
      return (state = "NO");
    default:
      return state;
  }
};

export const EmploymentNoc00 = (state = "NO", action) => {
  switch (action.type) {
    case "employmentnoc0Checked":
      return (state = "YES");
    case "noemploymentnoc0Checked":
      return (state = "NO");
    default:
      return state;
  }
};

export const EmploymentNoc0AB = (state = "NO", action) => {
  switch (action.type) {
    case "employmentnoc0abChecked":
      return (state = "YES");
    case "noemploymentnoc0abChecked":
      return (state = "NO");
    default:
      return state;
  }
};
