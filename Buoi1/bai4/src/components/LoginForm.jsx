import React from 'react'
import { useState } from 'react'
import './LoginForm.css'

const LoginForm = () => {
  const [type, setType] = useState(null);
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <button className="btn-success" onClick={() => { setType("success"); setShowForm(true); }}>
        Success Form
      </button>
      <button className="btn-warning" onClick={() => { setType("warning"); setShowForm(true); }}>
        Warning Form
      </button>
      <button className="btn-error" onClick={() => { setType("error"); setShowForm(true); }}>
        Error Form
      </button>

      {showForm && (
        <div className={`login-form form-${type}`}>
          <div className='title-and-x'>
            <h2>Login form {type}</h2>
            <button className='close-btn' onClick={() => setShowForm(false)}>x</button>
          </div>
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <button className='login-btn'>Login</button>
        </div>
      )
      }
    </div>
  )
}

export default LoginForm
