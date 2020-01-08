import {TextFieldLooden} from '/js/form/fields/Text.js'
import {SelectFieldLooden} from '/js/form/fields/SelectFieldLooden.js'
import {FileFieldLooden} from '/js/form/fields/FileFieldLooden.js'
import {DataMock} from "/js/mock/Data.js"
import {ModalController} from '/js/modal/ModalController.js'
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
                if(item.type === 'select'){
                    return SelectFieldLooden.render(item).renderedTemplate;
                }else if(item.type === 'file'){
                    return FileFieldLooden.render(item).renderedTemplate;
                }else{
                    return TextFieldLooden.render(item).renderedTemplate;
                }
            }).join(' '),
            id: 'teste1'
        }).append();

        modal1.open();  
        M.FormSelect.init(document.querySelectorAll('select, .datepicker'), {});
    }

    return {init}
}();

export {LoodenController};

