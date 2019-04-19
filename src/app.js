import React,{Component} from 'react';

import {view as CitySelect} from './citySelect/';
import {view as Weather} from './weather/';

class App extends Component {
    render() {
        return (
            <div>
                <CitySelect/>
                <Weather/>
            </div>
        );
    }
}

export default App;