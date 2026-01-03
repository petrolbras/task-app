<script lang="ts">
    import type { Task } from '$lib/types/types'

    let { tasks, toggleDone }: {
        tasks: Task[];
        toggleDone: (task: Task) => void
    } = $props()

</script>

<section>
    {#each tasks as task}
    <article>
        <label for="">
            <input 
            onchange={() => toggleDone(task)}
            type="checkbox">
            <span class:done={task.done}>{task.title}</span>
        </label>
    </article>
    {/each}
</section>

<style>
    article {
        box-shadow: none;
    }

    .done {
        text-decoration: line-through;
    }
</style>