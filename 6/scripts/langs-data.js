let pageSettings = {

	langs :  {
				 "b-form__label_name" : {
					"ru" : "���"
					,"ua" : "��'�"
					}
				 ,"b-form__label_surname" : {
				  "ru" : "�������"
					,"ua" : "�������"
					}
				 ,"b-form__label_season" : {
				  "ru" : "���� ������� ����� ����"
					,"ua" : "���� �������� ���� ����"
					}
				 ,"b-form__label_fruit" : {
				  "ru" : "��� ������� �����"
					,"ua" : "��� ��������� �����"
					}
				 ,"b-form__label_animals" : {
				  "ru" : "���� ������� ��������"
					,"ua" : "���� �������� �������"
					}
				 ,"b-form__label_review" : {
				  "ru" : "��� �����"
					,"ua" : "��� �����"
					}
				 ,"b-form__ok-button" : {
				  "ru" : "���������"
					,"ua" : "���i�����"
					}
			}
};

Settings.init(pageSettings);

//�������� ������ � ������� ������
$.each(pageSettings.langs, (index, val)=>{
	console.log(
		`${index}: ${val.ru}
				   ${val.ua}`
	);
});