import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode,
    size?: 's' | 'm' | 'l'
}