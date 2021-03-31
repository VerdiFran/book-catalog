import React from 'react'
import {Button, Space, Table} from 'antd'

const BookCatalog = ({data}) => {
    const columns = [
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Авторы',
            dataIndex: 'authors',
            key: 'authors'
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
            <Button>Добавить</Button>
            <Table dataSource={data} columns={columns}/>
        </div>
    )
}

export default BookCatalog
