import {useRouter} from "next/dist/client/compat/router";

class StyleManager{

    #CURRENT_PATH;

    #styles = new Map();


    constructor() {

        const router = useRouter();
        this.#CURRENT_PATH = router.pathname.split('/')[1];

        this.#styles.set('about', {backgroundColor: 'vm-blue', textColor: { color: 'white', hexColor: '#FFF' }})
        // this.#styles.set('about', {backgroundColor: 'vm-lighter-yellow', textColor: { color: 'vm-blue', hexColor: '#3F47FF' }})
        // this.#styles.set('partnerships', {backgroundColor: 'vm-lighter-yellow', textColor: { color: 'vm-blue', hexColor: '#3F47FF' }})
        // this.#styles.set('partnerships', {backgroundColor: 'vm-gray', textColor: { color: 'vm-violet', hexColor: '#9229E5' }})
        this.#styles.set('partnerships', {backgroundColor: 'yellow-200', textColor: { color: 'black', hexColor: '#000' }})
        this.#styles.set('initiatives', {backgroundColor: 'black', textColor: { color: 'white', hexColor: '#FFF' }})
        this.#styles.set('business', {backgroundColor: 'vm-lavender', textColor: { color: 'vm-brown', hexColor: '#51180B' }})
        this.#styles.set('events', {backgroundColor: 'purple-400', textColor: { color: 'white', hexColor: '#FFFF' }})
        this.#styles.set('news', {backgroundColor: 'black', textColor: { color: 'yellow-200', hexColor: '#EDFF86' }})
        this.#styles.set('', {backgroundColor: 'transparent', textColor: { color: 'white', hexColor: '#FFF' }})
    }

    getStyles() {

        const stylesForCurrentPath = this.#styles.get(this.#CURRENT_PATH) || {backgroundColor: 'white', textColor: { color: 'vm-blue', hexColor: '#3F47FF' }};
        return stylesForCurrentPath;
    }

}

export default StyleManager;