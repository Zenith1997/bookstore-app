import React, { startTransition } from "react";
import {AppBar, Tabs, Toolbar, Typography} from "@mui/material";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

const Header = () => {

    return (
    
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography >
                        <CollectionsBookmarkIcon />
                    </Typography>
                    <Tabs>
                         
                    </Tabs>
                </Toolbar>
               
            </AppBar>
        </div>
    );
}

export default Header;