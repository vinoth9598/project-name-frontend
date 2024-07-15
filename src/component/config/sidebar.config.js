
import { DeleteOutlined, InsertDriveFileOutlined, MailOutlined, Photo, SendOutlined, StarOutline } from "@mui/icons-material";

const SIDEBAR_DATA=[

    {
        id:1,
        name:'inbox',
        title:'Inbox',
        icon:Photo
    },
    {
        id:2,
        name:'starred',
        title:'Starred',
        icon:StarOutline
    },
    {
        id:3,
        name:'sent',
        title:'Sent',
        icon:SendOutlined
    },
    {
        id:4,
        name:'draft',
        title:'Drafts',
        icon:InsertDriveFileOutlined
    },
    {
        id:5,
        name:'allmail',
        title:'All Mail',
        icon:MailOutlined
    },
    {
        id:6,
        name:'bin',
        title:'Bin',
        icon:DeleteOutlined
    }

];

export default SIDEBAR_DATA;