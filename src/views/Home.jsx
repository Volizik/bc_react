import React, {useEffect} from 'react';
import {DialogsList} from "../components/Dialogs/DialogsList";
import { getAllUsers } from '../services/dialogs';
import {useDispatch} from "react-redux";
import {setDialogsList} from "../store/dialogs/actions";

export const HomeView = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getUsers() {
            const users = await getAllUsers();
            dispatch(setDialogsList(users));
        }
        getUsers();
    });


    return (
        <DialogsList />
    );
}
