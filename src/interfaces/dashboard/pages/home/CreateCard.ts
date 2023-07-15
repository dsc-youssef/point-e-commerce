import { ReactNode } from "react";


export interface DashboardHomeCreateCardProps {
	title: ReactNode,
	iconClassName?: string,
	onClick?: ()=> any,
	className?: string,
	icon: string
}
