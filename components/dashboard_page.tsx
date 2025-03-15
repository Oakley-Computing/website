// Copyright Rob Gage 2025

export default function DashboardPage({children, header}: {
    children: React.ReactNode;
    header: React.ReactNode;
}) {
    return <>
        <div className="w-full p-2 pl-4 flex flex-row items-center text-3xl border-b-2 border-neutral-200 text-dark">
            {header}
        </div>
        {children}
    </>
}