import React from 'react';
import './Header.css';

export default({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoyUmy7Zf8Mwh3M_WuA6SNLTesJU6K-TpsNA&usqp=CAU" alt="netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}