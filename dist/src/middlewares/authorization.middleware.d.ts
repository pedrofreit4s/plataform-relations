import { Request, Response, NextFunction } from 'express';
export declare class AuthorizationMiddleware {
    use(request: Request, response: Response, next: NextFunction): Response<any, Record<string, any>>;
}
