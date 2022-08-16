<script>
    export let value;

    function toggle() {
        value= !value;
       
    }

</script>

{#if value}
    <input id="input" type="checkbox" bind:value={value} checked on:click ="{toggle}" class="toggle toggle-secondary"/>
{:else}
    <input id="input" type="checkbox" bind:value={value} on:click ="{toggle}" class="toggle toggle-secondary"/>
{/if}

