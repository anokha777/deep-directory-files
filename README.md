# deep-directory-files

npm package to get files from directories and subdirectories

## Usage:

### Get list of files in directory

```js
const getFiles = require('deep-directory-files');

(async () => {
    const files = await getFiles('/directory/path');
    console.log(files);
})
```

It outputs list of files in dir:

```js
  [
      ...,
        '/directory/path/test.js',
        '/directory/path/deep/some.js',
        '/directory/path/deep/sub-path/somefile.js',
        '/directory/path/test.css',
        '/directory/path/deep/some.css',
        '/directory/path/deep/sub-path/somefile.html',
    ,
  ]
```

### Get list of files from directory only specific type of files (provided as 2nd parameter):

```js
const getFiles = require('deep-directory-files');

(async () => {
    // provide file extension without . (dot) ex. scss, js, ts etc.
    const files = await getFiles('/directory/path', 'js'); 
    console.log(files);
})
```

It outputs list of files in dir:

```js
  [
      ...,
        '/directory/path/test.js',
        '/directory/path/deep/some.js',
        '/directory/path/deep/sub-path/somefile.js',
    ,
  ]
```
