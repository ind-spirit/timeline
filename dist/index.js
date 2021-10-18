window.onload = () => {
    const timeline = document.querySelector("#timeline");
    const object = document.querySelector("#object");
    let elements = document.querySelectorAll(".element");
    let elementsArray = Array.prototype.slice.call(elements);
    let counter = 0,
        delta,
        scroll = false,
        transitioning = false,
        previousOffset = elementsArray[0].offsetLeft;

    // let gap = elementsArray[1].offsetLeft - elementsArray[0].offsetLeft - elementsArray[0].offsetWidth;
    let gap = elementsArray[1].offsetLeft - elementsArray[0].offsetLeft;

    function moveRight(element) {
        let currentLeft = window
            .getComputedStyle(element, null)
            .getPropertyValue("left");
        // console.log(currentLeft, parseInt(currentLeft));
        let newValue = parseInt(currentLeft) + 300 + "px";
        element.style.left = newValue;
    }

    function moveLeft(element) {
        let currentLeft = window
            .getComputedStyle(element, null)
            .getPropertyValue("left");
        // console.log(currentLeft, parseInt(currentLeft));
        let newValue = parseInt(currentLeft) - 300 + "px";
        element.style.left = newValue;
    }
    function countOffset() {
        // console.log(elementsArray, elements);
        // for (let i = 0; i < elementsArray.length; i++) {
        //     console.log(elementsArray[i], elementsArray[i].offsetLeft);
        //     console.log(elementsArray[i].getBoundingClientRect().left);
        // }
    }
    // function moveToElement() {
    //     let elem = elementsArray[counter];
    //     let left = elem.getBoundingClientRect().left;
    //     // console.log(left);
    //     object.style.left = left;
    // }
    function moveToElement() {
        let elem = elementsArray[counter];
        let left1 = elem.offsetLeft + "px";
        let left = elem.getBoundingClientRect().left + "px";
        // console.log(left, left1);
        object.style.left = left1;
    }

    moveToElement();
    countOffset();

    // console.log(gap);

    // timeline.addEventListener('scroll', (e) => {
    //     // delta > 0 ? counter++ : counter--;
    //     // console.log("counter = ", counter);
    //     // moveToElement();
    //     scroll = true;
    // })
    // function scroll(evt) {

    // }
    timeline.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        console.log(transitioning);
        if (!transitioning) {
            delta = evt.deltaY;
            // timeline.scrollLeft += evt.deltaY;
            // console.log(previousOffset, elementsArray[0].offsetLeft);
            if (delta > 0) {
                if (counter < elementsArray.length - 1) counter++;
            } else {
                if (counter > 0) counter--;
            }

            // previousOffset < elementsArray[0].offsetLeft ? counter++ : counter--;
            // previousOffset = elementsArray[0].offsetLeft;
            // console.log(counter);
            moveToElement();
            delta > 0
                ? (timeline.scrollLeft += gap)
                : (timeline.scrollLeft -= gap);

            // console.log(evt.deltaY);
            // countOffset();
            // evt.deltaY > 0 ? moveRight(object) : moveLeft(object);
        }
    });

    timeline.addEventListener("transitionstart", (evt) => {
        transitioning = true;
    });
    timeline.addEventListener("transitionend", (evt) => {
        transitioning = false;
    });
};
