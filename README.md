# vuepress-plugin-copy-via-link

[![vuepress](https://img.shields.io/badge/vuepress-%3E%3D%201.0-brightgreen.svg)](https://v1.vuepress.vuejs.org/)
[![npm](https://img.shields.io/npm/v/vuepress-plugin-copy-via-link.svg)](https://www.npmjs.com/package/vuepress-plugin-copy-via-link)
![npm](https://img.shields.io/npm/dt/vuepress-plugin-copy-via-link.svg)

Copy text in vuepress via links

## Install

```bash
yarn add -D vuepress-plugin-copy-via-link
# OR
npm install -D vuepress-plugin-copy-via-link
```

## Usage

```javascript
module.exports = {
  plugins: [
    ['vuepress-plugin-copy-via-link', {
      start: '#copy:',
      message: '',
      manual_copy: ''
    }]
  ]
}
```

In markdown (`#copy:` is same as you configured above):

```markdown
[Copy text](#copy:THE_TEXT_YOU_WANT_TO_COPY)
```

## Options

### start

- Type: `string`
- Default: `#copy:`

If a link contain the start string, the text after start string will be copy.

### message

- Type: `string`
- Default: `<empty string>`

Show message when copy success. If empty string provided, nothing will be display.

### manual_copy

- Type: `string`
- Default: `<empty string>`

Show message when copy failed to let users copy text by-hand. If empty string provided, nothing will be display.
