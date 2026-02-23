interface Task {
    id: number;
    text: string;
    done: boolean;
    isEditing: boolean;
}

type Tasks = Task[];

export type { Task, Tasks };