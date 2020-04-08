/**
 * Retrieve the data from the swapi database and return the data that's asked for back to the caller.
 */

import people from './DummyData';

class ApiInterface {
    static apiRoot: string = "https://swapi.co/api/";

    static async fetchCategories(): Promise<any> {
        return (await fetch(this.apiRoot)).json();
    }

    static async fetchDataInCategory(category: string): Promise<{[key: string]: string}[]> {
        let response = await fetch(`${this.apiRoot}${category}`);
        let data = await response.json();
        let results: {[key: string]: string}[] = data.results;
        while (data.next) {
            response = await fetch(data.next);
            data = await response.json();
            results = results.concat(data.results);
        }
        return results;
    }

    static fetchDummyDataInCategory(): {[key: string]: string}[] {
        let data = JSON.parse(people);
        return data.results;
    }
}

export default ApiInterface;