import { Tasks } from "@/types/todo";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TodoState {
  task: string;
  tasks: Tasks;
  updateTask: (task: string) => void;
  addTask: () => void;
  deleteTask: (task: number) => void;
  clearTasksList: () => void;
  isDone: (task: number) => void;
};

const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      task: '',
      tasks: [],
      updateTask: (task) => set({task: task}),
      addTask: () => {
        const { tasks, task } = get();
        set({tasks: [...tasks, {id: Math.random(), text: task, done: false}]})
      },
      deleteTask: (task) => {
        const { tasks } = get();
        set({ tasks: tasks.filter((t) => t.id !== task) });
      },
      isDone: (task) => {
        const { tasks } = get();
        set({tasks: tasks.map(t => t.id === task ? {...t, done: !t.done } : t)});
      },
      clearTasksList: () => localStorage.clear(),
    }),
    {
      name: "todo-storage",

      partialize: (state) => ({
        tasks: state.tasks,
      }),

      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useTodoStore };