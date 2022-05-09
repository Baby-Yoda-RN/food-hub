export type TSideMenuProps = {
    image: string | undefined;
    name: string | undefined;
    email: string | undefined;
    pressOrder: () => void;
    pressProfile: () => void;
    pressDelivery: () => void;
    pressCart: () => void;
    pressReview: () => void;
    pressCategory: () => void;
    pressLogout: () => void;
}