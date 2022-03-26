require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stone dash rifle upgrade inflict photo future slab'; 
let testAccounts = [
"0x1d89e96de0d4c842ea910caf8d441f73edc8fef1b5bd47639176063be98e3942",
"0x71d32b5422814f253e00c1944372f1cccc16858ee72805124ff4d8519dfd0799",
"0x53707322294cca90bbe3fbbaeb23238d739583263ae2015473888cdb3dafe85d",
"0x51ab2b78cc27d0371e984bfb5d7d1a1d48a6b871f7cb58773e69eb1f903f4a29",
"0xca58b589533b9c61f9d20be2504b1e91b7bea6ba66ca5f7990eb950bf0f453f3",
"0xc3ac9d14078af8538c2b83398778abaaed795aa2519f5203d6c0e3e160305759",
"0x172a72636d0f35c69003c83d07b7f019abaf2efbe5f38146b0eface8a3d7c8ef",
"0x6183cbf3e756d18590c61802568ca26e7d87a55a8dbcd4c85807bf70d50c82ac",
"0x336212fa5b0af88df168ec6cf32018ff0f7ac5e3288b574b534b4046f3868ae5",
"0x2dd434e97dba443840d52cfac4d4d386a7feca5432325afcaef3ec1b918d4559"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

