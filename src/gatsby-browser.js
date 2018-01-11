exports.onClientEntry = () => {
  if (process.env.NODE_ENV !== `production`) {
    require(`nerv-devtools`)
  }
}
