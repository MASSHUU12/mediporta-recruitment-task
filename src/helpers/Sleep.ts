/**
 * Suspends the execution of the current async function for a specified amount of time.
 * @param ms - The number of milliseconds to sleep.
 * @returns A promise that resolves after the specified time has elapsed.
 */
export default function Sleep(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms));
}
