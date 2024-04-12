/*

    Class to handle colors of each Hero section of each page

    This allows us to dynamically change the colors of each page
    without needing to go through every page and updating the colors
    we can do it from one location, here.

*/


class StyleManager{

    #CURRENT_PATH;

    #styles = new Map();


    constructor(path) {

        this.#CURRENT_PATH = path; // ex.

        this.#styles.set('about', {backgroundColor: 'vm-blue', textColor: { color: 'white', hexColor: '#FFF' }})
        // this.#styles.set('about', {backgroundColor: 'transparent', textColor: { color: 'white', hexColor: '#FFF' }})
        // this.#styles.set('about', {backgroundColor: 'vm-lighter-yellow', textColor: { color: 'vm-blue', hexColor: '#3F47FF' }})
        this.#styles.set('partnerships', {backgroundColor: 'yellow-200', textColor: { color: 'vm-blue', hexColor: '#3F47FF' }})
        this.#styles.set('contact', {backgroundColor: 'vm-blue', textColor: { color: 'white', hexColor: '#FFF' }})
        this.#styles.set('initiatives', {backgroundColor: 'black', textColor: { color: 'white', hexColor: '#FFF' }})
        // this.#styles.set('business', {backgroundColor: 'vm-lavender', textColor: { color: 'vm-brown', hexColor: '#51180B' }})
        this.#styles.set('companies', {backgroundColor: 'vm-lavender', textColor: { color: 'vm-brown', hexColor: '#51180B' }})
        this.#styles.set('events', {backgroundColor: 'vm-lavender', textColor: { color: 'vm-brown', hexColor: '#51180B' }})
        this.#styles.set('news', {backgroundColor: 'vm-lavender', textColor: { color: 'vm-brown', hexColor: '#51180B' }})
        this.#styles.set('', {backgroundColor: 'transparent', textColor: { color: 'white', hexColor: '#FFF' }})
    }

    getStyles() {

        const stylesForCurrentPath = this.#styles.get(this.#CURRENT_PATH)
                                        ||
                                    // if the current path is not valid, then the default hero color is white background with blue text
                                    {backgroundColor: 'white', textColor: { color: 'vm-blue', hexColor: '#3F47FF' }};

        return stylesForCurrentPath;
    }

}

export default StyleManager;