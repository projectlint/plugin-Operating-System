const requireDirectory = require('require-directory')


const rules = requireDirectory(module, './rules')


exports.config = {
  recommended: {
    'version': {
      'error': {status: 'maintained'}
    }
  }
}

exports.rules = rules
