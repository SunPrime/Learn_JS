class Editor{
    constructor(sSelector){
        this.editor = $(sSelector);
        this.color = this.editor.find(".color");
        this.size = this.editor.find(".size");
        this.text = this.editor.find(".text");
        this.btn = this.editor.find(".apply");
        this.decor      = {}; //json для хранения cookies
        $.cookie.json   = true;

        this.loadCookies();
        this.createEvents();
    }

    changeDesing(event){
        let currentColor = this.color.val(),
            currentSize  = this.size.val();
        $("body").css("background", currentColor);
        this.recordCookies("background", currentColor);

        this.text.css("font-size", currentSize);
        this.recordCookies("font-size", currentSize);
    }

    recordCookies(name, value){
        this.decor[name] = value;
        $.cookie("decorPage", this.decor, {expires: 3650});
    }

    loadCookies(){
        this.decor = $.cookie("decorPage");
        if (this.decor){
            this.color.val(this.decor["background"]);
            this.size.val(this.decor["font-size"]);

            $("body").css("background", this.decor["background"]);
            this.text.css("font-size", this.decor["font-size"]);
        } else {
            this.decor = {};
        }
    }

    createEvents(){
        this.btn.click(this.changeDesing.bind(this));
    }
}