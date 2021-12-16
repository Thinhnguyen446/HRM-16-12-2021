import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from "../constants";

const AirtablePlus = require("airtable-plus")


export const tableConfig = (tableName) => {
    const config = new AirtablePlus({
        baseID: AIRTABLE_BASE_ID,
        apiKey: AIRTABLE_API_KEY,
        tableName,
    });
    return config;
};