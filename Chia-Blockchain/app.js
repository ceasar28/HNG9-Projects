const { RPCAgent } = require("chia-agent");
const { nft_get_nfts } = require("chia-agent/api/rpc/wallet");
const { get_wallets } = require("chia-agent/api/rpc/wallet");
main().catch((e) => {
  console.error(e);
});

async function main() {
  const agent = new RPCAgent({ service: "wallet" });

  //   const response = await nft_get_nfts(agent, { wallet_id: 2 });
  const response = await get_wallets(agent, {
    type: "Full Node",
    include_data: true,
  });
  console.log(response);
}

/*
// sample output
{
  file_size: 108875876912,
  filename: 'M:\\plot-k32-yyyy-mm-dd-xx-xx-xxxxxxxxxxxxxxxxxxxxxxxxx.plot',
  plot_id: '...',
  plot_public_key: '0x934a93489...',
  pool_contract_puzzle_hash: null,
  pool_public_key: '0xb0aa9485c0d...',
  size: 32,
  time_modified: 1619540745
}
*/
// main().catch((e) => {
//   console.error(e);
// });

// async function main() {
//   setLogLevel("debug");

//   const agent = new RPCAgent({
//     service: "wallet",
//   });

//   const res = await get_plots(agent);
//   console.log(res.plots[0]);
// }
