# Starknet Messaging Vyper
A Vyper implementation of the Starknet L1<->L2 messaging tutorial that you can find [here](https://cairo-lang.org/docs/hello_starknet/l1l2.html).

## Structure

```ml
contracts
├─ contract.cairo — copy of the starknet tutorial contract
├─ SolidityChannel.sol — tutorial impl. of the L1L2 contract
├─ VyperChannel.vy — vyper impl. of SolidityChannel
scripts
└─ deploy.js — deploy both channels on Goerli
```
## Development

You will have to deploy the starknet contract either using [nile](https://github.com/OpenZeppelin/nile) or the [starknet playground](https://starknet.io/playground).

**Setup**
```bash
npm install
```

**Deploying**
```bash
npx hardhat run --network goerli scripts/deploy.js
```

## Solidity vs Vyper

Note that the Solidity contract was not compiled with the optimizer on.

|               | Solidity      |     Vyper      |
| ------------- | ------------- |:--------------:|
| Deployment    | [587k gas][1] | [240k gas][2]  |
| Withdrawal    | [63k gas][3]  | [60k gas][4]   |

[1]: https://goerli.etherscan.io/tx/0xe2e6d5783aeb4e06b2379297831876a81b10e1c5a4dfc83803657a5a3bacb26a
[2]: https://goerli.etherscan.io/tx/0x7fb7b5b864418652b4bb298831345ef44ea098a862d876b5ec9a019663cffaae
[3]: https://goerli.etherscan.io/tx/0x2007bc1c7aadef59a26169452a8e38b19adda4f5662a62a11c2b78e41de19af3
[4]: https://goerli.etherscan.io/tx/0x47b276068942fc70f48780313e00ec4d8c25a8ec0868a670bf703f4e19a842b0
