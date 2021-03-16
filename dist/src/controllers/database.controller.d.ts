import { Request } from 'express';
export declare class DatabaseController {
    createUserToDb(request: Request, { name }: {
        name: any;
    }): Promise<number>;
}
