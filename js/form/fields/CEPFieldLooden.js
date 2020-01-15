import {Validators} from '/js/form/validations/Validators.js'
import {MaskController} from '/js/form/mask/MaskController.js'
const CEPFieldLooden  = function(){
    let renderedTemplate;
    let params;
    function render(params){
        CEPFieldLooden.params = params;
        CEPFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <div class="container-field">
                    <label for="${params.name}">${params.label}</label>
                    <input type="text" placeholder="${params.placeholder}" class="type-cep" name="${params.name}">
                    <small class="helper-text" data-error="${params.msgError}"></small>
                </div>
            </div>
        `;
        MaskController.mask({
            el: '.type-cep',
            mask: params.mask,
            validation: Validators.validCPF
        })
        return CEPFieldLooden;
    }

    return {render, renderedTemplate}
}();

export {CEPFieldLooden}