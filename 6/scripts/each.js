let goods = {
    "������"    : 1800,
    "��������"  : 1000,
    "�����"     : 900,
    "����"      : 650,
};

$.each(goods, (title, price)=>{
    console.log(
        `${title} - ${price} ���.`
    );
});