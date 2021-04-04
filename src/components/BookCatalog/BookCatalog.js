import React from 'react'
import {Button, Space, Table, List, Spin} from 'antd'
import {NavLink} from 'react-router-dom'
import {TO_EDIT_BOOK, TO_NEW_BOOK} from '../../routes'
import {PlusSquareOutlined} from '@ant-design/icons'

/**
 * Component that contains catalog of books
 *
 * @param {boolean} loading Loading of books data from firestore
 * @param {any} data Data about books
 * @param {function} deleteBook Delete book from firestore
 * @param {function} setCurrentBook Set book that was selected
 *
 * @returns {JSX.Element}
 * @constructor
 */
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
                    <Button onClick={() => setCurrentBook(record.id)} type="link">
                        <NavLink to={TO_EDIT_BOOK}>Редактировать</NavLink>
                    </Button>
                    <Button onClick={() => deleteBook(record.id)} type="link">Удалить</Button>
                </Space>
            ),
            align: 'center'
        }
    ]

    return (
        <Spin spinning={loading}>
            <div>
                <Button
                    type="dashed"
                    icon={<PlusSquareOutlined/>}
                    style={{marginBottom: '16px'}}
                >
                    <span>
                        <NavLink to={TO_NEW_BOOK}>Добавить книгу</NavLink>
                    </span>
                </Button>
                <Table dataSource={data} columns={columns} size="small" pagination={{pageSize: 5}}/>
            </div>
        </Spin>
    )
}

export default BookCatalog
