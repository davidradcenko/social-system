import React, {useCallback} from 'react';
import {dataType, social} from "./API/api";
import {Box, Button, Container, CssBaseline, Grid} from "@mui/material";

function App() {
    const me=()=>{
        const data:dataType={
            email:"davedqwerty1@gmail.com",
            password:"davidqwerty07112001",
            rememberMe:true,
        }
      return social.authMe()
    }

  return (
    <div className="App">
        <CssBaseline />
        <Container maxWidth={"md"}  >
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
            <Grid container border={1} spacing={2}/>
        </Container>


    </div>
  );
}

export default App;
