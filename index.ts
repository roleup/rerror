import * as HttpStatus from 'http-status';

/**
 * @class
 */
export class RError extends Error {
  /**
   * @param {string} message error message
   * @param {number} [code=500] http error code
   * @param {any} [data] any extra data to attach to the error
   */
  constructor(message: string, code = HttpStatus.INTERNAL_SERVER_ERROR, data?: any) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RError);
    }

    this.name = this.constructor.name;
    this.code = code;
    this.data = data;
    this.dateTime = new Date();
  }

  readonly code: number;

  readonly data?: any;

  readonly dateTime: Date;

  static readonly HTTP_STATUS = HttpStatus;
}
