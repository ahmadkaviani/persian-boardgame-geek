import {React, useState} from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        console.log(1);
      setShowNavbar(!showNavbar)
    }


    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={handleShowNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {/* <div className="navbar-nav" > */}
                    <div className={'navbar-nav'}>
                        <NavLink className="nav-item nav-link active" to="/">خانه</NavLink>
                        <NavLink className="nav-item nav-link" to="/Game">فلان</NavLink>
                        <NavLink className="nav-item nav-link" to="/AboutUs">درباره ما</NavLink>
                    </div>
                </div>
            </nav>

        </>)
}



export default NavBar;