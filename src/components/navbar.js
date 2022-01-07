 import './App.css';
 import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg me-auto navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link style={{textDecoration:"none",
                fontSize:"18 px"}} classNameName="navbar-brand" to="/">TextUtils</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse me-auto navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
          </li>
           <li className="nav-item">
             <Link className="nav-link" to="/about">{props.about}</Link>
  </li>
          </ul>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'} `}>
  <input className="form-check-input" onClick={props.toogleSwitch} type="checkbox" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.type}</label>
</div>
    </div>
  </nav>
  );
}

