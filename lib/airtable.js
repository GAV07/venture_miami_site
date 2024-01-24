const Airtable = require("airtable");


const talentBase = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base(process.env.AIRTABLE_TALENT_ID)
const siteBase = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base(process.env.AIRTABLE_SITE_ID)
//const eBase = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_ENTREPRENEURSHIP_ID)
  

// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = records => {
  return records.map(record => minifyRecord(record));
};

// gets the data we want and puts it into variables
const minifyRecord = record => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

export async function getTalent(name) {
  const table = talentBase(name)
  const records = await table.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  //console.log(minifiedRecords);

  return minifiedRecords;
}
export async function getSite(name) {
  const table = siteBase(name)
  const records = await table.select({}).all();
  const minifiedRecords = await getMinifiedRecords(records);

  //console.log(minifiedRecords);

  return minifiedRecords;
}

