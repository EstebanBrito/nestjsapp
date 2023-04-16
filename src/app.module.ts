import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration'

// Decorator w/ custom params and to extend class AppModule
// imports it's for extra functionality (e.g. DB connections)
// ctrls it's for routes
// provs it's for things (such as funcs) that can be used everywhere in my module, kinda like a "utils" folder
@Module({
  imports: [
    TasksModule,
    UsersModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        ...configService.get<Object>('db'),
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: true
      }),
    }),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
