const  mapData = [
    {
        place: "Bayfront Park",
        address: "301 Biscayne Blvd, Miami, FL 33132",
        lat: 25.7753,
        lon: -80.1862,
        description: "Bayfront Park is a small green area located in Downtown Miami, right near Bayfront Marketplace and Biscayne Bay, which are among the central landmarks of the city.",
        url: 'https://bayfrontparkmiami.com/',
        type: "parks"
    },
    {
        place: "Maurice A. Ferré Park",
        address: "1075 Biscayne Blvd, Miami, FL 33132",
        lat: 25.7846933,
        lon: -80.1890951,
        description: "Maurice A. Ferré Park is a 30-acre public, urban park in downtown Miami, Florida. The park opened in 1976 on the site of several slips served by the Seaboard Air Line Railroad. It was originally named \"Bicentennial Park\" to celebrate the bicentennial of the United States in that same year.",
        url: 'https://bayfrontparkmiami.com/',
        type: "parks"
    },
    {
        place: "Miami Heat Arena",
        address: "601 Biscayne Blvd, Miami, FL 33132",
        lat: 25.7814,
        lon: -80.1870,
        description: "Kaseya Center is a multi-purpose arena located along Biscayne Bay in Miami, Florida and currently named by the company Kaseya. Construction began on February 6, 1998, for Miami Arena\'s replacement.",
        url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjNs5rMgoaBAxVFr4QIHeyMDJIQ_Bd6BAhrEAQ&url=https%3A%2F%2Fwww.kaseyacenter.com%2F&usg=AOvVaw0Y1fDICB5EV5tZwDI-mrjI&opi=89978449',
        type: "sports"
    },
    {
        place: "Inter Miami FC Stadium",
        address: "1350 NW 55th St, Fort Lauderdale, FL 33309",
        lat: 26.1931,
        lon: -80.1610,
        description: "DRV PNK Stadium, is a soccer-specific stadium in Fort Lauderdale, Florida. Built on the site of the former Lockhart Stadium, the 21,000-seat stadium is the home pitch of Inter Miami CF of Major League Soccer and its MLS Next Pro reserve side Inter Miami CF II.",
        url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjrovGDhIaBAxV5TTABHYJuBlsQ_Bd6BAhxEAQ&url=https%3A%2F%2Fwww.intermiamicf.com%2Fen%2Fclub%2Ffacilities%2Fdrive-pink-stadium&usg=AOvVaw2skwKwYVZWsozxHABeulah&opi=89978449',
        type: "sports"
    },
    {
        place: "University of Miami",
        address: "1320 S Dixie Hwy, Coral Gables, FL 33146",
        lat: 25.7174,
        lon: -80.2781,
        description: "The University of Miami is a private research university in Coral Gables, Florida. As of 2022, the university enrolled 19,402 students in 12 colleges and schools across nearly 350 academic majors.",
        url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjrovGDhIaBAxV5TTABHYJuBlsQ_Bd6BAhxEAQ&url=https%3A%2F%2Fwww.intermiamicf.com%2Fen%2Fclub%2Ffacilities%2Fdrive-pink-stadium&usg=AOvVaw2skwKwYVZWsozxHABeulah&opi=89978449',
        type: "colleges & universities"
    },
    {
        place: "Institute of Contemporary Art, Miami",
        address: "61 NE 41st St, Miami, FL 33137",
        lat: 25.81435,
        lon: -80.1943,
        description: "Institute of Contemporary Art, Miami, also known as ICA Miami, is a contemporary art museum located in the Miami Design District in Miami, Florida, United States.",
        url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi3t8bW64eBAxX6TTABHdO-DSEQ_Bd6BAhqEAQ&url=https%3A%2F%2Ficamiami.org%2F&usg=AOvVaw0wtzvUkeEZ22gwkXU8ntWj&opi=89978449',
        type: "arts"
    }
    ,
    {
        place: "L'Atelier de Joël Robuchon Miami",
        address: "151 NE 41st St, Miami, FL 33137",
        lat: 25.81477,
        lon: -80.19203,
        description: "The only Michelin restaurant in Florida, serving Modern French cuisine. ",
        url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj465PF9YeBAxVxRDABHe6lD-QQFnoECBsQAQ&url=http%3A%2F%2Flatelier-miami.com%2F&usg=AOvVaw2ID2oXSEbtRIfQt-HXSUzV&opi=89978449',
        type: "dinning"
    }    ,
    {
        place: "Pérez Art Museum Miami",
        address: "151 NE 41st St, Miami, FL 33137",
        lat: 25.7859,
        lon: -80.1862,
        description: "Explore the variety of event spaces. From elaborate museum buyouts to intimate gatherings at Verde, they have a stunning space to fit your event venue needs.",
        url: 'https://www.pamm.org/en/event-spaces/',
        type: "venues"
    }
    ,
    {
        place: "Marine Academy of Science and Technology (MAST@FIU)",
        address: "14301 Bay Vista Blvd, North Miami, FL 33181",
        lat: 25.90751,
        lon: -80.14137,
        description: "MAST@FIU Biscayne Bay Campus, also known as MAST@FIU, and MAST@ FIU BBC, is a public magnet secondary school. The school is located in North Miami, Florida, on Florida International University's Biscayne Bay Campus.",
        url: 'https://mastfiu.org/',
        type: "public schools"
    }
    ,
    {
        place: "Gulliver Preparatory School",
        address: "6575 N Kendall Dr, Pinecrest, FL 33156",
        lat: 25.75621,
        lon: -80.22005,
        description: "Gulliver Preparatory School or simply Gulliver Prep, is a private co-educational school. Its management offices are in Kendall, a census-designated place in Miami-Dade County, Florida. Its four campuses are across the county. Previously the administrative offices were in Coral Gables.",
        url: 'https://www.gulliverprep.org/',
        type: "private schools"
    }
];

export default mapData;