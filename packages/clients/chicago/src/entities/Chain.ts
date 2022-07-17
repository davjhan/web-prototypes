import { range } from 'lodash'
import { Bodies, Composite, Composites } from 'matter-js'
import { unit } from '../Units'

export module Chains {
	export function createChain({ head, thickness = unit(8), fillStyle }: {
		head: { x: number, y: number },
		fillStyle: string,
		thickness: number
	}): Composite {
		const nodeWidth = thickness
		const nodeHeight = thickness / 2
		const bodies = range(0, 16).map(i => {
			let x, y, angle = 0
			y = head.y
			x = head.x + ((nodeWidth / 2)) * i
			return Bodies.rectangle(x, y, nodeWidth, nodeHeight, {
				chamfer: { radius: nodeHeight / 2 },
				angle,
				render: {
					fillStyle,
				},
				density: 100,
				collisionFilter: {

					mask: i % 2 === 0 ? 0x0000 : 0x0001
				},
			})
		})

		const composite = Composite.create({
			bodies,
			label: 'worm',
		})
		Composites.chain(composite, 0.25, 0, -0.25, 0, {
			render: {
				visible: false
			}
		})
		return composite
	}
}