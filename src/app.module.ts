import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env`,
        }),
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: String(process.env.POSTGRES_HOST),
            port: Number(process.env.POSTGRESS_PORT),
            username: String(process.env.POSTGRES_USER),
            password: String(process.env.POSTGRESS_PASSWORD),
            database: String(process.env.POSTGRES_DB),
            models: [],
            autoLoadModels: true,
        }),
        UsersModule,
    ],
})
export class AppModule {}
