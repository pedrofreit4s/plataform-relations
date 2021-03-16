import { Request } from 'express';
export declare class ProjectController {
    createProject(request: Request, { name }: {
        name: any;
    }): Promise<number>;
}
