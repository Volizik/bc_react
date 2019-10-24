import { io } from '../helpers/socket';

export const sendMessage = ({userId, text, dialogId}) => {
    io.emit('userMessage', {userId, text, dialogId});
    io.on('userMessage', (msg) => {
        console.log(msg)
    })
}
