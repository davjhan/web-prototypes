<script lang='ts'>
	import { goto } from '$app/navigation'
	import Simulation from './Simulation.svelte'

	let session = {}
	let stage


</script>
<main class='px-2 py-8 sm:px-8 flex flex-col gap-4 h-screen touch-none'>
    <div class='gap-4'>
        <h2>Play</h2>
    </div>
    <div class='gap-2'>

        <div class='card  p-0 ml-0.5'>
            {#key session}
                <Simulation />
            {/key}
            <hr class='ink '>
            <div class='flex-row items-center gap-1 p-1'>
                <div class='flex-grow'></div>
                <button class='text' on:click={()=>goto('/chicago')}>Exit</button>
                <button class='primary' on:click={()=>session={}}>Reset</button>
            </div>
        </div>

    </div>

</main>