function Tabs(sSelector){
	var t = this;
	
	// свойства
	t.tabsBlock		= $(sSelector);
	t.tabs			= t.tabsBlock.find(".tabs li");
	t.tabsContent	= t.tabsBlock.find(".tab-content");
	
	// методы
	t.init = function(){
		t.tabs.filter(":first").addClass('active');
		t.tabsContent.html(content["about"]);
	}
	t.changeTabContent = function(){
		t.tabs.removeClass('active');
		$(this).addClass('active');
		
		var selectedTabContentId = $(this).find('a').attr('href').replace("#", "");
        t.tabsContent.html(content[selectedTabContentId]);
	}
	
	t.init();
	t.tabs.click(t.changeTabContent);
}

/* jQuery(document).ready(function($) {

    $('.tab-content').hide();
    $('.tab-content:first').show();
    $('.tabs li:first').addClass('active');

    $('.tabs li').click(function (event) {
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var selectTab = $(this).find('a').attr('href');
        $(selectTab).fadeIn();
    });
}); */
