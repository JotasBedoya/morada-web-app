import { createContext, useState } from "react";

const initialState = {
    role: 0,
    name: '',
    phone: '',
    identification: '',
    isAuthenticated: false,
};

export const UserContext = createContext(initialState);

export const UserContextStore = (props) =>{

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value= {{user, setUser}}>
            { props.children }

        </UserContext.Provider>
    )

}