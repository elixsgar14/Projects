

let socios = '';



const obtenerSocios = async() => {

    try {
    const respuesta = await axios.get('https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/2022-12-06/2022-12-06?token=cb327897dc9a1e19963bab5de8e7361ec17df2f827e51db57a839e2354c9489a')


    if(respuesta.status === 200){
        respuesta.data.bmx.series[0].datos.forEach(socio => {
            socios += `
                <div class="socio">
                    <h3 class="titulo2">${socio.dato}</h3>
                    <h3 class="titulo">${socio.fecha}</h3>
                    <br>
                </div>
            `;
        });

        document.getElementById('contenedor').innerHTML = socios;
}


console.log(respuesta);

} catch(error){
    console.log(error);
}}


const posteni = async() => {

    try {
    const login = await axios.post('https://eliassap14.hopto.org:50000/b1s/v1/Login', {
        Headers: {
            'Authorization': 'Basic eyAiQ29tcGFueURCIjoiU0JPRGVtb01YIiwgIlVzZXJOYW1lIjoibWFuYWdlciIgfTpFc3BhbmEz'
        }
    })
    const respuesta = await axios.get('https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/2022-12-09/2022-12-09?token=cb327897dc9a1e19963bab5de8e7361ec17df2f827e51db57a839e2354c9489a')
    const POSTEO = await axios.post('https://eliassap14.hopto.org:50000/b1s/v1/SBOBobService_SetCurrencyRate', {'Currency': 'USD', 'Rate': respuesta.data.bmx.series[0].datos, 'RateDate': '20221209'} , {
        Headers: {
            'Authorization': 'Basic eyAiQ29tcGFueURCIjoiU0JPRGVtb01YIiwgIlVzZXJOYW1lIjoibWFuYWdlciIgfTpFc3BhbmEz'
        }
    })

    
    console.log(login);
    console.log(POSTEO);
}

catch(error){
    console.log(error);

}}


obtenerSocios();
posteni()