const DataMock = function(){
    function formFieldsAccount(){
        return [
            {
                type: 'text',
                label: "Text",
                placeholder: "Text",
                classes: 'col s6 valid',
                section: 'Dados Gerais',
                mask: 'text'
            },
            {
                type: 'number',
                label: "CNPJ",
                placeholder: "CNPJ",
                classes: 'col s6',
                section: 'Dados Gerais',
                mask: 'text'
            },
            {
                type: 'date',
                label: "Date",
                placeholder: "Date",
                classes: 'col s6',
                section: 'Dados Gerais',
                mask: 'text'
            }
        ]
    }
    return {formFieldsAccount}
}()

export {DataMock}