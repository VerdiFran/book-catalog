import React from 'react'
import {Avatar, Button, Dropdown, Layout, Menu} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import {NavLink} from 'react-router-dom'
import {TO_CATALOG, TO_LOGIN, TO_REGISTRATION} from '../../routes'
import styles from './Header.module.scss'

/**
 * Header component
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({isAuth, userData}) => {
    const {Header} = Layout

    const menu = <Menu>
        <Menu.Item>
            <Button type="link">Выйти</Button>
        </Menu.Item>
    </Menu>

    return (
        <Header style={{padding: '0'}}>
            <div className={styles.headerContainer}>
                <Button type="link" style={{height: '50px'}}>
                    <NavLink to={TO_CATALOG} className={styles.titleButton}>Каталог книг</NavLink>
                </Button>
                {
                    isAuth
                        ? <div className={styles.userData}>
                            <Avatar
                                size="middle"
                                shape="square"
                                icon={<UserOutlined/>}
                                style={{backgroundColor: '#87bc9f', marginRight: '6px'}}
                            />
                            <Dropdown overlay={menu} arrow>
                                <div>{userData.email}</div>
                            </Dropdown>
                        </div>
                        : <div>
                            <Button type="link">
                                <NavLink to={TO_LOGIN}>Войти</NavLink>
                            </Button>
                            <Button type="link">
                                <NavLink to={TO_REGISTRATION}>Регистрация</NavLink>
                            </Button>
                        </div>
                }
            </div>
        </Header>
    )
}

export default Header
