export const IS_LOADER = "IS_LOADER";
export const LOGINAPI = "LOGINAPI";
export const SIGNUPAPI = "SIGNUPAPI";
export const GETTEAMSDATA = "GETTEAMSDATA";
export const SAVETEAMSDATA = "SAVETEAMSDATA";


export const actionLoader = (data) => ({
    type: IS_LOADER,
    payload: data,
  });

export const LoginAPI = (data) => ({
    type: LOGINAPI,
    payload: data,
  });

export const SignUpAPI = (data) => ({
    type: SIGNUPAPI,
    payload: data,
  });
  
export const GetTeamsData = (data) => ({
    type: GETTEAMSDATA,
    payload: data,
  });
export const SaveTeamsData = (data) => ({
    type: SAVETEAMSDATA,
    payload: data,
  });
  
