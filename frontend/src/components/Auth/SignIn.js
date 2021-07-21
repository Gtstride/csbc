import React from 'react'

const SignIn = () => {
  return (
    <div>
      <form>
        <div className="h4">Sign in</div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <a
            href="/forgot-password"
            className="open-popup"
          >
            Forgot password?
          </a>
          <a
            href="/sign-up"
            className="open-popup"
          >
            Don't have an account?
          </a>
        </div>
        <button type="submit" className="btn btn-block btn-main">
          Submit
        </button>
      </form>
    </div >
  )
}

export default SignIn;
