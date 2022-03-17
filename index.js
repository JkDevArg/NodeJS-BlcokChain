const BlockChain = require('./src/blockChain')
const Block = require('./src/block')

async function run() {
    const blockChain = await new BlockChain()
    const block1 = new Block({ data: "Block #1" })
    await blockChain.addBlock(block1)
    const block2 = new Block({ data: "Block #2" })
    await blockChain.addBlock(block2)
    const block3 = new Block({ data: "Block #3" })
    await blockChain.addBlock(block3)

    blockChain.print()
}

run()