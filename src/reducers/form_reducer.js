import { SET_FIELD, SUBMIT_START, SUBMIT_ERROR, RESET_RESULT } from '../actions'

const form_reducer = (state, action) => {
  if (action.type === SET_FIELD) {
    return {
      ...state,
      [action.payload.field]: action.payload.value,
    }
  }
  if (action.type === SUBMIT_START) {
    return {
      ...state,
      loading: true,
    }
  }
  if (action.type === SUBMIT_SUCCESS) {
    return {
      ...initialState,
      result: 'Mensaje enviado correctamente!',
    }
  }
  if (action.type === SUBMIT_ERROR) {
    return {
      ...state,
      result: action.payload.error,
      loading: false,
    }
  }
  if (action.type === RESET_RESULT) {
    return {
      ...state,
      result: '',
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default form_reducer
