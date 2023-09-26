import React, { useContext, useState } from 'react'
import './Login.css'


import { ThemeContext } from '../../context/ThemeContext'
import { LoginContext, LoginDispatchContext } from '../../context/LoginContext'
import { submitLogin } from '../../context/LoginContextHelper'

const Login = () => {
    const [value, setValue] = useState({
      username: ''
    })
    const { theme } = useContext(ThemeContext)

    const login = useContext(LoginContext)
    const dispatch = useContext(LoginDispatchContext)

    const onChangeHandler = event => {
      setValue({
        ...value,
        [event.target.name]: event.target.value
      })
    }

  return (
    <div id='login' className={theme}>
      Username: {login.username}
      <br />
      Password: {login.password}
      <br />
      <label htmlFor='username'>Username: </label>
      <input
        type='text'
        name='username'
        value={value.username}
        onChange={onChangeHandler}
      />
      {/* <button onClick={() => dispatch({
        type: "submit",
        payload: value
      })}>Submit</button> */}
      <button onClick={() => submitLogin(dispatch, value)}>Submit</button>
    </div>
  )
}

export default Login