import { type TErrorEntry } from '../types';
import data from '../assets/Error_Culture_Community_Collection.csv';

function transform(entry: Record<string, string>) {
	// TODO: add type checking with casting
	return {
		projectStage: entry['Project stage'],
		topic: entry['Topic / field'],
		qrp: entry['Questionable Research Practices (QRP)'],
		honestError: entry['Honest error'],
	};
}

export async function load() {
	const errorEntries: TErrorEntry[] = data.map(transform);

	return { errorEntries };
}