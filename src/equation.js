import { create, all } from 'mathjs'
const config = { }
const math = create(all, config)
export default function equation() {
    const x = math.randomInt(20);
    const a = math.randomInt(20)
    const b = math.randomInt(20)
    const c = math.chain(x).multiply(a).add(b).done()
    return {
        equation: a + ' * x + ' + b  + ' = ' + c,
        solution: x
    }
}