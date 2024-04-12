class AirtableManager{

    #API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    #PERSONAL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN;
    #BASE_ID;
    #TABLE;

    constructor(baseId, table) {

        this.#BASE_ID = baseId;
        this.#TABLE = table;
    }


    async createRecord(recordData){

        const airtableURL = `https://api.airtable.com/v0/${this.#BASE_ID}/${this.#TABLE}`;

        try {
            const response = await fetch(airtableURL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.#API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recordData)
            });


            const data = await response.json();

            if (response.ok) {

                console.log('RECORD CREATED', data)
            } else {
                console.error('Failed to create record:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    async updateRecord(recordData, id){

        const airtableURL = `https://api.airtable.com/v0/${this.#BASE_ID}/${this.#TABLE}/${id}`;


        try {
            const response = await fetch(airtableURL, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${this.#API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recordData)
            });

            const data = await response.json();

            if (response.ok) {

                console.log('RECORD UPDATED', data)
            } else {
                console.error('Failed to update record:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    async getRecord (param1, param2){

        let airtableURL;

        if( arguments.length === 1 ){
            airtableURL = `https://api.airtable.com/v0/${this.#BASE_ID}/${this.#TABLE}?filterByFormula={${Object.keys(param1)[0]}} = "${encodeURIComponent(Object.values(param1)[0])}"`
        }else if( arguments.length === 2 ){
            airtableURL = `https://api.airtable.com/v0/${this.#BASE_ID}/${this.#TABLE}?filterByFormula=AND({${Object.keys(param1)[0]}} = "${encodeURIComponent(Object.values(param1)[0])}", {${Object.keys(param2)[0]}} = "${encodeURIComponent(Object.values(param2)[0])}")`
        }

        try {
            const response = await fetch(airtableURL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.#API_KEY}`,
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Error:', error);
        }
    }


    async getRecords(){

        let airtableURL;

        airtableURL = `https://api.airtable.com/v0/${this.#BASE_ID}/${this.#TABLE}`

        try {
            const response = await fetch(airtableURL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.#API_KEY}`,
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Error:', error);
        }
    }

    async getSortedRecords(field, direction){

        let airtableURL;

        airtableURL = `https://api.airtable.com/v0/${this.#BASE_ID}/${this.#TABLE}?sort%5B0%5D%5Bfield%5D=${field}&sort%5B0%5D%5Bdirection%5D=${direction}`

        try {
            const response = await fetch(airtableURL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.#API_KEY}`,
                    'Content-Type': 'application/json',
                }
            });

            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Error:', error);
        }
    }



}


export default AirtableManager;