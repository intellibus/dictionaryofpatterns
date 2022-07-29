# dictionaryofpatterns

![Dictionary Of Patterns — Searchable Dictionary Of Standard Patterns For Software Development](assets/dictionaryofpatterns.png)

> **THIS PROJECT IS STILL IN THE DESIGN PHASE**
>
> IDEAS & CONTRIBUTIONS ARE WELCOME
>
> An [Open Source Universe](https://github.com/intellibus/approach) Project

---

## Contents

- [dictionaryofpatterns](#dictionaryofpatterns)
  - [Contents](#contents)
  - [Features ✨](#features-)
  - [Install 🛠](#install-)
  - [Usage 🔭](#usage-)
  - [Documentation 🛰](#documentation-)
  - [Contributing 🌎](#contributing-)
  - [License ⚖️](#license-️)

## Features ✨

- List of Patterns `Planned`
- Definitions for Each Pattern  `Planned`
- Visuals for Each Pattern  `Planned`
- Searchable Grid of All Patterns Organized by Topic  `Planned`
- Code Components for Each Pattern  `Planned`

## Install 🛠

```sh
npm install dictionaryofpatterns
```

## Usage 🔭

Read more about the [Design](https://github.com/intellibus/dictionaryofpatterns/blob/main/DESIGN.md) behind `dictionaryofpatterns` here.

```typescript
import { fullTestCoverage } from 'dictionaryofpatterns';

//  Search the Dictionary of Patterns Public Grid to Understand the definition of fullTestCoverage
const { passing } = await fullTestCoverage({
  src: 'path/to/app/source/code',
  testCommand: 'npm run test',
  coverageDir: 'path/to/coverage/reporter/output',
  coverageReporter: 'lcov'
});

// passing = true, if your application has 100% test coverage.
```

## Documentation 🛰

`dictionaryofpatterns` *is under active development, documentation will be added once an initial release is ready.*

## Contributing 🌎

We would love for you to contribute your ideas, code, & fixes to `dictionaryofpatterns`.

We encourage everyone to read our [Design Document](https://github.com/intellibus/dictionaryofpatterns/blob/main/DESIGN.md) to learn more about the thought process behind dictionaryofpatterns.

Also check out the [rewards](https://github.com/intellibus/approach/blob/main/REWARDS.md) offered for contributing to the [Open Source Universe](https://github.com/intellibus/approach).

## License ⚖️

MIT
