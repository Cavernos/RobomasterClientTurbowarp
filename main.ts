import { language } from '#config'
import { Tab } from '#robomaster_turbowarp_extension/tabs/Tab.ts'
import * as libTabs from '#robomaster_turbowarp_extension/tabs/index.ts'

/**
 * Extension's list
 * @const {Tab[]} extensions - Extension list
 * */
const extensions: Tab[] = []
for (const [tabKey, tab] of Object.entries(libTabs)) {
    // Create and push new tab from the extensions list given above to scratch.extension
    let tabObj: Tab
    if ('menus' in tab) {
        tabObj = new Tab(tabKey, tab.color, tab.blocks, tab.menus)
    } else {
        tabObj = new Tab(tabKey, tab.color, tab.blocks)
    }
    extensions.push(tabObj)
}
/**
 * For more information about Scratch extentions
 * @see {Scratch.extensions}
 */
extensions.forEach((extension) => Scratch.extensions.register(extension))

/**
 * Change locale when Turbowarp change his locale
 */
Scratch.vm.on('LOCALE_CHANGED', async (locale: string) => {
    language.setLanguage(locale)
})
