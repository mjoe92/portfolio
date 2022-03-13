import { Component } from 'react';
import "./semantic-style/semantic.css";

export class Header extends Component {
    render() {
        return (
            <header className='header'>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id='navbarText'>
                        <ul className="navbar-nav mr-auto">
                            <li><a href="https://javaguides.net" className="navbar-brand">PCD</a></li>
                            <li className='nav-item'>MISSION</li>
                            <li className='nav-item'>WORKBENCH</li>
                            <li className='nav-item'>ABOUT ME</li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2022 @PCD</span>
            </footer>
        );
    }
}