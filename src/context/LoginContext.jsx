import { createContext, useReducer } from "react";

// export for consuming context
// const [state, dispatch] = useReducer(reducer, initalState)
// make 2 contexts for the reducer
// 1) for the state
export const LoginContext = createContext(null)
// 2) for the dispatch
export const LoginDispatchContext = createContext(null)

// initial state for the reducer
const initalState = {
    username: 'Brad'
}

// export for providing the context, which will contain our reducer
export const LoginProvider = ({children}) => {
    const [login, dispatch] = useReducer(loginReducer, initalState)
    return (
        <LoginContext.Provider value={login}>
            <LoginDispatchContext.Provider value={dispatch}>
                {children}
            </LoginDispatchContext.Provider>
        </LoginContext.Provider>
    )
}

// reducer for the above useReducer hook
const loginReducer = (state, action) => {
    switch (action.type) {
        case 'submit':
            return action.payload
        default:
            alert("hit default")
            state;
    }
}