import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NewAccount = () => {
  
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  })

  const { username, email, password, confirm } = user;

  const onChangeField = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();

    // Validate empty fields

    // Validate password with minimum 6 character

    // Validate password and confirm password

    // Send to action
  }

  return (
    <div>
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Create your account</h1>

          <form onSubmit={onSubmit}>
            <div className="campo-form">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={onChangeField} />
            </div>

            <div className="campo-form">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={onChangeField} />
            </div>

            <div className="campo-form">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={onChangeField} />
            </div>

            <div className="campo-form">
              <label htmlFor="confirm">Confirm Password</label>
              <input type="password" id="confirm" name="confirm" placeholder="Confirm Password" value={confirm} onChange={onChangeField} />
            </div>

            <div className="campo-form">
              <input type="submit" className="btn btn-primario btn-block" value="Sign Up"/>
            </div>
          </form>

          <Link to={'/'} className="enlace-cuenta">
            Return to sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewAccount
