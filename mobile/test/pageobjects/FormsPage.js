class FormsPage {
    get formsTab() { return $('~Forms'); }
    get textInput() { return $('~text-input'); }
    get switchToggle() { return $('~switch'); }
    get dropdown() { return $('~dropdown'); }
    get activeButton() { return $('~button-Active'); }
    get inputTextResult() { return $('~input-text-result'); }

    async open() {
        await this.formsTab.click();
    }

    async fillForm(text) {
        await this.textInput.setValue(text);
        await this.switchToggle.click();
    }
}

module.exports = new FormsPage();