import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TuneIcon from '@mui/icons-material/Tune';
import {FormLabel} from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import {RootState, useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {SetSettingsSearchSizeAC, SetSettingsTypeOfUsersSearchAC} from "../../../Reducers/ChatReducer";

export default function SetingsForSearch() {
    const dispatch = useAppDispatch()

    const SearchSize = useSelector<RootState, number>(state => state.chat.SearchUsers.SearchSize)
    const TypeOfUsersSearch = useSelector<RootState, string>(state => state.chat.SearchUsers.TypeOfUsersSearch)



    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    // const [maxWidth, setMaxWidth] = React.useState<string>("10");
    //
    // const [StateTypeOfUsers, setTypeOfUsersSearch] = React.useState<string>(TypeOfUsersSearch);
    // const [StateLookingForJob, setLookingForJob] = React.useState<boolean>(LookingForJob);
    // const [StateSearchSize, setSearchSize] = React.useState<number>(SearchSize);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    //     setMaxWidth(
    //         event.target.value,
    //     );
    // };
    const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullWidth(event.target.checked);
    };
    return (
        <React.Fragment>
            <Button sx={{width: 0.2}} variant="outlined" onClick={handleClickOpen}>
                <TuneIcon/>
            </Button>
            <Dialog
                fullWidth={true}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Search Settings</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Choose the optimal user search and start chatting. Good luck
                    </DialogContentText>

                    <Box noValidate component="form" sx={{
                        padding: 2,
                        display: 'flex',
                        m: 'auto',
                        alignItems: "flex-start",
                        justifyContent: "space-between"
                    }}>

                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Type of users</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                onChange={event => dispatch(SetSettingsTypeOfUsersSearchAC(event.target.value))}
                                value={TypeOfUsersSearch}
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="Friends" control={<Radio/>} label="Friends"/>
                                <FormControlLabel value="No friends" control={<Radio/>} label="No friends"/>
                                <FormControlLabel value="Other" control={<Radio/>} label="Other"/>
                            </RadioGroup>
                        </FormControl>
                        <FormControl sx={{mt: 2, minWidth: 120}}>
                            <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                            <Select
                                autoFocus
                                value={SearchSize}
                                onChange={event => dispatch(SetSettingsSearchSizeAC(Number(event.target.value)))}
                                label="Search Size"
                                inputProps={{
                                    name: 'Search Size',
                                    id: 'max-width',
                                }}
                            >
                                <MenuItem value="10">10</MenuItem>
                                <MenuItem value="20">20</MenuItem>
                                <MenuItem value="30">30</MenuItem>
                                <MenuItem value="50">50</MenuItem>
                                <MenuItem value="100">100</MenuItem>
                            </Select>
                        </FormControl>

                    </Box>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}