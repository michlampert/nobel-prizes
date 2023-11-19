import { AppBar, Toolbar, Typography } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function TopBar() {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <EmojiEventsIcon />
                    &nbsp;
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Nobel Prize Explorer
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
} 