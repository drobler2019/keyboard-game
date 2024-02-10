import "./input-text.css";

export const renderInputText = (element) => element.innerHTML = template();

function template() {
    return `<div class="container">
               <div class="capsLock">Bloq Mayús</div>
               <div class="container-text">
                   <div class="barra"></div>
                   <div class="text"></div>
               </div>
          </div>`;
}