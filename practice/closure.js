function f1() {
    const var1 = "this is var one"

    return function () {
        console.log(var1)
    }
}

const v1 = f1()

v1()