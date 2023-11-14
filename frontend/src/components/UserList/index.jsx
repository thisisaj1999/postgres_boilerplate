import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'First Name',
    dataIndex: 'firstname',
    key: 'firstname',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastname',
    key: 'lastname',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const UserList = () => <Table style={{border: "1px solid lightgray", borderRadius: "7px"}} columns={columns} dataSource={data} />;
export default UserList;