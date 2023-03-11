import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import {RootState, useAppDispatch} from "../../../store/store";
import {getSearchUsersTK, SearchUserType} from "../../../Reducers/ChatReducer";
import {useSelector} from "react-redux";
import {photosType} from "../../../API/api";
import {statusType} from "../../../Reducers/InitialazedReducer";
import SetingsForSearch from "./SetingsForSearch";
import ImageIcon from "@mui/icons-material/Image";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

interface Film {
    id: number
    Name: string,
    photos: photosType
}

export default function Asynchronous() {
    const dispatch = useAppDispatch()
    const topFilms = useSelector<RootState, Array<SearchUserType>>(state => state.chat.SearchUsers.users)
    const statusLoading = useSelector<RootState, statusType>(state => state.initialazed.status)

    const SearchSize = useSelector<RootState, number>(state => state.chat.SearchUsers.SearchSize)
    const TypeOfUsersSearch = useSelector<RootState, string>(state => state.chat.SearchUsers.TypeOfUsersSearch)

    const [open, setOpen] = React.useState(false);
    const [valueOfButton, SetvalueOfButton] = useState<string>("");
    const [options, setOptions] = React.useState<Film[]>([...topFilms]);


    const searchUser = (e: string) => {
        SetvalueOfButton(e)
        dispatch(getSearchUsersTK(valueOfButton, SearchSize, TypeOfUsersSearch))
    }

    const loading = statusLoading == "loading" ? true : false


    React.useEffect(() => {
        setOptions([...topFilms]);
    }, [topFilms]);
    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', height: 40, display: 'flex', alignItems: 'center', width: 324, margin: 2.20}}
        >


            <Autocomplete
                id="Type name"
                sx={{width: 300, border: "none"}}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}


                isOptionEqualToValue={(option, value) => option.Name === value.Name}
                getOptionLabel={(option) =>option.Name}

                options={options}
                loading={loading}
                renderOption={(props, option) => (
                    <Box component="li" {...props}>
                        <Avatar sx={{marginRight:2}} src={option.photos.small == null ? "" : option.photos.small}>
                            <ImageIcon/>
                        </Avatar>
                        {option.Name}
                    </Box>
                )}
                renderInput={(params) => (

                    <TextField
                        {...params}
                        label="Name of user"
                        value={valueOfButton}
                        onChange={(e) => searchUser(e.target.value)}
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />

                )}
            />
            <IconButton type="button" sx={{p: '10px'}} aria-label="search">
                <SetingsForSearch/>
            </IconButton>

        </Paper>
    );
}
