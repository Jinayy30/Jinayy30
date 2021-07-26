import { combineReducers } from "redux";
import MarriedStatus from "./MarriedStatus";
import TotalPoints from "./TotalPoints";
import AgeReducer from "./AgeReducer";
import {
  EducationReducer,
  canadianEducation,
  educationSkilltransfer,
} from "./EducationReducer";
import FirstLanguage from "./FirstLanguage";
import SecondLanguage from "./SecondLanguage";
import {
  IeltsBandSpeaking,
  IeltsBandSpeakingsecond,
  CLBspeaking,
} from "./IeltsBandSpeaking";
import {
  IeltsBandListening,
  IeltsBandListeningsecond,
  CLBlistening,
} from "./IeltsBandListening";
import {
  IeltsBandReading,
  IeltsBandReadingsecond,
  CLBreading,
} from "./IeltsBandReading";
import {
  IeltsBandWriting,
  IeltsBandWritingsecond,
  CLBwriting,
} from "./IeltsBandWriting";
import {
  CELspeaking,
  CELreading,
  CELwriting,
  CELlistening,
  CELspeakingsecond,
  CELreadingsecond,
  CELwritingsecond,
  CELlisteningsecond,
} from "./CELPIPGlanguage";
import {
  TCFspeaking,
  TCFwriting,
  TCFreading,
  TCFlistening,
  TCFspeakingsecond,
  TCFwritingsecond,
  TCFreadingsecond,
  TCFlisteningsecond,
} from "./TCFlanguage";
import {
  TEFspeaking,
  TEFwriting,
  TEFreading,
  TEFlistening,
  TEFwritingsecond,
  TEFreadingsecond,
  TEFlisteningsecond,
  TEFspeakingsecond,
} from "./TEFlanguage";
import {
  ForeignWorkexperience,
  CanadianWorkexperience,
  ExperienceSkilltransfer,
} from "./Workexperience";
import {
  SpouseComingstatus,
  SpousePR,
  SpouseEducation,
  SpouseExperience,
  SpouseLanguageSelect,
  SpouseSpeaking,
  SpouseWriting,
  SpouseListening,
  SpouseReading,
  SpouseCLBlistening,
  SpouseCLBspeaking,
  SpouseCLBwriting,
  SpouseCLBreading
} from "./Spouse";

import { SecondCLBlistening, SecondCLBreading, SecondCLBspeaking, SecondCLBwriting } from "./SecondCLBlevel";

import { SiblingExtra,  ProvisionalNomination, EmploymentNoc00, EmploymentNoc0AB } from "./Extrapoints";

const allReducers = combineReducers({
  marriage: MarriedStatus,
  points: TotalPoints,
  age: AgeReducer,
  education: EducationReducer,
  canadianeducation: canadianEducation,
  firstlanguage: FirstLanguage,
  secondlanguage: SecondLanguage,
  firstieltsspeaking: IeltsBandSpeaking,
  firstieltslistening: IeltsBandListening,
  firstieltsreading: IeltsBandReading,
  firstieltswriting: IeltsBandWriting,
  secondieltsspeaking: IeltsBandSpeakingsecond,
  secondieltslistening: IeltsBandListeningsecond,
  secondieltsreading: IeltsBandReadingsecond,
  secondieltswriting: IeltsBandWritingsecond,
  firstcelspeaking: CELspeaking,
  firstcelwriting: CELwriting,
  firstcelreading: CELreading,
  firstcellistening: CELlistening,
  secondcelspeaking: CELspeakingsecond,
  secondcelreading: CELreadingsecond,
  secondcelwriting: CELwritingsecond,
  secondcellistening: CELlisteningsecond,
  firsttcfspeaking: TCFspeaking,
  firsttcfwriting: TCFwriting,
  firsttcfreading: TCFreading,
  firsttcflistening: TCFlistening,
  secondtcfspeaking: TCFspeakingsecond,
  secondtcfwriting: TCFwritingsecond,
  secondtcfreading: TCFreadingsecond,
  secondtcflistening: TCFlisteningsecond,
  firsttefspeaking: TEFspeaking,
  firsttefwriting: TEFwriting,
  firsttefreading: TEFreading,
  firstteflistening: TEFlistening,
  secondtefspeaking: TEFspeakingsecond,
  secondtefwriting: TEFwritingsecond,
  secondtefreading: TEFreadingsecond,
  secondteflistening: TEFlisteningsecond,
  foreignexperience: ForeignWorkexperience,
  clbspeaking: CLBspeaking,
  clbwriting: CLBwriting,
  clbreading: CLBreading,
  clblistening: CLBlistening,
  secondclbspeaking : SecondCLBspeaking,
  secondclbwriting : SecondCLBwriting,
  secondclbreading : SecondCLBreading,
  secondclblistening : SecondCLBlistening,
  canadianexperience: CanadianWorkexperience,
  skilltransfereducation: educationSkilltransfer,
  skilltransferexperience: ExperienceSkilltransfer,
  spouseaccompanyingstatus: SpouseComingstatus,
  spousepr: SpousePR,
  spouseeducation: SpouseEducation,
  spouseexperience: SpouseExperience,
  spouselanguagetestselection: SpouseLanguageSelect,
  spousespeakingscore: SpouseSpeaking,
  spousewritingscore: SpouseWriting,
  spouselisteningscore: SpouseListening,
  spousereadingscore: SpouseReading,
  spouseclbspeaking : SpouseCLBspeaking,
  spouseclbwriting : SpouseCLBwriting,
  spouseclbreading : SpouseCLBreading,
  spouseclblistening : SpouseCLBlistening,
  siblingstatus : SiblingExtra,
  provisionalnominationextra : ProvisionalNomination,
  employmentnoc0 : EmploymentNoc00,
  employmentnoc0ab : EmploymentNoc0AB,
});

export default allReducers;
