import React, { Suspense } from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import SuspenseLoader from '../component/common/SuspenseLoader';
import Emails from '../component/Emails';

const Wrapper=styled(Box)`display:flex`;

function Main() {

  const [openDrawer,setOpenDrawer]=useState(true)

  const toggleDrawer=()=>{
      setOpenDrawer(prevState=>!prevState);
  }

  return (
      <>
        <Header toggleDrawer={toggleDrawer}/>
        
        <Wrapper>
            <Sidebar toggleDrawer={toggleDrawer} openDrawer={openDrawer}/>
            <Suspense fallback={<SuspenseLoader/>}>
                <Outlet context={{openDrawer}} />
               
            </Suspense>
        </Wrapper>

      </>
  )
}

export default Main;
