import { Table } from 'antd'
import React, { useState, useEffect } from 'react'

const Gallery = () => {
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Albulm ID',
            dataIndex: 'albulmId'
        },
        {
            key: '3',
            title: 'Title',
            dataIndex: 'title'
        },
        {
            key: '4',
            title: 'URL',
            dataIndex: 'url'
        },
        {
            key: '5',
            title: 'Link',
            dataIndex: 'thumbnailUrl'
        },
    ]

    const [dataSource, setdataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then(data => {
                setdataSource(data)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false);
            })
    }, [])

    return (
        <div>
            <Table className='w-3/4 mx-auto'
                columns={columns}
                dataSource={dataSource}
            >
            </Table>
        </div>
    )
}

export default Gallery