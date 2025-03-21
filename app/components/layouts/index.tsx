import { Header } from './header'

export function Layouts({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen bg-primary/10 flex flex-col">
			<Header />
			{children}
		</div>
	)
}
