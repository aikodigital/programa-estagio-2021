import React, { useState,useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';

export default function FilterBar({ onNewFilter,initialValue }) {

    const [filter, setFilter] = useState(initialValue);

    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                onNewFilter(filter);
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    });

    const handleChange = (event) => {
        setFilter(event.target.value);
    }
    const handleClick = () => {
        onNewFilter(filter);
    }

    return (
        <div>
            <TextField
                style={{width: "100%", paddingBottom:"15px",backgroundColor:"#aaa"}}
                id="standard-name"
                label="Filtro"
                onChange={handleChange}
                InputProps={{endAdornment: 
                    <Button variant="outlined" onClick={handleClick}>
                        Filtrar
                    </Button>
                }}
            />
        </div>
    )
}
