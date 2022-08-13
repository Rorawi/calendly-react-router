import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar Navbar">
                <div className="container-fluid">
                    {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                    <div class="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand"to={"/"}>
                                    <img alt="Brand" src="officeimages/th (10).jpg" width="35%" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                    <div className="collapse navbar-collapse navbarside" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to={"/individuals"}>Individuals</Link></li>
                            <li><Link to={"/team"}>Teams</Link></li>
                            <li><Link to={"/enterprise"}>Enterprise</Link></li>
                        </ul>
                    </div>
                    {/* <!-- /.navbar-collapse --> */}
                </div>
                {/* <!-- /.container-fluid --> */}
            </nav>

        </div>
    );
}

export default Navbar;
