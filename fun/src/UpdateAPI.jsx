import React, {useEffect, useState} from 'react';

const UpdateAPI = ({ props }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [userData, setUserData] = useState([]);
  const handleSubmit = async(e) => {
    // console.log(name, email, id);
    const url = 'http://localhost:3000/users';
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({id, name, email}),
    });
    if(response.ok){
        alert('Data added successfully');
    }
  }

  const fetchData = async()  => {
    const url = 'http://localhost:3000/users';
    let response = await fetch(url);
    const data = await response.json();
    if(response.ok){
        setUserData(data);
    }
  }

  useEffect(() => {
    fetchData();
  }, [userData]);

  return (
    <div className='container'>
      <div className='grid grid-flow-col grid-rows-6 gap-4'>
        <div className='row-start-1 row-end-4'>
          <form>
            <input
              name='id'
              type='text'
              placeholder='Enter ID...'
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <br></br>
            <input
              name='name'
              type='text'
              placeholder='Enter name...'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <input
              name='email'
              type='email'
              placeholder='Enter email...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <button className="bg-sky-500 hover:bg-sky-700" onClick={handleSubmit}>Add details</button>
          </form>
        </div>
        <div className='row-start-1 row-end-4'>
          <ul>
            {userData.map((user) => (
              <li key={user.id} style={{border: '1px solid black', margin: '10px', padding: '10px', textAlign: 'left'}}>
                <strong>Name: </strong> - {user.name}
                <br></br>
                <strong>Email: </strong> - {user.email}
                <br></br>
                <strong>ID: </strong> - {user.id}
                <br></br>
                <button className="bg-red-500 hover:bg-red-700" onClick={async() => {
                  const url = `http://localhost:3000/users/${user.id}`;
                  let response = await fetch(url, {
                      method: 'DELETE',
                  });
                  if(response.ok){
                      alert('Data deleted successfully');
                      fetchData();
                  }
                }}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpdateAPI;