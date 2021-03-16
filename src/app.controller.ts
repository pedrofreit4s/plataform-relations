import { Controller, Get } from '@nestjs/common';
import { createResponse } from './libs/response.lib';
import { CourseService } from './services/course.service';
import { UserService } from './services/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly userService: UserService,
    private readonly courseService: CourseService
  ) {}

  @Get('/hello')
  async getHello(): Promise<string> {
    const user = await this.userService.userRepo.findOne({ where: { id: 1 } });
    return await this.userService.findOne({ ...user });
  }

  @Get('/hello2')
  async getCourses(): Promise<any> {
    return new createResponse(true, {
      course: await this.courseService.courseRepo.findOne({ where: { id: 1 } }),
      classes: await this.courseService.classeRepo.find({
        where: { course: { id: 1 } },
      }),
    });
  }
}
