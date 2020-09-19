import { FETCH_TABLE_SUCCESS, 
         LOAD_FROM_STORAGE_SUCCESS,
         ON_CHANGE_STATE
        } from "../actions/actionTypes";

const initialState = {
    resetDisabled: true,
    head: [],
    columnState: {}, 
    data: []
};

export default function tableReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TABLE_SUCCESS:
            return {
                ...action.state
            }
        
        case LOAD_FROM_STORAGE_SUCCESS:
            return {
                ...state, 
                columnState: action.columnState, 
                resetDisabled: false
            }
        
        case ON_CHANGE_STATE:
            return {
                ...state,
                columnState: action.columnState,
                resetDisabled: false
            }

        default:
            return state;
    }
}