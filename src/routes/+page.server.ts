import { type TErrorEntry } from '../types';
import data from '../assets/Error_Culture_Community_Collection.csv';


const trimKeys = (entry: Record<string, string>) => {
	const newEntry: Record<string, string> = {};
	for (const key in entry) {
		newEntry[key.trim()] = entry[key];
	}
	return newEntry;
}

const transform = (entry: Record<string, string>) => {
	return {
		projectStage: entry['Project stage'],
		topic: entry['Topic / field'],
		qrp: entry['Questionable Research Practices (QRP)'],
		honestError: entry['Honest error'],
	};
}

export async function load() {
	const errorEntries: TErrorEntry[] = data.map(trimKeys).map(transform);

	return { errorEntries };
}