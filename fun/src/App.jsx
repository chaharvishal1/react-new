import { useState } from 'react'
import './App.css'
import Layout from './Layout.jsx'
import UpdateArray from './UpdateArray'
import UpdatedObject from './UpdatedObject.jsx'
import DerivedState from './DerivedState.jsx'
import { UserContextProvider } from './contextAPI/UserContext.jsx'
import Parent from './contextAPI/Parent.jsx'
import Form from './useActionState/form.jsx'
import OptimisticUI from './OptimisticUI.jsx'

function App() {

  return (
    <>
      {/* <Layout>
        <p>This chid under Layout componant</p>
      </Layout> */}
      {/* <UpdateArray /> */}
      {/* <UpdatedObject /> */}
      {/* <DerivedState quantity={500.20} price={10.765} /> */}
      {/* <div className="bg-blue-500 md:bg-green-500 lg:bg-red-500">
        <h1>This is App</h1>
        <UserContextProvider>
          <Parent />
        </UserContextProvider>
      </div> */}
      {/* <Form /> */}
      <OptimisticUI />
    </>
  )
}

export default App
