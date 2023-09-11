import axios from "axios";

(async () => {
    try {
        //@ts-ignore
        const response = await axios({
            url: 'http://localhost:3000/viacep',
            method: 'post',
            data: {
                cep: 123123
            }
        });


        // if (response.status === 400)
        //     console.log(response.data.message)

    } catch (error) {
        //@ts-ignore
        const { message } = error.response.data;
        // //@ts-ignore
        // console.log(error.response.data);
        // //@ts-ignore
        // console.log(error.response.status);
        // //@ts-ignore
        // console.log(error.response.headers);

        //@ts-ignore
        console.log(message);
    }


})()

