import React, { useState } from 'react'
import './header.css'
import foto from '../../assets/grupo-14.svg'
import logo from '../../assets/Spotify-logo.png'
import search from '../../assets/Icon awesome-search.svg'

export default function Header() {
    return (
        <div id="Header">
            <div className="leftSide">
                <span className = "logomarca"></span>
                <span>Home</span>
            </div>
            <div className = "search">
                <span></span>
                <input type = 'text' placeholder = "Pesquisar..."/>
            </div>

            <div className="rightSide">
                <div className='userInfo'>
                    <span>Marcelo R</span>
                    <h4> Ouvindo - <strong>O tempo não para</strong> - Cazuza</h4>
                </div>
                <img src= {foto}></img>
            </div>
        </div>
    )
}