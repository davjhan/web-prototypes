<!--suppress JSSuspiciousNameCombination -->
<script lang='ts'>
	import { debounce } from 'lodash'
	import { Bodies, Composite, Engine, Mouse, MouseConstraint, Render, Runner } from 'matter-js'
	import { onMount } from 'svelte'
	import colors from 'tailwindcss/colors'
	import { Chains } from './entities/Chain'
	import { Walls } from './entities/Walls'
	import { unit } from './Units'

	export const WIDTH = 568
	export const HEIGHT = 568
	let stage
	let render
	onMount(() => {
		create(stage)
	})

	function resize() {
		render.options.width = stage.offsetWidth
		render.options.height = stage.offsetWidth
		render.canvas.width = stage.offsetWidth
		render.canvas.height = stage.offsetWidth
	}

	function create(parent) {
		const engine = Engine.create()
		render = Render.create({
			element: parent,
			engine: engine,
			options: {
				width: parent.offsetWidth,
				height: parent.offsetWidth,
				wireframes: false,
				background: undefined,
				pixelRatio: window.devicePixelRatio,
			},
			bounds: {
				min: { x: 0, y: 0 },
				max: { x: WIDTH, y: HEIGHT }
			}
		})

		Render.run(render)
		const runner = Runner.create()
		Runner.run(runner, engine)
		const mouse = Mouse.create(render.canvas)
		Composite.add(engine.world, [
			// Composites.stack(unit(16), unit(2), 6, 6, unit(2), unit(2),
			// 	(x, y) => Bodies.rectangle(x, y, unit(4), unit(8), { chamfer: { radius: unit(1) } })
			// ),
			...[colors.orange[500], colors.red[500], colors.green[500], colors.blue[400]].map((color, i) =>
				Chains.createChain({
					head: { x: unit(18), y: unit(8) + unit(8) * i },
					thickness: unit(12),
					fillStyle: color,
				})
			),

			Walls.createWalls(WIDTH, HEIGHT),
            /* Ground */
			Bodies.circle(WIDTH / 2, 2 * HEIGHT / 3, unit(8), { isStatic: true }),
			MouseConstraint.create(engine, {
				mouse,
			}),
		])
		render.mouse = mouse
	}
</script>

<svelte:window on:resize={debounce(() => resize(), 50)} />
<div bind:this={stage} class='items-start relative '>
</div>