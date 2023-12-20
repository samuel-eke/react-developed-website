function Navigation() {
    return(
        <>
            <nav className="navbar navbar-expand-sm bg-danger navbar-light justify-content-center">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#coursenavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="coursenavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Courses</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Responsive Web Design</a></li>
                                    <li><a className="dropdown-item" href="#">Ethical Hackingn</a></li>
                                    <li><a className="dropdown-item" href="#">Cyber Security</a></li>
                                    <li><a className="dropdown-item" href="#">Solidity</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navigation;