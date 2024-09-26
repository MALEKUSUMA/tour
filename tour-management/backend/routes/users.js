import express from 'express';
import { deleteUser, getAllUser, getSinleUser, updateUser } from './../controllers/userController.js';



const router=express.Router();

import { verifyUser } from '../utils/verifyToken.js';

// update user
router.put('/:id',verifyUser,updateUser);

//delete user
router.delete('/:id',verifyUser,deleteUser);

//get single user
router.get('/:id',verifyUser,getSinleUser);

//get all user
router.get('/',verifyUser,getAllUser);


export default router;