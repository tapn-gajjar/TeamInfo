import axios from "axios";
const baseURL = process.env.REACT_APP_BACKEND_URL;
class API {
  constructor() {
        this.instance = axios.create({
          baseURL: baseURL,
        });
      }
  APICALL(methods, url, body, header) {
    console.log("methods, url, body, header",methods, url, body, header)
    const headerType =
      header == "header"
        ? {
            "Content-Type": "application/json",
          }
        : header == "formHeader"
        ? {
            "Content-Type": "multipart/form-data",
          }
        : {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("authToken"),
          };
    const config = {
      headers: headerType,
    };
    try {
      let response;
      if (methods == "post") {
        response = this.instance.post(`${baseURL}${url}/`, body, config);
      } else if (methods == "get") {
        response = this.instance.get(`${baseURL}${url}/`, config);
      }
      return response;
    } catch (error) {
      return error;
    }
  }
}
const apiInstance = new API();

export const PostLoginAPI = async (body) => {
  return await apiInstance.APICALL("post", "login", body, "header");
};

export const PostSignUpAPI = async (body) => {
  console.log("body",body)
  return await apiInstance.APICALL("post", "register", body, "formHeader");
};

export const GetTeamsAPI = async (body) => {
  return await apiInstance.APICALL("get", "api/team", body, "header");
};
// export const SocialMediaApiCall = async (body) => {
//   return await apiInstance.APICALL(
//     "post",
//     "social-register-login",
//     body,
//     "header"
//   );
// };

export default apiInstance;
