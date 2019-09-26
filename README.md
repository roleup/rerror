# rerror
roleup.io error class

## Install
```bash
npm i -S @roleup/xerror
```

## Use
```javascript
const RError = require('@roleup/rerror');

// Throws error which inheirits from Error and has a default http code of 500 INTERNAL_SERVER_ERROR
const throws = () => { throw new RError('boom'); };

// Throw with a different http code
// XError.HTTP_STATUS is just the 'http-status' package
const throwsWithHttpError = () => { throw new RError('boom', RError.HTTP_STATUS.BAD_REQUEST); };

// Throw with special data
const throwsWithData = () => { throw new RError('boom', undefined, {foo: 'bar'}); };
```

<a name="RError"></a>

## RError
**Kind**: global class  
<a name="new_RError_new"></a>

### new RError(message, [code], [data])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> |  | error message |
| [code] | <code>number</code> | <code>500</code> | http error code |
| [data] | <code>any</code> |  | any extra data to attach to the error |

