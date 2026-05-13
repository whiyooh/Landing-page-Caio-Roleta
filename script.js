document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalTelegram");
    const btnSim = document.getElementById("btnSim");
    const btnNao = document.getElementById("btnNao");

    // Congela o scroll enquanto o modal estiver aberto
    document.body.style.overflow = "hidden";

    
    // A página fica congelada até o usuário interagir 

    btnSim.addEventListener("click", function () {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";

        setTimeout(function () {
            document.body.classList.add("loaded");
        }, 250);
    });
 
    btnNao.addEventListener("click", function () {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.classList.add("hidden");
            document.body.style.overflow = "auto";
        }
    });
});
const ctaButton = document.querySelector(".cta-button");