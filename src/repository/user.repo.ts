import { IUser } from "../types/constants/interface/user-interface";
import { UserModel } from "../models/user/user-model";
import { objectSanitizer } from "../utilities/custom/validators";



export const CreateUser = async (body: IUser): Promise<IUser> => {
    return await UserModel.create(body)
}

export const findUser = async (filter: Partial<IUser>): Promise<IUser> => {
    let query = objectSanitizer(filter);
    if (!Object.keys(query).length) {
        return null
    }
    return await UserModel.findOne(query)
}

