import { CourseService } from './services/course.service';
import { UserService } from './services/user.service';
export declare class AppController {
    private readonly userService;
    private readonly courseService;
    constructor(userService: UserService, courseService: CourseService);
    getHello(): Promise<string>;
    getCourses(): Promise<any>;
}
