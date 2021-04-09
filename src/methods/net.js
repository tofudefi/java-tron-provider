// import web3lib from "web3";
// import { notImplemented } from "./utils/index.js";
import { formatQuantity } from "./utils/index.js";

// just hardcoded to the protocol version returned by infura.io at time of writing htis
const PROTOCOL_VERSION = "0x40";

const genesisBlockToNetwork = (blockId) => {
  const networks = [
    {
      name: "mainnet",
      version: "11111",
      genesisBlock:
        "00000000000000001ebf88508a03865c71d452e25f4d51194196a1d22b6653dc",
    },
    {
      name: "shasta",
      version: "1", // on ethereum this is "ropsten"
      genesisBlock:
        "0000000000000000de1aa88295e1fcf982742f773e0419c5a9c134c994a9059e",
    },
  ];

  const network = networks.find((n) => n.genesisBlock === blockId);
  if (!network)
    throw new Error(`unknown network with genesis block ${blockId}`);
  return network;
}

/**
 * Returns the current network id.
 *
 * Parameters
 * none
 *
 * Returns
 * String - The current network id.
 */
export async function net_version(_params, ctx) {
  // like et_chainId but returns a string
  const { data } = await ctx.tronClient.get(`/wallet/getnodeinfo`);
  const p2pVersion = data.configNodeInfo.p2pVersion;
  return `${p2pVersion}`;
}

/*
async function net_version_usingGenesisBlock(params, ctx) => {
  // TODO: make own tronweb lib?
  const { data } = await ctx.tronClient.post("/wallet/getblockbynum", {
    num: 0,
  });
  try {
    const network = genesisBlockToNetwork(data.blockID);
    return network.version;
  } catch (err) {
    // use networkId 1515 for unknown networks
    return "1515";
  }
};*/

/**
 * Returns true if client is actively listening for network connections.
 *
 * Parameters
 * none
 *
 * Returns
 * Boolean - true when listening, otherwise false.
 */
export const net_listening = async (_params, _ctx) => {
  // TODO: not sure when this is supposed to return false...
  return true;
}

/**
 * Returns number of peers currently connected to the client.
 *
 * Parameters
 * none
 *
 * Returns
 * QUANTITY - integer of the number of connected peers.
 */
export const net_peerCount = async (_params, ctx) => {
  const { data } = await ctx.tronClient.get("/wallet/getnodeinfo");
  const peerCount = data.peerList.length;
  return formatQuantity(peerCount);
}
