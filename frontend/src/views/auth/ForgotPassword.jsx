import { useState } from 'react'
import apiInstance from '../../utils/axios'

function ForgotPassword() {
    const [email, setEmail] = useState('')
    const handleSubmit = () => {
        try {
            apiInstance.get(`user/password-reset/${email}`).then((response) => {
            console.log(response.data)
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Forgot Password</h1>
            <p>Please enter your email address to reset your password.</p>
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
            <button onClick={handleSubmit}>Reset Password</button>
        </div>
    )
}
export default ForgotPassword