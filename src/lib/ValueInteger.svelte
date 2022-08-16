<script>
    export let value;
    export let min;
    export let max;

    const handleChange = (e) => {
      
            let varEntier = parseInt(e.target.value); 

            if (value > max) {
                varEntier = max;
            } else if(value < min){
                varEntier = min;
            }
             value = varEntier;
        }
    
 
</script>

<div class="tooltip tooltip-right" data-tip= "Max: {max ?? 'none'} |  Min: {min ?? 'none'} ">
<input
        type="number"
        step="1"
        min="{min ?? ''}"
        max="{max ?? ''}"
        bind:value ="{value}"
        class="input input-bordered w-full border-accent"
        on:change ="{handleChange}"
/>
</div>