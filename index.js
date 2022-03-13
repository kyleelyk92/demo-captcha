

function createCaptchaHTML(e) {
    const captcha_elem = document.createElement('div');
    const elem_id = Math.floor((Math.random() * 10000));
    captcha_elem.innerText = 'Here is my captcha div';
    captcha_elem.id = elem_id;
    const button = createCaptchaButton(captcha_elem, e);
    captcha_elem.insertAdjacentElement('beforeend', button);
    // const element_button = captcha_elem.getElementById('btn123');
    return captcha_elem;
}

function wrapSubmissionEvent(el, e) {
    el.insertAdjacentElement('afterend', createCaptchaHTML(e));
}

function getCaptchaElement(el) {
    const captcha_div = new CaptchaDiv(el);
    return captcha_div;
}

function insertCaptcha(dom_element) {
    dom_element.insertAdjacentElement('beforeend', getCaptchaElement(dom_element));
    console.log(dom_element);
    const elements = dom_element.elements
    for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].setAttribute('disabled', 'disabled');
    }

}
const my_elems = document.querySelectorAll('[captcha]');
for(let el of my_elems) {
    el.addEventListener('submit', (e) => {
        e.preventDefault();
        const active_captchas = document.getElementById('active_captcha');
        if (!el.getAttribute('disabled'))
        {
            insertCaptcha(el);

        } else {
            console.log('captcha already present');
        }
    });
}

