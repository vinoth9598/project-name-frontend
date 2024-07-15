// import Appbar,toolbar;
import { AppBar,InputBase,Toolbar ,styled,Box} from "@mui/material";

// import MenuIcon
import { Menu as MenuIcon,Search,Tune,HelpOutlineOutlined,SettingsOutlined,
    AppsOutlined,AccountCircleOutlined } from "@mui/icons-material";

// import gamilLogog icon;
import { gmailLogo } from "../constants/Constants";

import "../style/Header.css";

// remove style in toolbar
const StyledAppbar=styled(AppBar)({
    background:"#f5f5f5",
    boxShadow:"none"
})



const Header=({toggleDrawer})=>{
    return(
        <StyledAppbar position="static">
            <Toolbar>
                <MenuIcon color="action" onClick={toggleDrawer} titleAccess="Main Menu"/>

                <img src={gmailLogo} alt="Gmail" title="Gmail" style={{ width:100, marginLeft:20}}/>

                <Box className="inputBox">
                    <Search sx={{color:"black"}} style={{cursor:"pointer"}} titleAccess="Search" />
                    <InputBase className="input" color="action" placeholder="Search mail" style={{fontWeight:'bold'}} /> 
                    <Tune sx={{color:"black"}} alt="Tune"  style={{cursor:"pointer"}} titleAccess="Show more options"/>
                </Box>

                <div className="headericon">
                    <HelpOutlineOutlined color="action" />
                    <SettingsOutlined color="action" />
                    <AppsOutlined color="action" />
                    <AccountCircleOutlined color="action" />
                </div>
                  
            </Toolbar>
        </StyledAppbar>
    )
}

export default Header;