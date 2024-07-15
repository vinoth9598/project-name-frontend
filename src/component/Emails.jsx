
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import API_URLS  from "./services/apiurls";
import useApi from "./hooks/useApi";
import { useEffect, useState } from "react";
import { Box,Checkbox,List } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import Email from "./Email";
import NoMails from "./common/NoMails";
import { EMPTY_TABS } from "../constants/Constants";


const Emails=()=>{

    const {openDrawer} = useOutletContext();
    const [selectedEmails, setSelectedEmails]=useState([]);
    const [refreshScreen,setRefreshScreen]=useState(false);


    const { type } = useParams();

    const getEmailsService = useApi(API_URLS.getEmailFromType);
    const moveEmailsToBinService=useApi(API_URLS.moveEmailsToBin);
    const deleteEmailsService =useApi(API_URLS.deleteEmails);

    useEffect(()=>{
        getEmailsService.call({},  type)

    },[type , refreshScreen])

    const selectAllEmails=(e)=>{

        if(e.target.checked){
            const emails=getEmailsService?.response?.map(email => email._id);
            setSelectedEmails(emails);

        }else{
            setSelectedEmails([]);
        }
        setRefreshScreen(prevState => !prevState);

    }

    const deleteSelectedEmails=()=>{

        if(type === 'bin'){
            
            deleteEmailsService.call(selectedEmails)

        }else{
            moveEmailsToBinService.call(selectedEmails);
        }

    }

    return (

        <Box style={openDrawer ? {marginLeft:220, width:'calc(100% - 230px)'}:{width:'100%'}}>
            <Box style={{display:'flex',alignItems:'center'}}>
                <Checkbox size='small' onChange={(e)=>selectAllEmails(e)}/>
                <DeleteOutline onClick={(e)=>deleteSelectedEmails(e)} />
            </Box>
            <List>
                {
                    getEmailsService?.response?.map(email =>(
                        <Email
                            key={email._id}
                            email={email}
                            selectedEmails={selectedEmails}
                            setSelectedEmails={setSelectedEmails}
                            setRefreshScreen= {setRefreshScreen}
                        />
                ))
                }
            </List>
                {
                    getEmailsService?.response?.length === 0 &&
                        <NoMails message={EMPTY_TABS[type]}/>
                }
        </Box>
    )
}


export default Emails;