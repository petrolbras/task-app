<script lang="ts">
    import TaskForm from '$lib/components/tasks-form.svelte'
    import TaskList from '$lib/components/tasks-list.svelte'
    import type { Task } from '$lib/types/types'

    let message = "Stupid tasks App"
    let tasks = $state<Task[]>([]);
    let totalDone = $derived(
        tasks.reduce(
            (total, task) => total + Number(task.done), 0
        )
    )

    function addTask(newTask: string){
        tasks.push({
            id: crypto.randomUUID(),
            title: newTask, 
            done: false
        })
    };

    function toggleDone(task: Task){
        task.done = !task.done
    }

    function removeTask(index: number){
        tasks.splice(index, 1)
    }
</script>

<main class="mx-auto m-6 max-w-[800px]">
    <h1>{message}</h1>
    <p>Type your desired task here!</p>
    <TaskForm {addTask}/>
    <p> {totalDone} / {tasks.length} Tasks Completed</p>
    <TaskList {tasks} {toggleDone} {removeTask}/>
</main> 
