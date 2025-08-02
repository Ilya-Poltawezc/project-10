class Header {
    selectors = {
        root: '[data-js-modal]',
        list: '[data-js-modal-list]',
        button: '[data-js-modal-button]',
    }

    stateClasses = {
        headerHidden: 'header-hidden',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.listElement = this.rootElement.querySelector(this.selectors.list)
        this.buttonElement = this.rootElement.querySelector(this.selectors.button)
        this.bindEvents()
    }

    buttonClick = () => {
        this.listElement.classList.toggle(this.stateClasses.headerHidden)
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.buttonClick)
    }
}

export default Header