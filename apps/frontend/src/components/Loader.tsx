import { ReactElement } from 'react'

export interface ILoaderProps {
	error: Error | any
	loading: boolean
	children: ReactElement
}

const Loading = () => {
	return (
		<section className="flex justify-center items-center w-full h-96">
			<svg className="mr-3 -ml-1 w-24 h-24 animate-spin text-cyan" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
				<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
				<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
			</svg>
		</section>
	)
}

const Error = () => {
	return <h1>Error!!</h1>
}

export const Loader = ({error, loading, children}: ILoaderProps): ReactElement => {
	if (loading) 
		return <Loading />

	if (error)
		return <Error />

	return children
}
