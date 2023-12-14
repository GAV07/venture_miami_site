const Airtable = require("airtable");

Airtable.configure({
  // endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
});


const talentBase = Airtable.base(process.env.AIRTABLE_TALENT_ID)
const siteBase = Airtable.base(process.env.AIRTABLE_SITE_ID)
const founderBase = Airtable.base(process.env.AIRTABLE_ENTREPRENEURSHIP_ID)


// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = records => {
  return records.map(recorgd => minifyRecord(record));
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


export async function getRecords(baseName, tableName){

  let table;
  let records;
  let minifiedRecords;

  try {

    if( baseName.toLowerCase() === "talent database" ){

      table = talentBase(tableName);

    }else if( baseName.toLowerCase() === "vm site" ){

      table = siteBase(tableName);

    }else if( baseName.toLowerCase() === "founder database" ){

      table = founderBase(tableName);

    }

    records = await table.select({}).all();
    minifiedRecords = await getMinifiedRecords(records);


    return minifiedRecords;

  }catch (e){

    console.log(e);
  }

  return null;

}


export async function getTable(baseName, tableName){

  let table;

  try {

    if( baseName.toLowerCase() === "talent database" ){

      table = talentBase(tableName);

    }else if( baseName.toLowerCase() === "vm site" ){

      table = siteBase(tableName);

    }else if( baseName.toLowerCase() === "founder database" ){

      table = founderBase(tableName);

    }

    return table;
  }catch (e){

    console.log(e);
  }

  return null;

}

export async function getHomeVideo() {
 
  let videos = []
  var base = new Airtable({apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}).base('app7M34O3rPHxQ9mB');

  base('Media Content').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function(record) {
          //console.log('Retrieved', record.get('Media'));
          if (record && typeof record !== undefined) {
            console.log(record.get('Media'));
            return record.get('Media');
          }
      });

  }, function done(err) {
      if (err) { console.error(err); return; }
  });
  
}