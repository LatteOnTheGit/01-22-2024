function makeFunc() {
    const name = 'Mozilla';
    function dispName() {
        console.log(name);
    }
    return dispName;
}

// f is a closure(function and environment)
const f = makeFunc();
f();