import express,{Router} from 'express'
import {addUser,getUser,editUser,updateUser,deleteUser} from '../controller/user-controller.js'
const router=express.Router();

router.post('/add',addUser);
router.get('/all-users',getUser);
router.get('/edit-user/:id',editUser);
router.put('/update-user/:id',updateUser);
router.delete('/delete-user/:id',deleteUser);

export default router;