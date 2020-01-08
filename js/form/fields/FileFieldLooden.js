const FileFieldLooden = function(){
    let renderedTemplate;
    let params;
    function render(params){
        FileFieldLooden.params = params;
        FileFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <div class="file-field input-field">
                    <div>
                        <label>${params.label}</label>
                        <input type="${params.type}" multiple>
                    </div>
                    <div class="file-path-wrapper" style="padding-left:0;">
                        <input class="file-path validate" type="text" placeholder="${params.placeholder}">
                    </div>
                </div>
            </div>
        `;
        return FileFieldLooden
    }
    return {render}
}();

export {FileFieldLooden}