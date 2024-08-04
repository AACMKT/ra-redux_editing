import { DEFINE_SERVICE, SET_USER_VALUE, DEFINE_PRICE, DELETE_RECORD, CLEAR_INPUT, EDIT_INPUT } from "./actions";

const initialState = {
  serviceList: [],
  userValue: {id: 0, service: '', price: ''},
};

const recordsPayloadHandler = (records, payload) => {
  let id = records.reduce((maxId, item) => Math.max(item.id, maxId), 0);
  if (payload.price === '') {payload.price = 0}
  let trigger = false
  records.forEach((item) => {
    if (item.id === payload.id) {
      item.service = payload.service;
      item.price = payload.price;
      trigger = true;
      return records
    }
  })
  if (!trigger) {return records.concat({...payload, id: id + 1})}
  else {
    return records
  }
}

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {

    case DEFINE_SERVICE:
      console.log(action)
      return {
        ...state,
        userValue: {...state.userValue, service: action.payload}
      }

    case DEFINE_PRICE:
      return {
          ...state,
          userValue: {...state.userValue, price: action.payload}
      }
    case SET_USER_VALUE:
      return {
        ...state,
        serviceList: recordsPayloadHandler(state.serviceList, action.payload),
      }

    case DELETE_RECORD:
      return {
        ...state,
        serviceList: state.serviceList.filter(item => item.id !== action.payload)
      }

    case CLEAR_INPUT:
      return {
        ...state,
        userValue: {service: '', price: ''}
      }

    case EDIT_INPUT:
      return {
        ...state,
        userValue: action.payload
      }

    default:
      return state;
  }
};

export default serviceReducer;