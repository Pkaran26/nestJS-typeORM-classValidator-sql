import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { Connection } from 'typeorm';
import { Users } from './users/users.entity';
import { Profile } from './users/profile/profile.entity';
import { Posts } from './users/post/post.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'r00t',
      database: 'test',
      entities: [Users, Profile, Posts],
      synchronize: true,
      autoLoadEntities: true,
      // migrationsTableName: "custom_migration_table",
      // migrations: ["migration/*.js"],
      // cli: {
      //     migrationsDir: "migration"
      // }
    }),
    UsersModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

// CREATE USER 'prateek'@'host' IDENTIFIED WITH authentication_plugin BY 'Pkaran26';

// CREATE USER 'prateek'@'localhost' IDENTIFIED BY 'Pkaran26';

// mysql -u prateek -p
