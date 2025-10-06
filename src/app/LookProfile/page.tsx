"use client"

import { ModeToggle } from "@/components/ModeToggle/ModeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "@/components/ui/search";
import { useLookProfileStore } from "@/stores/lookProfileStore";
import { useEffect } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export default function LookProfilePage() {
    const { user, userData } = useLookProfileStore();
    const { updateUser, findUser } = useLookProfileStore();
    
    const clickHandler = (e: any) => {
        e.preventDefault();
        
        findUser(user);
        console.log(userData);
    };

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className="w-full min-h-[100vh] h-full justify-center p-15 max-[480px]:p-1.5 max-[323px]:p-0 min-[768px]:p-5 max-[1024px]:p-5">
            <div className="p-10 h-full min-h-[100vh] bg-(--weather-card) rounded-2xl box-border max-[480px]:p-0 max-[480px]:min-h-dvh max-[323px]:p-3" suppressHydrationWarning>
                <h1 className="p-5 scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">Look Profile</h1>
                <form className="flex border-(--weather-border) p-2.5 pl-4 pr-4 items-center gap-2 justify-around">
                    <Input placeholder="Пользователь..." className="text-(--weather-foreground) border-(--weather-border)" type="text" autoComplete="off" onChange={(event) => updateUser(event.target.value)}/>
                    <Button className="w-fit bg-(--weather-button-background) border-(--weather-button-border) max-[323px]:w-1 hover:bg-input/50" type="submit" variant="outline" onClick={(e) => clickHandler(e)}>
                        <SearchIcon />
                    </Button>
                    <ModeToggle/>
                </form>
                <div className="flex gap-2.5 p-5 justify-between max-[480px]:items-center max-[480px]:flex-col max-[480px]:gap-3 min-[768px]:items-center min-[768px]:gap-5">
                    {userData ? (
                        <>
                            <Image src={userData.avatar_url} alt="weather-icon" width={300} height={300} priority={true} className="rounded-[50%]" />
                            <div className="flex flex-col h-fit w-full p-2.5 gap-1.5">
                            <a href={userData.html_url} className="scroll-m-20 text-3xl text-center font-semibold tracking-tight first:mt-0">{userData.name ? userData.name : userData.login}</a>
                                {/* <p className="leading-7 text-lg font-semibold">Имя: {userData.name}</p> */}
                                <p className="leading-7 text-lg font-semibold">Login: {userData.login}</p>
                                {userData.company ? <p className="leading-7 text-lg font-semibold">Company: {userData.company}</p> : null}
                                <p className="leading-7 text-lg font-semibold">Public Repos: {userData.public_repos}</p>
                                <p className="leading-7 text-lg font-semibold">Public gists: {userData.public_gists}</p>
                                <p className="leading-7 text-lg font-semibold">link: <a href={userData.html_url} className="text-muted-foreground transition-colors duration-300 hover:text-accent-foreground">{userData.login}</a></p>
                            </div>
                        </>
                    )
                            : 
                    (
                        <>
                            <Skeleton className="h-[300px] w-[300px] rounded-full" />
                            <div className="flex flex-col h-fit p-2.5 gap-5 max-[323px]:min-w-[300px] max-[380px]:min-w-[360px] min-[768px]:min-w-[290px] max-[1024px]:min-w-[400px]">
                                <Skeleton className="h-[20px] w-full rounded-full" />
                                <Skeleton className="h-[20px] w-full rounded-full" />
                                <Skeleton className="h-[20px] w-full rounded-full" />
                            </div>
                        </>
                    )
                    }
                </div>
                {/* <div className="w-full h-[500px] bg-green-500">

                </div> */}
            </div>
        </div>
    );
}