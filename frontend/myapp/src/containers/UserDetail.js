import {React,useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import { Card,Button,Divider} from 'antd';
import {useNavigate} from 'react-router-dom'
import CustomForm from '../components/Form';

const UserDetail = () => {
  const userId = useParams().userId
  const [user,setUser] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/user/${userId}`)
            .then(resonse => {
                setUser(resonse.data)
            })
    }, [])
  const [addr,setAddress]=useState([])
  useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/person/${userId}`)
            .then(resonse => {
                setAddress(resonse.data)
            })
    }, [])

    const handleDelete=()=>{
      axios.delete(`http://127.0.0.1:8000/api/user/${userId}/`)
      navigate('/');
    }
    return (
      <>
      <Card title="Default size card" style={{ width: 300 }}>
        <p>Name - {user.username}</p>
        <p>Email - {user.email}</p>
        <p>Address - {addr.address}</p>  
      </Card>
      <Divider plain />
      <Divider plain />
      <CustomForm requestType="put" email={user.email} address={addr.address} userId={userId} btnText="Update"/>
        <form onSubmit={handleDelete}> 
            <Button type='danger' htmlType='submit'>Delete</Button>
        </form>
    </>
    )
}

export default UserDetail