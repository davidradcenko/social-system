import React, {useCallback} from 'react';
import {dataType, social} from "./API/api";
import HeaderHtml from "./elements/HeaderHtml";
import Main from "./elements/MainHtml";



function App() {
    const me = () => {
        const data: dataType = {
            email: "davedqwerty1@gmail.com",
            password: "davidqwerty07112001",
            rememberMe: true,
        }
        return social.authMe()
    }

    return (
        <div className="App">
            <HeaderHtml/>
            <Main/>
        </div>
    );
}

export default App;
