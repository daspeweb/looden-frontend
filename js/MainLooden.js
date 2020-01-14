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
import {DataMock} from "/js/mock/Data.js"
import {ModalController} from '/js/modal/ModalController.js'
//import * as UppyPackage from '/node_modules/uppy/dist/uppy.js'
//import Uppy, { XHRUpload, DragDrop } from '/node_modules/uppy/dist/uppy.js'


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

