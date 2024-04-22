import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
    private users = [
        {
            id: 0,
            username: "KrisSab",
            firstName: "Kristian",
            lastName: "Sab",
            email: "kris@example.com",
            phoneNumber: "1112223344",
            isEmployed: false,
            job: "none",
        },
        {
            id: 1,
            username: "Clar1k",
            firstName: "Serhii",
            lastName: "Clar",
            email: "serhii@example.com",
            phoneNumber: "2221114455",
            isEmployed: true,
            job: "fullstack",
        },
        {
            id: 2,
            username: "Durkil",
            firstName: "Jekas",
            lastName: "Shark",
            email: "shark@example.com",
            phoneNumber: "3332226677",
            isEmployed: false,
            job: "none",
        },
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

    //* Можна додати користувача не вказавши всі поля, що є в CreateUserDto!
    createUser(createUserDto: CreateUserDto) {
        const newUser = {
            id: Date.now(),
            ...createUserDto,
        };
        this.users.push(newUser);
        return newUser;
    }

    //* Можна додати поле, якого не мало би бути в юзера за дефолтом, через те що UpdateUserDto можна розширити!
    updateUser(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map((user) => {
            if (user.id === id) {
                return { ...user, ...updateUserDto };
            }
            return user;
        });
        return this.getUser(id);
    }

    deleteUser(id: number) {
        const deletedUser = this.getUser(id);
        this.users = this.users.filter((user) => user.id !== id);
        return deletedUser;
    }
}
