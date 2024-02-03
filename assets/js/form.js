const URL_API = "https://wa.me/";
const TEL = "5531988076914"

function sendMessage(){
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    let fullMessage = `Oi, sou ${name}, e estou entrando em contato pelo formulário da sua página ${document.title}. \n\n`;
    fullMessage += `Mensagem: ${message}`;

    const encode = encodeURIComponent(fullMessage);

    const finalURL = `${URL_API}${TEL}?text=${encode}`;

    window.open(finalURL, '_blank');
}

