import type { Plugin } from "vite";


import { dsvFormat } from 'd3-dsv';
import toSource from 'tosource';


export default function csv(): Plugin {
	return {
		name: "vite-plugin-csv",
		transform(code: string, id: string) {
			if (!id.includes(".csv")) return;

			try {
				let rows = dsvFormat(';').parse(code);

				return {
					code: `export default ${toSource(rows)};`,
					map: { mappings: '' }
				};
			} catch (error) {
				console.error(`Error parsing CSV: ${error}`);
				return "";
			}
		},
	};
}

