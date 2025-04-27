import * as _ from 'lodash-es'
import { Block } from '#robomaster_turbowarp_extension/Block.ts'
import { language } from '#config'
/**
 * Create a new tab
 * @class Tab
 * @exemple
 * // create a new tab
 * const tab = new Tab("01", newtab", "#000000", "start",
 * );
 * For more information with Scratch Extension
 * @see {@link Scratch}
 * For more information with Tab see below
 *
 **/
export class Tab {
    /**
     * ID of the tab
     * @property {string} id
     **/
    id: string

    /**
     * Tab's color
     * @property {string} color
     */
    color: string

    /**
     * A list of block(s) having in the tab
     * @property {list} blocks
     */
    blocks: (Scratch.Block | Scratch.Separator)[]

    /**
     * Define tab's menu (side bar)
     * @property {string | string[]} menus
     */
    menus: { [key: string]: string[] }

    constructor(
        id = 'NoName',
        color = '#000000',
        blocks: never[] | (Scratch.Block | Scratch.Separator)[] = [],
        menus = {}
    ) {
        // Define this tab properties
        this.id = id
        this.color = color
        this.blocks = blocks!
        this.menus = menus
        for (const block of this.blocks) {
            if (block instanceof Block) {
                _.set(
                    this,
                    block.opcode.toString(),
                    async (args?: object | undefined) => {
                        return await block.run(id.toLowerCase(), args)
                    }
                )
            }
        }
    }

    /**
     * Return this tab's information and update blocks
     * @return {Scratch.Info}
     */
    getInfo(): Scratch.Info {
        this.blocks.forEach((block: (Scratch.Block | Scratch.Separator), index: number) => {
            if (block instanceof Block){
                this.blocks[index] = block.update()
            }    
        })
        return {
            id: this.id,
            name: (language.getMessage(this.id, "NoName") as string).match(/[A-Z][a-z]+/g)!.join(' '),
            color1: this.color,
            color2: this.color,
            blocks: this.blocks,
            menus: this.menus,
        }
    }
}
