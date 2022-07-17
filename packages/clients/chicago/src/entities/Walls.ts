import { Bodies, Composite } from 'matter-js'
import { unit } from '../Units'

export module Walls {
	export function createWalls(width: number, height: number, thickness: number = unit(8)): Composite {
		const wallParams = { isStatic: true }
		const halfThick = thickness / 2 + 1
		return Composite.create({
			bodies: [
				Bodies.rectangle(width / 2, -halfThick, width, thickness, wallParams),
				Bodies.rectangle(width / 2, height + halfThick, width, thickness, wallParams),
				Bodies.rectangle(-halfThick, height / 2, thickness, height, wallParams),
				Bodies.rectangle(width + halfThick, height / 2, thickness, height, wallParams),
			],
			label: 'boundaries'
		})
	}
}