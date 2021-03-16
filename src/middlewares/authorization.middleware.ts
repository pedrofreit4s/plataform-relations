import { ForbiddenException, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JsonWebToken } from 'src/libs/jwt.lib';

@Injectable()
export class AuthorizationMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;
    const bearer = authorization.split(' ')[1];
    try {
      const { payLoad } = new JsonWebToken(bearer, null);
      request.userId = payLoad.id;
      next();
    } catch (error) {
      return response.send(new ForbiddenException('Token has invalid'));
    }
  }
}
