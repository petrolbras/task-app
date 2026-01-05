<script lang="ts">
    import type { Task } from '$lib/types/types'

    let { tasks, toggleDone, removeTask }: {
        tasks: Task[];
        toggleDone: (task: Task) => void;
        removeTask: (index: number) => void;
    } = $props()

</script>

<section>
    {#each tasks as task, index}
    <article class="task-container">
        <label for="">
            <input 
            onchange={() => toggleDone(task)}
            type="checkbox">
            <span class:done={task.done}>{task.title}</span>
        </label>
        <button class="outline" onclick={() => removeTask(index)}>remove</button>
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

    .task-container {
        display: flex;
        justify-content: space-between;
    }

</style>