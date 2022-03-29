
import {Vue2 as Vue} from "nuxt3/dist/app/compat/vue-demi";

import LayoutNavbar from "components/layout/navbar.vue"
import NuxtWelcome from "/run/media/lazaroofarrill/FastDevEnv/lachi/nuxt3-storm/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue"
import NuxtLayout from "/run/media/lazaroofarrill/FastDevEnv/lachi/nuxt3-storm/node_modules/nuxt3/dist/app/components/layout"
import NuxtErrorBoundary from "/run/media/lazaroofarrill/FastDevEnv/lachi/nuxt3-storm/node_modules/nuxt3/dist/app/components/nuxt-error-boundary"
import ClientOnly from "/run/media/lazaroofarrill/FastDevEnv/lachi/nuxt3-storm/node_modules/nuxt3/dist/app/components/client-only"
import NuxtLink from "/run/media/lazaroofarrill/FastDevEnv/lachi/nuxt3-storm/node_modules/nuxt3/dist/app/components/nuxt-link"

Vue.component('LayoutNavbar', LayoutNavbar)
Vue.component('NuxtWelcome', NuxtWelcome)
Vue.component('NuxtLayout', NuxtLayout)
Vue.component('NuxtErrorBoundary', NuxtErrorBoundary)
Vue.component('ClientOnly', ClientOnly)
Vue.component('NuxtLink', NuxtLink)

//lazy components
Vue.component('LazyLayoutNavbar', LayoutNavbar)
Vue.component('LazyNuxtWelcome', NuxtWelcome)
Vue.component('LazyNuxtLayout', NuxtLayout)
Vue.component('LazyNuxtErrorBoundary', NuxtErrorBoundary)
Vue.component('LazyClientOnly', ClientOnly)
Vue.component('LazyNuxtLink', NuxtLink)

            