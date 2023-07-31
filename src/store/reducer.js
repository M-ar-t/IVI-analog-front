import * as actions from './actionTypes'

const initialState ={
    isAuth : false
}
const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case actions.AUTH_TOGGLE:
            return {...state, isAuth: !state.isAuth}
    
        default:
            return state;
    }
}
export default reducer