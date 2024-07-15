import { useOutletContext , useLocation} from "react-router-dom";
import { Box,Typography, styled} from "@mui/material";
import { ArrowBack , Delete} from "@mui/icons-material";
import { emptyProfilePic } from "../constants/Constants";
import useApi from "./hooks/useApi";
import API_URLS from "./services/apiurls";

const IconWrapper=styled(Box)({
    padding:10

})

const Subject=styled(Typography)({
    fontSize:22,
    margin:'10px 0 10px 50px',
    display:'flex'

})
const Indicator=styled(Box)({
    fontSize: '12px !important',
    background: '#ddd',
    color:' #222',
    borderRadius: '4px',
    marginLeft: '6px',
    padding: '2px 4px',
    alignSelf: 'center'
})

const Containers=styled(Box)({
    marginLeft:15,
    width:'100%',
    '& > div':{
        display:'flex',
        '& > p > span':{
                fontSize:12,
                color:'#5E5E5E'
            }
    }

});

const Date = styled(Box)({

    margin:'0 50px 0 auto',
    fontSize:12,
    color:'#5E5E5E'

})

const Image=styled('img')({
    borderRadius:'50%',
    width:40,
    height:40,
    margin:'5px 10px 0px 10px',
    background:'#cccccc',


})


const ViewEmail=()=>{

    const {openDrawer} = useOutletContext();

    const { state } = useLocation();
    const { email } = state;

    const moveEmailsToBinService=useApi(API_URLS.moveEmailsToBin);

    const deleteEmail=()=>{
        moveEmailsToBinService.call([email._id]);
        window.history.back();
    }

    return(
        
        <Box style={openDrawer ? {marginLeft:220, width:'100%'}:{width:'100%'}}>
            <IconWrapper>
                <ArrowBack onClick={()=> window.history.back()} color="action" fontSize="small"/>
                <Delete fontSize="small" color='action' style={{ marginLeft:30 }} onClick={() => deleteEmail()}/>
            </IconWrapper>
            <Subject>
                {email.subject}
                <Indicator component={'span'}>
                    Inbox
                </Indicator>
            </Subject>
            <Box style={{ display:'flex' }}>
                <Image src={emptyProfilePic} alt='dp'/>
                <Containers>
                    <Box>
                        <Typography style={{ marginTop:'10px'}} >
                            {email.name}
                            <Box component={'span'}>&nbsp;&#60;{email.to}&#62;&nbsp;</Box>
                        </Typography>
                        <Date>
                            {(new window.Date(email.date)).getDate()}&nbsp;

                            {(new window.Date(email.date)).toLocaleString('default',{ month:'long'})}&nbsp;

                            {(new window.Date(email.date)).getFullYear()}
                        </Date>
                    </Box>
                    <Typography>
                        {email.body}
                    </Typography>
                </Containers>
            </Box>
        </Box>
    )

}

export default ViewEmail;