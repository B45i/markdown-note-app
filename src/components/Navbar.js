import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <i class="fa fa-book" aria-hidden="true"></i>
                </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">

                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <input class="input navbar-item" type="text" placeholder="Note name" />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <a class="button is-primary" href="#">
                                    <span class="icon">
                                        <i class="fas fa-save"></i>
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
