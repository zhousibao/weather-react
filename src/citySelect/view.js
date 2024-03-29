import React, {Component} from 'react';
import {connect} from 'react-redux';

import {actions as weatherActions} from '../weather';

const CITY_CODES = {
    '上海': 101020100,
    '北京': 101010100,
    '广州': 101280101,
    '深圳': 101280601
};

class CitySelect extends Component{
    constructor(){
        super(...arguments);

        this.onChange = this.onChange.bind(this);
    }

    onChange(ev){
        const cityCode = ev.target.value;
        this.props.onSelectCity(cityCode);
    }

    componentDidMount(){
        const defaultCity = Object.keys(CITY_CODES)[0];
        this.props.onSelectCity(CITY_CODES[defaultCity]);
    }

    render(){
        return(
            <select onChange={this.onChange}>
                {
                    Object.keys(CITY_CODES).map(
                        (cityName) => <option key={cityName} value={CITY_CODES[cityName]}>{cityName}</option>
                    )
                }
            </select>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSelectCity: (cityCode) => {
            dispatch(weatherActions.fetchWeather(cityCode));
        }
    }
};

export default  connect(null,mapDispatchToProps)(CitySelect);

