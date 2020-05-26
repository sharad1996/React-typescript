import { createReducer } from "../../../core/reduxUtils";
import { getUniversitiesHandlers } from "./getUniversities";
import { setEducationDetailsHandlers } from "./setEducationDetails";
import { IEducationState } from "../types";

const initialState: IEducationState = {
  data: [
    {
      university: "Oxford",
      startYear: new Date(),
      endYear: new Date(),
      degree: "Mtech",
      field: "test",
      grade: "8.1",
      description: "Education is important for everyone"
    }
  ],
  errors: {},
  universities: []
};

const handlers = {
  ...getUniversitiesHandlers,
  ...setEducationDetailsHandlers,
};

const educationReducer = createReducer(initialState, handlers);

export default educationReducer;
