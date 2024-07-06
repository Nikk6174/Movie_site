import React from 'react'
import NavListItem from '../component/NavListItem'
import navListData from '../data/navListData';
import './header.css';
import Search from '../component/Search';

function Header(){
  return(
    <header>
        <a href="#" className="logo">cinema</a>

        <ul className="nav">
            {
                navListData.map(nav=>(
                    <NavListItem key={nav._id} nav = {nav}/>
                ))
            }
        </ul>
        <Search/>
    </header>
  );
    
}

export default Header;
