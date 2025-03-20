// Copyright Rob Gage 2025

import Logo from "./logo"
import Button from "@/components/button";

const NAVIGATION_LINKS: {
    link: string;
    icon: React.ReactNode;
    text: string;
}[] = [
    {link: "/threads", icon: <path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0
        56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5
        23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z"/>, text: "Threads" },
    {
        link: "/notifications", icon: <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0
    42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5
    56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/>, text: "Notifications",  },
    { link: "/tasks", icon: <path d="M280-280h160v-160H280v160Zm240 0h160v-160H520v160ZM280-520h160v-160H280v160Zm240
    0h160v-160H520v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0
    33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>, text: "Tasks", },
    { link: "/files", icon: <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80
    80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5
    41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z"/>, text: "Files", },
    { link: "/workspaces", icon: <path d="M240-120q-66 0-113-47T80-280q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47
    113t-113 47Zm480 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm-480-80q33 0
    56.5-23.5T320-280q0-33-23.5-56.5T240-360q-33 0-56.5 23.5T160-280q0 33 23.5 56.5T240-200Zm480 0q33 0
    56.5-23.5T800-280q0-33-23.5-56.5T720-360q-33 0-56.5 23.5T640-280q0 33 23.5 56.5T720-200ZM480-520q-66
    0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33
    0 56.5-23.5T560-680q0-33-23.5-56.5T480-760q-33 0-56.5 23.5T400-680q0 33 23.5 56.5T480-600Zm0-80Zm240
    400Zm-480 0Z"/>, text: "Workspaces", },
]

export default function Dashboard({children}: {
    children: React.ReactNode;
}) {
    return <div className="h-dvh w-dvw flex flex-col-reverse md:flex-row bg-neutral-1">
        <div className="h-24 md:h-full w-full md:w-48 flex flex-row md:flex-col">
            <a href={"/"} className="p-2 fill-primary"><Logo/></a>
            <nav className="my-4 px-8 flex flex-col [&>*]:w-full text-md">
                <Button text="Log In" />
                <Button text="Sign Up" highlight />
            </nav>
            <nav className="h-full w-full md:h-3/5 p-2 md:pr-0 flex flex-row md:flex-col">
                {NAVIGATION_LINKS.map(({link, icon, text}) => (
                    <a href={link}
                       key={link}
                       className="group basis-0 grow md:grow-0 md:h-12 md:mb-2 p-2 flex flex-col md:flex-row
                       items-center rounded-lg text-neutral-5 fill-neutral-5 hover:bg-neutral-2">
                        <div className="w-12 md:w-8 md:mr-2">
                            <svg viewBox="0 -960 960 960" width="100%" className="group-hover:fill-primary-dark">
                                {icon}
                            </svg>
                        </div>
                        <h6 className="text-md md:text-lg text-center group-hover:text-primary-dark">{text}</h6>
                    </a>
                ))}
            </nav>
        </div>
        <div className="grow md:p-2">
            <div className="w-full h-full flex flex-col overflow-hidden md:rounded-lg bg-light">
                {children}
            </div>
        </div>
        <div className="md:hidden h-12 p-2 pl-4 flex flex-row items-center">
            <a href={"/"} className="w-36 fill-primary"><Logo /></a>
        </div>
    </div>;
}