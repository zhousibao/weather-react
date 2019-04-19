import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from "./actionsTypes";

export  const fetchWeatherStarted = () => ({
    type: FETCH_STARTED
})

export const fetchWeatherSuccess = (result) => ({
    type: FETCH_SUCCESS,
    result
})

export const fetchWeatherFailure = (error) => ({
    type: FETCH_FAILURE,
    error
})

export const fetchWeather = (cityCode) => {
    return (dispatch) => {
        const apiUrl = `data/cityinfo/${cityCode}.html`;

        dispatch(fetchWeatherStarted);


        fetch(apiUrl).then((res) => {
            if(res.status !== 200){
                throw new Error('请求错误status:',res.status)
            }

            console.log('res:',res);

            res.json().then((responseJson) => {
                console.log('responseJson:',responseJson);

                dispatch(fetchWeatherSuccess(responseJson.weatherinfo));


            }).catch((error) => {
                dispatch(fetchWeatherFailure(error));
            });




        }).catch((error) => {
            dispatch(fetchWeatherFailure(error));
        })
    }
}