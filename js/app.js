let url = window.location.href
//Nombre del repositorio
let swDirectory = "/PWA-U1-P1-PGM/"


if(navigator.serviceWorker){
    
    if (url.includes('localhost')) {
        swDirectory = '/'
    }
    navigator.serviceWorker.register(swDirectory+'sw.js')
}else{
    console.log('SW No Disponible')
}