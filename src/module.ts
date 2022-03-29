import { join } from 'path'
import { promises as fs } from 'fs'
import { defineNuxtModule } from '@nuxt/kit'
import { Component } from '@nuxt/schema'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-storm',
    configKey: 'nuxtStorm',
    compatibility: {

    }
  },
  defaults: {
    addPlugin: true
  },
  hooks: {
    async 'components:extend' (components) {
      if (process.env.NODE_ENV === 'production') {
        return
      }

      const outputFile = `
import {Vue2 as Vue} from "nuxt3/dist/app/compat/vue-demi";

${components.map((c: Component) => `import ${c.pascalName} from "${c.shortPath}"`).join('\n')}

${components.map((c: Component) => `Vue.component('${c.pascalName}', ${c.pascalName})`).join('\n')}

//lazy components
${components.map((c: Component) => `Vue.component('Lazy${c.pascalName}', ${c.pascalName})`).join('\n')}

            `
      await fs.writeFile(join('.components.gen.js'), outputFile)
    }
  }
})
