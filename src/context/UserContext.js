
import {createContext} from "react";

const UserContext = createContext({
    name : null,
    isAuth : false,
});

export default UserContext