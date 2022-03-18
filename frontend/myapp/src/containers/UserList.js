import {React,useEffect,useState} from 'react'
import { List, Avatar,Divider  } from 'antd';
import axios from 'axios'


const UserList = (props) => {
  const [user,setUser] = useState([])
  useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/user/')
            .then(resonse => {
                setUser(resonse.data)
            })
    }, [])
  console.log(user)
  return (
    <List
    itemLayout="horizontal"
    dataSource={user}
    renderItem={item => (
      <div>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a href={`/${item.id}`}>{item.username}</a>}
          description={item.email}
        />
      </List.Item>
      <Divider plain />
      </div>
    )}
  />
  )
}

export default UserList