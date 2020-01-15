import {TextFieldLooden} from '/js/form/fields/TextFieldLooden.js'
import {IntergerFieldLooden} from '/js/form/fields/IntergerFieldLooden.js'
import {DateFieldLooden} from '/js/form/fields/DateFieldLooden.js'
import {SelectFieldLooden} from '/js/form/fields/SelectFieldLooden.js'
import {FileFieldLooden} from '/js/form/fields/FileFieldLooden.js'
import {TextareaFieldLooden} from '/js/form/fields/TextareaFieldLooden.js'
import {PhoneFieldLooden} from '/js/form/fields/PhoneFieldLooden.js'
import {TimestampFieldLooden} from '/js/form/fields/TimestampFieldLooden.js'
import {RangeFieldLooden} from '/js/form/fields/RangeFieldLooden.js'
import {SelectMultipleFieldLooden} from '/js/form/fields/SelectMultipleFieldLooden.js'
import {MoneyFieldLooden} from '/js/form/fields/MoneyFieldLooden.js'
import {SubdomainFieldLooden} from '/js/form/fields/SubdomainFieldLooden.js'
import {URLFieldLooden} from '/js/form/fields/URLFieldLooden.js'
import {CNPJFieldLooden} from '/js/form/fields/CNPJFieldLooden.js'
import {CPFFieldLooden} from '/js/form/fields/CPFFieldLooden.js'
import {CEPFieldLooden} from '/js/form/fields/CEPFieldLooden.js'
import {MaskController} from '/js/form/mask/MaskController.js'
import {Validators} from '/js/form/validations/Validators.js'
import {DataMock} from "/js/mock/Data.js"
import {ModalController} from '/js/modal/ModalController.js'


const LoodenController = function(){
    let params;
    function init(params){
        LoodenController.params = params
        let dt = DataMock.formFieldsAccount();
        let modal1 = ModalController.render({
            root: params.root,
            header: "Moda de teste",
            content: dt.map(item => {
                if(item.type === 'date'){
                    return DateFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'file'){
                    return FileFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'interger'){
                    return IntergerFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'select'){
                    return SelectFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'textarea'){
                    return TextareaFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'phone'){
                    return PhoneFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'time'){
                    return TimestampFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'range'){
                    return RangeFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'select multiple'){
                    return SelectMultipleFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'money'){
                    return MoneyFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'subdomain'){
                    return SubdomainFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'url'){
                    return URLFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'cnpj'){
                    return CNPJFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'cpf'){
                    return CPFFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'cep'){
                    return CEPFieldLooden.render(item).renderedTemplate;
                }else{
                    return TextFieldLooden.render(item).renderedTemplate;
                }
            }).join(' '),
            id: 'teste1'
        }).append();
        M.FormSelect.init(document.querySelectorAll('select'), {});
        M.Timepicker.init(document.querySelectorAll('.timepicker'), {container: "body"});
        M.Datepicker.init(document.querySelectorAll('.datepicker'), {
            container: document.querySelector('body'),
            i18n: {
                cancel: 'Cancelar',
                months: [
                    'Janeiro',
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro'
                ],
                monthsShort: [ 
                    'Jan', 
                    'Fev', 
                    'Mar', 
                    'Abr', 
                    'Maio', 
                    'Jun', 
                    'Jul', 
                    'Ago', 
                    'Set', 
                    'Out', 
                    'Nov', 
                    'Dez' 
                ],
                weekdays: [ 
                    'Domingo', 
                    'Segunda-feira', 
                    'Terça-feira', 
                    'Quarta-feira', 
                    'Quinta-feira', 
                    'Sexta-feira', 
                    'Sábado' 
                ],
                weekdaysShort: [ 
                    'Dom', 
                    'Seg', 
                    'Ter', 
                    'Qua', 
                    'Qui', 
                    'Sex', 
                    'Sáb'
                ],
                weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
            }
        });
        
        /*MaskController
        .mask({mask: "999.999.999-99", el: ".type-cpf", validation: Validators.validCPF})
        .mask({mask: "99.999.999/9999-99", el: ".type-cnpj", validation: Validators.validCNPJ})
        .mask({mask: "99.999-999", el: ".type-cep", validation: Validators.validCEP})
        .mask({mask: "aaaa@aaa.aa", el: "[type=email]"})
        .mask({mask: "(99) 9999[9]-9999", el: "[type=tel]"})*/
        IntergerFieldLooden.toInt();
        MoneyFieldLooden.toMoney();
        URLFieldLooden.renderLink();
        let rangeField = document.querySelectorAll('input[type=range]');
        rangeField.forEach((item) => {
            item.oninput = () => item.nextElementSibling.textContent = item.value
        });
        modal1.open();  
    }

    return {init}
}();

export {LoodenController};

