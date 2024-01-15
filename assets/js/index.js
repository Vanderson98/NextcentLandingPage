$('.buttonHamb').click(()=>{

    // Mostrar menu
    if($('.btnHamb').hasClass('btnHambOpen')){
        buttomHambFunc('close')
    }else{
        buttomHambFunc('open')
    }
})

let buttomHambFunc = (action) =>{ // Abrir ou fechar botão função
    if(action == 'open'){
        $('.btnHamb').addClass('btnHambOpen')
    
        $('.navBar').addClass('viewMenu')

        $('body').addClass('bodyNoMove')
    }else{
        $('.btnHamb').removeClass('btnHambOpen')

        $('.navBar').removeClass('viewMenu')

        $('body').removeClass('bodyNoMove')
    }
}

let buttonHamb = document.querySelector('.buttonHamb')
$(document).on('click', (e)=>{ // Fechar menu caso cliquem fora dele
    let notButton = !buttonHamb.contains(e.target)
    if(notButton == true){ // Se for igual verdadeiro, fecha o botão
        buttomHambFunc('close')
    }
})

let dateNow = new Date(); // Pegar ano que o usuario está
$('.yearNow').text(dateNow.getFullYear())