import './App.scss';
import Header from './component/Header';
import { Component } from 'react';
import StartupStudio from './component/StartupStudio';
import Heading from './component/Heading';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Heading />
                <StartupStudio />
            </div>
        );
    };
}

export default App;
