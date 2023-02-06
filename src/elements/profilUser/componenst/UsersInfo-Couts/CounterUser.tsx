import {RootState, useAppDispatch} from "../../../../store/store";
import {useSelector} from "react-redux";

export const CounterUser = () => {
    const dispatch = useAppDispatch()
    const UsersCount = useSelector<RootState, number>(state => state.users.totalCount)

    let maxTable=(UsersCount/10) | 0
    let curentTable=1

    return <>
        <div className={"CounterUser"}>
            <div className={'MainblockCouter'}>
                <div className={'CountFigers'}>
                    <p>1–10 of {UsersCount}</p>
                </div>
                <div>
                    <button type="button">
                        InStart
                    </button>
                    <button type="button">
                        Onelast
                    </button>
                    <button type="button">
                        Nextone
                    </button>

                    <button type="button">
                        InLast
                    </button>
                </div>
            </div>
        </div>
    </>
}