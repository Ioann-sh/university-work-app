import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Button from './button/Button';
import  s from './header.module.css';
//import './header.css';


function Header({ROUTES}) {

    const [activeButton, setActiveButton] = useState(ROUTES.CALCULATOR.path)
    const navigate = useNavigate();


        return (
            <div className={s.header}>

                <div className={s.logo}></div>
                <div className={s.btns}>
                {Object.values(ROUTES).map(route =>
                route.path !== ROUTES.MAIN.path ?
                <Button key = {route.path}
                    onClick={setActiveButton}
                    isActive={activeButton}
                    path={route.path}
                    title={route.title}/>
                : '')}
                </div>
            </div>
        );
}

export default Header;