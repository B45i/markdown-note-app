import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <i className="fa fa-book" aria-hidden="true"></i>
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">

                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <input className="input navbar-item" type="text" placeholder="Note name" />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <a className="button is-primary" href="#">
                                    <span className="icon">
                                        <i className="fas fa-save"></i>
                                    </span>
                                    <span>Save</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
