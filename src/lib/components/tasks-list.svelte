<script lang="ts">
    import type { Task } from '$lib/types/types'

    let { tasks, toggleDone, removeTask }: {
        tasks: Task[];
        toggleDone: (task: Task) => void;
        removeTask: (id: string) => void;
    } = $props()

</script>

<section>
    {#each tasks as task}
    <article class="task-container">
        <label for="">
            <input
            checked={task.done}
            onchange={() => toggleDone(task)}
            type="checkbox">
            <span class:done={task.done}>{task.title}</span>
        </label>
        <button class="outline" onclick={() => removeTask(task.id)}>remove</button>
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