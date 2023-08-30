import express from 'express';

namespace Users{
    export interface User {
        id: string;
        userName: string ,
        password : string
    }

    export interface Request extends express.Request{
        body: {
            userName: string;
            password : string;
        }
    }
}

export default Users;