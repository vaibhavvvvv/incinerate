import React, { useState, useEffect } from 'react';
import { Input, Button, Table, Space } from 'antd';
import axios from 'axios';

const App1 = () => {
  const [searchKey, setSearchKey] = useState('');
  const [data, setData] = useState([]);

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
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost',
    },
    {
      title: 'Extend',
      dataIndex: 'extend',
      key: 'extend',
    },
  ];

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/?key=${searchKey}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Space direction="horizontal">
            <Input
                placeholder="Enter Part Number"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
            />
            <Button type="primary" onClick={handleSearch}>
                Search
            </Button>
        </Space>

      <div style={{ marginTop: '20px' }}>
        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  );
};

export default App1;
