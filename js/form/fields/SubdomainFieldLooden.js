const SubdomainFieldLooden = function(){
    let renderedTemplate;
    let params;
    function render(params){
        SubdomainFieldLooden.params = params;
        SubdomainFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <label>${params.label}</label>
                <input type="text" placeholder="${params.placeholder}">
                <small>.dominio.com.br</small>
            </div>
        `;

        return SubdomainFieldLooden;
    }

    return {render, renderedTemplate}
}();

export {SubdomainFieldLooden}