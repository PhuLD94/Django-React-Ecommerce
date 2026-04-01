import React from 'react'
import { useAuthStore } from '../../store/auth'
import { Link } from 'react-router-dom'

function Dashboard() {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn())
    return (
        <>
            {isLoggedIn
                ? <div>
                    <h1>Dashboard</h1>
                    <Link to={`/logout`}>Logout</Link>
                </div>
                : <div>
                    <h1>You are not logged in</h1>
                    <Link to={`/register`}>Register</Link>
                    <br/>
                    <Link to={`/login`}>Login</Link>
                </div>
            }
        </>
    )
}

export default Dashboard