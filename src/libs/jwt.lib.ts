import * as jwt from 'jsonwebtoken';

export class JsonWebToken {
  constructor(
    public readonly token: string = null,
    // eslint-disable-next-line @typescript-eslint/ban-types
    public readonly payLoad: any = null,
  ) {
    if (payLoad) {
      this.token = jwt.sign(payLoad, process.env.JWT_SECRET);
    } else if (token) {
      this.payLoad = jwt.verify(token, process.env.JWT_SECRET);
    }
  }
}
