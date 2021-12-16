import { tableConfig } from "../utils/airtable";

export const retrieveData = async (formula={}, tableName, tableConfig) => {
    try {
        const res = await tableConfig.read(formula, { tableName });
        return res;

    } catch (e) {
        console.log(e);
    }
};

export const createData=async(tableConfig, data, tableName)=> {
    try{
        const res = await tableConfig.create(data, tableName);
        return res;
    }
    catch(e){
        console.log(e)
    }
}

export const updateData = async (id, data, tableName) => {
    try {
        const res = await tableConfig.create(id, data, tableName);
        return res;
    } catch (e) {
        console.log(e)
    }
}