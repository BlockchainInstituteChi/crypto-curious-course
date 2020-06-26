---
title: Block Example
slideId: block-example
type: example
goal: "The purpose of this activity is to show how decentralized networks made up of competing miners reach network consensus."
questions: 
    - "Who determines which transactions get added to a block?"
    - "What happens if my transaction does not get mined?"
required-materials:
    - "4 Four Brick Segments (Long blue blocks)"
    - "Represents existing blocks, stacked together to represent the blockchain"
    - "6 single blocks (Blue)"
    - "Represents transactions waiting to be mined"
    - "2 single blocks (Red)"
    - "Represents the specific transactions used in the example"
    - "2 signs used to label competing miners"
    - "Alice and Bob"
setup:
    - "Stack the 4 large blue blocks"
    - "Stack the four long blocks in the" 
    - "Place four blocks behind each miner’s sign"
    - "Three blocks of one color, the fourth being a unique color."
steps: |
    <p>In this scenario, for the sake of example, we are going to narrow down the mining race between two miners. Each miner has a copy of Charlie’s transaction in the block they are going to compile. That’s good news for Charlie. Whichever miner that wins the race has included Charlie’s transaction in the block they are creating. No matter which miner wins, Charlie’s transaction gets included in the blockchain.</p>
    <p>Now let’s set up a scenario where Alice (Miner 1) has Charlie’s transaction in the block they are trying to create, while Bob (Miner 2) has not included Charlie’s transaction into the block they are racing to create. What happens to Charlie’s transaction? It depends on which miner’s computer solves a difficult math problem. If Alice wins the race, then Charlie’s transaction will be included in the next block. If Bob wins the race, Charlie’s transaction is not added to the chain as Bob did not include it in his block. What happens to Charlie’s transaction if it is not immediately included in a block? The transactions compiled by non-winning miners are sent back to the mempool until they are added into a block by another miner.</p>
---