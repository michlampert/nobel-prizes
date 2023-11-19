import { AppBar, Toolbar, Typography } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Link from "next/link";
import styles from "../styles/global.module.css"

export default function TopBar() {
    return (
        <>
            <AppBar position="sticky" sx={{ mb: 3 }}>
                <Toolbar>
                    <Link
                        href={"/"}
                        className={styles.link}
                    >
                        <EmojiEventsIcon />
                        &nbsp;
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Nobel Prize Explorer
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
} 