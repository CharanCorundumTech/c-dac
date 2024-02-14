import React, { useState } from 'react'
import './Reportpage.css'
import demo from '../Assets/demo2.jpg'
import { useNavigate } from 'react-router-dom';
const Reportpage = ({post_title,posted_by,source,source_link,detailed_report_link,people_identified}) => {
  const navigate = useNavigate()

  // const CC= props.location.state.state.data || {};
  console.log(source)
  console.log(post_title)
  const static_data=[{
    "_id": {
        "$oid": "65a4da1e12085c2fd9a6c5bc"
    },
    "file_id": "1bcfe2b6-0a94-40f0-bc59-627d995b86e0",
    "post_link":"https://www.youtube.com/embed/JWIFhZsPsRw?autoplay=1&pp=ygUdbmFyZW5kcmEgbW9kaSBsb2tzYWJoYSBzcGVlY2g%3D",
    "filename": "Narendra_Modi.wav",
    "file_type": "video",
    "path": "uploaded_files/Narendra_Modi.wav",
    "original_filename": "Narendra_Modi.wav",
    "upload_time": {
        "$date": "2024-01-15T07:09:18.396Z"
    },
    "formatted_date": "15-01-24",
    "formatted_time": "07:09:18",
    "Events Detected" : { "Violence Against Humans" : false, 
    "Violence Against Animals": false,
    "NSFW ": false ,
    "Protests": false,
    "Natural Calamities": false},
    "Speakers Detected" : "Narendra Modi",
    "Faces Detected": "Narendra Modi",
    "speakers": [
        "Narendra Modi"
    ],
    "transcription": " \u0905\u0927\u093f\u092f\u0928 \u0905\u0926\u094d\u0927\u093f\u0915\u094d\u091c\u0940  \u090f\u0915 \u0938\u0935\u0930\u094d\u0923\u093f\u092e \u092a\u0932 \u0925\u093e\u0964 \u0914\u0930 \u0909\u0938 \u0938\u0935\u0930\u094d\u0923\u093f\u092e \u092a\u0932 \u0915\u0947 \u092b\u0915\u0921\u093e\u0930 \u0907\u0938 \u0938\u0926\u0928 \u0915\u0947 \u0938\u092d\u0940 \u0938\u0926\u0938 \u0939\u0948\u0902\u0964 \u0938\u092d\u0940 \u0926\u0932 \u0915\u0947 \u0938\u0926\u0938 \u0939\u0948\u0902\u0964 \u0938\u092d\u0940 \u0926\u0932 \u0915\u0947 \u0928\u0947\u0924\u093e \u092d\u0940 \u0939\u0948\u0902\u0964 \u0938\u0926\u0928 \u092a\u0947 \u0913 \u092f\u093e \u092d\u093e\u0925\u0926\u0928 \u0915\u0947 \u092c\u0939\u093e\u0930 \u0913, \u092a\u0930 \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0926\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\u0925\u093e\u0935\u093e\u0907\u0902\u0917\u0947 \u0932\u093f\u090f \u092a\u0930\u094d\ufffd  \u092c\u0947\u092c\u0940 \u0909\u0924\u0928\u0947 \u0939\u0940 \u0939\u0915\u094d\u0921\u093e\u0930 \u0939\u0948\u0902\u0964 \u0914\u0930 \u0907\u0938\u0932\u093f\u090f \u092e\u0948\u0902 \u0906\u091c \u0906\u092a\u0915\u0947 \u092e\u093e\u0927\u094d\u092f\u092e \u0938\u0947 \u0907\u0938 \u092c\u0939\u0941\u0924 \u092e\u0939\u0924\u0941\u092a\u0942\u0928 \u0928\u093f\u0928\u0947 \u092e\u0947\u0902 \u0914\u0930 \u0926\u0947\u0936 \u0915\u0940 \u092e\u093e\u0924\u094d\u0930\u0942 \u0936\u0915\u094d\u0924\u093f \u092e\u0947\u0902 \u0928\u0939\u0940\u0902 \u0909\u0930\u094d\u091c\u093e \u092c\u0930\u0928\u0947 \u092e\u0947\u0902\u0964 \u092f\u0947 \u0915\u0932 \u0915\u093e \u0928\u093f\u0930\u094d\u0923\u093e \u0939\u0948\u0902\u0964 \u0914\u0930 \u0906\u091c \u0938\u094d\u0930\u093e\u091c \u0938\u092c\u093e \u0915\u0947 \u092c\u093e\u091c \u0928\u093f\u0930\u094d\u0923\u093e \u0939\u0948\u0902\u0964 \u0905\u092a\u0928\u0947 \u092a\u094d\u0930\u093e\u091c \u092a\u094d\u0930\u093e\u091c \u092a\u094d\u0930\u093e\u091c \u092a\u094d\u0930\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u092a\u094d\u0930\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c\u093e\u091c \u0915\u0947 \u092c  \u091c\u092c \u0939\u092e \u0905\u0928\u094d\u0924\u0940\u0928 \u092a\u0922\u093e\u0935 \u092d\u0940 \u092a\u0942\u0930\u093e \u0915\u0930 \u0932\u0947\u0902\u0917\u0947, \u0926\u0947\u0936 \u0915\u0940 \u092e\u093e\u0924\u094d\u0930\u0941 \u0936\u0915\u094d\u0924\u093f \u0915\u093e \u091c\u094b \u092e\u093f\u091c\u093e\u0907\u091c \u092c\u0921\u0932\u0947\u0917\u093e, \u091c\u094b \u092d\u093f\u0938\u094d\u0935\u093e\u0938 \u092a\u0948\u0926\u093e \u0939\u094b\u0917\u093e, \u0935\u094b \u0926\u0947\u0936 \u0915\u094b \u0928\u0939\u0940\u0902 \u0909\u091a\u093e\u0907\u0913 \u092a\u0930 \u0932\u0947 \u091c\u093e\u0928\u0947 \u0935\u093e\u0932\u0940, \u090f\u0915 \u0905\u092a\u0915\u0932\u094d\u092a\u0928\u093f\u092f\u093e \u0905\u092a\u0924\u0940\u0935 \u0936\u0915\u094d\u0924\u093f \u0915\u0930 \u0930\u0941\u092a \u092e\u0947\u0902 \u0909\u092c\u0930\u0947\u0917\u093e, \u092f\u0947 \u092e\u0948\u0902 \u0905\u0928\u0941\u092d\u093e\u0935 \u0915\u0930\u0924\u093e \u0939\u0941\u0906\u0964 \u0914\u0930 \u0907\u0938 \u092a\u0935\u093f\u0924\u094d\u0930 \u0915\u093e\u0930\u094d\u092f \u0915\u094b \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f, \u0905\u092a\u0924\u0940\u0935 \u0936\u0915\u094d\u0924\u093f \u0915\u0930 \u0930\u0941\u092a \u092e\u0947\u0902 \u0909\u092a\u0928\u0947 \u0935\u093e\u0917\u093e, \u092f\u0947 \u092e\u0948\u0902 \u0905\u0928\u0941\u092d\u093e\u0935 \u0915\u0930\u0924\u093e \u0939\u0941\u0906\u0964 \u0914\u0930 \u0907\u0938 \u092a\u0935\u093f\u0924\u094d\u0930 \u0915\u093e\u0930\u094d\u092f \u0915\u094b \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f, \u0905\u092a\u0924\u0940\u0935 \u0936\u0915\u094d\u0924\u093f \u0915\u0930 \u0930\u0941\u092a \u092e\u0947\u0902 \u0909\u092a\u0930\u0947\u0917\u093e, \u092f\u0947 \u092e\u0948\u0902 \u0905\u0928\u0941\u092d\u093e\u0935 \u0915\u0930\u0924\u093e \u0939\u0941\u0906\u0964 \u0914\u0930 \u0907\u0938 \u092a\u0935\u093f\u0924\u094d\u0930 \u0915\u093e\u0930\u094d\u092f \u0915\u094b \u0915\u0930\u0928\u0947  \u0906\u092a \u0938\u092c\u0928\u0947 \u091c\u094b \u092f\u094b\u0917\u0926\u093e\u0928 \u0926\u093f\u092f\u093e \u0939\u0948, \u0938\u092e\u0930\u094d\u0925\u0928 \u0926\u093f\u092f\u093e \u0939\u0948, \u0938\u093e\u0930\u094d\u0925\u0903\u091a \u091a\u0930\u094d\u091a\u093e \u0915\u0940 \u0939\u0948, \u0938\u0926\u0928 \u0915\u0947 \u0928\u0947\u0924\u093e \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u0906\u091c \u0906\u092a \u0938\u092c \u0915\u093e \u092a\u0942\u0930\u0947 \u0926\u093f\u0932 \u0938\u0947, \u0938\u091a\u094d\u091a \u0926\u093f\u0932 \u0938\u0947, \u0906\u0926\u0930\u092a\u0942\u0930\u0935\u0915 \u0905\u092d\u093f\u0928\u0902\u0926\u0928 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0916\u0921\u093c\u093e \u0939\u0941\u0906 \u0939\u0942\u0902, \u0927\u0928\u094d\u0926\u093f\u0935\u093e\u0926 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0916\u0921\u093c\u093e \u0939\u0942\u0902, \u0928\u092e\u0936\u094d\u0915\u093e\u0930\u0964"
}]
const originalFilename = static_data[0].original_filename;
const filed_id = static_data[0].file_id;
const filed_type = static_data[0].file_type;
const post_link = static_data[0].post_link;
// const path = static_data[0].path;
const upload_time = static_data[0].upload_time;
const formatted_date = static_data[0].formatted_date;
const formatted_time = static_data[0].formatted_time;
const Violence_Against_Humans = static_data[0]["Events Detected"]["Violence Against Humans"];
const Violence_Against_Animals = static_data[0]["Events Detected"]["Violence Against Animals"];
const NSFW = static_data[0]["Events Detected"]["NSFW"];
const Protests = static_data[0]["Events Detected"]["Protests"];
const Natural_Calamities = static_data[0]["Events Detected"]["Natural Calamities"];
console.log(Violence_Against_Humans)
const speakers = static_data[0].speakers[0];
const transcription = static_data[0].transcription;
console.log(originalFilename);
const [isContentVisible, setIsContentVisible] = useState(false);
const toggleContent = () => {
  setIsContentVisible(!isContentVisible);
};

  return (
    <>
    <div style={{minHeight:"100vh", padding:"10px",backgroundColor:"#000032"}}>
      <button className='back_btn' onClick={()=>navigate('/dashboard')}>Close</button>
      <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <h3 style={{color:"white"}}>Report </h3>

    <div style={{border:"1px solid black",backgroundColor:"white",padding:"20px",borderRadius:"10px",width:"700px"}}>
    <div style={{fontWeight:"500"}}>
      <div style={{height:"200px",width:"300px",marginBottom:"10px",backgroundColor:"grey"}}>
      <iframe height="200" src={post_link} frameborder="0" allowfullscreen></iframe>
        {/* <video src='https://www.youtube.com/watch?v=JWIFhZsPsRw&pp=ygUdbmFyZW5kcmEgbW9kaSBsb2tzYWJoYSBzcGVlY2g%3D' height="200px" alt='demo_image'/> */}

      </div>
      <p><b>POST TITLE : </b>PM Modi's Motion of Thanks in Lok Sabha In Under 10 Minutes</p>
      <p><b>POSTED BY : </b>NDTV Profit</p>
      <p><b>SOURCE : </b>Youtube</p>
      <p><b>SOURCE LINK : </b><a href={post_link} target="_blank" rel="noopener noreferrer">{post_link}</a></p>
      {/* <p><b><u>DETAILED REPORT</u></b><a href='http://127.0.0.1:3000/detailed_report'></a><button onClick={toggleContent} style={{border:"none",backgroundColor:"#16437e",color:"white",borderRadius:"5px",marginLeft:"10px"}}><b>{isContentVisible ? 'Hide' : 'Show'}</b></button></p> */}
      <p><b><u>DETAILED REPORT</u></b><button onClick={toggleContent} style={{border:"none",backgroundColor:"#16437e",color:"white",borderRadius:"5px",marginLeft:"10px"}}><b>{isContentVisible ? 'Hide' : 'Show'}</b></button></p>
      {isContentVisible && (
      <div style={{marginLeft:"20px",backgroundColor:"lightgrey",padding:"10px"}}>
      <p><b>FILE ID : </b>{filed_id}</p>
      <p><b>FILE NAME : </b>{originalFilename}</p>
      <p><b>FILE TYPE : </b>{filed_type}</p>
      {/* <p><b>FILE PATH :</b>{path}</p> */}
      <p><b>UPLOAD TIME : </b>{upload_time.$date}</p>
      <p><b>FORMATED DATE : </b>{formatted_date}</p>
      <p><b>FORMATED TIME : </b>{formatted_time}</p>
      <p><u><b>EVENTS DETECTED : </b></u></p>
      <div style={{marginLeft:"20px"}}><p><b>VIOLENCE_AGAINST_HUMANS : </b>{Violence_Against_Humans ? 'True' : 'False'}</p>
      <p><b>VIOLENCE_AGAINST_ANIMALS : </b>{Violence_Against_Animals ? 'True' : 'False'}</p>
      <p><b>NSFW :</b>{NSFW ? 'True' : 'False'}</p>
      <p><b>PROTESTS : </b>{Protests ? 'True' : 'False'}</p>
      <p><b>NATURAL CALAMITIES : </b>{Natural_Calamities ? 'True' : 'False'}</p>
      </div>
      <p><b>SPEAKERS DETECTED : </b>{speakers}</p>
      <p><b>FACE DETECTED : </b>{speakers}</p>
      {/* <p><b style={{color:"red"}}>TRANSCRIPTION : </b><span style={{color:"#052a44",fontWeight:"bold"}}>{transcription}</span></p> */}
      <p><b style={{color:"red"}}>TRANSCRIPTION : </b><span style={{color:"#052a44",fontWeight:"bold"}}>
      आदरणीय अध्यक्षजी, एक सवर्णिम पल था। और उस सवर्णिम पल के फकडार इस सदन के सभी सदस हैं। सभी दल के सदस हैं। सभी दल के नेता भी हैं। सदन पे ओ या भाथदन के बहार ओ, पर पर्थावादाइंगे लिए पर्थावाइंगे लिए पर्थावाइंगे लिए पर् उतने ही हैं। और इसलिए मैं आज आपके माध्यम से इस बहुत महत्वपूर्ण निर्णय में और देश की मात्र शक्ति में नहीं उर्जा बरने में। ये कल का निर्णय हैं। और आज राज्य सभा के निर्णय हैं। अपने प्रा बाज के ब जब हम अंतिम पढाव भी पूरा कर लेंगे, देश की मात्र शक्ति का जो मिजाज बडलेगा, जो विश्वास पैदा होगा, वो देश को नहीं उचाइओ पर ले जाने वाली, एक अपकल्पनिय अपतीव शक्ति कर रुप में उबरेगा, ये मैं अनुभव करता हु। और इस पवित्र कार्य को करने के लिए, अपतीव शक्ति कर रुप में उपने वागा, ये मैं अनुभव करता हुआ। और इस पवित्र कार्य को करने के लिए, अपतीव शक्ति कर रुप में उभरेगा, ये मैं अनुभव करता हुआ। और इस पवित्र कार्य को करने आप सबने जो योगदान दिया है, समर्थन दिया है, सार्थः चर्चा की है, सदन के नेता के रूप में आज आप सब का पूरे दिल से, सच्च दिल से, आदरपूरवक अभिनंदन करने के लिए खड़ा हुआ हूं, धन्यवाद
      करने के लिए खड़ा हूं, नमश्कार।
        </span></p>
      </div>
      )}


    </div>
    <div style={{display:"flex",gap:"20px",fontWeight:"500"}}>
     <p><b>VIOLATIONS : </b> None</p>
     {/* <div style={{display:"flex",gap:"20px",marginBottom:"10px"}}> 
      <button className='report_btns'>PROFANITY</button>
      <button className='report_btns'>VIOLENCE</button>
      <button className='report_btns'>DEEP FAKE</button>
      </div> */}
    </div>
    <p ><b>RISK SCORE : 20/100</b></p>
    
     <div style={{display:"flex",gap:"20px",marginLeft:"30PX",marginTop:"20px"}}> 
      <button className='report_btns2'>FLAG</button>
      <button className='report_btns2'>DISMISS</button>
      <button className='report_btns2'>EDIT BEFORE FLAGGING</button>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Reportpage