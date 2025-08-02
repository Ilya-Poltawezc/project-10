class Menu {
    selectors = {
        root: '[data-js-menu]',
        button: '[data-js-menu-button]',
        button1: '[data-js-menu-button1]',
        button2: '[data-js-menu-button2]',
        button3: '[data-js-menu-button3]',
        list: '[data-js-menu-list]',
    }

    stateClasses = {
        menuHidden: 'menu-hidden',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.buttonElement = this.rootElement.querySelector(this.selectors.button)
        this.button1Element = this.rootElement.querySelector(this.selectors.button1)
        this.button2Element = this.rootElement.querySelector(this.selectors.button2)
        this.button3Element = this.rootElement.querySelector(this.selectors.button3)
        this.listElement = this.rootElement.querySelector(this.selectors.list)
        this.bindEvents()
    }

    onButtonClick = () => {
        this.listElement.classList.toggle(this.stateClasses.menuHidden)
    }

    buttonSwap1 = () => {
        this.buttonElement.textContent = 'FRA'
        this.button1Element.textContent = 'ENG'
    }

    buttonSwap2 = () => {
        this.buttonElement.textContent = 'UKR'
        this.button2Element.textContent = 'FRA'
    }

    buttonSwap3 = () => {
        this.buttonElement.textContent = 'DEU'
        this.button3Element.textContent = 'UKR'
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.onButtonClick)
        this.button1Element.addEventListener('click', this.buttonSwap1)
        this.button2Element.addEventListener('click', this.buttonSwap2)
        this.button3Element.addEventListener('click', this.buttonSwap3)
    }
}

export default Menu