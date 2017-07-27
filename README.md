# eslint-plugin-maritz

Applies Maritz specific rules and plugins

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-maritz`:

```
$ npm install eslint-plugin-maritz --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-maritz` globally.

## Usage

Add `maritz` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "extends": ["plugin:maritz/polymer"],
    "plugins": [
        "maritz"
    ]
}
```





