type Optional<T> = T | undefined;

export interface IOptional<T> {
	successful: boolean;
	value: Optional<T>;
}
