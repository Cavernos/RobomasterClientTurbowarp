import { Block } from '#robomaster_turbowarp_extension/Block.ts'
import { language } from '#config'

export const Chassis = {
    color: '#651FFF',
    blocks: [
        new Block(
            'move',
            Scratch.BlockType.COMMAND,
            'Move to [x] m [y] m [z] m at [speed] m/s',
            {
                x: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },

                y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },

                z: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },

                speed: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0.5,
                },
            }
        ),
        new Block('rotate', Scratch.BlockType.COMMAND, 'Rotate [angle] °', {
            angle: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 90,
            },
        }),
        new Block(
            'setPwmValue',
            Scratch.BlockType.COMMAND,
            'Set [pwm] output to [value]%',

            {
                pwm: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'pwm_port',
                    defaultValue: language.getMessage('pwm_port')[0],
                },
                value: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 7.5,
                },
            }
        ),
        new Block(
            'enableStickOverlay',
            Scratch.BlockType.COMMAND,
            '[status] chassis acceleration',

            {
                status: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'status',
                    defaultValue: language.getMessage('status')[0],
                },
            }
        ),
        new Block(
            'setFollowGimbalOffset',
            Scratch.BlockType.COMMAND,
            'Set chassis to follow gimbal at [degree]°',

            {
                degree: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0,
                },
            }
        ),
        new Block(
            'setTransSpeed',
            Scratch.BlockType.COMMAND,
            'Set chassis translation speed to [speed]m/s',

            {
                speed: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0,
                },
            }
        ),
        new Block(
            'setRotateSpeed',
            Scratch.BlockType.COMMAND,
            'Set chassis rotation speed to [speed]°/s',

            {
                speed: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 30,
                },
            }
        ),
        new Block(
            'setWheelSpeed',
            Scratch.BlockType.COMMAND,
            'Set wheel rotation speed (rpm) to front-left [fl] front-right [fr] rear-left [rl] rear-right [rr]',

            {
                fl: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 100,
                },
                fr: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 100,
                },
                rl: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 100,
                },
                rr: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 100,
                },
            }
        ),
        new Block(
            'moveForward',
            Scratch.BlockType.COMMAND,
            'Set chassis to translate at [degree]°',

            {
                degree: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0,
                },
            }
        ),
        new Block(
            'moveWithTime',
            Scratch.BlockType.COMMAND,
            'Set chassis to translate at [degree]° for [time]s',

            {
                degree: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0,
                },
                time: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 1,
                },
            }
        ),
        new Block(
            'moveWithDistance',
            Scratch.BlockType.COMMAND,
            'Set chassis to translate at [degree]° for [distance]m',

            {
                degree: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0,
                },
                distance: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 1,
                },
            }
        ),
        new Block(
            'moveDegreeWithSpeed',
            Scratch.BlockType.COMMAND,
            'Set chassis to translate [degree]° at [speed]m/s',

            {
                degree: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0,
                },
                speed: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0.5,
                },
            }
        ),
        new Block(
            'rotateWithTime',
            Scratch.BlockType.COMMAND,
            'Set chassis to rotate [direction] for [time]s',

            {
                direction: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'direction',
                    defaultValue: language.getMessage('direction')[0],
                },
                time: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 1,
                },
            }
        ),
        new Block(
            'rotateWithDegree',
            Scratch.BlockType.COMMAND,
            'Set chassis to rotate [direction] for [degree]°',

            {
                direction: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'direction',
                    defaultValue: language.getMessage('direction')[0],
                },
                degree: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0,
                },
            }
        ),
        new Block(
            'moveAndRotate',
            Scratch.BlockType.COMMAND,
            'Set robot to translate towards chassis front at [degree]° and rotate [direction]',

            {
                degree: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0,
                },
                direction: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'direction',
                    defaultValue: language.getMessage('direction')[0],
                },
            }
        ),
        new Block(
            'moveWithSpeed',
            Scratch.BlockType.COMMAND,
            'Set robot to translate at [xspeed]m/s along X axis and [yspeed] along Y axis and rotate along Z axis at [rotation]°/s',

            {
                xspeed: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0.5,
                },
                yspeed: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0.5,
                },
                rotation: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 30,
                },
            }
        ),
        new Block(
            'stop',
            Scratch.BlockType.COMMAND,
            'Set chassis to stop moving'
        ),
        new Block(
            'getAttitude',
            Scratch.BlockType.REPORTER,
            'Chassis [attitude] axis attitude angle',
            {
                attitude: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'attitude',
                    defaultValue: language.getMessage('attitude')[0],
                },
            }
        ),
        new Block(
            'getPositionBasePowerOn',
            Scratch.BlockType.REPORTER,
            'Current chassis position [action]',
            {
                action: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'action',
                    defaultValue: language.getMessage('action')[0],
                },
            }
        ),
        new Block(
            'chassisImpactDetection',
            Scratch.BlockType.EVENT,
            'When chassis hits an obstacle'
        ),
        new Block(
            'isImpact',
            Scratch.BlockType.BOOLEAN,
            'Chassis hits an obstacle'
        ),
    ],
    menus: {
        pwm_port: language.getMessage('pwm_port', [
            'PWP_all',
            'PWP_1',
            'PWP_2',
            'PWP_3',
            'PWP_4',
            'PWP_5',
            'PWP_6',
        ]),
        status: language.getMessage('status', ['Enable', 'Disable']),
        direction: language.getMessage('direction', ['right', 'left']),
        attitude: language.getMessage('attitude', ['yaw', 'pitch', 'roll']),
        action: language.getMessage('action', [
            'orientation',
            'X coordinate',
            'Y coordinate',
            'Z coordinate',
        ]),
    },
}
