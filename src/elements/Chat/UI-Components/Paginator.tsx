import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {RootState, useAppDispatch} from "../../../store/store";
import {useSelector} from "react-redux";
import {GetMessage, StartedUsersChatType} from "../../../Reducers/ChatReducer";

export default function Paginator() {
    const dispatch = useAppDispatch()
    const CountItems = useSelector<RootState, number>(state => state.chat.MessageCurrentUser.TotalCount)

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null, newPage: number,) => {
        setPage(newPage);
        // dispatch(GetMessage())
        console.log("New page == = ="+newPage)
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TablePagination
            component="div"
            count={CountItems==0?-1:CountItems}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={CountItems==0?-1:rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            // disabled={CountItems==0?true:false }
        />
    );
}