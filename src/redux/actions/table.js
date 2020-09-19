import {
    FETCH_TABLE_SUCCESS,
    LOAD_FROM_STORAGE_SUCCESS,
    ON_CHANGE_STATE
} from "./actionTypes";

const URL = 'https://reqres.in/api/unknown?per_page=12';

export function fetchTable() {
    return async dispatch => {
        try {
            const response = await fetch(URL);
            const state = {
                resetDisabled: true,
                head: [],
                columnState: {},
                data: []
            };

            if (response.ok) {
                let json = await response.json();
                state.data = json.data.slice();

                for (let key in state.data[0]) {
                    key = key.replace('_', ' ');
                    state.head.push(key);
                    state.columnState[key] = true;
                }
            }

            dispatch(fetchTableSuccess(state))
        } catch (e) {
            console.log(e);
        }
    }
};

export function fetchTableSuccess(state) {
    return {
        type: FETCH_TABLE_SUCCESS,
        state
    }
}



export function loadFromStorage() {
    return dispatch => {
        const columnState = JSON.parse(localStorage.getItem('columnState'));
        if (columnState) {
            dispatch(loadFromStorageSuccess(columnState));
        }
    }
};

export function loadFromStorageSuccess(columnState) {
    return {
        type: LOAD_FROM_STORAGE_SUCCESS,
        columnState
    }
};

export function onChange(key) {
    return (dispatch, getState) => {
        const columnState = Object.assign({}, getState().table.columnState);
        columnState[key] = false;

        dispatch(onChangeState(columnState));

        localStorage.setItem('columnState', JSON.stringify(columnState));
    };
};

export function onChangeState(columnState) {
    return {
        type: ON_CHANGE_STATE,
        columnState
    }
}

