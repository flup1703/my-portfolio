interface Task {
    id: number;
    text: string;
    done: boolean;
}

type Tasks = Task[];

export type { Task, Tasks };