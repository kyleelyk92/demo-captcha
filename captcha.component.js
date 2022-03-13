
class CaptchaDiv extends HTMLElement {
    constructor(protectedElement) {
      // Always call super first in constructor
        super();
        this.protected_elem = protectedElement;
        // Create a shadow root
        this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'
        this.button_id = '12345';
        // Create (nested) span elements
        const captcha_elem = document.createElement('span');
        captcha_elem.setAttribute('class','wrapper');
        captcha_elem.innerHTML = `<div id="active_captcha" class="t-qr-root" style="position: relative;"><button id="t-load" type="button"
        data-board="pol" data-tid="366422067"
        style="font-size: 11px; padding: 0px; width: 90px; box-sizing: border-box; margin: 0px 6px 0px 0px; vertical-align: middle; height: 18px;">Get
        Captcha</button><input id="t-resp" name="t-response" placeholder="Type the CAPTCHA here" autocomplete="off"
        type="text"
        style="width: 160px; box-sizing: border-box; text-transform: uppercase; font-size: 11px; height: 18px; margin: 0px; padding: 0px 2px; font-family: monospace; vertical-align: middle;"><button
        id="t-help" type="button" data-tip="Help" tabindex="-1"
        style="font-size: 11px; padding: 0px; width: 20px; box-sizing: border-box; margin: 0px 0px 0px 6px; vertical-align: middle; height: 18px;">?</button>
        <div id="t-cnt" style="height: 80px; margin-top: 2px; position: relative; width: 260px;">
            <div id="t-bg"
                style="width: 100%; height: 100%; position: absolute; background-repeat: no-repeat; background-position: -41px top; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAABQAQMAAABCn3AaAAAABlBMVEUAAADu7u6BVFV4AAAFWUlEQVRIiW2WT4vkRBTAX8xiCw5EQXBgxi0/gOCIBwdGJge/hMf5CA1eWhypzPRBD0J/g/UjiCcFhaQZsL3N1cNiMvbBPSwmrTBdO0nq+d6rqk5mdoumk1T98ur9TwHSKPHBuH44YYD/Fw+n5/zXv8TJtE1kpuW/Ff91Sp7rV3KCYc2qdCqnxyVv1jrO6ad5o6Xf6Am9SJcrXOYs7hjGSoy4R1oukZsgTrbHrTylwq35/ttU5i9Q1nsDq8FAk/Y8zSv6qfaK8sjJjqUVzjpHlH7biR27aUFc4eR1WvRetJ4jkQPH8p7zs1GkG6FYboiuLa14dwrF/utUVRLS6e0/PNlMNV7wG6iCxxbkHeHYVZaDsHXcT2y4iPHyromz2PjnOdIbbUOyupFuzmyOR+NnV7hBFzgbHBLGhDkOQytL7bCyvs/9DOw2tRJ47LMH8jKJb16KqHtqedlWfnk2zgMbpFh6YTNMpy/wjzGHeFO6FQoH2V6WsolFCsN9rtKimoWU5OW4qJ3SBgyMbMT8jINFqZV9SPotcO6z0RIXvCcDIsx7csmzlN/C+V+Js70iieN9z+BcUfRsl8pj+Y6otcbGQD/2VgV7iq9d7IoSQPW82rwBg6toNLTguCpwbl64DVVq7RUGPeJ+89zWcRVxayW1lIFoboiz+HcR5FVOHidBLnlTQOw4fqm6x/Wt0886LjqgsJgY73BbAcC7kk/MmRDxExTuMzSRiW8avamiguX17AfARnkOHbe0QFxW6QaiLuxLnImt9ypze9GyEu6IOctc7bgu9qXKPaFILmqa3I+zE3Lml8Kt0ZyRfjb2Tl4Jt+GXIY7Y6drCeyzPAHG3gauFk03gKPbcPk1S9hVO3n/M6Zc4JfIw95zVTcrpPXCvM2edvQvO0wJKG98q8Q3J08zddDBpYnHSIXFzDg858ja+nBjFzYX6D3MoHLnzCSmgNhfcpgpILuMMTMI1uWo8F31DXIIT0iBtqFascFEGx4n03EZ77qq5soleUP6lU0gqTArQ8wzgOGJ5nrNdVHx8hdqWZHICzMHvgKUhDv6ktKhb2bebRUV6JS7tSENItkj1hqZjTjVfSx7ETt4n1yNO6hJ7epiBdnUn+tmoeF+etHAq5zpHe8ic/+p5LvuIq4C6Me0Eh+pOOBDOjSzhthEVJyy+p31T5vBVHMszaev1c1w15nI74pwewj3G+5zqiFNU9cRN8AXXrXAU+2qfuRlMmZuQFOLWjuPqWxP3eMe9du45iknGneGOOePlfR84jC1MD7kvWiwz5fSbsH4t64fZQeA6mCnfjAYOuUUzB28P3OfKFya/vOOcPIDlIE+6T7+T17uvNz4XedR9Ayf+48L3+3q3f8fcQe3OJcSdu7bHGc7/UaOdunmW5tI6hDsfOP7qtujk8ZQ5TQM3ufxgxImZUU/V6LrOKXLchPv3EXPt7lPV6Ei++lrukVvCgrgf7R5zNNMOnHkz3JMd5LEGKCFFv2DinCIWYfcFzXfifdGvAcke4nrnwXrFdrAxazmw/SJcb3accwuuuGvFzC3xUsSDks5WjbneHaBkrOX+B+aWgfuUuZK5FYaD5NYfooBT0gDXFfWlsO/uXLAKNxS6LXr9jgKXhtW8HHF54KaQ3uPKWsl1qZmjyHiu8d+JcMRdLSQBsUiFw68Cl+Q8TdFSkl9lPhG7niWyL741c1wneWqJE56sySXcxnMzL6+Wk3antd/Xp73oy5yLx1Nwpyl3sN5xXl8xkbiaPtvOa786zg4cj8xzpLCcUbU95QulyeiMSKNxHDmnmwY5IycGVZHOKIrl0UG3c+fssKBxPLTE43/uaYPg9HiQswAAAABJRU5ErkJggg==&quot;);">
            </div>
            <div id="t-fg"
                style="width: 100%; height: 100%; position: absolute; background-repeat: no-repeat; background-position: left top; background-image: url(&quot;data:image/png;base64,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&quot;);">
            </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <input id="t-slider" autocomplete="off" type="range" min="0" max="100" style="width: 100%; box-sizing: border-box; margin: 0px; transition: box-shadow 10s ease-out 0s; position: relative;">
        </div>
        <div id="t-msg"
            style="width: 100%; position: absolute; top: 50%; text-align: center; font-size: 14px; filter: inherit; display: none;">
        </div>
        <input name="t-challenge" type="hidden"
            value="f53BKThd5JHpN5wK.ec2d3cb06cd6837e7532fa9eceeabb3ba64a997feaad0440140244f70e086157">
        </div>
        <br>
        <br>
        `
        const solve_button = document.createElement('button');
        solve_button.id = this.button_id;
        
        // Note# Events triggered in shadow dom need to be passed additional options in order to interact with regular dom elements.
        const solve_event = new CustomEvent('solve_event', {
            bubbles: true,
            cancelable: false,
            composed: true
          });
        // Listen for the event at the element we're protecting.
        this.protected_elem.addEventListener('solve_event', (solve_event) => console.log(solve_event), );
       
        solve_button.innerText = 'SOLVE ME';
        solve_button.addEventListener('click', () => {
            solve_button.dispatchEvent(solve_event);
        })
        this.shadowRoot.append(captcha_elem, solve_button);
    
    }
    
    solveCaptcha() {
        const disabled_elems = this.protected_elem.elements;
        for (let i = 0; i <= disabled_elems.length -1; i++) {
            disabled_elems[i].removeAttribute('disabled');
        }
    }
        
}

customElements.define('captcha-div', CaptchaDiv);



