import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user;

  const onChangeField = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();

    // Validate empty fields

    // Send to action
    
  }

  return (
    <div>
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Sign In</h1>

          <form onSubmit={onSubmit}>
            <div className="campo-form">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={onChangeField} />
            </div>
            <div className="campo-form">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={onChangeField} />
            </div>

            <div className="campo-form">
              <input type="submit" className="btn btn-primario btn-block" value="Sign In"/>
            </div>
          </form>

          <Link to={'/new-account'} className="enlace-cuenta">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
