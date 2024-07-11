Here's a comprehensive README for your repository:

---

# QFilter

Query library designed for advanced filtering, crafted with ❤ using TypeScript and React. ⚛

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Advanced Usage](#advanced-usage)
- [API](#api)
  - [QFilterBuilder](#qfilterbuilder)
  - [QFilter](#qfilter)
  - [Utilities](#utilities)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the library using npm or yarn:

```bash
npm install qfilter
```

or

```bash
yarn add qfilter
```

## Usage

### Basic Usage

To start using QFilter, import the necessary components and create filters using the `QFilterBuilder` class:

```typescript
import { QFilterBuilder } from "qfilter";

const users = [
  { name: "Jhael", age: 20, city: "DN" },
  { name: "Jhael", age: 21, city: "Santiago" },
  { name: "Galva", age: 26, city: "SD" },
  { name: "Galva", age: 26, city: "SDE" },
  { name: "Thomas", age: 20, city: "SDN" },
  { name: "Sthifer", age: 25, city: "SDN" },
  { name: "Enmanuel", age: 19, city: "SDO" },
];

const builder = new QFilterBuilder()
  .where("name", "Contains", "e")
  .and()
  .where("age", "GreaterThan", 20);

const QFilter = builder.build();
const filteredUsers = QFilter.filter(users);

console.log(filteredUsers);
// Output: [ { name: 'Jhael', age: 21, city: 'Santiago' }, { name: 'Sthifer', age: 25, city: 'SDN' } ]
```

### Advanced Usage

You can use logical operators and groups to create more complex filters:

```typescript
import { QFilterBuilder, where, and, or, not, group } from "qfilter";

const builder = new QFilterBuilder()
  .where("name", "Contains", "e")
  .and()
  .group([where("age", "GreaterThan", 20), or(), not(where("city", "Equal", "SD"))]);

const QFilter = builder.build();
const filteredUsers = QFilter.filter(users);

console.log(filteredUsers);
// Output based on complex filter logic
```

## API

### QFilterBuilder

| Method Signature | Params                                                                                                                                                        | Description                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [where]          | field: `keyof T`<br>operator: `OP`<br>value: `number` \| `string` \| `boolean`<br>id: `string` \| `number`<br>parentId: `string` \| `number` \| `null`        | Adds a comparison filter.                |
| [group]          | filters:`Array<GroupCondition<T>` \| `Array<GroupCondition<T>>>`                                                                                              | Creates a group of filters.              |
| [add]            | id: `string` \| `number`<br>filtersToAdd: `Array<FiltersType<T>>`<br>position: `"after"` \| `"before"`<br>filtersArr?: `Array<FiltersType<T>>` \| `undefined` | Adds filters at a specified position.    |
| [remove]         | id: `string` \| `number`<br>filters?: `Array<FiltersType<T>>`                                                                                                 | Removes filters by ID.                   |
| [update]         | id:`string` \| `number`<br>filter: `FiltersType<T>`<br> filters?: `Array<FiltersType<T>>`                                                                     | Updates a filter by ID.                  |
| [and]            |                                                                                                                                                               | Adds a logical AND operator.             |
| [or]             |                                                                                                                                                               | Adds a logical OR operator.              |
| [not]            |                                                                                                                                                               | Adds a logical NOT operator.             |
| [build]          |                                                                                                                                                               | Builds and returns a `QFilter` instance. |

### QFilter

#### `filter(dataSource: T[]): readonly T[]`

Applies the filters to the given data source and returns the filtered data.

## Utilities

Here's the markdown table with the types excluded from the method signatures:

```markdown
| Method Signature                              | Description                   |
| --------------------------------------------- | ----------------------------- |
| `generateUID()`                               | Generates a random UID.       |
| `where(field, operator, value, id, parentId)` | Creates a where filter.       |
| `group(filters)`                              | Creates a group of filters.   |
| `and()`                                       | Creates a logical AND filter. |
| `or()`                                        | Creates a logical OR filter.  |
| `not()`                                       | Creates a logical NOT filter. |
```

Creates a logical NOT filter.

## Examples

Refer to the [examples](./examples) directory for more usage examples.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, features, or improvements.

## License

This project is licensed under the MIT License.

---

Feel free to customize the README further to better suit your project's needs!
