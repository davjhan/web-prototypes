<script lang='ts'>
	import Navbar from '../lib/Navbar.svelte'
	import '../styles/theme.css'
</script>
<svelte:head>
    <title>Prototype for davjhan.com </title>
    <meta charset='utf-8' />
    <link href='/favicon.ico' rel='icon' />
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' name='viewport' />
</svelte:head>
<div class='container max-w-screen-sm mx-auto sm:border-l-shade sm:border-r-shade sm:border-x h-screen'>
    <Navbar />
    <slot />
</div>