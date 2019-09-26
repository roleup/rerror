declare module '@roleup/rerror/index' {
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
    constructor(message: string, code: number | undefined, data: any);

    readonly code: number;

    readonly data?: any;

    readonly dateTime: Date;

    static readonly HTTP_STATUS: HttpStatus.HttpStatus;
  }
}
declare module '@roleup/rerror' {
  import main = require('@roleup/rerror/index');
  export = main;
}
