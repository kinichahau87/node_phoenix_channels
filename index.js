const { Socket } = require("phoenix-channels");

function socketConnect() {
  const socket = new Socket("ws://example.com:4001/socket");

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
