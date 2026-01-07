<script lang="ts">
    import TaskForm from '$lib/components/tasks-form.svelte'
    import TaskList from '$lib/components/tasks-list.svelte'
    import type { filter } from '$lib/types/types'
    import type { Task } from '$lib/types/types'
    import { createTask } from '$lib/services/createTask'

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

    function deleteAllTasks(tasks: Task[]) {
        tasks.splice(0, tasks.length)
    }
</script>

<main class="mx-auto m-6 max-w-[800px]">
    <h1>Stupid tasks app</h1>
    <p>Type your desired task here!</p>
    <TaskForm {addTask} {error}/>
    <p> {totalDone} / {tasks.length} Tasks Completed</p>
    <div class="flex justify-between mb-4">
        <div class="flex gap-2.5">
            <button onclick={() => currentFilter = "All"} class:contrast={currentFilter === "All"}>All</button>
            <button onclick={() => currentFilter = "Todo"} class:contrast={currentFilter === "Todo"}>Todo</button>
            <button onclick={() => currentFilter = "Done"} class:contrast={currentFilter === "Done"}>Done</button>
        </div>
        <button onclick={() => deleteAllTasks(tasks)} class="btn-delete">Remove all Tasks</button>
    </div>
    <TaskList tasks={filteredTasks} {toggleDone} {removeTask} />
</main>

