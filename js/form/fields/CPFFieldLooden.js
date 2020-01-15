import {Validators} from '/js/form/validations/Validators.js'
import {MaskController} from '/js/form/mask/MaskController.js'
const CPFFieldLooden  = function(){
    let renderedTemplate;
    let params;
    function render(params){
        CPFFieldLooden.params = params;
        CPFFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <div class="container-field">
                    <label for="${params.name}">${params.label}</label>
                    <input type="text" placeholder="${params.placeholder}" class="type-cpf" name="${params.name}">
                    <small class="helper-text" data-error="${params.msgError}"></small>
                </div>
            </div>
        `;
        MaskController.mask({
            el: '.type-cpf',
            mask: params.mask,
            validation: Validators.validCPF
        })
        return CPFFieldLooden;
    }

    return {render, renderedTemplate}
}();

export {CPFFieldLooden}