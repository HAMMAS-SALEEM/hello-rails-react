import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMessages } from '../redux/message';

const Greetings = () => {
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(fetchMessages())
}, [])
const store = useSelector(state => state.messageReducer)
  return (
    <div>
        <h1>{store.message}</h1>      
    </div>
  )
}

export default Greetings
