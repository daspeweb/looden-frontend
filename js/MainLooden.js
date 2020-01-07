import {TextFieldLooden} from '/js/form/fields/Text.js';
import {DataMock} from "/js/mock/Data.js"


const LoodenController = function(){
    let params
    function init(params){
        LoodenController.params = params
        console.log('MainLooden.js iniciada')
        let dt = DataMock.formFieldsAccount();
        let txtTemplateRendered = ``;
        dt.forEach((item, index) => {
            txtTemplateRendered += TextFieldLooden.render(dt[index]).renderedTemplate;
        });
        params.root.insertAdjacentHTML('afterbegin', txtTemplateRendered);
    }

    return {init}
}();

export {LoodenController};

