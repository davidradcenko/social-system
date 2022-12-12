import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {loginReducer} from "../Reducers/LoginReducer";
import {initialazedReducer} from "../Reducers/InitialazedReducer";
import {profilReducer} from "../Reducers/profilReducer";

const rootReducer= combineReducers({
    login:loginReducer,
    initialazed:initialazedReducer,
    profil:profilReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk))
export type RootState= ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,RootState, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//@ts-ignore
window.store=store