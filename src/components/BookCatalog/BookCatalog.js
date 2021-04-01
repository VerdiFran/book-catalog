import React from 'react'
import {Button, Space, Table, List} from 'antd'
import {NavLink} from 'react-router-dom'
import {TO_NEW_BOOK} from '../../routes'

const BookCatalog = ({data, deleteBook}) => {
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
            render: (authors) => <List>
                {authors.map(author => <List.Item>{author}</List.Item>)}
            </List>
        },
        {
            title: 'Год издания',
            dataIndex: 'publishingYear',
            key: 'publishingYear'
        },
        {
            title: 'ISBN',
            dataIndex: 'isbn',
            key: 'isbn'
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record) => (
                <Space size="middle">
                    <Button>Редактировать</Button>
                    <Button onClick={() => deleteBook(record.id)}>Удалить</Button>
                </Space>
            )
        }
    ]

    return (
        <div>
            <Button><NavLink to={TO_NEW_BOOK}>Добавить</NavLink></Button>
            <Table dataSource={data} columns={columns}/>
        </div>
    )
}

export default BookCatalog
