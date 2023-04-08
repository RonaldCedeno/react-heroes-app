import { types } from "../types/types";

export const authReducer = (state={}, action) => {
    
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            };
            
        case types.logout:
            return {
                logged:false
            };
        
        default:
            return state;
        }
            
}

// Return si esta autenticado
// const state = {
//     name: 'Usuario',
//     logged: true
// }