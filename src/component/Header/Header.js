import React from 'react';
import { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark border-dark border-bottom">
                <div class="container">
                    <a href="#" class="navbar-brand">
                        <h1><strong class="border border-dark">FTW</strong></h1>
                    </a>
                    <nav class="navbar nav-items">
                        <a class="nav-link" href="#">Approach</a>
                        <a class="nav-link" href="#">Projects</a>
                        <a href="#" class="btn text-white btn-outline-dark" role="button" >Get In Touch</a>
                    </nav>
                </div>
            </nav>
        )
    }
}

export default Header;