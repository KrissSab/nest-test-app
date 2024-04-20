import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
} from "@nestjs/common";

import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
    constructor(private readonly usersSevice: UsersService) {}

    @Get()
    getUsers(@Query("isEmployed") isEmployed: string) {
        let isEmployedBool;
        if (isEmployed === "true") isEmployedBool = true;
        else if (isEmployed === "false") isEmployedBool = false;

        return this.usersSevice.getUsers(isEmployedBool);
    }

    @Get(":id")
    getUser(@Param("id") id: string) {
        return this.usersSevice.getUser(+id);
    }

    @Post()
    addUser(@Body() createUserDto: CreateUserDto) {
        return this.usersSevice.createUser(createUserDto);
    }

    @Put(":id")
    updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersSevice.updateUser(+id, updateUserDto);
    }

    @Delete(":id")
    deleteUser(@Param("id") id: string) {
        return this.usersSevice.deleteUser(+id);
    }
}
