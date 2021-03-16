interface propsError {
  internalCode?: number;
  message: string;
}

export class ErrorCreator {
  constructor(props: propsError) {
    return { ...props };
  }
}
