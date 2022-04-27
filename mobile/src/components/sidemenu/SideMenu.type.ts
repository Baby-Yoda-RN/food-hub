export type TSideMenuProps = {
    photo: string;
    name: string;
    email: string;
    pressOrder: () => void;
    pressProfile: () => void;
    pressDelivery: () => void;
    pressPayment: () => void;
    pressContact: () => void;
    pressSetting: () => void;
    pressHelp: () => void;
    pressLogout: () => void;
}