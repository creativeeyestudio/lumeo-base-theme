import { LogoProps } from "@/src/components/Logo/Logo.interface";

export default interface HeaderProps {
    logo?: LogoProps
    menus?: any[];
    locale?: string;
}