import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Style/Header.module.css'

function Header() {

  return (
    <div className={style.headding}>
        <img className={style.header_logo} src='./img/logo.png'></img>
        <div className={style.header_nav}>
            <div className={style.header_option}> 
              <Link to='/' ><span className={style.header_Title}>Phalanx</span></Link>
            </div>
        </div>
        
    </div>
  );
}

export default Header;
