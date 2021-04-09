"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const block = __importStar(require("./block.js"));
ava_1.default("block.fromTron", (t) => {
    const tronBlock = {
        blockID: "000000000052570d2900cc118d80dda30fb15d40f591d032b3fc23c241c138ad",
        block_header: {
            raw_data: {
                number: 5396237,
                txTrieRoot: "0ec9aefeee7020fd36930ed7fd33e04789ae017020c5a7eeff2f45a01e109d1d",
                witness_address: "41f16412b9a17ee9408646e2a21e16478f72ed1e95",
                parentHash: "000000000052570c22183fa9f52bf9136d09fc0f1209d4d2094324d0c9a47b71",
                version: 15,
                timestamp: 1592180391000,
            },
            witness_signature: "37589ba84e3a0e90882feb34e37263cee274010e87e206ee72fb686f2fa122d34fd641d0f2203068e78b08ac84fe4e2dbbf916274b6155238f3e853a2c92a47501",
        },
        transactions: [
            {
                ret: [{ contractRet: "SUCCESS" }],
                signature: [
                    "e97883792f4f55997e08f880e8e0d32b1d4c6ca05f2238890e5656b36da01f703c16779638d878c2566ebaff39027a02422137d52c9219f0819fd639b53898ad00",
                ],
                txID: "689e181215e3e940e57041c6a0204475d930e173e8f7e5d191176f79720fa347",
                raw_data: {
                    contract: [
                        {
                            parameter: {
                                value: {
                                    data: "b05c39cd00000000000000000000000000000000000000000000000000000000000bc1e900000000000000000000000000000000000000000000000000000000000bc45800000000000000000000000000000000000000000000000000000000017d784000000000000000000000000000000000000000000000000000000000014ded2800000000000000000000000000000000000000000000000000000000000d5b68",
                                    owner_address: "4195c80272e929bad06f5642036eb3219983d979dc",
                                    contract_address: "41596f27c0ec9cfd403da2019926f8571450bafebd",
                                },
                                type_url: "type.googleapis.com/protocol.TriggerSmartContract",
                            },
                            type: "TriggerSmartContract",
                        },
                    ],
                    ref_block_bytes: "570c",
                    ref_block_hash: "22183fa9f52bf913",
                    expiration: 1592180568569,
                    fee_limit: 20000000,
                    timestamp: 1592180388569,
                },
                raw_data_hex: "0a02570c220822183fa9f52bf91340f9e3edaaab2e5a9002081f128b020a31747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261637412d5010a154195c80272e929bad06f5642036eb3219983d979dc121541596f27c0ec9cfd403da2019926f8571450bafebd22a401b05c39cd00000000000000000000000000000000000000000000000000000000000bc1e900000000000000000000000000000000000000000000000000000000000bc45800000000000000000000000000000000000000000000000000000000017d784000000000000000000000000000000000000000000000000000000000014ded2800000000000000000000000000000000000000000000000000000000000d5b6870d9e5e2aaab2e900180dac409",
            },
            {
                ret: [{ contractRet: "SUCCESS" }],
                signature: [
                    "60ac034b918d2f1b630f2d8455c05339ea61724ac2b9f093068abd559bfc240c369c062ff8bbce3b6b278226fb1e27751815d8c8f85ce38f21eb71d8b104e0cd00",
                ],
                txID: "ac61d5b7c53f468fa22e71af016e57b5a8db4db2f9959308d140f2468facb5e9",
                raw_data: {
                    contract: [
                        {
                            parameter: {
                                value: {
                                    data: "b05c39cd00000000000000000000000000000000000000000000000000000000000bc452000000000000000000000000000000000000000000000000000000000005845400000000000000000000000000000000000000000000000000000000017d78400000000000000000000000000000000000000000000000000000000002a95d9700000000000000000000000000000000000000000000000000000000001b412f",
                                    owner_address: "4195c80272e929bad06f5642036eb3219983d979dc",
                                    contract_address: "41596f27c0ec9cfd403da2019926f8571450bafebd",
                                },
                                type_url: "type.googleapis.com/protocol.TriggerSmartContract",
                            },
                            type: "TriggerSmartContract",
                        },
                    ],
                    ref_block_bytes: "570c",
                    ref_block_hash: "22183fa9f52bf913",
                    expiration: 1592180569011,
                    fee_limit: 20000000,
                    timestamp: 1592180389011,
                },
                raw_data_hex: "0a02570c220822183fa9f52bf91340b3e7edaaab2e5a9002081f128b020a31747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e54726967676572536d617274436f6e747261637412d5010a154195c80272e929bad06f5642036eb3219983d979dc121541596f27c0ec9cfd403da2019926f8571450bafebd22a401b05c39cd00000000000000000000000000000000000000000000000000000000000bc452000000000000000000000000000000000000000000000000000000000005845400000000000000000000000000000000000000000000000000000000017d78400000000000000000000000000000000000000000000000000000000002a95d9700000000000000000000000000000000000000000000000000000000001b412f7093e9e2aaab2e900180dac409",
            },
        ],
    };
    t.deepEqual(block.fromTron(tronBlock), {
        difficulty: "0x027f07",
        extraData: "0x0000000000000000000000000000000000000000000000000000000000000000",
        gasLimit: "0xbebc20",
        gasUsed: "0xf4240",
        hash: "0x000000000052570d2900cc118d80dda30fb15d40f591d032b3fc23c241c138ad",
        logsBloom: null,
        miner: "0x4e65fda2159562a496f9f3522f89122a3088497a",
        nonce: "0x0000000000000000",
        number: "0x52570d",
        parentHash: "0x000000000052570c22183fa9f52bf9136d09fc0f1209d4d2094324d0c9a47b71",
        receiptsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        size: "0x027f07",
        stateRoot: "0xd5855eb08b3387c0af375e9cdb6acfc05eb8f519e419b874b6ff2ffda7ed1dff",
        timestamp: "0x54e34e8e",
        totalDifficulty: "0x027f07",
        transactions: [
            {
                blockHash: "0x000000000052570d2900cc118d80dda30fb15d40f591d032b3fc23c241c138ad",
                blockNumber: "0x52570d",
                from: "0x95c80272e929bad06f5642036eb3219983d979dc",
                gas: "0x0",
                gasPrice: "0x4a817c800",
                hash: "0x689e181215e3e940e57041c6a0204475d930e173e8f7e5d191176f79720fa347",
                input: "0x",
                nonce: "0x15",
                r: "0x0000000000000000000000000000000000000000000000000000000000000000",
                s: "0x0000000000000000000000000000000000000000000000000000000000000000",
                to: "0x596f27c0ec9cfd403da2019926f8571450bafebd",
                transactionIndex: "0x0",
                v: "0x0",
                value: "0x0",
            },
            {
                blockHash: "0x000000000052570d2900cc118d80dda30fb15d40f591d032b3fc23c241c138ad",
                blockNumber: "0x52570d",
                from: "0x95c80272e929bad06f5642036eb3219983d979dc",
                gas: "0x0",
                gasPrice: "0x4a817c800",
                hash: "0xac61d5b7c53f468fa22e71af016e57b5a8db4db2f9959308d140f2468facb5e9",
                input: "0x",
                nonce: "0x15",
                r: "0x0000000000000000000000000000000000000000000000000000000000000000",
                s: "0x0000000000000000000000000000000000000000000000000000000000000000",
                to: "0x596f27c0ec9cfd403da2019926f8571450bafebd",
                transactionIndex: "0x1",
                v: "0x0",
                value: "0x0",
            },
        ],
        transactionsRoot: "0x0000000000000000000000000000000000000000000000000000000000000000",
        uncles: [],
        number: "0x52570d",
        hash: "0x000000000052570d2900cc118d80dda30fb15d40f591d032b3fc23c241c138ad",
    });
});
