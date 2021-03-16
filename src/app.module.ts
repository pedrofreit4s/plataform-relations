import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { options } from './config/orm';
import { AuthorizationMiddleware } from './middlewares/authorization.middleware';
import { CourseModule } from './modules/course.module';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
    UserModule,
    CourseModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthorizationMiddleware)
      .exclude(
        { path: '/account/auth', method: RequestMethod.POST },
        { path: '/account/register', method: RequestMethod.POST },
        { path: '/account/activate/:token', method: RequestMethod.GET },
        { path: '/account/verify-session/:token', method: RequestMethod.GET }
      );
    // .forRoutes(UserController, DatabaseController);
  }
}
