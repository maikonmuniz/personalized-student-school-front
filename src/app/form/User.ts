import { v4 as generateID } from "uuid";

export class User {

    id?: string;
    firstName?: string;
    lastName?: string;
    cpf?: string;
    username?: string;
    password?: string;

    static create (): User {
        let user: User = new User();
        user.id = generateID();
        return user;
    }
}
