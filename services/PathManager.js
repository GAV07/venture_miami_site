class PathManager {


    #paths = [];


    constructor() {

        // this.#paths.push( { nav: 'Home', url: '/' } );
        this.#paths.push( { nav: 'About', url: '/about' } );
        this.#paths.push( { nav: 'Companies', url: '/business' } );
        this.#paths.push( { nav: 'Partnerships', url: '/partnerships' } );
        this.#paths.push( { nav: 'Initiatives', url: '/initiatives' } );
        this.#paths.push( { nav: 'Events', url: '/events' } );
        this.#paths.push( { nav: 'News', url: '/news' } );
        this.#paths.push( { nav: 'Contact', url: '/contact' } );
    }

    getPaths() {

        return this.#paths;
    }

}

export default PathManager;