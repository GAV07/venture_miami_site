/*

    Class to handle paths in the Header (nav) and Footer components

    in each component, you can specify which paths to exclude

    for example, in Header we do not include the 'Contact' path,
    so we can pass ['Contact'] to the constructor
*/

class PathManager {


    #paths;
    #pathsToExclude;
    #pathsToUse;


    constructor(pathsToRemove=[]) {

        // initializes the paths to exclude
        this.#pathsToExclude = new Set();

        // initializes the paths to use array
        this.#pathsToUse = [];

        this.#paths = [];
        // set all possible paths around the nav or footer
        this.#paths.push( { nav: 'Home', url: '/' } );
        this.#paths.push( { nav: 'About', url: '/about' } );
        this.#paths.push( { nav: 'Companies', url: '/companies' } );
        this.#paths.push( { nav: 'Partnerships', url: '/partnerships' } );
        this.#paths.push( { nav: 'Initiatives', url: '/initiatives' } );
        this.#paths.push( { nav: 'Events', url: '/events' } );
        this.#paths.push( { nav: 'News', url: '/news' } );
        this.#paths.push( { nav: 'Contact', url: '/contact' } );

        this.#removePaths(pathsToRemove)
    }

    #removePaths(pathsToRemove){

        // set all the paths not to use
        if( pathsToRemove.length > 0 ){
            pathsToRemove.forEach((path)=>{
                this.#pathsToExclude.add(path.toLowerCase());
            })
        }

        // goes through and only gets the one we didn't exclude
        this.#paths.forEach((path)=>{

            if( !this.#pathsToExclude.has(path.nav.toLowerCase()) ){ // if its not part of teh excluded path

                this.#pathsToUse.push(path);
            }
        })

    }

    getPaths() {

        return this.#pathsToUse;
    }

}

export default PathManager;