import * as actionTypes from "../actionTypes";

export const loading = (payload: any) => {
  return {
    type: actionTypes.LOADING,
    payload,
  };
};
