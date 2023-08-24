import * as actions from "../action/Action";
import { call, put, takeEvery } from "redux-saga/effects";
import API, { GetTeamsAPI, PostLoginAPI, PostSignUpAPI } from "../../services/API";
import toastr from "toastr";
import { toast } from "react-toastify";

function* processLoginApiCall(data) {
  const navigate = data.payload.navigate
    yield put(actions.actionLoader(true));
    try {
      // const response = yield call(API.PostLoginAPI, data.payload);
      const response = yield PostLoginAPI(data.payload.data);
      yield put(actions.actionLoader(false));
      console.log(response);
      if(response.status == 200){
        toast.success("Login Successfully")
        navigate("/teams")
      }
    } catch (error) {
      yield put(actions.actionLoader(false));
    }
  }

function* processSignUpApiCall(data) {
  console.log("data,",data)
  const navigate = data.payload.navigate
    yield put(actions.actionLoader(true));
    try {
      const response = yield PostSignUpAPI(data.payload.data);
      yield put(actions.actionLoader(false));
      console.log(response);
      if(response.status == 201){
        alert("User Created Successfully")
        navigate("/login")
      }
    } catch (error) {
      yield put(actions.actionLoader(false));
    }
  }

function* processGetTeamsDataApiCall(data) {
    yield put(actions.actionLoader(true));
    try {
      const response = yield GetTeamsAPI();
      yield put(actions.actionLoader(false));
      yield put(actions.SaveTeamsData(response.data));
      console.log(response);
      
    } catch (error) {
      console.log(error);
      yield put(actions.actionLoader(false));
    }
  }
  

 function* CommonSaga() { 
    yield takeEvery(actions.LOGINAPI, processLoginApiCall);
    yield takeEvery(actions.SIGNUPAPI, processSignUpApiCall);
    yield takeEvery(actions.GETTEAMSDATA, processGetTeamsDataApiCall);
 }

 export default CommonSaga