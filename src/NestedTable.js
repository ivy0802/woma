import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import {Table, Badge, Menu, Dropdown, Icon, Divider, Tag} from 'antd';

const menu = (
    <Menu>
        <Menu.Item>Action 1</Menu.Item>
        <Menu.Item>Action 2</Menu.Item>
    </Menu>
);

function NestedTable() {
    const expandedRowRender = () => {
        const columns = [
            { title: 'ID.', dataIndex: 'id', key: 'id' },
            { title: 'Name', dataIndex: 'name', key: 'name' },
            { title: 'Location', dataIndex: 'location', key: 'location'},
            { title: 'Duration', dataIndex: 'duration', key: 'duration' },
        ];

        const data = [];
        for (let i = 1; i < 4; ++i) {
            data.push({
                key: i,
                id: i,
                name: 'Sail to site',
                location: 'Port to site',
            });
        }
        return <Table columns={columns} dataSource={data} pagination={false} />;
    };

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Site', dataIndex: 'site', key: 'site' },
        { title: 'Mode', dataIndex: 'mode', key: 'mode' },
        { title: 'Visibility', dataIndex: 'visibility', key: 'visibility' },
        {
            title: 'Status',
            key: 'status',
            render: () => (
                <span>
            <Badge status="success" />
            Finished
          </span>
            ),},
        { title: 'Execution', dataIndex: 'execution', key: 'execution' },
        { title: 'Workability', dataIndex: 'workability', key: 'workability' },
        { title: 'Action', key: 'operation', render: () => <a>Edit</a> },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
        data.push({
            key: i,
            name: 'Daily Maintenance',
            site: 'Northwind',
            mode: 'Forecast',
            visibility: 'Admin only',
            status: 500,
            execution: 'Run',
            workability: '12345',
        });
    }

    return (
        <Table
            className="components-table-demo-nested"
            columns={columns}
            expandedRowRender={expandedRowRender}
            dataSource={data}
        />
    );
}
export default NestedTable;
