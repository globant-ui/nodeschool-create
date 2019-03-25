#!/usr/bin/env node

const Listr = require('listr')
const { workshopsList, install: workshopInstall } = require('../data/workshops')

const tasks = new Listr([
  {
    title: 'Installing workshops',
    task: () => {
      return new Listr([
        {
          title: workshopsList.javascripting.name,
          task: () => workshopInstall(workshopsList.javascripting.package)
        },
        {
          title: workshopsList.learnyounode.name,
          task: () => workshopInstall(workshopsList.learnyounode.package)
        },
        {
          title: workshopsList.howtonpm.name,
          task: () => workshopInstall(workshopsList.howtonpm.package)
        },
        {
          title: workshopsList.elementaryelectron.name,
          task: () => workshopInstall(workshopsList.elementaryelectron.package)
        },
        {
          title: workshopsList.functionaljavascript.name,
          task: () => workshopInstall(workshopsList.functionaljavascript.package)
        },
        {
          title: workshopsList.expressworks.name,
          task: () => workshopInstall(workshopsList.expressworks.package)
        },
        {
          title: workshopsList.promiseitwonthurt.name,
          task: () => workshopInstall(workshopsList.promiseitwonthurt.package)
        },
        {
          title: workshopsList.asyncyou.name,
          task: () => workshopInstall(workshopsList.asyncyou.package)
        },
        {
          title: workshopsList.planetproto.name,
          task: () => workshopInstall(workshopsList.planetproto.package)
        },
        {
          title: workshopsList.towerofbabel.name,
          task: () => workshopInstall(workshopsList.towerofbabel.package)
        },
        {
          title: workshopsList.scopechainsclosures.name,
          task: () => workshopInstall(workshopsList.scopechainsclosures.package)
        }
      ])
    }
  }
], {
  collapse: false
})

tasks.run()
  .catch(err => {
    console.error(err)
  })
