<script lang='ts'>
	import { draggable } from '@neodrag/svelte'

	let klass
	export { klass as class }
	export let x = 0, y = 0, rootClass
	const size = 48

	function onDragStart(e) {
		console.log('Dragging start', e)
	}

	function onDrag(e) {
		// lastValidPos = {
		// 	x:e.detail.offsetX,
		// 	y:e.detail.offsetY,
		// }
	}

	function onDragEnd(e) {
		console.log('Dragging stopped', x, y)

	}

</script>
<div class='sprite cursor-pointer {rootClass}'
     use:draggable={{
        position: { x: x, y: y },
        bounds: 'parent',
        onDragStart:this.onDragStart,
        onDragEnd:this.onDragEnd,
        onDrag:this.onDrag,
     }}
>
    <svg class='sprite overflow-visible {klass}' height={size} width={size}>
        <circle class='' cx={size/2} cy={size/2} r={size/2} />
    </svg>
</div>