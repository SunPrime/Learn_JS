class Component {
    constructor(sSelector) {
        this.elem = $(sSelector);
            if(!this.elem.length){
                console.log(`Элемент с селектором sSelector не найден`);
            }
    }

    findObject(sSelector) {
        let currentElem = this.elem.find(sSelector);
            if (currentElem.length){
                return currentElem;
            }
            else{
                console.log(`Элемент с классом не найден`);
                return 0;
            }
    }

    getValue(oElem, sSeparator = "") {
        let elemType = oElem.attr("type"),
            elemTagname = oElem.prop("tagName").toLowerCase();
        //console.log(elemType, elemTagname);
        if (elemType === "radio") {
            return oElem.filter(":checked").val();
        } else if (elemType === "text" ||
            elemTagname === "textarea" ||
            elemTagname === "select") {
            return oElem.val();
        } else if (elemType === "checkbox") {
            let checkboxList = "";
            oElem.filter(":checked")
                .each(function () {
                    if (checkboxList) {
                        checkboxList += sSeparator;
                    }
                    checkboxList += $(this).val();
                });
            return checkboxList;
        } else {
            console.log(`Элемента управления с типом ${elemType} и именем тега ${elemTagname} не существует`)
        }
    }
}