const {promisify} = require('util')

const getos = require('getos')
const osLifecycle = require('@projectlint/os-lifecycle')


exports.fetch = function({config})
{
  return promisify(getos)()
  .then(function({dist, os, release})
  {
    return osLifecycle(config)[dist || os][release]
  })
}


exports.evaluate = function({config: {status}, fetch: {result: {eolDate, releaseDate}}})
{
  const now = new Date()

  switch(status)
  {
    case 'maintained': return (releaseDate < start || eolDate < now) && 'Not maintained'

    default: throw SyntaxError(`Unknown status '${status}'`)
  }
}