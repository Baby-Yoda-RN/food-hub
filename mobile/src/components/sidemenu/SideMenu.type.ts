export type TSideMenuProps = {
    image: string;
    name: string;
    email: string;
    pressOrder: () => void;
    pressProfile: () => void;
    pressDelivery: () => void;
    pressCart: () => void;
    pressReview: () => void;
    pressCategory: () => void;
    pressLogout: () => void;
}