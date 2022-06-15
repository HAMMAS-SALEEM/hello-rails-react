import axios from "axios";

const FETCH_MESSAGES = 'FETCH_MESSAGES'

const initialState = [];

const getMessages = (payload) => ({
  type: FETCH_MESSAGES,
  payload    
})

const fetchMessages = () => async (dispatch) => {
  const response = await axios.get("/v1/home")
  const message = response.data
  dispatch(getMessages(message))
}

export const fetchMsg = () => (dispatch) => {
  fetch(`/v1/home`)
    .then((res) => res.json())
    .then((json) => {
      dispatch(getMessages(json));
  });
};

const messageReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_MESSAGES:
    return action.payload
    default:
    return state;   
  }
}

export default messageReducer;
export {fetchMessages};