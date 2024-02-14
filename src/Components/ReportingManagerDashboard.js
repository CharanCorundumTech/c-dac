import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Dialog, DialogActions } from '@mui/material'
import Reportpage from './Reportpage'
import FlagPage from './FlagPage'

const ReportingManagerDashboard = () => {
    const navigate = useNavigate()

    const [showReport,setShowReport]=useState(false)
  const [source,setSource]=useState('')
  const [post_title,setPost_title]=useState('')
  const [user_handle,setUser_handle]=useState('')
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [dashboardData,setDashboardData]=useState('')


  const viewFunction =(index)=>{
    
    setShowReport(true)
    setSource(dummydata[index].source)
    // setPost_title(dummydata[index].post)
    setPost_title(dummydata[index].post)
    setUser_handle(dummydata[index].user_handle)
    navigate('/reportpage')
    // console.log(items)
    // console.log({ state: { data: items } })
    // navigate('/reportpage')
    // const dataToSend = JSON.stringify(data); 
    // console.log(dataToSend)
    // navigate('/reportpage', { state: { data: items } });
  //  <Reportpage />

  }
  const handleCloseDialog = () => {
    setopen(false);
    // setMessageIndex(0);
  };
  const [open,setopen]=useState(false)
  const flagFunction = ()=>{
    setopen(true)

  }
  const dummydata=[
    {
      "Post Title": "PM Modi's Motion of Thanks \u2026",
      "Source": "Youtube",
      "Username": "NDTV Profit",
      "ContainsVideo": "Yes",
      "Violations": "None",
      "RiskScore": 20,
      "Link": "https://www.youtube.com/embed/JWIFhZsPsRw?autoplay=1&pp=ygUdbmFyZW5kcmEgbW9kaSBsb2tzYWJoYSBzcGVlY2g%3D"
  },
  {
      "Post Title": "How on earth \u2026",
      "Source": "X(twitter)",
      "Username": "@broshnikanta",
      "ContainsVideo": "Yes",
      "Violations": 3,
      "RiskScore": 60,
      "Link": "https://twitter.com/im_Melo0/status/1747489429835649211"
  },
  {
      "Post Title": "Are Central forces \u2026",
      "Source": "X(twitter)",
      "Username": "@im_Melo0",
      "ContainsVideo": "Yes",
      "Violations": 4,
      "RiskScore": 65,
      "Link": "https://twitter.com/broshnikanta/status/1747491059985510898"
  },
  {
      "Post Title": "RSS \u0914\u0930 BJP  \u2026",
      "Source": "X(twitter)",
      "Username": "@Shree42000",
      "ContainsVideo": "Yes",
      "Violations": 2,
      "RiskScore": 55,
      "Link": "https://twitter.com/Shree42000/status/1747454144909393929"
  },
  {
      "Post Title": "Kuki vs Assam Rifles..",
      "Source": "X(twitter)",
      "Username": "@nareshchandra_1",
      "ContainsVideo": "Yes",
      "Violations": 2,
      "RiskScore": 55,
      "Link": "https://twitter.com/Shree42000/status/1747454144909393929"
  },
  {
      "Post Title": "Karnataka Minister's Controversial...",
      "Source": "Youtube",
      "Username": "India Today",
      "ContainsVideo": "Yes",
      "Violations": 2,
      "RiskScore": 60,
      "Link": "https://youtu.be/UKrwfRHUGMw"
  },
  {
      "Post Title": "Karnataka Minister's Controversial...",
      "Source": "Youtube",
      "Username": "India Today",
      "ContainsVideo": "Yes",
      "Violations": 2,
      "RiskScore": 60,
      "Link": "https://youtu.be/UKrwfRHUGMw"
  },
  {
      "Post Title": "Kuki vs Assam Rifles..",
      "Source": "X(twitter)",
      "Username": "@nareshchandra_1",
      "ContainsVideo": "Yes",
      "Violations": 2,
      "RiskScore": 55,
      "Link": "https://twitter.com/Shree42000/status/1747454144909393929"
  },
  {
      "Post Title": "Karnataka Minister's Controversial...",
      "Source": "Youtube",
      "Username": "India Today",
      "ContainsVideo": "Yes",
      "Violations": 2,
      "RiskScore": 60,
      "Link": "https://youtu.be/UKrwfRHUGMw"
  }
]

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('apilink');
            
            console.log(response.data);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

}, []);

  return (
    <div className='hidescrollbars' style={{backgroundColor:"#000032",marginTop:"5rem",paddingBottom:"1rem",height:"650px",overflow:"scroll"}}>
        {
showReport && <Reportpage post_title={post_title} posted_by={user_handle} source={source} source_link={"NA"} detailed_report_link={"NA"} people_identified={"NA"} />
        }
        {/* <div style={{backgroundColor:"#000032"}}>
        <Button id='close_btn' style={{marginTop:"1rem",marginLeft:"1rem",backgroundColor:"white",color:"black"}}  onClick={()=>{navigate('/')}}>
      Back
    </Button>
        </div> */}
        <div className='maindata_div' style={{backgroundColor:"#000032"}}>
      {
        dummydata.map((items,index)=>(
          <>
          <div className='cards'>
            <p style={{fontWeight:"500"}}><b>POST : </b>{items['Post Title']}</p>
            <p style={{fontWeight:"500"}}><b>SOURCE : </b>{items.Source}</p>
            <p style={{fontWeight:"500"}}><b>USRER HANDLE : </b>{items.Username}</p>
            <p style={{fontWeight:"500"}}><b>CONTAINS VIDEO : </b>{items.ContainsVideo}</p>
            <p style={{fontWeight:"500"}}><b>VIOLATIONS : </b>{items.Violations}</p>
            <p style={{fontWeight:"500"}}><b>RISK SCORE : </b>{items.RiskScore}</p>





            {/* <p style={{fontWeight:"500"}}>POST:<b>{items.original_filename}</b></p>
            <p style={{fontWeight:"500"}}>SOURCE:<b>Youtube</b></p>
            <p style={{fontWeight:"500"}}>USRER HANDLE:<b>NDTV profit</b></p>
            <p style={{fontWeight:"500"}}>CONTAINS VIDEO:<b>yes</b></p>
            <p style={{fontWeight:"500"}}>VIOLATIONS:<b>none</b></p>
            <p style={{fontWeight:"500"}}>RISK SCORE:<b>20/100</b></p> */}
            <div style={{display:"flex",justifyContent:"space-between",gap:"10px",marginRight:"20px"}}>
      {/* <p><b>SOURCE LINK : </b><a href='https://www.youtube.com/watch?v=JWIFhZsPsRw&pp=ygUdbmFyZW5kcmEgbW9kaSBsb2tzYWJoYSBzcGVlY2g%3D'> Post</a></p> */}

            <button className='upload_btn'><b><a id='hyperlink' href={items.Link} target="_blank" rel="noopener noreferrer"> Source Link</a></b></button>
            <button className='card_btns' onClick={() => viewFunction(index)}><b>View</b></button>
            <button className='card_btns_flag' onClick={flagFunction}><b>Flag For Investigation</b></button>
            </div>

          </div>
          </>

          ))
      }
          <Dialog open={open} onClose={handleCloseDialog}
      fullWidth
      maxWidth="xl"  // Adjust the width here
       PaperProps={{
         style: {
           width:'100%',
           height: '100%',
           display:"flex",
           justifyContent:"center",alignItems:"center"
          //  backgroundColor:"#000032"  
            
         },
       }}>
        <div style={{height:"100%",width:"100%",backgroundColor:"#eae8dc",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <DialogActions style={{backgroundColor:"#000032"}}>
    <Button id='close_btn'  onClick={handleCloseDialog} >
      Close
    </Button>
  </DialogActions>
          <FlagPage />
    
  {/* <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
     <b style={{fontSize:"20px"}}>Link:-</b><input type='text' id='link_input' placeholder='Paste link...' style={{height:"50px",width:"500px"}}/>
  </div> */}
  </div>

</Dialog>
      

    </div>
    </div>
  )
}

export default ReportingManagerDashboard