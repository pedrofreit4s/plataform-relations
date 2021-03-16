export class createResponse {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(success = true, props: object) {
    return { ...props, success };
  }
}
