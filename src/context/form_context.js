import axios from 'axios'
import React, { createContext, useContext, useReducer, useRef } from 'react'
import { initialState } from '../reducers/form_reducer'
import reducer from '../reducers/form_reducer'
import {
  SET_FIELD,
  SUBMIT_START,
  SUBMIT_SUCCESS,
  SUBMIT_ERROR,
  RESET_RESULT,
} from '../actions'

const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const resultRef = useRef(null)

  const handleChange = (e) => {
    dispatch({
      type: SET_FIELD,
      payload: { field: e.target.name, value: e.target.value },
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: SUBMIT_START })

    try {
      await axios.post('/api/email', {
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message,
      })

      dispatch({ type: SUBMIT_SUCCESS })

      if (resultRef.current) {
        resultRef.current.style.opacity = 1
        setTimeout(() => {
          resultRef.current.style.opacity = 0
          dispatch({ type: RESET_RESULT })
        }, 3000)
      }
    } catch (error) {
      dispatch({
        type: SUBMIT_ERROR,
        payload: { error: error.response.data },
      })

      if (resultRef.current) {
        resultRef.current.style.opacity = 1
        setTimeout(() => {
          resultRef.current.style.opacity = 0
          dispatch({ type: RESET_RESULT })
        }, 3000)
      }
    }
  }

  return (
    <FormContext.Provider
      value={{ state, dispatch, handleChange, handleSubmit, resultRef }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => {
  return useContext(FormContext)
}
