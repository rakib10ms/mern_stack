import express,{Router} from 'express'
import {addUser,getUser} from '../controller/user-controller.js'
const router=express.Router();

router.post('/add',addUser);
router.get('/all-users',getUser);

export default router;