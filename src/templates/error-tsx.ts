export const errorTsx = `'use client';

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className="min-h-screen w-full items-center justify-center">
			<h2>Something went wrong!</h2>
			<button
				type="button"
				onClick={
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	);
}`;
