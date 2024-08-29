// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	declare module "*.csv" {
		export default <{ [key: string]: string }>Array;
	}

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
