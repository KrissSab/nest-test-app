import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    private users = [
        { id: 0, fullname: "KrisSab", isEmployed: false, job: "none" },
        { id: 1, fullname: "Clar1k", isEmployed: true, job: "fullstack" },
        { id: 2, fullname: "Durkil", isEmployed: false, job: "none" },
    ];

    getUsers(isEmployed?: boolean) {
        if (isEmployed != undefined) {
            return this.users.filter((user) => user.isEmployed === isEmployed);
        } else return this.users;
    }

    getUser(id: number) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            return `There is no user with id: ${id}`;
        }
        return user;
    }

    createUser(createUserDto: CreateUserDto) {
        const newUser = {
            id: Date.now(),
            ...createUserDto,
        };
        this.users.push(newUser);
        return newUser;
    }

    updateUser() {}
    deleteUser(id: number) {
        const deletedUser = this.getUser(id);
        this.users = this.users.filter((user) => user.id !== id);
        return deletedUser;
    }
}
