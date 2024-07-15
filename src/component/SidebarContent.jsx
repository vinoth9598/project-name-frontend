import { List} from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import SIDEBAR_DATA from "./config/sidebar.config";
import '../style/Sidebar.css';
import ComposeMail from "./ComposeMail";
import { useState } from "react";
import { useParams ,NavLink} from "react-router-dom";
import { routes } from "../routes/routes";


const SidebarContent=()=>{
    const [composeDialog,setComposeDialog]=useState(false);

    const { type } = useParams();

    const handleDialog=()=>{
        setComposeDialog(true)
    }
    return (
        <div>

            <button className='btn ' onClick={handleDialog}>
                <CreateOutlined />Compose
            </button>
            <List className="sidelist">
                {
                    SIDEBAR_DATA.map((data) =>
                        <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>
                            <div className="list" key={data.id} style={ type === data.name.toLowerCase() ?{
                                backgroundColor:'lightblue',
                                padding:'5px 1px',
                                borderRadius:'8px'
                               
                                } :{}} >
                                    <div className="listItem d-flex"  >
                                        <data.icon fontSize="small"  /> <li  className="items ms-3">{ data.title}</li>
                                    </div>
                            </div>
                        </NavLink>
                    )
                }
            </List>
            <ComposeMail composeDialog={composeDialog} setComposeDialog={setComposeDialog} />
               
            
        </div>
    )
}

export default SidebarContent;