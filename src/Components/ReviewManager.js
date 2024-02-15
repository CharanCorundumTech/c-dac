import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, CircularProgress, Dialog, DialogActions } from '@mui/material'
import Reportpage from './Reportpage'
import FlagPage from './FlagPage'
import axios from 'axios'

const ReviewManager = () => {
    const navigate = useNavigate()

    const [showReport,setShowReport]=useState(false)
  const [source,setSource]=useState('')
  const [post_title,setPost_title]=useState('')
  const [user_handle,setUser_handle]=useState('')
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [open,setopen]=useState(false)
  const [dashboardData,setDashboardData]=useState('')
  const [carddata,setCardData]=useState([])




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
  
  const [postid,setPostid]=useState('')
  const flagFunction = (index)=>{
    setopen(true)
    setPostid(carddata[index].postId)
    console.log(carddata[index].postId)

  }
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  const fetchData = async (page) => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get(`http://13.233.150.43:5000/getAllData?page=${page}`, {
        headers: {
          "Authorization": token,
        }
      });
      setCardData(response.data)
      setIsLoading(false)
      setCurrentPage(page);
      setNumPages(response.data.numPages);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

if (isLoading) {
  return (
    <div className='loader-container' style={{ marginTop: "0rem",display:'flex',justifyContent:"center",alignItems:"center",height:"300px",width:"80rem",backgroundColor:"" }}>
      <h3 style={{ marginTop: "0rem" }}>Loading....</h3> <CircularProgress />
    </div>
  );
}

if (carddata.length === 0) {
  return (
    // <div>
    <div className='loader-container' style={{ marginTop: "0rem",display:'flex',justifyContent:"center",alignItems:"center",height:"300px",width:"80rem",backgroundColor:"" }}>

      <h3 style={{ marginTop: "5rem" }}>No data to show</h3>
    </div>
  );
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
  return (
    <>
    <div className='hidescrollbars' style={{backgroundColor:"#000032",marginTop:"9rem",paddingBottom:"1rem",height:"650px",overflow:"scroll"}}>
        {
showReport && <Reportpage post_title={post_title} posted_by={user_handle} source={source} source_link={"NA"} detailed_report_link={"NA"} people_identified={"NA"} />
        }
        {/* <div style={{backgroundColor:"#000032"}}>
        <Button id='close_btn' style={{marginTop:"1rem",marginLeft:"1rem",backgroundColor:"white",color:"black"}}  onClick={()=>{navigate('/')}}>
      Back
    </Button>
        </div> */}
        <div className='maindata_div' style={{backgroundColor:"#000032",width:"78.2rem"}}>
      {
         carddata.map((items,index)=>(
          <>
          <div className='cards' id={index}>
            <p style={{fontWeight:"500"}}><b>POST : </b>{items['postContent'].length > 30 ? items['postContent'].substring(0, 26) + '...' : items['postContent']}</p>
            <p style={{fontWeight:"500"}}><b>SOURCE : </b>{items.platform}</p>
            <p style={{fontWeight:"500"}}><b>USRER HANDLE : </b>{items.postOwnerName.length > 30 ? items['postOwnerName'].substring(0, 26) + '...' : items['postOwnerName']}</p>
            <p style={{fontWeight:"500"}}><b>CONTAINS VIDEO : </b>{items.ContainsVideo}</p>
            <p style={{fontWeight:"500"}}><b>VIOLATIONS : </b>{items.Violations}</p>
            <p style={{fontWeight:"500"}}><b>RISK SCORE : </b>{items.sentiment.score}</p>





            {/* <p style={{fontWeight:"500"}}>POST:<b>{items.original_filename}</b></p>
            <p style={{fontWeight:"500"}}>SOURCE:<b>Youtube</b></p>
            <p style={{fontWeight:"500"}}>USRER HANDLE:<b>NDTV profit</b></p>
            <p style={{fontWeight:"500"}}>CONTAINS VIDEO:<b>yes</b></p>
            <p style={{fontWeight:"500"}}>VIOLATIONS:<b>none</b></p>
            <p style={{fontWeight:"500"}}>RISK SCORE:<b>20/100</b></p> */}
            <div style={{display:"flex",justifyContent:"space-between",gap:"10px",marginRight:"20px"}}>
      {/* <p><b>SOURCE LINK : </b><a href='https://www.youtube.com/watch?v=JWIFhZsPsRw&pp=ygUdbmFyZW5kcmEgbW9kaSBsb2tzYWJoYSBzcGVlY2g%3D'> Post</a></p> */}

            <button className='upload_btn'><b><a id='hyperlink' href={items.postLink} target="_blank" rel="noopener noreferrer"> Source Link</a></b></button>
            <button className='card_btns' onClick={() => viewFunction(index)}><b>View</b></button>
            <button className='card_btns_flag' onClick={()=>{flagFunction(index)}}><b>Flag For Investigation</b></button>
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
           width:'40%',
           height: '80%',
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
          <FlagPage id={postid} />
    
  {/* <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
     <b style={{fontSize:"20px"}}>Link:-</b><input type='text' id='link_input' placeholder='Paste link...' style={{height:"50px",width:"500px"}}/>
  </div> */}
  </div>

</Dialog>
      

    </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0rem' }}>
      
    <Button
      style={{backgroundColor:"cyan",color:"white",height:"20px",borderRadius:"20px",display:"flex",alignItems:"center"}}
      variant="contained"
      disabled={currentPage === 1}
      onClick={() => fetchData(currentPage - 1)}
    >
      Previous
    </Button>
    <p style={{paddingLeft:"5px",paddingRight:"5px"}}><b>{currentPage}</b></p>
    <Button
      style={{backgroundColor:"cyan",height:"20px",borderRadius:"20px",display:"flex",alignItems:"center"}}
      variant="contained"
      // style={{ marginLeft: '1rem' }}
      disabled={currentPage === numPages}
      onClick={() => fetchData(currentPage + 1)}
    >
      Next Page
    </Button>
  </div>
  </>
  )
}


export default ReviewManager