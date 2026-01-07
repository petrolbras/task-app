<script lang="ts">
    import TaskForm from '$lib/components/tasks-form.svelte'
    import TaskList from '$lib/components/tasks-list.svelte'
    import type { filter } from '$lib/types/types'
    import type { Task } from '$lib/types/types'
    import { createTask } from '$lib/services/createTask'

    let message = "Stupid tasks App"
    let tasks = $state<Task[]>([]);
    let error = $state<string | null>(null)
    let totalDone = $derived(
        tasks.reduce(
            (total, task) => total + Number(task.done), 0
        )
    )
    let currentFilter = $state<filter>("All")
    let filteredTasks = $derived.by(() => {
        switch (currentFilter) {
            case "All": {
                return tasks;
            }
            case "Todo": {
                return tasks.filter((task) => !task.done)
            }
            case "Done": {
                return tasks.filter((task) => task.done)
            }
            default: {
                return tasks;
            }
        }
    });

    function toggleDone(task: Task){
        task.done = !task.done
    }

    function addTask(title: string){
        try {
            const task = createTask(title)
            tasks.push(task)
            error = null
        } catch (e) {
            error = (e as Error).message
        }
    };

    function removeTask(id: string){
        const index = tasks.findIndex((task) => task.id === id)
        tasks.splice(index, 1)
    }
</script>

<main class="mx-auto m-6 max-w-[800px]">
    <h1>{message}</h1>
    <p>Type your desired task here!</p>
    <TaskForm {addTask} {error}/>
    <p> {totalDone} / {tasks.length} Tasks Completed</p>
    <div class="filter-container">
        <button onclick={() => currentFilter = "All"} class:contrast={currentFilter === "All"}>All</button>
        <button onclick={() => currentFilter = "Todo"} class:contrast={currentFilter === "Todo"}>Todo</button>
        <button onclick={() => currentFilter = "Done"} class:contrast={currentFilter === "Done"}>Done</button>
    </div>
    <TaskList tasks={filteredTasks} {toggleDone} {removeTask} />
</main> 

<style>
    .filter-container {
        margin-bottom: 1rem;
    }
</style>