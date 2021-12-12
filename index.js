//pointage de mon h3
const counterDisplay = document.querySelector("h3");
let counter = 0;




//on code la logique d'une bulle
const bubbleMarker = () => {
    
    const bubble = document.createElement("span");//je créer un élément span mais attention on n'a pas ce span dans le body on peut aussi injecter des balise avec un "createElement"
    bubble.classList.add("bubble");
    
    
    //pour faire apparaitre mon span dans mon le body je lui injecte un enfant
    document.body.appendChild(bubble);
    
    // permet d'avoir des bulles de dimenension aléatoirement entre 100px et 200px pour ma const size
    const size = Math.random() * 200 + 100 + "px";//Math est un objet parce qu'il a un M majuscule et random la méthode de l'objet pour rappe lesson 2 le dom temps 4h.02
    //on va injecter du style à mon span une hauteur et une largeur qui sera la valeur de size
    bubble.style.height = size;
    bubble.style.width = size;
    
    
    //je créer un déplacement aléatoire de ma bulle 
    // je cible ma hauteur en pourcentage
    bubble.style.top = Math.random() * 100 + 50 + "%";//lesson 2 le dom temps 4h.06
    bubble.style.left = Math.random() * 100  + "%";//
    
    
    //on va donner une direction à ma bulle qui va de haut en bas
    const plusMinus = Math.random() > 0.5 ? 1 : -1;// c'est une condition soit + soit moins lesson 2 le dom temps 4h.18 ("?"=> alors) (":"=> sinon) valeur si vrai 2 points valeur si faux
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");//je vais chercher à toucher notre variable css qui s'appelle left pour injecter Mathdandom ce qui permet de se déporter soit vers la droite ou la gauche
    
    //création d'un évènement au clic pour faire disparaitre mes bulles
    bubble.addEventListener("click", ()=>{
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();
    })


    //comment supprimer les bulles
    setTimeout(() => {     //compte à rebours dans 8s les bulles se détruisent
        bubble.remove();
    }, 8000);
    
    
    
    
};


//je vais creer plusieurs bulle avec le set interval!!!

 setInterval(bubbleMarker, 1000);//me joue des intervals de création tout les 300 et m'appelle  ma fonction en même temps puisqu'elle et par à l'intérieur de mon autre fonction

//toute la logique du dessus est mise dans une fonction const bubbleMarker = () =>










