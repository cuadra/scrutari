> WIP !!!!
# Scrutari
> Scrutari is a Latin deponent verb meaning "to search," "probe," "examine carefully," or "investigate".

A method to compile a list of URLs based on robot files, sitemaps, and page crawling.

## ✨ Features
- Dependency-light
- Plays nicely with existing workflows

## 📦 Installation
```

npm install scrutari

```
## Usage
### CLI
#### Simple output
```

URL=[website] scrutari

```
#### Options
##### Verbose
```

URL=[website] scrutari -v

```
##### Output
```

URL=[website] scrutari -o

```
#### Piping to another function
```

URL=[website] scrutari | [script]

```
### Importing
#### ES Module
```

import scrutari from "scrutari";

```
#### CommonJs Module
```

const scrutari = require("scrutari");

```
