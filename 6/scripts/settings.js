class Settings{
    static init(oSettings){
        this.data = oSettings;
        console.log(this.data);
    }

    static get(sSettingsName){
        return this.data[sSettingsName];
    }
}