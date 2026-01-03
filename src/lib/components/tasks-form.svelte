<script lang="ts">
    let newTask = $state("");
    let { addTask }: {
        addTask: (newTask: string) => void
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
    <div class="button-container">
        <button>Add</button>
    </div>
</form>

<style>
    .button-container {
        display: flex;
        justify-content: end;
        margin-bottom: 1rem;
    }
</style>