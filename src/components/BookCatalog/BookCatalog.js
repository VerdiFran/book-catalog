import React from 'react'
import {Button, Space, Table, List} from 'antd'

const BookCatalog = ({data, addBook}) => {
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
            render: () => (
                <Space size="middle">
                    <Button>Редактировать</Button>
                    <Button>Удалить</Button>
                </Space>
            )
        }
    ]

    return (
        <div>
            <Button onClick={() => addBook('Book Title', ['Author1', 'Author2'], 2014, '111-1-11111-111-1')}>Добавить</Button>
            <Table dataSource={data} columns={columns}/>
        </div>
    )
}

export default BookCatalog
