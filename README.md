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
```bash

URL=[website] scrutari
# URL=https://www.sunsweet.com scrutari

```
<img width="1509" height="947" alt="image" src="https://github.com/user-attachments/assets/bfa9c9c1-3c7f-49a8-b4cb-4ac9f8cf4b41" />

#### Options
##### Verbose
```

URL=[website] scrutari -v

```
<img width="1509" height="1766" alt="image" src="https://github.com/user-attachments/assets/fd3c8530-1bb9-43f8-b7a8-94e4dee5c6b0" />

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
```javascript

import scrutari from "scrutari";

```
#### CommonJs Module
```javascript

const scrutari = require("scrutari");

```
