import React, {useEffect} from 'react';
import {DialogsList} from "../components/Dialogs/DialogsList";
import { getAllUsers, getUserChats } from '../services/dialogs';
import {useDispatch} from "react-redux";
import {setDialogsList, setUsersList} from "../store/dialogs/actions";
import { setMyInfo } from "../store/profile/actions";
import {getMyInfo} from "../services/profile";

export const HomeView = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getEnv() {
            const users = await getAllUsers();
            const dialogs = await getUserChats();
            const myInfo = await getMyInfo();

            dispatch(setMyInfo(myInfo.data));
            dispatch(setUsersList(users));
            dispatch(setDialogsList(dialogs));
        }
        getEnv();
    });


    return (
        <DialogsList />
    );
}
