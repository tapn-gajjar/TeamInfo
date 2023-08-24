import { IS_LOADER, SAVETEAMSDATA } from "../action/Action"

const INIT_STATE = {
    isLoader: false,
    teamsData: [],
  }

const Reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case IS_LOADER:
        return {
          ...state,
          layoutType: action.payload,
        }
      case SAVETEAMSDATA:
        return {
          ...state,
          teamsData: action.payload,
        }
  
      default:
        return state
    }
  }
  
  export default Reducer
  