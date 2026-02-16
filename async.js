function step1() {
    return Promise.resolve("A")
}
function step2() {
    return Promise.resolve(value + "B")
}
function step3() {
    return Promise.resolve(value + "C")
}

async function  run() {
    let v1 = await step1("A")
    let v2 = await step2(v1 + "B")
    let v3 = await step3(v2 + "C")
    Displayer(v3)
}
run();