# bolt-internal-setup

Internal Bolt module used to get the tasks to be run during Bolt setup phase.

## Installation

```sh
$ npm install bolt-internal-setup
```

## Use

```js
var setup  = require('bolt-internal-setup')

var steps = setup.getSteps();
```

### Note

This is an internal module and should not be used in 3rd party apps.