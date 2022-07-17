<script lang='ts'>
	import Dropdown from '@davjhan/broth-components/Dropdown.svelte'

	let dropdownValue, dropdownOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

</script>
<main class=' p-8 flex '>
    <div class='gap-4 flex-grow'>
        <div class='bg-polkadot h-32 -mb-12 -z-10'></div>
        <h1>Design</h1>
        <div class='gap-4'>
            This page is a demonstration of components
            <div class='card self-start'>
                <span class='header'>Card Header</span>
                <div class='flex-row gap-2'>
                    <button class='primary'>Accept</button>
                    <button class='secondary'>Reject</button>
                    <button class='text'>Decline</button>
                </div>
            </div>

            <div class='area bg-shade self-start'>
                <div class='gap-2'>
                    <h4>Some sort of warning</h4>
                    <button class='primary'>Accept</button>
                    <button class='secondary'>Reject</button>
                </div>
            </div>

            <div class='card self-start'>
                <div class='header'>Forms</div>
                <div class='gap-4'>
                    <div class='gap-1'>
                        <h5 class='ml-1'>Name</h5>
                        <input placeholder='Name' />
                    </div>
                    <div class='gap-1'>
                        <h5 class='ml-1'>Time Of Day</h5>
                        <Dropdown bind:value={dropdownValue} options={dropdownOptions}>
                            <input bind:value={dropdownValue} placeholder='Choose' />
                        </Dropdown>
                    </div>
                    <hr>
                    <button class='primary'>Accept</button>
                </div>
            </div>

            <div class='card self-start'>
                <div class='header'>Settings</div>
                <div class='gap-4'>
                    <div class='gap-1'>
                        <div class='flex-row items-center gap-1'>
                            <input autocomplete='off' type='checkbox'>
                            <h4>I accept.</h4>
                        </div>
                    </div>
                    <div class='gap-1'>
                        <h5 class='ml-1'>Time Of Day</h5>
                        <Dropdown bind:value={dropdownValue} options={dropdownOptions}>
                            <input bind:value={dropdownValue} placeholder='Choose' />
                        </Dropdown>
                    </div>
                    <hr>
                    <button class='primary'>Accept</button>
                </div>
            </div>
        </div>

    </div>
</main>