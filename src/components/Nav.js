import React from 'react'

function Nav() {
    return (
        <div>
            <header className="App-header">
                <ul className="nav-header">
                    <li className = "nav-item"><a href="/">Home</a></li>
                    <li className = "nav-item"><a href='/about'>About</a></li>
                    <li className = "nav-item"><a href='/services'>Services</a></li>
                    <li className = "nav-item"><a href='/blog'>Blog</a></li>
                    <li className = "nav-item"><a href='/contact'>Contact</a></li>
                    <li className = "nav-item"><a href='/login'>Login/Register</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Nav