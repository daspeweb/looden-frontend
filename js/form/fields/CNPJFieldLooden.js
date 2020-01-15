import {Validators} from '/js/form/validations/Validators.js'
import {MaskController} from '/js/form/mask/MaskController.js'
const CNPJFieldLooden  = function(){
    let renderedTemplate;
    let params;
    function render(params){
        CNPJFieldLooden.params = params;
        CNPJFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <div class="container-field">
                    <label for="${params.name}">${params.label}</label>
                    <input type="text" placeholder="${params.placeholder}" class="type-cnpj" name="${params.name}">
                    <small class="helper-text" data-error="${params.msgError}"></small>
                </div>
            </div>
        `;
        MaskController.mask({
            el: '.type-cnpj',
            mask: params.mask,
            validation: Validators.validCPF
        })
        return CNPJFieldLooden;
    }

    return {render, renderedTemplate}
}();

export {CNPJFieldLooden}