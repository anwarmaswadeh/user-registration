import express from "express";
import { User } from "../db/entities/User.js";
import Users from "../@types/TypeUser.js";

const router = express.Router();

router.get('/users', async(req: Users.Request, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.send('Something Went Wrong');
    }
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const user = new User();
    user.userName = username;
    user.password = password;

    await user.save();

    res.status(201).send('User created successfully');
});

export default router;