/**
 * @param {string} object Name of the object in the request to be checked.
 * @param {string[]} keys Name of the keys of the object that you want to remain
 *  intact
 * @param {boolean} strict True if the keys have to be in the object,
 * false | empty if not.
 * @return {null}
 */

function requestFilter(object, keys, strict = false) {
  return (req, res, next) => {
    try {
      Object.keys(req[object]).forEach((key) => {
        if (keys.indexOf(key) === -1) {
          delete req[object][key];
        }
      });
      if (strict) {
        for (key of keys) {
          if (Object.keys(req[object]).indexOf(key) == -1) {
            throw new Error(`The ${key} parameter was not passed`);
          }
        }
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = requestFilter;
