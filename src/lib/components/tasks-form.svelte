<script lang="ts">
    import { fade } from 'svelte/transition'

    let newTask = $state("");
    let { addTask, error }: {
        addTask: (newTask: string) => void
        error: string | null
    } = $props()

    function formSubmitted(e: SubmitEvent) {
        e.preventDefault();
        addTask(newTask)
        newTask = "";
    }
</script>

<form onsubmit={formSubmitted}>
    <label for="">
        <input name="newTask" bind:value={newTask}>
    </label>
    
    <div class="flex justify-between mb-6">
        <button>Add</button>
        {#if error}
        <p style="color:#EE4B2B" transition:fade>{error}</p>
        {/if}
    </div>
</form>