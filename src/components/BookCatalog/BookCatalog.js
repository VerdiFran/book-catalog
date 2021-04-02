import React from 'react'
import {Button, Space, Table, List, Spin} from 'antd'
import {NavLink} from 'react-router-dom'
import {TO_EDIT_BOOK, TO_NEW_BOOK} from '../../routes'
import {PlusSquareOutlined} from '@ant-design/icons'
import styles from './BookCatalog.module.scss'

const BookCatalog = ({loading, data, deleteBook, setCurrentBook}) => {
    const columns = [
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Авторы',
            dataIndex: 'authors',
            key: 'authors',
            render: (authors) => <List size="small">
                {authors.map(author => <List.Item>{author}</List.Item>)}
            </List>
        },
        {
            title: 'Год издания',
            dataIndex: 'publishingYear',
            key: 'publishingYear',
            align: 'center'
        },
        {
            title: 'ISBN',
            dataIndex: 'isbn',
            key: 'isbn',
            align: 'center'
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record) => (
                <Space size="small">
                    <Button onClick={() => setCurrentBook(record.isbn)} type="link">
                        <NavLink to={TO_EDIT_BOOK}>Редактировать</NavLink>
                    </Button>
                    <Button onClick={() => deleteBook(record.isbn)} type="link">Удалить</Button>
                </Space>
            ),
            align: 'center'
        }
    ]

    return (
        <Spin spinning={loading}>
            <div className={styles.catalogContainer}>
                <Button
                    type="dashed"
                    icon={<PlusSquareOutlined/>}
                    style={{marginBottom: '14px'}}
                >
                    <span><NavLink to={TO_NEW_BOOK}>Добавить книгу</NavLink></span>
                </Button>
                <Table dataSource={data} columns={columns} size="small"/>
            </div>
        </Spin>
    )
}

export default BookCatalog
