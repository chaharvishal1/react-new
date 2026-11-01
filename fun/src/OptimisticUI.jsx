import React, {useState} from 'react';
import { useOptimistic } from 'react';

const OptimisticUI = ({ props }) => {
  const [todo, setTodo] = useState([]);
  const [optimisticTodo, addOptimisticTodo] = useOptimistic(
    todo,
    (prevTodo, newTodo) => [...prevTodo, newTodo]
  )
  async function handleSubmit(formData) {
    const newTodo ={
        id: Date.now(),
        title: formData.get('title')
    }
    addOptimisticTodo(newTodo);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const response = fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers : {
            "Content-type": "application/json"
        } 
    });

    const data = (await response).json();

    setTodo((prevTodo) => [...prevTodo, {...data, title: newTodo.title}])

  }
  return (
    <div className='conatiner'>
        <form action={handleSubmit}>
            <input name='title' type='text' placeholder='Enter...' />
            <button className='bg-indigo-500 hover:bg-fuchsia-500'>Add</button>
        </form>
        <ul>
            {optimisticTodo.map((item, index) => (
                <li key={index}>{item.title}</li>
            ))}
        </ul>
    </div>
  );
};

export default OptimisticUI;