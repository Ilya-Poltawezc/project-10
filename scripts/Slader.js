class Slader {
    selectors = {
        root: '[data-js-slader]',
        images1: '[data-js-slader-img1]',
        images2: '[data-js-slader-img2]',
        images3: '[data-js-slader-img3]',
        button: '[data-js-slader-button]',
    }

    stateClasses = {
        imgOne: 'imgOne-translate',
        deleteClassOne: 'what__body-img1',
        img2: 'img2',
        deleteClassThree: 'what__body-img2',
        img3: 'img3',
        deleteClassTwo: 'what__body-img3',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.images1Element = this.rootElement.querySelector(this.selectors.images1)
        this.images2Element = this.rootElement.querySelector(this.selectors.images2)
        this.images3Element = this.rootElement.querySelector(this.selectors.images3)
        this.buttonElement = this.rootElement.querySelector(this.selectors.button)
        this.bindEvents()
    }

    buttonClick = () => {
        this.images1Element.classList.toggle(this.stateClasses.deleteClassOne)
        this.images1Element.classList.toggle(this.stateClasses.imgOne)
        this.images2Element.classList.toggle(this.stateClasses.deleteClassThree)
        this.images2Element.classList.toggle(this.stateClasses.img2)
        this.images3Element.classList.toggle(this.stateClasses.deleteClassTwo)
        this.images3Element.classList.toggle(this.stateClasses.img3)


    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.buttonClick)
    }
}

export default Slader