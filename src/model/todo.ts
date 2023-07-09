

export interface todoCreateData {
    message: string
    date: Date
    status:boolean
}


export interface allTodoData {
    todos: [todoCreateData]
}