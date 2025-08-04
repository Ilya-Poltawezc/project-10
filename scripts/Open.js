class Open {
    selectors = {
        root: '[data-js-open]',
        button: '[data-js-open-button]',
        button2: '[data-js-open-button2]',
        button3: '[data-js-open-button3]',
        menu: '[data-js-open-menu]',
        menu2: '[data-js-open-menu2]',
        menu3: '[data-js-open-menu3]',
    }

    stateClasses = {
        delete: 'features__body-desc',
        hidden: 'open',
        //hiddenTwo: 'open-two',
        //hiddenThree: 'open-three',
        buttonActive: 'button-active',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.buttonElement = this.rootElement.querySelector(this.selectors.button)
        this.button2Element = this.rootElement.querySelector(this.selectors.button2)
        this.button3Element = this.rootElement.querySelector(this.selectors.button3)
        this.menuElement = this.rootElement.querySelector(this.selectors.menu)
        this.menu2Element = this.rootElement.querySelector(this.selectors.menu2)
        this.menu3Element = this.rootElement.querySelector(this.selectors.menu3)
        this.bindEvents()
        this.bindEventsTwo()
        this.bindEventsThree()
    }

    buttonClick = () => {
        this.buttonElement.classList.toggle(this.stateClasses.buttonActive)
        this.menuElement.classList.toggle(this.stateClasses.delete)
        this.menuElement.classList.toggle(this.stateClasses.hidden)
    }

    buttonClickTwo = () => {
        this.button2Element.classList.toggle(this.stateClasses.buttonActive)
        this.menu2Element.classList.toggle(this.stateClasses.delete)
        this.menu2Element.classList.toggle(this.stateClasses.hidden)
    }

    buttonClickThree = () => {
        this.button3Element.classList.toggle(this.stateClasses.buttonActive)
        this.menu3Element.classList.toggle(this.stateClasses.delete)
        this.menu3Element.classList.toggle(this.stateClasses.hidden)
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.buttonClick)
    }

    bindEventsTwo() {
        this.button2Element.addEventListener('click', this.buttonClickTwo)
    }

    bindEventsThree() {
        this.button3Element.addEventListener('click', this.buttonClickThree)
    }
}

export default Open