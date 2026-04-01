import React, { useState, useEffect } from 'react'
import { register } from '../../utils/auth'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../../store/auth'

function Register() {
  
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn())
  const navigate = useNavigate()

  useEffect(() => {
      if(isLoggedIn) {
          navigate('/')
      }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const { error } = await register(fullname, email, mobile, password, password2)
    if (error) {
      alert(JSON.stringify(error))
      
    } else {
        navigate('/')
    }
    setIsLoading(false)
  }

  return (
    <div>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Full name'
          name='fullname'
          id='fullname'
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <br/>
        <br/>
        <input
          type='email'
          placeholder='Email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <br/>
        <input
          type='number'
          placeholder='Mobile number'
          name='mobile'
          id='mobile'
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br/>
        <br/>
        <input
          type='password'
          placeholder='Password'
          name='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <br/>
        <input
          type='password'
          placeholder='Confirm Password'
          name='password2'
          id='password2'
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <br/>
        <br/>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register