<script lang="ts">
    import type { Task } from '$lib/types/types'

    let { tasks }: {
        tasks: Task[];
    } = $props()
</script>

<section>
    {#each tasks as task}
    <article>
        {task.title}
    </article>
    {/each}
</section>

<style>
    article {
        box-shadow: none;
    }
</style>