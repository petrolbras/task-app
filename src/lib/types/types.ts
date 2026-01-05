export type filter = "All" | "Todo" | "Done"

export type Task = {
    id: string;
    title: string;
    done: boolean;
}