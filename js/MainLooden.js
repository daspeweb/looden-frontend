import {TextFieldLooden} from '/js/form/fields/Text.js'
import {DataMock} from "/js/mock/Data.js"
import {ModalController} from '/js/modal/ModalController.js'

const LoodenController = function(){
    let params
    function init(params){
        LoodenController.params = params
        console.log('MainLooden.js iniciada')
        let dt = DataMock.formFieldsAccount();
        let modal1 = ModalController.render({
            root: params.root,
            header: "Moda de teste",
            content: dt.map(item=> {return TextFieldLooden.render(item).renderedTemplate}).join(' '),
            id: 'teste1'
        }).append();

        modal1.open();
    }

    return {init}
}();

export {LoodenController};

