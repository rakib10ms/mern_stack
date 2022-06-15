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
    try{
        const users=await User.find({})
        response.status(200).json(users)
    }
    catch(error){
        response.status(409).json({ message: error.message })
    }
        

}