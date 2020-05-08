require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone stove dash super code gesture light army gather'; 
let testAccounts = [
"0x9327e9a0b8d3117cf26c1baa33a0eeefebba82b0208e7cabd97fc08b8a4300ff",
"0xe048ab4d51178d5353b93037a05138482b1c15126a94162c7fcbe7a90a8cf3dc",
"0x093d3503471ee190955533dc4422e65e793dbb6f1ee5cb4af225bc086fc1958b",
"0x0a6e07e13f3e37d46ff04a63c6a72aef0478775fae6baca9bb0657b09dcd2de9",
"0xbec5c3ff7690a35ed98a51d3c17c5062424e14f34c60418b42c811e0c02753c1",
"0x20e422b45bcd057c69eb44df9a225fba7fcbbc473ab2ee0bfdfe295e099a21a8",
"0xe1d088c5ba52f91b4337c5b70095915940b928cadcb3cbf4fc7499d786d5261c",
"0x5db87b523d6975b765e0e949fde725ed78260363064123e8a0d0cf72b5b6e3a4",
"0xd2163848975cf9c090d164883b072d05a6557146e8df84dd95f80ee07d6c89e6",
"0x57358759741a98067c58be5fed9c8a1ce2af973dfc1e2f8973d7c31ddaf94cc0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
