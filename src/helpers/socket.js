import ioClient from 'socket.io-client';

export let io;

export const socketConnect = () => {
    io = ioClient(`${process.env.REACT_APP_SOCKET_URL}`, {
        path: `${process.env.REACT_APP_SOCKET_PATH}`
    });

    io.on('connect', () => {
        console.log('Socket is connected!')
    });

    io.on('disconnect', () => {
        console.log('Socket disconnected!')
    });
};
