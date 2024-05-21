import { ResponseError } from '../error/ResponseError';
import { Schema } from 'joi';

export class Validator {
  private schema: Schema;

  constructor(schema: Schema) {
    this.schema = schema;
  }

  public validate(request: any): any {
    const result = this.schema.validate(request, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (result.error) {
      throw new ResponseError(400, result.error.message);
    }

    return result.value;
  }
}
