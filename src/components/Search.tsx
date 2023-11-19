'use client';
import { Alert, Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

export default function Search(props: {years: string[]}) {

    const [year, setYear] = useState('');

    const [showAlert, setShowAlert] = useState(true)

    const handleChange = (event: SelectChangeEvent) => {
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
                        Select year of Nobel Prize
                    </Alert>
                </Collapse>

                <FormControl fullWidth margin="normal">
                    <Stack spacing={2}>
                        <InputLabel id="year-select">Year</InputLabel>
                        <Select
                            labelId="year-select"
                            id="year-select"
                            value={year}
                            label="Year"
                            onChange={handleChange}
                        >
                            {menuItems}
                        </Select>
                        <Button
                            href={`/nagrody/${year}`}
                            variant="contained"
                            size="large"
                            disabled={!year}
                        >
                            Search
                        </Button>
                    </Stack>
                </FormControl>
            </Container>
        </>
    )
}