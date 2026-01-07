export function sanitizeInput(title: string) {
    return title.trim().substring(0, 100)
}

