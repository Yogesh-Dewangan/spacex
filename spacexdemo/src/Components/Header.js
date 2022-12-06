export default function Header() {


    return <nav className='container-fluid navbar navbar-dark bg-dark bg-opacity-75 p-1'>

        <a className="navbar-brand" href="#">
            <h1 className='row h1 text-light px-5 d-inline-block'>SpaceX</h1>
        </a>
        <button className="navbar-toggler mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link">Dragon Capsule</a>
            </li>
            <li className="nav-item">
            <a className="nav-link">About Us</a>
            </li>    
        </ul>
        </div>
    </nav>
}