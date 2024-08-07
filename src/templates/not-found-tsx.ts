export const notFoundTsx = `import { TbError404 } from 'react-icons/tb';

export default function NotFound() {
	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-center">
			<TbError404 className="text-[9rem] text-destructive" />
			<h2 className="font-mono text-destructive text-xl">Not Found</h2>
			<p>Could not find requested resource</p>
		</div>
	);
}
`;

export const notFoundCatchAll = `
import { notFound } from 'next/navigation';

const NotFoundCatchAll = () => notFound();

export default NotFoundCatchAll;`;
