class Cart extends Component{
    constructor(sSelector, sCartSelector){
        super(sSelector);
        this.cart       = $(sCartSelector);
        this.list       = this.cart.find(".b-minicart__list");
        this.button     = this.cart.find(".b-minicart__button");
        this.total      = this.cart.find(".b-minicart__total");
        this.quantity   = this.cart.find(".b-minicart__quantity");
        this.goods      = {}; //json ��� �������� cookies
        $.cookie.json   = true;

        this.load();
        this.createEvents();
    }

    //���������� ������ � �������
    add(event){
        event.preventDefault();
        let orderForm    = $(event.currentTarget),
            currentGoods = orderForm.closest(".b-good"),
            addedGoods   = this.put(currentGoods);

        //���������� ���������� � cookies
        this.goods[addedGoods.getID()] = orderForm.find(".b-order-form__quantity").val();
        $.cookie("cartGoods", this.goods);

        //���������� �������
        this.list.slideDown();
        this.showCartInfo();
    }

    //���������� � ������ �������
    put(oCurrentGoods){
        let addedGoods  = new Goods(oCurrentGoods),
            goodsID     = addedGoods.getID(),
            cartGoodsClass = `b-good_id_${goodsID}`,
            existingGoods = this.list.find(`.${cartGoodsClass}`);

        if(existingGoods.length){
            this.copyData(oCurrentGoods, existingGoods, [
                ".b-order-form__quantity"]);
        }
        else{
            let newGoods = this.list.find(".b-good:first-child").clone();
            this.copyData(oCurrentGoods, newGoods, [
                ".b-good__image",
                ".b-good__name",
                ".b-good__price",
                ".b-order-form__quantity"]);
            newGoods.addClass(cartGoodsClass);
            //��������� � ����� �������
            this.list.find(".b-goods").append(newGoods);
            newGoods.find(".b-good__delete").click(this.del.bind(this));
        }
        oCurrentGoods.addClass("b-good_in-cart");
        return addedGoods;
    }

    //�������� ������� �� cookie
    load(){
        this.goods = $.cookie("cartGoods");
        if (this.goods){
            $.each(this.goods, (id, qty)=>{
                let currentGoods = this.elem.find(`.b-good_id_${id}`);
                currentGoods.find(".b-order-form__quantity").val(qty);
                this.put(currentGoods);
            });
        } else {
            this.goods = {};
        }
        this.showCartInfo();
    }

    //��������-������ �������
    showHideCart(){
        this.list.slideToggle();
    }

    //�������� ����������
    changeQuantity(event){
        let currentBtn  = $(event.currentTarget),
            step        = currentBtn.data("step");
        console.log(step);
    }

    //������� ����� �� �������
    del(event){
        event.preventDefault();
        let currentLink = $(event.currentTarget),
            currentGoods = currentLink.closest(".b-good"),
            delGoods  = new Goods(currentGoods);
        console.log(delGoods.getID());
        currentGoods.remove();
        delete this.goods[delGoods.getID()];
        $.cookie("cartGoods", this.goods);
        this.showCartInfo();
    }

    //�������� ��������� � �������
    showCartInfo(){
        let total       = 0,
            quantity    = 0;
        console.log(this.goods);
        $.each(this.goods, (id, qty)=>{
            //����������
            quantity += + qty; //������ ���� ���������� ����: ������ � �����
            //���������
            total += + this.elem.find(`.b-good_id_${id} .b-good__price`).text() * qty;
        });
        this.quantity.text(quantity);
        this.total.text(total);
    }

    createEvents(){
        this.elem.find(".b-order-form").submit(this.add.bind(this));
        this.button.click(this.showHideCart.bind(this));
        this.elem.find(".b-order-form__btn").click(this.changeQuantity.bind(this));
    }
}