import axios from 'axios';
import { key } from '../config';

// https://www.food2fork.com/api/search
// db52e29ca62821933b67a266b463b862

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (err) {
            alert(err);
        }
        
    }
}