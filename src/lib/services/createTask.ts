import type { Task } from '$lib/types/types'
import { sanitizeInput } from '$lib/validators/taskSanitizer'
import { validateInput } from '$lib/validators/taskValidator'

export function createTask(title: string): Task {
    validateInput(title)

    const sanitizedTitle = sanitizeInput(title)

    return {
        id: crypto.randomUUID(),
        title: sanitizedTitle,
        done: false
    }
}