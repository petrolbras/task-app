export function validateInput(title: string) {
    let maxLimit = 100

    if (!title || title === ""){
        throw new Error("The task must contain a name!")
    }

    let isNotAlphabetic = /[^a-zA-Z0-9]/g.test(title)

    if (isNotAlphabetic === true){
        throw new Error("A title must contain only alphanumeric characters")
    }

    if (title.length > maxLimit) {
        throw new Error(`The max limit for a task's name is ${maxLimit} characters`)
    }

}