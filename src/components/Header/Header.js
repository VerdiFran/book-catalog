import React from'react'
import {Layout} from 'antd'

/**
 * Header component
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({isAuth, userData}) => {
    const {Header} = Layout

    return (
        <Header>
            <div>Book Catalog</div>
            {
                isAuth && <div>{userData}</div>
            }
        </Header>
    )
}

export default Header
