var glob = require("glob");
var path = require("path");

function fileReadPromise(rootDir, filesExtension = false) {
  return new Promise((resolve, reject) => {
    if (filesExtension.toUpperCase() == "all".toUpperCase()) {
      glob(
        path.resolve(`${rootDir}/**/*`),
        { strict: false, silent: true, nodir: true },
        (err, files) => {
          if (err) {
            reject(err);
          } else {
            resolve(files);
          }
        }
      );
    } else {
      glob(
        path.resolve(`${rootDir}/**/*.${filesExtension}`),
        { strict: false, silent: true, nodir: true },
        (err, files) => {
          if (err) {
            reject(err);
          } else {
            resolve(files);
          }
        }
      );
    }
  });
}

module.exports = fileReadPromise;
