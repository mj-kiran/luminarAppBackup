import {
    BATCH_LIST_REQUEST,
    BATCH_LIST_SUCCESS,
    BATCH_LIST_FAIL
} from '../constants/sampleConstants'

import axios from 'axios'

export const getBatchList = () => async (dispatch)=> {
    try {
        dispatch({ type: BATCH_LIST_REQUEST })
        const { data } = await axios.get('/sample.json')
        console.log( data,"data");
        dispatch({type:BATCH_LIST_SUCCESS,payload :data.batches})
        
    } catch (error) {
        dispatch({
            type: BATCH_LIST_FAIL,
            payload:error
        })
    }
}