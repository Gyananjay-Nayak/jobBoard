import JOB_CONST from "./jobConst";

export const jobListRequest = (data) => {
  return {
    type: JOB_CONST.JOB_LIST_REQUEST,
    payload: data,
  };
};
export const jobListSuccess = (data) => {
  return {
    type: JOB_CONST.JOB_LIST_SUCCESS,
    payload: data,
  };
};
export const jobListError = (error) => {
  return {
    type: JOB_CONST.JOB_LIST_ERROR,
    payload: error,
  };
};
