export default class LRU<T> {
	private readonly capacity: number;
	private readonly items: Map<string, T>;
	private readonly order: string[];

	constructor(capacity: number) {
		this.capacity = capacity;
		this.items = new Map();
		this.order = [];
	}

	get(key: string): T | undefined {
		const value = this.items.get(key);

		if (value === undefined) return undefined;

		this.order.splice(this.order.indexOf(key), 1);
		this.order.push(key);

		return value;
	}

	set(key: string, value: T): void {
		if (this.items.has(key)) {
			this.order.splice(this.order.indexOf(key), 1);
		}

		this.items.set(key, value);
		this.order.push(key);

		if (this.order.length <= this.capacity) return;

		const keyToRemove = this.order.shift();
		if (keyToRemove !== undefined) this.items.delete(keyToRemove);
	}
}
