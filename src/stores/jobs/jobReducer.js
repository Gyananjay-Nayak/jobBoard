import JOB_CONST from "./jobConst";

const initialState = {
  error: "",
  loading: false,
  offset: 0,
};

const Jobs = (state, action) => {
  if (typeof state === "undefined") {
    state = initialState;
  }

  switch (action.type) {
    case JOB_CONST.JOB_LIST_REQUEST:
      state = {
        ...state,
        loading: true,
        jobList: null,
        error: "",
      };
      break;
    case JOB_CONST.JOB_LIST_SUCCESS:
        console.log(state)
      state = {
        ...state,
        loading: false,
        jobList:
          action.payload.statusCode === 200 ? action.payload.data : false,
        offset: state.offset + 10, // update offset
        error: "",
      };
      break;
    case JOB_CONST.JOB_LIST_ERROR:
      state = {
        ...state,
        loading: true,
        jobList: null,
        error: action.payload.data ? action.payload.data.errorDescription : "",
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Jobs;