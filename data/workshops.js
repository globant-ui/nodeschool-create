const execa = require('execa')
const workshopsList = {
  javascripting: {
    name: 'Javascripting',
    package: 'javascripting'
  },
  learnyounode: {
    name: 'Learnyounode',
    package: 'learnyounode'
  },
  howtonpm: {
    name: 'How to npm',
    package: 'how-to-npm'
  },
  elementaryelectron: {
    name: 'Elementary Electron',
    package: 'elementary-electron'
  },
  functionaljavascript: {
    name: 'Functional Javascript',
    package: 'functional-javascript-workshop@latest'
  },
  expressworks: {
    name: 'Express Works',
    package: 'expressworks'
  },
  promiseitwonthurt: {
    name: 'Promise It Wont Hurt',
    package: 'promise-it-wont-hurt@latest'
  },
  asyncyou: {
    name: 'Async-you',
    package: 'async-you'
  },
  planetproto: {
    name: 'Planet Proto',
    package: 'planetproto@latest'
  },
  towerofbabel: {
    name: 'Tower Of Babel',
    package: 'tower-of-babel'
  },
  scopechainsclosures: {
    name: 'scope-chains-closures',
    package: '@workshoppers/scope-chains-closures'
  }
}

function install (name) {
  return execa('npm', ['install', '-g', name])
}

module.exports = {
  install,
  workshopsList
}
