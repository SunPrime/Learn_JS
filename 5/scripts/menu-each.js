//1. menu.js
// ������� ��� li
// �������� ������ � ������� ������
$('.b-menu > li').each(function (index) {
    let value = $(this).text();
    console.log(
        `li${index}: ${value}`
    )
});