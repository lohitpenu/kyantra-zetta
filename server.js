var zetta = require('zetta')
var ip = require('ip')

zetta()
  .name('k-yantra IoT Server')
  .listen(1337, function(){
	console.log('Zetta server has started on IP:',ip.address())
})
