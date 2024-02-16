import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Reportpage from './Reportpage'
import { useNavigate } from 'react-router-dom'
import { Button, Dialog, DialogActions } from '@mui/material'
import Graph from './Graph'
import Piechart from './Piechart'
import Sidebar from './Sidebar'
import WidgetsIcon from '@mui/icons-material/Widgets';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import DatasetIcon from '@mui/icons-material/Dataset';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import Tiles from './Tiles'
import Navbar from './Navbar'
import axios from 'axios'
import ApprovalManagerDashboard from './ApprovalManagerDashboard'
import ReportingManagerDashboard from './ReportingManagerDashboard'
import ReviewManager from './ReviewManager'
import UploadJson from './UploadJson'
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import html2pdf from 'html2pdf.js';

const Homepage = () => {
  const navigate = useNavigate()
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [carddata,setCardData]=useState()


  useEffect(()=>{
    const token = localStorage.getItem('token')
    let num=1
    axios.get(`http://13.233.150.43:5000/getAllData?page=${num}`, {
      headers: {
        Authorization: token, // Make sure to replace 'Token' with the actual token value
      }
    })
    .then((response)=>{
      console.log(response)
      setCardData(response.data)
    setShowreports(false)

    }).catch((error)=>{
      console.log(error)

    })
  },[])

  
  const [showTiles, setShowTiles] = useState(false)
  const [showgraphs, setShowgraphs] = useState(true)
  const [showReports, setShowreports] = useState(false)
  const [uploadjson, setUploadjson] = useState(false)
  const [showReport, setShowReport] = useState(false)
  const [source, setSource] = useState('')
  const [post_title, setPost_title] = useState('')
  const [user_handle, setUser_handle] = useState('')
  const [appdata,setappData]=useState([])

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const viewDataFunction = () => {
    setShowTiles(true)
    setShowgraphs(false)
    setShowreports(false)
    setUploadjson(false)
    setShowflaged(false)


  }
  const viewGraphFunction = () => {
    setShowgraphs(true)
    setShowTiles(false)
    setShowreports(false)
    setShowflaged(false)

  }
  const uploadjsonFunction = () => {
    setUploadjson(true)
    setShowflaged(false)
    setShowTiles(false)
    setShowreports(false)
    setaStopdata(true)

  }
  const rejecteddata =(currentPage)=>{
    const token = localStorage.getItem('token')
    axios.get(`http://13.233.150.43:5000/getAllRejectedData?page=${currentPage}`, {
      headers: {
        Authorization: token, // Make sure to replace 'Token' with the actual token value
      }
    })
    .then((response)=>{
      console.log(response)
      setappData(response.data)
      setCurrentPage(currentPage);
      setNumPages(response.data.numPages);
    // setShowreports(false)

    }).catch((error)=>{
      console.log(error)

    })
  }

  const [stopdata,setaStopdata]=useState(false)
  const viewReportFunction = () => {
    setShowreports(true)
    setShowflaged(false)

    setaStopdata(true)
    setUploadjson(false)

    setShowTiles(false)
    setShowgraphs(false)
    rejecteddata(currentPage)
    

  }

  
  const [showflaged,setShowflaged]=useState(false)
  const viewFlaggedFunction = () => {
    setShowflaged(true)
    setShowreports(false)
    setaStopdata(true)
    setUploadjson(false)

    setShowTiles(false)
    setShowgraphs(false)
    approvedata(currentPage)
    
  }
  const approvedata=(currentPage)=>{
    const token = localStorage.getItem('token')
    axios.get(`http://13.233.150.43:5000/getAllApprovedData?page=${currentPage}`, {
      headers: {
        Authorization: token, // Make sure to replace 'Token' with the actual token value
      }
    })
    .then((response)=>{
      console.log(response)
      setappData(response.data)
    // setShowreports(false)

    }).catch((error)=>{
      console.log(error)

    })
  }
  const role=localStorage.getItem('role')
  if(role=='user'){

  }


  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  const fetchData = async (page) => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get(`http://13.233.150.43:5000/getAllApprovedData?page=${page}`, {
        headers: {
          "Authorization": token,
        }
      });
      setappData(response.data)

      // setIsLoading(false)
      setCurrentPage(page);
      setNumPages(response.data.numPages);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData(currentPage);
    approvedata(currentPage)
    rejecteddata(currentPage)
  }, [currentPage]);


  const downloadFunction =(index)=>{

    const generatePDF = (newjson) => {
      const content = `
        <div style={{margin:"20px"}}>
          <b>Suspicious Tweet Record</b><br>
          <p></p>
          <div style={{margin:"10px"}}>
            <table border="1">
              <tbody>
                ${Object.entries(newjson)
                  .map(([key, value]) => `
                    <tr>
                      <td><b>${key}</b></td>
                      <td>${value}</td>
                    </tr>
                  `)
                  .join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    
      html2pdf(content, {
        filename: 'report.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
      });
    };
  
  
  
  
      const token = localStorage.getItem('token')
      try {
        console.log(appdata[index])
        const json=appdata[index]
        const newjson={
          "_id":json._id,
          "DateTime":json.dateTime,
          "PostContent":json.postContent,
          "Platform":json.platform,
          "PostId":json.postId,
          "PostLink":json.postLink,
          "PostOwnerId":json.postOwnerId,
          "PostOwnerLink":json.postOwnerLink,
          "PostOwnerName":json.postOwnerName,
          "PostOwnerType":json.postOwnerType,
          "PostType":json.postType,
          "Voilation":json.reason,
          "ScreenshotLink":json.screenshotLink,
          "Comments":json.interactions.comments,
          "Likes":json.interactions.likes,
          "Rekoos":json.interactions.rekoos,
          "Retweets":json.interactions.retweets,
          "Shares":json.interactions.shares,
          "Views":json.interactions.views,
          "TargetData":json.targetData,
          "TargetId":json.targetId,
          "Sentiment":json.sentiment.label,
          "IsShortlisted":json.isShortlisted,
          "Tags":json.tags,
        }
        generatePDF(newjson)
      //   const formattedJson = JSON.stringify(json, null, 4);
      //   console.log(formattedJson)
  
      // // Create a new jsPDF instance
      // const doc = new jsPDF();
      // doc.text(20, 20, formattedJson);
  
      // // Save the PDF
      // doc.save("output.pdf");
    
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }
   
  
  }

  // const downloadFunction =(index)=>{
  //   const postID=appdata[index].postId
  //   const token = localStorage.getItem('token')
  //   axios.get(`http://13.233.150.43:5000/pdfDownload?postId=${postID}`, {
  //     headers: {
  //       "Authorization": token,
  //     }
  //   }).then((response) => {
  //     console.log(response.data)
  //     // setAnalyticsData(response.data)
  //   }).catch((error) => {
  //     alert(error)
  //   })
  // }

  const [analyticsData, setAnalyticsData] = useState([])

  useEffect(() => {
    if (role!=='user'){

    const token = localStorage.getItem('token')
    axios.get(`http://13.233.150.43:5000/getAnalytics`, {
      headers: {
        "Authorization": token,
      }
    }).then((response) => {
      setAnalyticsData(response.data)
    }).catch((error) => {
      alert(error)
    })
  }
  }, [])
  console.log(analyticsData)

  return (
    <>
      {
        // showReport === true ? <Reportpage post_title={post_title} posted_by={user_handle} source={source} source_link={"NA"} detailed_report_link={"NA"} people_identified={"NA"} /> :
          <div className='main_container'>
            <Navbar />
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h4 style={{ marginLeft: "10px",color:'Darkblue' }}></h4> 
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>
                {/******** side bar starts ************/}
                <div className="sidebar" style={{
                  display: 'flex', flexDirection: "column", gap: "0.5rem",
                  borderTopRightRadius: "15px",
                  borderTopLeftRadius: "15px",
                  marginLeft: '5px',
                  backgroundColor: "white",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  height: "94.5vh", width: "250px",
                  paddingTop:"0.5rem"
                }}>
                  <div style={{ display: "flex", alignItems: "center",justifyContent:"center", gap: "10px" }}>
              <h5 style={{ marginLeft: "10px",color:'Darkblue',paddingTop:"5px" }}>Dashboard Panel</h5> <WidgetsIcon />
            </div>
            <hr style={{marginTop:"-0.5rem"}}/>
                  {
                  role !=='user' && <div className='sidebar_links' onClick={viewGraphFunction} style={{ backgroundColor: showgraphs ? "#6367f0" : "white",color: showgraphs ? "white" : "black"}}> <GraphicEqIcon /> Analytics </div>
                   
                  }
                 
                  <div className='sidebar_links' onClick={viewDataFunction} style={{ backgroundColor: showTiles ? "#6367f0" : "white",color: showTiles ? "white" : "black" }}> <DatasetIcon /> View Data </div>
                  {
                    role === 'user' &&  <div className='sidebar_links' onClick={uploadjsonFunction} style={{ backgroundColor: uploadjson ? "#6367f0" : "white",color: uploadjson ? "white" : "black"}}> <DriveFolderUploadIcon /> Upload JSON Data </div>
                  }
                  {
                    role !=='user' &&   <div className='sidebar_links' onClick={viewReportFunction} style={{ backgroundColor: showReports ? "#6367f0" : "white",color: showReports ? "white" : "black" }}> <FlagCircleIcon /> Rejected Reports </div>
                }
                  {
                  role === 'user' && <div className='sidebar_links' onClick={viewFlaggedFunction} style={{ backgroundColor: showflaged ? "#6367f0" : "white",color: showflaged ? "white" : "black" }}> <FlagCircleIcon /> Flagged Reports </div> 
                  }
                  {
                  role !== 'user' && <div className='sidebar_links' onClick={viewFlaggedFunction} style={{ backgroundColor: showflaged ? "#6367f0" : "white",color: showflaged ? "white" : "black" }}> <FlagCircleIcon /> Flagged Reports </div> 
                  }
               
                  
                </div>
                {/*****************  Sidebarends  *************/}
              </div>
              <div style={{ height: "95vh", width: '100%', borderRadius: "10px", display: 'flex', gap: "5rem", alignItems: "center", backgroundColor: "white", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",overflow:"hidden"}}>
                {
                  showgraphs && role !=='user' &&
                  <>
                  <div style={{display:'flex', flexWrap:'wrap', flexDirection:'row',gap:'7rem', width: "100%", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', height: 'auto', marginLeft: '1rem', borderRadius: '10px', display: 'flex', gap: '2rem' }}>
                        <div style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
                        <Graph data={analyticsData} />
                        </div>
                        
                        <div style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px', alignItems:'center', display:'flex', justifyContent:'center'}}>
                        <Piechart data={analyticsData} /> 

                        </div>
                        <div style={{ display: 'grid', fontSize: '1rem', gridTemplateColumns: 'auto 1fr', gap: '5px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', padding: '2rem', fontFamily: 'Poppins', fontWeight: 'bold',  }}>

                          <div>
                            <p>TOTAL:</p>
                            <p>COMPLETED:</p>
                            <p>PENDING:</p>
                            <p>REJECTED:</p>
                            <p>Approved</p>
                          </div>
                          <div>
                            <p style={{ color: 'grey' }}><span>{analyticsData.total}</span></p>
                            <p style={{ color: 'grey' }}><span>{analyticsData.completed}</span></p>
                            <p style={{ color: 'grey' }}><span>{analyticsData.pending}</span></p>
                            <p style={{ color: 'grey' }}><span>{analyticsData.rejected}</span></p>
                            <p style={{ color: 'grey' }}><span>{analyticsData.approved}</span></p>

                          </div>
                        </div>

                        

                      </div>
                  </>
                }
                {
                   role==='user' && <div style={{display:stopdata?"none":""}}> <Tiles /> </div>
                }
                {
                  showTiles  && role==='user' && <div style={{display:stopdata?"":""}}> <Tiles /> </div>
                }

                  {
                    showTiles  && role==='reportingManager' && <div> <ReportingManagerDashboard/> </div>
                  } 
                  {
                    uploadjson  && <div> <UploadJson/> </div>
                  } 

                  {
                    showTiles  && role==='reviewingManager' && <div> <ReviewManager/> </div>
                  } 
                  {
                   showTiles  && role==='approvingManager' && <div> <ApprovalManagerDashboard/> </div>
                  }
                  {
                    (showflaged) && <div className='maindata_div' style={{backgroundColor:"",width:"78.2rem",overflow:"scroll"}}>
                      {

        appdata.map((items,index)=>(
          <>
          <div className='cards' style={{minHeight:'50vh',display:"flex",justifyContent:"space-between",width:"380px"}} id={index}>
            <p style={{fontWeight:"500"}}><b>POST : </b>{items['postContent'].length > 30 ? items['postContent'].substring(0, 26) + '...' : items['postContent']}</p>
            <p style={{fontWeight:"500"}}><b>SOURCE : </b>{items.platform}</p>
            {/* <p style={{fontWeight:"500"}}><b>USRER HANDLE : </b>{items.postOwnerName}</p> */}
            <p style={{fontWeight:"500"}}><b>USRER HANDLE : </b>{items.postOwnerName.length > 30 ? items['postOwnerName'].substring(0, 24) + '...' : items['postOwnerName']}</p>

            <p style={{fontWeight:"500"}}><b>CONTAINS VIDEO : </b>{items.ContainsVideo}</p>
            <p style={{fontWeight:"500"}}><b>VIOLATIONS : </b>{items.reason.length > 30 ? items['reason'].substring(0, 26) + '...' : items['reason']}</p>
            <p style={{fontWeight:"500"}}><b>RISK SCORE : </b>{items.sentiment.score}</p>
            <p style={{fontWeight:"500"}}><b>Reason for Flag : </b>
            {items.comments.map((items,index)=>(
              <>
              <div style={{display:"flex",flexDirection:"",width:"100%",backgroundColor:"",}}>
                <div style={{marginLeft:"1.5rem"}}>{items.user1}
                {items.rep}
                {items.rev}</div>
              </div>
              </>

            ))}</p>

            {/* <p style={{fontWeight:"500"}}>POST:<b>{items.original_filename}</b></p>
            <p style={{fontWeight:"500"}}>SOURCE:<b>Youtube</b></p>
            <p style={{fontWeight:"500"}}>USRER HANDLE:<b>NDTV profit</b></p>
            <p style={{fontWeight:"500"}}>CONTAINS VIDEO:<b>yes</b></p>
            <p style={{fontWeight:"500"}}>VIOLATIONS:<b>none</b></p>
            <p style={{fontWeight:"500"}}>RISK SCORE:<b>20/100</b></p> */}
            <div style={{display:"flex",justifyContent:"space-between",gap:"10px",marginRight:"20px"}}>
      {/* <p><b>SOURCE LINK : </b><a href='https://www.youtube.com/watch?v=JWIFhZsPsRw&pp=ygUdbmFyZW5kcmEgbW9kaSBsb2tzYWJoYSBzcGVlY2g%3D'> Post</a></p> */}
            <div style={{display:'flex', flexDirection:'column', gap:'0.4rem'}}>
              <div>
              <button style={{textAlign:'left'}} className='upload_btn'><b><a id='hyperlink' href={items.postLink} target="_blank" rel="noopener noreferrer"> Source Link</a></b></button>
              {
            
            (role === 'approvingManager' && showflaged) &&   <button className='card_btns_flag'  style={{marginLeft:"1rem"}} onClick={()=>{downloadFunction(index)}}><b>Download STR Pdf</b></button>
             
            }
              </div>
              <b style={{color:"green"}}>Status</b>
            { items.Status===1 && <p style={{backgroundColor:'red',padding:'0.3rem', borderRadius:'6px', fontWeight:'bold'}}>FLAGGED BY USER</p>}
            { items.Status===2 && <p style={{backgroundColor:'red',padding:'0.3rem',borderRadius:'6px',fontWeight:'bold'}} >FLAGGED BY REPORTING MANAGER</p>}
            { items.Status===3 && <p style={{backgroundColor:'red',padding:'0.3rem',borderRadius:'6px',fontWeight:'bold'}}>FLAGGED BY REVIEWING MANAGER</p>}
            { items.Status===4 && <p style={{backgroundColor:'red',padding:'0.3rem',borderRadius:'6px',fontWeight:'bold'}}>FLAGGED BY APPROVAL MANAGER</p>}
            { items.Status===-2 && <p style={{backgroundColor:'orange',padding:'0.3rem',borderRadius:'6px',fontWeight:'bold'}}>REJECTED BY REPORTING MANAGER</p>}
            { items.Status===-3 && <p style={{backgroundColor:'orange',padding:'0.3rem',borderRadius:'6px',fontWeight:'bold'}}>REJECTED BY REVIEWING MANAGER</p>}
            { items.Status===-4 && <p style={{backgroundColor:'orange',padding:'0.3rem',borderRadius:'6px',fontWeight:'bold'}}>REJECTED BY APPROVING MANAGER</p>}
             
            </div>
           
            {/* <button className='card_btns' onClick={() => viewFunction(index)}><b>View</b></button>
            <button className='card_btns_flag' onClick={()=>{flagFunction(index)}}><b>Flag For Investigation</b></button> */}
            </div>
            
          </div>
          
          
          </>

          ))
      }
      {
        // appdata.length ===0 ? "":
      <div style={{ display: 'flex',width:"100%", justifyContent: 'center', marginTop: '0.3rem' }}>
        <Button
          style={{backgroundColor:"lightblue",color:"white",height:"20px",borderRadius:"20px",display:"flex",alignItems:"center"}}
          variant="contained"
          disabled={currentPage === 1}
          onClick={() => fetchData(currentPage - 1)}
        >
          Previous
        </Button>
        <p style={{paddingLeft:"5px",paddingRight:"5px"}}><b>{currentPage}</b></p>
        <Button
          style={{backgroundColor:"lightblue",height:"20px",borderRadius:"20px",display:"flex",alignItems:"center"}}
          variant="contained"
          // style={{ marginLeft: '1rem' }}
          disabled={currentPage === numPages}
          onClick={() => fetchData(currentPage + 1)}
        >
          Next Page
        </Button>
      </div>
      }

                    </div>
                    
                  }
              </div>
              
            </div>
            
          </div>
      }
    </>
  )
}

export default Homepage
