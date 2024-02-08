type Activity = {
    id: number;
    name: string;
    category: string;
    start: Date;
    end: Date;
    distance: string;
}

export type ActivityJson = {
    id: number;
    name: string;
    category: string;
    start: string;
    end: string;
    distance: string;
}

export default Activity;