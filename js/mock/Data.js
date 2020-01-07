const DataMock = function(){
    function formFieldsAccount(){
        return [
            {
                type: 'text',
                label: "Texto",
                placeholder: "Texto",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text'
            },
            {
                type: 'number',
                label: "CPF",
                placeholder: "CPF",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text'
            }
        ]
    }
    return {formFieldsAccount}
}()

export {DataMock}