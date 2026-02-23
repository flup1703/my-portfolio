import type { Task, Tasks } from "@/types/todo";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface TodoState {
  editedText: string;
  task: string;
  tasks: Tasks;
  updateTask: (task: string) => void;
  addTask: () => void;
  deleteTask: (task: number) => void;
  clearTasksList: () => void;
  changeTaskText: (task: number) => void;
  updateEditedText: (text: string) => void;
  isDone: (task: number) => void;
  isEdited: (task: number) => void;
};

const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      editedText: '',
      task: '',
      tasks: [],
      updateTask: (task) => set({task: task}),
      updateEditedText: (text) => set({editedText: text}),
      addTask: () => {
        const { tasks, task } = get();
        set({tasks: [...tasks, {id: Math.random(), text: task, done: false, isEditing: false}]})
      },
      deleteTask: (task) => {
        const { tasks } = get();
        set({ tasks: tasks.filter((t: Task) => t.id !== task) });
      },
      changeTaskText: (task) => {
        const { tasks, editedText, updateEditedText } = get();
        
        set({tasks: tasks.map((t: Task) => t.id === task ? {...t, text: editedText.trim(),  isEditing: !t.isEditing } : t)});
        
        updateEditedText('');
      },
      isEdited: (task) => {
        const { tasks } = get();
        
        set({tasks: tasks.map((t: Task) => t.id === task ? {...t, isEditing: !t.isEditing } : t)});
      },
      isDone: (task) => {
        const { tasks } = get();
        set({tasks: tasks.map((t: Task) => t.id === task ? {...t, done: !t.done } : t)});
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