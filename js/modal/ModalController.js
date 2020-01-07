const ModalController = function () {
    let renderedTemplate
    let params
    let modals
    function renderButton(params){
        return `<a href="#!" class="modal-close waves-effect waves-green btn-flat ${params.class}">${params.text}</a>`
    }
    function render(params){
        ModalController.params = params
        ModalController.renderedTemplate = `
               <div id="modal-${params.id}" class="modal modal-fixed-footer">
                <div class="modal-content">
                  <h4>${params.header}</h4>
                  <p>${params.content}</p>
                </div>
                <div class="modal-footer">
                  <a href="#!" class="modal-close waves-effect waves-green btn-flat ${params.class}">${params.cancelLabel || 'Cancelar'}</a>
                </div>
              </div>
            `
        return ModalController;
    }
    function append() {
        ModalController.params.root.insertAdjacentHTML('afterbegin', ModalController.renderedTemplate);
        ModalController.modals = M.Modal.init(document.querySelectorAll('.modal'), {});
        return ModalController.modals.find(modal => {return modal.id === `modal-${ModalController.params.id}`});
    }
    return {render, append}
} ()

export {ModalController}