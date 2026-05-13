# Randomx

Modern random generation toolkit.

## Install

```bash
npm install randomx
```

## Usage

```ts
import {
  string,
  number,
  password,
  otp,
  uuid,
  guid,
  color,
  rgb,
  hex,
  bool,
  pick,
  shuffle,
  slug,
  username,
  email,
  domain,
  phrase,
  sentence,
  paragraph,
  date,
  licenseKey,
  uniqueId,
  range,
  chance,
  randomArray,
  shallowCopy,
  deepCopy,
  chunk,
  compact,
  sampleSize,
  unique,
  partition,
  merge,
  omit,
  pickProps,
  mapValues,
  invert,
  capitalize,
  camelCase,
  kebabCase,
  titleCase,
  truncate,
  randomDatePast,
  randomDateFuture,
  randomTimestamp,
  randomBytes,
  randomHexBytes,
  randomSubset,
  clamp,
  once,
  debounce,
  throttle,
  toArray,
  seed
} from 'randomx'

// random values
string(12)
number(8)
password({ length: 16, strict: true })
otp(6)
uuid()
guid()
hex(8)
color('hex')
rgb()
bool()

// collection helpers
pick(['apple', 'banana', 'cherry'])
shuffle([1, 2, 3])
sampleSize([1, 2, 3, 4, 5], 3)
randomSubset(['a', 'b', 'c', 'd'], 2)
randomArray(5, () => uniqueId(6))

// text helpers
slug()
username()
email()
domain()
phrase(4)
sentence(8)
paragraph(2)

// object helpers
merge({ a: 1 }, { b: 2 })
omit({ a: 1, b: 2 }, ['b'])
pickProps({ a: 1, b: 2 }, ['a'])
mapValues({ a: 1, b: 2 }, (value) => value * 2)
invert({ a: '1', b: '2' })

// string helpers
capitalize('hello')
camelCase('hello-world')
kebabCase('Hello World')
titleCase('hello world')
truncate('This is a long string', 10)

// date helpers
randomDatePast(2)
randomDateFuture(2)
randomTimestamp('2020-01-01', '2025-12-31')

// developer helpers
uniqueId(10, 'usr_')
range(1, 10)
chance(30)
clamp(14, 0, 10)
once(() => console.log('hello'))
debounce(() => console.log('debounced'), 150)
throttle(() => console.log('throttled'), 150)
toArray('value')

// cloning helpers
const data = { name: 'dev', items: [1, 2, 3] }
const copy = shallowCopy(data)
const deep = deepCopy(data)

// seeded generators
seed('my-seed').number(1, 100)
```

## Available utilities

### Random generators

- string
- number
- password
- otp
- uuid
- guid
- color
- rgb
- hex
- bool
- range
- chance
- randomArray
- randomBytes
- randomHexBytes
- uniqueId
- randomTimestamp
- randomDatePast
- randomDateFuture
- randomSubset

### Collection utilities

- pick
- shuffle
- sampleSize
- chunk
- compact
- unique
- partition

### Content helpers

- slug
- username
- email
- domain
- phrase
- sentence
- paragraph
- licenseKey

### Object helpers

- merge
- omit
- pickProps
- mapValues
- invert

### String helpers

- capitalize
- camelCase
- kebabCase
- titleCase
- truncate

### Developer utilities

- shallowCopy
- deepCopy
- clamp
- once
- debounce
- throttle
- toArray
- seed
- date

## Features

- Secure random generation
- TypeScript support
- ESM + CommonJS
- Tree-shakable
- Zero dependencies
- 50+ developer-first utilities
