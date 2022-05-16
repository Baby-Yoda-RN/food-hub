export type TAddOn = {
    selected?: boolean;
    pressAddOn?: () => void;
    image: string;
    title: string;
    price: number;
    count: number;
}