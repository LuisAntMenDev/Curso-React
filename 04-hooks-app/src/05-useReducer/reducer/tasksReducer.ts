import * as z from 'zod';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TasksState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskaAction = { type: 'ADD_TODO', payload: string } | { type: 'TOGGLE_TODO', payload: number } | { type: 'DELETE_TODO', payload: number }

const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean()
});

const TasksStateSchema = z.object({
    length: z.number(),
    completed: z.number(),
    pending: z.number(),
    todos: z.array(TodoSchema)
})

export const getTasksInitialState = (): TasksState => {
    const localStorageState = localStorage.getItem('tasks-state');
    if (!localStorageState) {
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0
        }
    }
    const result = TasksStateSchema.safeParse(JSON.parse(localStorageState));
    if (!result.success) {
        console.error(result.error);
        return {
            todos: [],
            length: 0,
            completed: 0,
            pending: 0
        }
    }
    return result.data;
}

export const tasksReducer = (state: TasksState, action: TaskaAction): TasksState => {
    switch (action.type) {
        case 'ADD_TODO': {
            const cleanTodo = action.payload.trim();
            if (cleanTodo.length === 0) return state;
            const newTodo = {
                id: Date.now(),
                text: cleanTodo,
                completed: false
            }
            return {
                ...state,
                length: state.length + 1,
                pending: state.pending + 1,
                todos: [...state.todos, newTodo]
            }
        }
        case 'DELETE_TODO': {
            const deletedTodo = state.todos.find(todo => todo.id === action.payload);
            if (!deletedTodo) return state;
            const isDeletedTodoCompleted = deletedTodo.completed;
            return {
                length: state.length - 1,
                pending: isDeletedTodoCompleted ? state.pending : state.pending - 1,
                completed: isDeletedTodoCompleted ? state.completed - 1 : state.completed,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        }
        case 'TOGGLE_TODO': {
            let isComplete: boolean | undefined = undefined;
            const updatedTodos = state.todos.map(todo => {
                if (todo.id !== action.payload) return todo;
                isComplete = !todo.completed;
                return { ...todo, completed: isComplete }
            });
            return {
                ...state,
                pending: isComplete ? state.pending - 1 : state.pending + 1,
                completed: isComplete ? state.completed + 1 : state.completed - 1,
                todos: updatedTodos
            }
        }
        default:
            return state;
    }
}