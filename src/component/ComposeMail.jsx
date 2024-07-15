import { Dialog, InputBase, TextField, Typography } from "@mui/material";
import { Close, DeleteOutline, } from "@mui/icons-material";
import '../style/dialogstyle.css';
import { useState } from "react";
import useApi from "./hooks/useApi";
import API_URLS  from "./services/apiurls.js";


const dialogStyle={
    height:'90%',
    width:'90%',
    maxWidth:"100%",
    maxHight:'100%',
    borderRadius:'10px 10px 0 0',
    boxShadow:'none',
    overflowX:'hidden'
   
}


const ComposeMail=({composeDialog,setComposeDialog})=>{

    const [data,setData]=useState({});
    const sentEmailService=useApi(API_URLS.saveSentEmail);
    const saveDraftService = useApi(API_URLS.saveDraftEmails);
   

    const config = {
        Host : "smtp.elasticemail.com",
        Username : 'codeforinterview1212@yopmail.com',
        Password : '28AD359E9D67DD356B589FED0740F0770C5A',
        port:"2525"
    }

   const closeDialog=(e)=>{
        e.preventDefault();

        const payload={
            to:data.to,
            from:"vinodeveloper6@gmail.com",
            subject:data.subject,
            body:data.body,
            date:new Date(),
            image:"",
            name:'code for interview',
            starred:false,
            type:'draft'
    
        }

        saveDraftService.call(payload)

        if(!saveDraftService.error){
            setComposeDialog(false);
            setData({});
        }else{
            
        }
    }
   
    const onvalueChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
       
    }



    const sendMail=(e)=>{
        e.preventDefault();

        if(window.Email){
            window.Email.send({
                ...config,
                To : data.to,
                From : "vinodeveloper6@gmail.com",
                Subject : data.subject,
                Body : data.body
            }).then(
                message => alert(message)
            )
        }

        const payload={
            to:data.to,
            from:"vinodeveloper6@gmail.com",
            subject:data.subject,
            body:data.body,
            date:new Date(),
            image:"",
            name:'code for interview',
            starred:false,
            type:'sent'
    
        }

        sentEmailService.call(payload)

        if(!sentEmailService.error){
            setComposeDialog(false);
            setData({});
        }else{
            
        }

        setComposeDialog(false);
    }
    
    return(
        <Dialog
            open={composeDialog}
            PaperProps={{sx:dialogStyle}}
        >
           
                <div className="header" >
                    <Typography>
                            New Message
                    </Typography>
                    <Close titleAccess="close" fontSize="small" onClick={(e)=>closeDialog(e)}/>

                </div>
                <div className="input d-flex flex-column p-1">
                    <InputBase placeholder="To" name='to' onChange={(e)=>onvalueChange(e)}/>
                    <hr></hr>
                    <InputBase placeholder="Subject" name='subject' onChange={(e)=>onvalueChange(e)} />
                    <hr></hr>
                  
                </div>
                <TextField
                    multiline
                    rows={10}
                    sx={{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}
                    name='body'
                    onChange={(e)=>onvalueChange(e)}
                />
                <div className="footer">
                    <button onClick={(e)=>sendMail(e)}>Send</button>
                    <DeleteOutline titleAccess="delete" className="deleteIcon " onClick={()=>setComposeDialog(false)}/>
                </div>
        </Dialog>
        
    )
}

export default ComposeMail;