'use client'

import { ModeToggle } from "@/components/ModeToggle/ModeToggle";
import { Button } from "@/components/ui/button";
import { CheckCheckIcon } from "@/components/ui/checkCheckIcon";
import { CheckIcon } from "@/components/ui/checkIcon";
import { DeleteIcon } from "@/components/ui/deletIcon";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "@/components/ui/plusIcon";
import { SquarePenIcon } from "@/components/ui/squarePenIcon";
import { useTodoStore } from "@/stores/todoStore";
import { useCallback, useMemo } from "react";

export function TodoPage() {
    const { task, tasks, updateTask, updateEditedText, addTask, deleteTask, changeTaskText, isEdited, isDone } = useTodoStore();

    const handleAddTask = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        addTask();
        updateTask('');
    }, [addTask]);

    const pendingTasks = useMemo(() => tasks.filter(task => task.done === false), [tasks]);

    const completedTasks = useMemo(() => tasks.filter(task => task.done === true), [tasks]);

    const handleEditTask = useCallback((taskId: number) => isEdited(taskId), [isEdited]);

    const handleToggleDone = useCallback((taskId: number) => isDone(taskId), [isDone]);

    const handleDelete = useCallback((taskId: number) => deleteTask(taskId), [deleteTask]);

    const handleChangeText = useCallback((taskId: number) => changeTaskText(taskId), [changeTaskText]);

    return (
        <div className="w-full flex h-full justify-center p-15 max-[480px]:p-1.5 max-[323px]:p-0 min-[768px]:p-5 max-[1024px]:p-5 bg-(--main-background)" suppressHydrationWarning>
            <div className="bg-(--todo-card-background) w-full h-full rounded-2xl min-h-[100vh]">
                <h1 className="p-5 scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Todo</h1>
                <form className="flex p-2.5 pl-4 pr-4 items-center gap-2 justify-around" onSubmit={handleAddTask}>
                    <Input id="task-input" placeholder="Имя новой задачи..." className="text-(--weather-foreground) border-(--todo-border)" type="text" autoComplete="off" value={task} onChange={(e) => updateTask(e.target.value)}/>
                    <Button className="w-fit bg-(--weather-button-background) border-(--todo-border) max-[323px]:w-1 hover:bg-input/50" type="submit" variant="outline" title="Добавить задачу">
                        <PlusIcon />
                    </Button>
                    <ModeToggle />
                </form>
                <div className="p-4">
                    <h2 className="text-2xl font-semibold tracking-tight flex items-center justify-center m-3.5 max-[480px]:m-1.5">План {pendingTasks.length}</h2>
                    <ol className="p-4 flex flex-col gap-2.5 bg-(--todo-card) rounded-2xl max-[480px]:p-2">
                        {pendingTasks.map((task) => (
                            task.isEditing ? (
                                <li key={task.id} className="flex hover:cursor-pointer gap-1.5 p-2.5 border rounded-2xl place-content-between border-(--todo-border) max-[480px]:border-0 max-[480px]:pl-1.5 max-[480px]:p-0 max-[480px]:hover:none transition-colors duration-300 hover:bg-(--weather-hover)">
                                    <Input placeholder={task.text} className="text-(--weather-foreground) border-0 !focus-visible:outline-none !focus:outline-none" type="text" autoComplete="off" onChange={(e) => updateEditedText(e.target.value)}/>
                                    <Button className="w-fit max-[480px]:w-2 max-[480px]:rounded-xl bg-(--weather-button-background) border-(--weather-border) hover:bg-input/50" type="button" variant="outline" title="Готово" onClick={() => handleChangeText(task.id)}><CheckIcon className="hover:text-green-600 transition-colors duration-150" /></Button>
                                </li>
                            ) : (
                                <li key={task.id} className="flex hover:cursor-pointer gap-1.5 p-2.5 border rounded-2xl place-content-between border-(--todo-border) max-[480px]:pl-1.5 max-[480px]:p-0 max-[480px]:hover:none transition-colors duration-300 hover:bg-(--weather-hover)">
                                    <p className="flex items-center max-[480px]:text-xs">{task.text}</p>
                                    <div className="flex gap-1">
                                        <Button className="w-fit max-[480px]:w-2 max-[480px]:rounded-xl bg-(--weather-button-background) border-(--weather-border) hover:bg-input/50" type="button" variant="outline" title="Изменить Задачу" onClick={() => handleEditTask(task.id)} ><SquarePenIcon className="hover:text-orange-600 transition-colors duration-150" /></Button>
                                        <Button className="w-fit max-[480px]:w-2 max-[480px]:rounded-xl bg-(--weather-button-background) border-(--weather-border) hover:bg-input/50" type="button" variant="outline" title="Готово" onClick={() => handleToggleDone(task.id)}><CheckIcon className="hover:text-green-600 transition-colors duration-150" /></Button>
                                        <Button className="w-fit max-[480px]:w-2 max-[480px]:rounded-xl bg-(--weather-button-background) border-(--weather-border) hover:bg-input/50" type="button" variant="outline" title="Удалить" onClick={() => handleDelete(task.id)}><DeleteIcon className="hover:text-red-600 transition-colors duration-150" /></Button>
                                    </div>
                                </li> 
                            )
                        ))}
                    </ol>
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-semibold tracking-tight flex items-center justify-center m-3.5 max-[480px]:m-1.5">Готово {completedTasks.length}</h2>
                    <ol className="p-4 flex flex-col gap-2.5 bg-(--todo-card) rounded-2xl max-[480px]:p-2">
                    {completedTasks.map((task) => (
                        <li key={task.id} className="flex hover:cursor-pointer gap-1.5 p-2.5 border rounded-2xl place-content-between max-[480px]:pl-1.5 max-[480px]:p-0 max-[480px]:hover:none border-(--weather-border) transition-colors duration-300 hover:bg-(--weather-hover)">
                            <p className="flex items-center max-[480px]:text-xs">{task.text}</p>
                            <div className="flex gap-1">
                                <Button className="w-fit max-[480px]:w-2 max-[480px]:rounded-xl bg-(--weather-button-background) border-(--weather-border) hover:bg-input/50" type="button" variant="outline" title="План" onClick={() => handleToggleDone(task.id)}><CheckCheckIcon className="hover:text-blue-600 transition-colors duration-150" /></Button>
                                <Button className="w-fit max-[480px]:w-2 max-[480px]:rounded-xl bg-(--weather-button-background) border-(--weather-border) hover:bg-input/50" type="button" variant="outline" title="Удалить" onClick={() => handleDelete(task.id)}><DeleteIcon className="hover:text-red-600 transition-colors duration-150" /></Button>
                            </div>
                        </li>
                    ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}