import logo from "./images/logo.png"

const Navigation =()=>{

    return(
        <nav className="container">
          <div className="logo">
            <img src={logo} alt="logo" style={{width:"6rem",heigth:"5rem"}}/>
          </div>

          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>
          <button>login</button>
        </nav>
    )
}

export default Navigation 