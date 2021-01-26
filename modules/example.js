export default function ExampleModule(moduleOptions) {
  //console.log(moduleOptions.token) // '123'
  //console.log(this.options.exampleMsg) // 'hello'

  this.nuxt.hook('ready', async (nuxt) => {
    //console.log('Nuxt is ready')
  })
}
