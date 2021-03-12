//carga lista
window.onload = function(){
    $(".loader").fadeOut()
    $("body").removeClass("hidden")
    $(".contact-section").addClass("show-section")
    //cargar cookies
    $(".cookies").addClass("show-cookies")
    //cerrar cookies
    $(".close-cookies").click(
        function(){
            $(".cookies").removeClass("show-cookies")
        }
    )
    //mostrar menu móvil
    $(".menu-icon").click(
        function (){
        //mostrar menu
        $(".drop-down").toggleClass("show-menu"); 
        //cambiar menu hamburguesa por x  
        $("#icon-first").toggleClass("x-menu_first"); 
        $("#icon-second").toggleClass("x-menu_second"); 
        $("#icon-third").toggleClass("x-menu_third");
        //cerar otros elementos 
        $("#question").removeClass("show-questions"); 
        $(".cart").removeClass("show-cart");
        }
    ); 
    //abrir desplegable carrito
    $(".cart-icon").click(
        function(){
            $(".cart").toggleClass("show-cart");
            //cerrar otros elementos:
            $("#question").scrollTop(0); 
            $("#question").removeClass("show-questions"); 
            $(".drop-down").removeClass("show-menu"); 
            $("#icon-first").removeClass("x-menu_first"); 
            $("#icon-second").removeClass("x-menu_second"); 
            $("#icon-third").removeClass("x-menu_third"); 
            }
    )
    //cerrar ventanas emergentes si haces click en otras partes de la navegación: 
    $(".general-close").click(
        function(){
            $(".cart").removeClass("show-cart");
            $("#question").scrollTop(0); 
            $("#question").removeClass("show-questions"); 
            $(".drop-down").removeClass("show-menu"); 
            $("#icon-first").removeClass("x-menu_first"); 
            $("#icon-second").removeClass("x-menu_second"); 
            $("#icon-third").removeClass("x-menu_third"); 
        }
    )
    //mostrar dudas frecuentes
    $(".questions-btn").click(
        function(){
            $("#question").toggleClass("show-questions"); 
            $("#question").scrollTop(0); 
            $(".cart").removeClass("show-cart");
            $(".drop-down").removeClass("show-menu"); 
            //cambiar menu hamburguesa por x  
            $("#icon-first").removeClass("x-menu_first"); 
            $("#icon-second").removeClass("x-menu_second"); 
            $("#icon-third").removeClass("x-menu_third"); 
        }
    )
    //abrir ventana reserva taller
    $(".booking").click(
        function(){
            $(".workshop-form").addClass("show-questions"); 
            $(".workshop-form").addClass("show-booking"); 
        }
    )
    //cerrar ventana reserva taller
    $(".close-btn").click(
        function(){
            $(".workshop-form").removeClass("show-questions"); 
            $(".workshop-form").removeClass("show-booking"); 
        }
    )
    //cerrar ventana reserva taller desde velo esterno
    $(".close-form").click(
        function(){
            $(".workshop-form").removeClass("show-questions"); 
            $(".workshop-form").removeClass("show-booking"); 
        }
    )
    //añadir productos al carrito
    $(".add-product").click(
        function (){ 
            $(this).addClass("show-addcart"); 
            setTimeout( () =>{
                $(this).removeClass("show-addcart");
            },1500); 
            //mostrar el producto en el carrito
            let myProduct = $(this).siblings("p").text();; 
            let myReference = $(this).prev().find(".disabled-text").text(); 
            let myQuantity = $(this).prev("#meter").val();
            $(".cart").children(".cart-title").html("Tu compra:");  
            if(typeof(myQuantity) === "string"){
                $(".cart-content").append("<div><p>" + myReference + " " + myProduct + "</p>" + "<input type='number' name='quantity' id='quantity' min='1' max='10'value=" + myQuantity + "></input>" +  "<button class='remove-product'><i class='fas fa-trash-alt'></i></button> </div>" ); 
            }
            else{
                $(".cart-content").append("<div><p>" + myReference + " " + myProduct + "</p>" + "<input type='number' name='quantity' id='quantity' min='1' max='10'value='1'></input>" +  "<button class='remove-product'><i class='fas fa-trash-alt'></i></button> </div>" );
            }
            $(".cart").children("#shop").children("a").html("seguir comprando"); 
            $(".cart").children("#finish").removeClass("button-hidden");  
        }  
    )
    //eliminar productos de la cesta
    $(".cart-content").on("click", ".remove-product", function(){
        $(this).siblings().remove();
        $(this).remove();  
    } )    
    //desplegar menu colores de productos: 
    $(".disabled").click(
        function(){
            $(this).next().children(".option").toggleClass("show-color"); 
        }
    )
    //elegir opcion de color y cerrar desplegable: 
    $(".option").click(
        function(){
            $(".option").removeClass("show-color")
            let myColor = $(this).children("p").text()
            $($(this).parent().prev().children("p")).html(myColor)
        }
    )
    //animación scroll
    $(window).scroll(
        function(){
            let pxScroll= $(this).scrollTop(); 
            let pxWindow = $(window).height()/2; 
            //sección workshop 
            let pxWorkshop = $("#workshop").offset().top; 
            if(pxScroll+pxWindow >= pxWorkshop){
                $(".workshop").addClass("show-section");
            }
            //sección wool
            let pxWool = $("#wool").offset().top; 
            if(pxScroll+pxWindow >= pxWool){
                $(".wool").addClass("show-section");
            }
            // sección cloth
            let pxCloth = $("#cloth").offset().top; 
            if(pxScroll+pxWindow >= pxCloth){
                $(".cloth").addClass("show-section");
            }
            // sección accessories
            let pxAccessories = $("#accessories").offset().top; 
            if(pxScroll+pxWindow >= pxAccessories){
                $(".accessories").addClass("show-section");
            }
            // sección kit
            let pxKit = $("#kit").offset().top; 
            if(pxScroll+pxWindow >= pxKit){
                $(".kit").addClass("show-section");
            }
            // sección taller
            let pxWorkshop2 = $("#workshop2").offset().top; 
            if(pxScroll+pxWindow >= pxWorkshop2){
                $(".workshop2").addClass("show-section");
            }
            //cambiar color cookies
            let pxCookies = $(".cookies").offset().top;
            let hCookies = $(".cookies").height(); 
            if (pxCookies+hCookies >= pxWorkshop){
                $(".cookies").addClass("dark");
                $(".cookies-link").addClass("dark");
            }
            if(pxCookies< pxWorkshop){
                $(".cookies").removeClass("dark");
                $(".cookies-link").removeClass("dark");
            }
            
        }
    )
}
