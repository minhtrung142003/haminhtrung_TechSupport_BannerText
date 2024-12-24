document.addEventListener("DOMContentLoaded", function () {
  const vongquay = document.querySelector(".banner-vongquay");
  const banner = document.querySelector(".banner");
  const text = document.querySelector(".banner-text");
  const cta = document.querySelector(".banner-cta");

  function startAnimation() {
    // Reset
    text.style.animation = "none";
    cta.style.animation = "none";
    vongquay.style.animation = "none";
    setTimeout(() => {
      text.style.animation = "pulse 0.5s ease-in-out";
      setTimeout(() => {
        cta.style.animation = "pulse 0.5s ease-in-out";
        setTimeout(() => {
          text.style.animation = "pulse 0.5s ease-in-out";
          setTimeout(() => {
            cta.style.animation = "pulse 0.5s ease-in-out";
            setTimeout(() => {
              vongquay.style.animation = "spin 1s ease-in-out";
              text.style.animation = "none";
              cta.style.animation = "none";

              setTimeout(() => {
                vongquay.style.animation = "none";
                text.style.animation = "moveBack 0.5s ease-in-out"; // animation text comeback
                cta.style.animation = "moveBack 0.5s ease-in-out"; // animation cta comeback

                setTimeout(() => {
                  // animation img qua.png
                  const additionalImg = document.createElement("img");
                  additionalImg.src = "./images/qua.png";
                  additionalImg.alt = "Qua";
                  additionalImg.classList.add("additional-img");
                  banner.appendChild(additionalImg);

                  setTimeout(() => {
                    additionalImg.classList.add("show");
                  }, 100);

                  setTimeout(() => {
                    additionalImg.classList.remove("show");
                    setTimeout(() => {
                      additionalImg.remove();
                      startAnimation();
                    }, 500);
                  }, 1000);
                }, 500); // time text vs cta
              }, 1000); // time vongquay
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }
  startAnimation();
});
