
import { Box, Typography, Checkbox, styled } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import API_URLS from "./services/apiurls";
import useApi from "./hooks/useApi";


const Wrapper= styled(Box)({

    padding:' 0 0 3px',
    background:'#f2f6fc',
    display:'flex',
    alignItems:'center',
    cursor:'pointer',
    '& > div':{
        display:'flex',
        width:'100%',
        '& > p':{
            fontSize:'14px',


        }

    }
})

const Indicator=styled(Typography)({
    fontSize: '12px !important',
    background:'#ddd',
    color:'#222',
    borderRadius:'4px',
    marginRight:'5px',
    padding:' 0 5px'

})

const Date=styled(Typography)({
    marginLeft:'auto',
    marginRight:20,
    fontSize:12,
    color:'#5f6368',
})


const Email=({ email, selectedEmails, setRefreshScreen, setSelectedEmails })=>{

    const navigate=useNavigate();

    const toggleStarredEmailService = useApi(API_URLS.toggleStarredEmail);

    const toggleStarredMail = () =>{

        toggleStarredEmailService.call({ id: email._id, value: !email.starred});
        setRefreshScreen(prevState => !prevState);

    }

    const onValueChange=()=>{

        if(selectedEmails.includes(email._id)){
            setSelectedEmails(prevState => prevState.filter(id => id !== email._id));

        }else{
            setSelectedEmails(prevState => [...prevState , email._id]);
        }
    }

    return (
        <Wrapper>
            <Checkbox size='small'
                checked={selectedEmails.includes(email._id)}
                onChange={()=> onValueChange()}
            />
            {
                email.starred ? 
                    <Star fontSize="small" style={{ marginRight:10 , color:'#fff200'}} onClick={()=> toggleStarredMail()}/> 
                :
                    <StarBorder fontSize="small" style={{ marginRight:10}} onClick={() => toggleStarredMail()}/>

            }
            <Box onClick={()=>navigate(routes.view.path, {state: {email : email }})}>
                <Typography style={{ width:200, overflow:'hidden' }}>{ email.name }</Typography>
                <Indicator>Inbox</Indicator>
                <Typography>{email.subject} { email.body && '-'} { email.body }</Typography>
                <Date>
                    {(new window.Date(email.date)).getDate()}&nbsp;
                    {(new window.Date(email.date)).toLocaleString('default',{ month:'long'})}
                </Date>
            </Box>
        </Wrapper>
    )
}

export default Email;