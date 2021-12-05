//console.log("Hola mundo SW")

self.addEventListener('install',(event)=>{
    console.log('SW: Instalado')
})

self.addEventListener('activate',(event)=>{
    console.log('SW: Activado y controlando la app')
})

self.addEventListener('fetch',(event)=>{
    if (event.request.url.includes('.jpg')) {
        let newResp = fetch('./images/11.jpg')
        console.log('Es una imagen')
        event.respondWith(newResp)
    }

    if (event.request.url.includes('page.css')) {
        let newResp = new Response(`body{
            background-color:black !important;
            color: red;
        }`,{
            headers:{
                'Content-Type':'text/css'
            }
        })
        event.respondWith(newResp)
    }
})

