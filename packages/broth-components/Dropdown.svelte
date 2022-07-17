<script lang='ts'>
	export let value
	export let options
	let showMenu = false
	let menu

	function onOptionSelected(selected, e) {
		value = selected
		showMenu = false
	}
</script>
<div class='relative block'>
    <div on:focus={()=> showMenu = true}
         on:focusclick={()=> showMenu = true}
         on:focusin={()=> showMenu = true}
         on:focusout={(e) => {if(e.relatedTarget !== menu) showMenu = false}}>
        <slot />
    </div>

    <!--
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    -->
    <div aria-labelledby='menu-button'
         aria-orientation='vertical'
         bind:this={menu}
         class='card p-1 right-0 origin-top-right drop-shadow-md absolute mt-2 focus:outline-none will-change-transform'
         class:invisible={!showMenu}
         on:focusin={(e)=> e.relatedTarget.focus()}
         role='menu'
         tabindex='-1'
    >
        <div role='none'>
            {#each options as option, i}
                <div role='menuitem' on:click={(e) => onOptionSelected(option,e)}
                     class='rounded cursor-pointer'
                     class:hover:bg-accent-secondary={value !== option}
                     class:bg-ink={value === option}
                     class:text-white={value === option}>
                    {#if $$slots.item}
                        <slot name='item'>
                            {option}
                        </slot>
                    {:else}
                        <h4 class='px-4 py-2 text-sm '>
                            {option}
                        </h4>
                    {/if}
                </div>
                {#if i < options.length - 1}
                    <hr class='my-1' />
                {/if}
            {/each}
        </div>
    </div>
</div>