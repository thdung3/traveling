const counters = document.querySelectorAll('.counter');
const speed = 300;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        console.log('counter.innerText:', counter.innerText)
        console.log('target:', target)

        const inc = target / speed;
        console.log('inc:', inc)

        if (count < target) {
            // counter.innerText = Math.ceil(count + inc);
            counter.innerText = parseFloat((count + inc).toFixed(3));
            console.log('counter:', Math.ceil(count + inc))
            setTimeout(updateCount, 1);
        }
        else {
            count.innerText = target;
        }
    }
    updateCount();
});