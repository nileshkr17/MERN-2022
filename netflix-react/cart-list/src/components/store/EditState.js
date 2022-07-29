//EditState.js
import React, {useState}from 'react'
import EditContext from './EditContext'

export const EditState = (props) => {
    const [edit,setEdit] = useState('')
  return ( 
    <EditContext.Provider value={{edit,setEdit}}>
        {props.children}
    </EditContext.Provider>
  )
}
