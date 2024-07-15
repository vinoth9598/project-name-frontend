
import { lazy } from "react";

const Main=lazy(()=>import('../pages/Main') );
const Emails=lazy(()=> import('../component/Emails'));
const ViewEmail=lazy(()=> import('../component/ViewEmail'));


const routes={
    main:{
        path:'/',
        element:Main
    },
    emails:{
        path:'/emails',
        element:Emails
    },
    invalid:{
        path:'/*',
        element:Emails
    },
    view:{
        path:'/view',
        element:ViewEmail
    }
}


export {routes};