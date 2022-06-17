import User from "../schema/user-schema.js"

export const addUser = async (request, response) => {
    let user1 = request.body;
    const newUser = new User(user1);
    try {
        newUser.save();
        response.status(201).json(newUser)
    }
    catch (error) {
        response.status(409).json({ message: error.message })
    }


}

export const getUser = async (request, response) => {
    try {
        const users = await User.find({})
        response.status(200).json(users)
        console.log('users',users)

    }
    catch (error) {
        response.status(409).json({ message: error.message })
    }



}

export const editUser = async (request, response) => {

    try {
        const editData = await User.findOne({ _id: request.params.id })
        response.status(200).json(editData)
    }
    catch (error) {
        response.status(409).json({ message: error.message })
    }


}

export const updateUser = async (request, response) => {
        const data=request.body;
        const update=new User(data);
    try {
         await User.updateOne({ _id: request.params.id },update)
        response.status(200).json(update)
    }
    catch (error) {
        response.status(409).json({ message: error.message })
    }


}

export const deleteUser = async (request, response) => {

     try {
        const deleteData = await User.deleteOne({ _id: request.params.id })
           const users = await User.find({})
        response.status(200).json(users)
    }
    catch (error) {
        response.status(409).json({ message: error.message })
    }



} 