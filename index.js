const { Socket } = require("phoenix-channels");

function socketConnect() {
  const socket = new Socket("ws://192.168.99.100:4445/socket");

  return new Promise(resolve => {
    socket.connect();

    let key = 21452;

    const channel = socket.channel(`pursuit_mode_enrollee:${key}`)

		if(channel.state != 'joined') {
	    channel.join().receive('ok', (msg) => {
	        resolve(channel);
	    });
		}
  })
}

let channel = socketConnect().then((chan) => {
	chan.on("change", (msg) => {
		console.log("msg ", msg)
	})
})
