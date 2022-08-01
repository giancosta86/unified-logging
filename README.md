# unified-logging

_Universal, minimalist logging for TypeScript_

![Overview](docs/diagrams/overview.png)

The core of **unified-logging** is the `Logger` interface for **TypeScript**, designed to be used in client code - especially libraries - without depending on a specific logging technology.

## Installation

```bash
npm install @giancosta86/unified-logging
```

```bash
yarn add @giancosta86/unified-logging
```

## Usage

All the recommended features are exported by the index file - and can be imported as usual:

```typescript
import {...} from @giancosta86/unified-logging
```

### Logger

The `Logger` interface provides just a few core methods:

- `debug(message: string)`

- `info(message: string)`

- `warn(message: string)`

- `error(message: string)`

This is all you need to start working with the library: for example, you might declare a constructor expecting a `Logger` instance among other options - thus letting clients choose the actual implementation.

### ArrayLogger

Class implementing `Logger` by storing the received messages into `string[]` fields inspectable via read-only properties - for example, `debugMessages`. Especially useful for testing.

### CompositeLogger

`Logger` implementation that forwards each message to all of its sub-loggers.

## Compatibility

This library is currently tested with:

- the traditional **console** object

- [Pino](https://www.npmjs.com/package/pino)

- [Winston](https://www.npmjs.com/package/winston)

- [Bunyan](https://www.npmjs.com/package/bunyan)

It is because of TypeScript's _structural typing_ that the `Logger` interface actually supports any logger instance providing its methods - with no need for explicit implementation.
