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

const Homepage = () => {
  const navigate = useNavigate()
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [carddata,setCardData]=useState()


  useEffect(()=>{
    const token = localStorage.getItem('token')
    let num=0
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

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const viewDataFunction = () => {
    setShowTiles(true)
    setShowgraphs(false)
    setShowreports(false)
    setUploadjson(false)

  }
  const viewGraphFunction = () => {
    setShowgraphs(true)
    setShowTiles(false)
    setShowreports(false)
  }
  const uploadjsonFunction = () => {
    setUploadjson(true)
    setShowTiles(false)
    setShowreports(false)
    setaStopdata(true)

  }
  const [stopdata,setaStopdata]=useState(false)
  const viewReportFunction = () => {
    setShowreports(true)
    setaStopdata(true)
    setUploadjson(false)

    setShowTiles(false)
    setShowgraphs(false)
  }
  const role=localStorage.getItem('role')
  if(role=='user'){

  }

  return (
    <>
      {
        showReport === true ? <Reportpage post_title={post_title} posted_by={user_handle} source={source} source_link={"NA"} detailed_report_link={"NA"} people_identified={"NA"} /> :
          <div className='main_container'>
            <Navbar />
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h4 style={{ marginLeft: "10px",color:'Darkblue' }}>Dashboard</h4> <WidgetsIcon />
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
                  height: "90.5vh", width: "250px",
                  paddingTop:"0.5rem"
                }}>
                  {
                  role !=='user' && <div className='sidebar_links' onClick={viewGraphFunction} style={{ backgroundColor: showgraphs ? "#6367f0" : "white",color: showgraphs ? "white" : "black"}}> <GraphicEqIcon /> Analytics </div>
                   
                  }
                 
                  <div className='sidebar_links' onClick={viewDataFunction} style={{ backgroundColor: showTiles ? "#6367f0" : "white",color: showTiles ? "white" : "black" }}> <DatasetIcon /> View Data </div>
                  {
                    role === 'user' &&  <div className='sidebar_links' onClick={uploadjsonFunction} style={{ backgroundColor: uploadjson ? "#6367f0" : "white",color: uploadjson ? "white" : "black"}}> <DriveFolderUploadIcon /> Upload JSON Data </div>
                  }
                  <div className='sidebar_links' onClick={viewReportFunction} style={{ backgroundColor: showReports ? "#6367f0" : "white",color: showReports ? "white" : "black" }}> <FlagCircleIcon /> Reports </div>
                  
                </div>
                {/*****************  Sidebarends  *************/}
              </div>
              <div style={{ height: "500px", width: '100%', borderRadius: "10px", display: 'flex', gap: "5rem", alignItems: "center", backgroundColor: "white", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                {
                  showgraphs && role !=='user' &&
                  <>
                    <div style={{ backgroundColor: "", width: "800px" }} >
                      <Graph />
                    </div>
                    <div style={{ backgroundColor: "" }} >
                      <Piechart />
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
                    showReports && <div style={{width:"100%",display:"flex",justifyContent:"center"}}> <h4>No Data To Show</h4> </div>
                  } 
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Homepage
