import TableUsers from "../UI-Components/Table-Users";
import {StartedUsersChatType} from "../../../Reducers/ChatReducer";

type ChatListUsersType={
    UsersStartedDialogs:Array<StartedUsersChatType>
}
export const ChatAccesListUser=(props:ChatListUsersType)=>{
    return(
        <div className={'Chat-List-of-Users'}>
            {props.UsersStartedDialogs.map(el=>{
                return <TableUsers key={el.id} userName={el.userName} photos={el.photos.small} lastDialogActivityDate={el.lastDialogActivityDate} />
            })}

        </div>
    )
}