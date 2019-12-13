import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Divider, Tag } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Site',
        dataIndex: 'site',
        key: 'site',
    },
    {
        title: 'Mode',
        dataIndex: 'mode',
        key: 'mode',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
        {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
                color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        })}
      </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        site: 32,
        mode: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        site: 42,
        mode: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        site: 32,
        mode: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

class TableBasic extends Component {
    render() {
        return (
            <Table dataSource={data} columns={columns} />
        );
    }
}

export default TableBasic;