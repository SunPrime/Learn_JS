class Goods {
    constructor(oGoodsElement){ //tr � ������� � ������
        this.elem = oGoodsElement;
    }

    getID(){
        return this.elem.attr("class").match(/id_([0-9]{1,11})/)[1];
    }
}