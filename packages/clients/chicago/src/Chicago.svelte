<script>
    import { goto } from '$app/navigation'
</script>

<main class='p-8 flex flex-col gap-12'>
    <div class='gap-4'>
        <div class='bg-polkadot h-32 -mb-12 -z-10'></div>
        <h1>Chicago</h1>
    </div>
    <div class='card gap-4'>
        <h4>Graph Simulation</h4>
        <hr>
        <button class='primary lg self-end' on:click={()=>goto('/chicago/play')}>Play</button>
    </div>
</main>