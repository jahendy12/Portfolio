import React from 'react'

function NavBar() {
    return (
    <nav className="#000000 black">    
        <div className="container">
            <div className="row">
                <div className="col s12">
                        <div className="nav-wrapper" >
                            <a href="/" className="brand-logo left">Joe Hendy</a>
                            <a href="/" className="brand-logo right">Web Developer</a>
                                {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/aboutme">About Me</a></li>
                                </ul> */}
                        </div>
                </div>
            </div>
        </div>
    </nav>    
    )
}

export default NavBar
