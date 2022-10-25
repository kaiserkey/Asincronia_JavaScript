const {taskOne, taskTwo} = require('./tasks')

async function main(){
    try {
        console.time('Measuring time')
        const valueOne = await taskOne()
        const valueTwo = await taskTwo()
        console.timeEnd('Measuring time')

        console.log('Task One returned: ', valueOne)
        console.log('Task Two returned: ', valueTwo)
    } catch (err) {
        console.log(err)
    }
}

main()