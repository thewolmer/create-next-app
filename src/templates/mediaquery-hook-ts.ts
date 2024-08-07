export const mediaQueryHookTs = `
'use client';
import { useEffect, useState } from 'react';

import { useMounted } from '@/hooks/useMounted';

export const useMediaQuery = () => {
	const [isDesktop, setIsDesktop] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const mounted = useMounted();
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const handleResize = () => {
			const isDesktopView = window.innerWidth >= 768;
			setIsDesktop(isDesktopView);
			setIsMobile(!isDesktopView);
		};
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [mounted]);

	return { isDesktop, isMobile };
};
`;
