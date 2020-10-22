import React from 'react'

const Login = () => {

  const onChangeEmail = () => {

  }

  const onChangePassword = () => {

  }

  return (
    <div>
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Sign In</h1>

          <form>
            <div className="campo-form">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" onChange={onChangeEmail} />
            </div>
            <div className="campo-form">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" onChange={onChangePassword} />
            </div>

            <div className="campo-form">
              <input type="submit" className="btn btn-primario btn-block" value="Sign In"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
