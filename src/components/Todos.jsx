import React from 'react'
import { Button, Table } from 'antd';
import { useEffect, useState } from 'react';

const Todos = () => {

    const columns = [
        {
            key: "1",
            title: "ID",
            dataIndex: "id"
        },
        {
            key: "2",
            title: "User ID",
            dataIndex: "userId",
            sorter: (record1, record2) => {
                return (
                    record1.userId > record2.userId
                )
            }
        },
        {
            key: "3",
            title: "Activity",
            dataIndex: "title",
        },
        {
            key: "4",
            title: "Status",
            dataIndex: "completed",
            render: (completed) => {
                return (
                    <p>{completed ? 'Completed' : 'In Progress'}</p>
                )
            },
            filters: [
                { text: 'Completed', value: true },
                { text: 'In Progress', value: false }
            ],
            onFilter: (value, record) => {
                return record.completed === value;
            }
        }
    ]

    const [loading, setLoading] = useState(false);
    const [dataSource, setdataSource] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos")
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
            <Table className='w-3/4 mx-auto '
                loading={loading}
                columns={columns}
                dataSource={dataSource}
                pagination={{
                    current: page,
                    pageSize: pageSize,
                    total: 200,
                    onChange: (page, pageSize) => {
                        setPage(page);
                        setPageSize(pageSize);
                    }
                }}
            >

            </Table>
        </div>
    )
}

export default Todos