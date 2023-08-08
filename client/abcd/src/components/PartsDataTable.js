import React from "react";
import { Table } from 'antd'

const PartsDataTable = ({partsData}) => {
    const columns = [
        {
            title: 'Description',
            dataIndex: 'descripton',
            key: 'descripton',
        },
        {
            title: 'Mfg / Part',
            dataIndex: 'mfgprt',
            key: 'mfgprt',
        },
        {
            title: 'List',
            dataIndex: 'list',
            key: 'list',
        },
        {
            title: "Cost",
            dataIndex: 'cost',
            key: 'cost',
        },
        {
            title: 'Extend',
            dataIndex: 'extend',
            key: 'extend',
        },
    ]

    return <Table dataSource={partsData} columns={columns} />
}

export default PartsDataTable