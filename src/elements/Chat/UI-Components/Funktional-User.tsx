import * as React from 'react';
import {alpha, styled} from '@mui/material/styles';
import Menu, {MenuProps} from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import {GetAllStartedDialogs} from "../../../Reducers/ChatReducer";
import {useAppDispatch} from "../../../store/store";
import {FollowTK, UnFollowTK} from "../../../Reducers/UsersReducer";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({theme}) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


export default function FunktionalUser(props: ButtonFunctionalType) {

    //take from Reducer
    const dispatch = useAppDispatch()


    //local state
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    //state change
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseNext = () => {
        setAnchorEl(null);
    };

    //Unsubscribe User,Subscribe
    const SUbOrFollowMS = () => {
        setAnchorEl(null);
        if (props.typeOfUser=="Friend"){
            dispatch(UnFollowTK(props.idUser))
            dispatch(GetAllStartedDialogs())
        }else {
            dispatch(FollowTK(props.idUser))
            dispatch(GetAllStartedDialogs())
        }
    };

    return (
        <div>

            <IconButton id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
            >
                <MoreVertIcon fontSize="small"/>
            </IconButton>


            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseNext}
            >

                {/*----------------user Unsubscribe or Subscribe*/}
                {props.typeOfUser == "Friend"
                    ? <MenuItem onClick={SUbOrFollowMS} disableRipple>
                        <DeleteIcon/>
                        Unsubscribe
                </MenuItem>
                    : <MenuItem onClick={SUbOrFollowMS} disableRipple>
                        <DeleteIcon/>
                        Subscribe
                    </MenuItem>
                }

            </StyledMenu>

        </div>
    );
}

// types
type ButtonFunctionalType = {
    typeOfUser: "Friend" | "Other",
    idUser: number
}