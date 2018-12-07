let goods = {
    "платье"    : 1800,
    "кардиган"  : 1000,
    "брюки"     : 900,
    "юбка"      : 650,
};

$.each(goods, (title, price)=>{
    console.log(
        `${title} - ${price} грн.`
    );
});