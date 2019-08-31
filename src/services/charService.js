class CharService {

    constructor() {}

    async getCharConfig(){
        try {
            let response = await fetch("http://localhost:3000/config");
            return await response.json();

        } catch (error) {
            console.error(error);
        }
    }

    getObjectFromType(){
        
    }
}

export default CharService;
