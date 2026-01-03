<script lang="ts">
    import TaskForm from '$lib/components/tasks-form.svelte'
    import TaskList from '$lib/components/tasks-list.svelte'
    import type { Task } from '$lib/types/types'

    let message = "Tasks App"
    let tasks = $state<Task[]>([]);

    function addTask(newTask: string){
        tasks.push({
            id: crypto.randomUUID(),
            title: newTask, 
            done: false
        })
    };
</script>

<main class="mx-auto m-6 max-w-[800px]">
    <h1>{message}</h1>
    <TaskForm {addTask}/>
    <TaskList {tasks}/>
</main>
