'use client';
import { Alert, Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

export default function Search(props: { years: string[] }) {

    const [year, setYear] = useState('');

    const [lang, setLang] = useState('en');

    const [showAlert, setShowAlert] = useState(true)

    const handleYearChange = (event: SelectChangeEvent) => {
        setYear(event.target.value as string);
        setShowAlert(false)
    };

    const menuItems = props.years.map(y => <MenuItem value={y} key={y}>{y}</MenuItem>)

    return (
        <>
            <Container maxWidth="xs">

                <Collapse in={showAlert}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="info"
                                size="small"
                                onClick={() => {
                                    setShowAlert(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        severity="info"
                    >
                        Wybierz rok przyznania Nagrody Nobla!
                    </Alert>
                </Collapse>

                <FormControl fullWidth margin="normal">
                    <InputLabel id="year-select">Rok</InputLabel>
                    <Select
                        labelId="year-select"
                        id="year-select"
                        value={year}
                        label="Year"
                        onChange={handleYearChange}
                    >
                        {menuItems}
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <ToggleButtonGroup
                        value={lang}
                        exclusive
                        onChange={(event, value) => setLang(value as string)}
                        aria-label="text alignment"
                        fullWidth
                        size="small"
                    >
                        <ToggleButton value="en" aria-label="left aligned">
                            🇬🇧<br />Angielski
                        </ToggleButton>
                        <ToggleButton value="no" aria-label="centered">
                            🇳🇴<br />Norweski
                        </ToggleButton>
                        <ToggleButton value="se" aria-label="right aligned">
                            🇸🇪<br />Szwedzki
                        </ToggleButton>
                    </ToggleButtonGroup>
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <Button
                        href={`/nagrody/${lang}/${year}`}
                        variant="contained"
                        size="large"
                        disabled={!year}
                    >
                        Wyszukaj nagrody
                    </Button>
                </FormControl>
            </Container>
        </>
    )
}