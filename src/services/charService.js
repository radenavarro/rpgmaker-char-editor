class CharService {

    constructor() {}

    async getCharConfig(){
        try {
            let response = await fetch("http://localhost:3000/config")
            let result = await response.json();
            return result;

        } catch (error) {
            console.error(error);
        }
    }
}

export default CharService;