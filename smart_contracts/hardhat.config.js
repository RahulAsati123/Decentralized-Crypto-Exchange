require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/RgrZz-G4LoWIMmIt5mw8_0OQKmfEgVjz',
      accounts: [
        'ededa07f0a5846e0202d80a66493cbc8c437897d2dc28d979cb048f035ea9811',
      ],
    },
  },
}