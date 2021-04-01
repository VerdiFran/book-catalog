import React from'react'
import {Layout} from 'antd'
import {NavLink} from 'react-router-dom'
import {TO_CATALOG} from '../../routes'

/**
 * Header component
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({isAuth, userData}) => {
    const {Header} = Layout

    return (
        <Header>
            <div><NavLink to={TO_CATALOG}>Book Catalog</NavLink></div>
            {
                isAuth && <div>{userData}</div>
            }
        </Header>
    )
}

export default Header
