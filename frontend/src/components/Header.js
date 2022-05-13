import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import { Tab, Tabs } from "@mui/material";
import {NavLink,Link} from 'react-router-dom'

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{backgroundColor:'#232F3D'}} position="sticky" color="primary">
        <Toolbar>

          
          <Typography>
                <Tab LinkComponent={NavLink} to ="/" label={<MenuBookTwoToneIcon/>}/>
            </Typography>
            <Tabs
            sx={{ml:"auto"}}
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
              indicatorColor="secondary"
            >
              <Tab LinkComponent={NavLink} to ="/add" label="Add product"/>
              <Tab  LinkComponent={NavLink} to ="/books"  label="Books"/>
              <Tab  LinkComponent={NavLink} to ="/aboutus" label="About Us"/>
            </Tabs>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
