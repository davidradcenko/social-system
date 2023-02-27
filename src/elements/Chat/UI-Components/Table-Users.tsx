import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';

type TableUsersType={
    userName:string,
    photos:string|null,
    lastDialogActivityDate:string
}
export default function TableUsers(props:TableUsersType) {
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360
            }}
        >
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={props.photos==null?"":props.photos}>
                        <ImageIcon  />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={props.userName} secondary={"LastSMS"} />
            </ListItem>
        </List>
    );
}