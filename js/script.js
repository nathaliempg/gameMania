/** JAVASCRIPT */
function mostrarMenu(){
    let menu = document.getElementById()  
}

function abrir(){
    document.getElementById('popup').style.display='block';
}

function fechar(){
    document.getElementById('popup').style.display='none';
}

/*JQUERY*/
$(document).ready(function() {
    $("#hamburguer").click(function(){
        
        if($("#popup").hasClass("menu-ativo")){
            $("#popup").removeClass("menu-ativo")
        }else{
            $("#popup").addClass("menu-ativo")
        }
    })
})