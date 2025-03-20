// Copyright Rob Gage 2025

export default function Button ({action, highlight, text}: {
    action?: (() => Promise<void>);
    highlight?: boolean;
    text: string;
}) {
    const inner_content: React.ReactNode = <span className="">{text}</span>
    if (!highlight) {
        return <button className="mb-2 py-1 flex flex-row bg-neutral-2 hover:bg-neutral-3
        justify-center rounded-lg text-lg text-neutral-5">
            {inner_content}
        </button>
    } else {
        return <button className="mb-2 py-1 flex flex-row bg-primary-light hover:bg-primary
        justify-center rounded-lg text-lg text-light">
            {inner_content}
        </button>
    }
}