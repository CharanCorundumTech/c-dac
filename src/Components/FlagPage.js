import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const FlagPage = () => {
    const [comment,setComment]=useState('')
    console.log(comment)


    const AprroveFunction = async()=>{
            try {
                const response = await axios.get('apilink');
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        alert("Approve btn clicked")
    }

    const RejectFunction =()=>{
        const response = async () => {
            try {
                const response = await axios.get('apilink');
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        alert("Reject btn clicked")
    }

  return (
    <>
    <div>
        {/* <h3>flagging page</h3> */}
        <label>Comment :</label>
        <textarea onChange={(e)=>{setComment(e.target.value)}} />
        <Button onClick={AprroveFunction}>Arrove</Button>
        <Button onClick={RejectFunction}>Reject</Button>
    </div>
    </>
  )
}

export default FlagPage