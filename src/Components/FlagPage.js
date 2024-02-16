import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import './FlagPage.css'
const FlagPage = ({id}) => {
    console.log(id)
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
const role=localStorage.getItem('role')
    const flagFunction =()=>{
        if(role==='user'){
            const payload={
                "postId":id,
                "comments":comment,
                "reason":value
            }
                const token=localStorage.getItem('token')
                    axios.post('http://13.233.150.43:5000/userAddFlag',payload,{
                        headers: {
                          Authorization: token, // Make sure to replace 'Token' with the actual token value
                        }
                      })
                      .then((response)=>{
                        console.log(response)
                        if (response.status ===200){
                            alert("Flagged this Data")
                        window.location.reload()

                        }
                        // setCardData(response.data)
                      }).catch((error)=>{
                        if (error.response.status ===409){
                            alert("Already Flagged")
                        window.location.reload()

                        }
                  
                      })

        } else{
            const payload={
                "postId":id,
                "comments":comment,
                // "reason":value
            }
            console.log(comment)
            console.log(id)
                const token=localStorage.getItem('token')
                    axios.post('http://13.233.150.43:5000/superiorAddFlag',payload,{
                        headers: {
                          Authorization: token, // Make sure to replace 'Token' with the actual token value
                        }
                      })
                      .then((response)=>{
                        console.log(response)
                        if (response.status ===200){
                            alert("Flagged this Data")
                        window.location.reload()

                        }
                        // setCardData(response.data)
                      }).catch((error)=>{
                        if (error.response.status ===409){
                            alert("Already Flagged")
                        window.location.reload()

                        }
                  
                  })

        }
       

        
        // alert("Reject btn clicked")
}
    const [value,setValue]=useState('')
    const selecthandle =(e)=>{
        setValue(e.target.value)

    }
    console.log(value)
    const RejectFunction =()=>{
        const payload={
            "postId":id,
            "comments":comment,
            // "reason":value
        }
        console.log(comment)
        console.log(id)
            const token=localStorage.getItem('token')
                axios.post('http://13.233.150.43:5000/superiorRejectFlag',payload,{
                    headers: {
                      Authorization: token, // Make sure to replace 'Token' with the actual token value
                    }
                  })
                  .then((response)=>{
                    console.log(response)
                    if (response.status ===200){
                        alert("Rejected this Data")
                        window.location.reload()

                    }
                    // setCardData(response.data)
                  }).catch((error)=>{
                    if (error.response.status ===409){
                        alert("Already Flagged")
                        window.location.reload()
                    }
              
              })

    }

  return (
    <>
        {/* <h4>Flag User</h4> */}
<div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"80%",width:"100%",alignItems:"center"}}>
<h4><b>Flag User</b></h4>
    <div style={{height:"300px",borderRadius:"10px",backgroundColor:"white",width:"500px",display:"flex",gap:"1rem",alignItems:"center",justifyContent:"center",flexDirection:"column",border:"0px solid black",boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        {/* <h3>flagging page</h3> */}
        { role === 'user' &&
            <div style={{display:"flex",marginTop:"20px"}}>
        <h5>Select Voilation Type :</h5>
        <select style={{width:"150px",height:"30px",borderRadius:"10px"}}  onChange={(e)=>{selecthandle(e)}}>
            
            <option disabled>select the reason</option>
            <option value='voilation 1'>voilation 1</option>
            <option value='voilation 2'>voilation 2</option>
            <option value='voilation 3'>voilation 3</option>
        </select>

        </div>
}
       <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
        <label>Comment :</label>
        <textarea style={{height:"40px"}} onChange={(e)=>{setComment(e.target.value)}} placeholder='write comment...' />
        </div>
        {/* <Button className='flag_btns1' onClick={AprroveFunction}>Arrove</Button> */}
        <button className='flag_btns2'   onClick={flagFunction}>Flag</button>
        {
        role !=='user' &&
        <button className='flag_btns3'   onClick={RejectFunction}>Reject</button>

        }
    </div>
    </div>
    </>
  )
}

export default FlagPage