import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioGrop() {
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Job search:</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Yes" />
                <FormControlLabel value="male" control={<Radio />} label="No" />
            </RadioGroup>
        </FormControl>
    );
}