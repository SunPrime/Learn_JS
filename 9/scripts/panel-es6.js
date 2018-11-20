/* альтернатива без ООП
$(document).ready(function() {
	$('.open').click(function() {
		$('#panel').slideDown('slow');
	});

	$('.close').click(function() {
		$('#panel').slideUp('slow');
	});

	$('#toggle').click(function() {
		$('#toggle a').toggle();
	});
});
*/

class Toggle {
	constructor(sSelector){
		//свойства
		this.toppanel   = $(sSelector);
		this.panel 		= this.toppanel.find("#panel");
        this.linksPanel = this.toppanel.find(".tab");
		this.openLink   = this.toppanel.find(".open");
        this.closeLink  = this.toppanel.find(".close");
        //события
        this.createEvents();
	}

	showPanel(event){
		/*console.log($(event.currentTarget));
		console.log($(event.target));
		 */
		this.panel.stop().slideToggle();
		this.openLink.toggleClass("shown");
		this.closeLink.toggleClass("shown");
	}

	createEvents(){
		this.linksPanel.click(this.showPanel.bind(this));
	}
}