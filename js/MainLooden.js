import {TextFieldLooden} from '/js/form/fields/Text.js'
import {DateFieldLooden} from '/js/form/fields/DateFieldLooden.js'
import {SelectFieldLooden} from '/js/form/fields/SelectFieldLooden.js'
import {FileFieldLooden} from '/js/form/fields/FileFieldLooden.js'
import {TextareaFieldLooden} from '/js/form/fields/TextareaFieldLooden.js'
import {PhoneFieldLooden} from '/js/form/fields/PhoneFieldLooden.js'
import {TimestampFieldLooden} from '/js/form/fields/TimestampFieldLooden.js'
import {DataMock} from "/js/mock/Data.js"
import {ModalController} from '/js/modal/ModalController.js'
import * as dragDrop from '/node_modules/drag-drop/index.js'
//import * as DragDropFile from '/node_modules/drag-drop/index.js'
//import Inputmask from "inputmask"


const LoodenController = function(){
    let params;
    function init(params){
        LoodenController.params = params
        console.log('MainLooden.js iniciada')
        let dt = DataMock.formFieldsAccount();
        let modal1 = ModalController.render({
            root: params.root,
            header: "Moda de teste",
            content: dt.map(item => {
                if(item.type === 'date'){
                    return DateFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'file'){
                    return FileFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'select'){
                    return SelectFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'textarea'){
                    return TextareaFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'phone'){
                    return PhoneFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'time'){
                    return TimestampFieldLooden.render(item).renderedTemplate;
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
        dragDrop.dragDrop('input[type=file]', (files, pos, fileList, directories) => {
            let filesColection = '';
            files.forEach((item, index) => {
                filesColection += `${item.fullPath} `;
            });
            console.log(filesColection)
            document.querySelector('input.file-path').value = filesColection;
            //document.querySelector('input[type=file]').value = filesColection;
            console.log('Here are the dropped files', files) // Array of File objects
            console.log('Dropped at coordinates', pos.x, pos.y)
            console.log('Here is the raw FileList object if you need it:', fileList)
            console.log('Here is the list of directories:', directories)
        })

        modal1.open();  
    }

    return {init}
}();

export {LoodenController};

