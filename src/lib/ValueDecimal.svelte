<script>
    export let value;
    export let min;
    export let max;
    export let precision;

    const handleChange = (e) => {

      
      let varDecimal = parseFloat(e.target.value); 

      if (value > max) {
        varDecimal = max;
      } else if(value < min){
        varDecimal = min;
      }
       value = varDecimal;
  }

    
</script>
<div class="tooltip tooltip-right" data-tip= "Max: {max ?? 'none'} |  Min: {min ?? 'none'} | Precision: {precision ?? 'none'}">
    <input
    type="number"
    step="0.001"
    min="{min ?? ''}"
    max="{max ?? ''}"
    bind:value ="{value}"
    class="input input-bordered w-full border-accent"
    on:change ="{handleChange}"
/>
   
</div>
