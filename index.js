var { Socket } = require("phoenix-channels");

let lSocket = new Socket("ws://a3ssvc01.veritracks.com:4001/socket");

lSocket.connect();

let lChannel = lSocket.channel("pursuit_mode_enrollee:21422", {});

lChannel.join()
	.receive("ok", (message) => console.log("connected", message))
	.receive("error", ({reason}) => console.log("failed", reason))
	.receive("timeout", err => console.log("timeout",err));

lChannel.on("new_msg", msg => console.log("Got message", msg));
lChannel.on("change", msg => console.log("msg ", msg));
