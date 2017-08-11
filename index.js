var { Socket } = require("phoenix-channels");

let lSocket = new Socket("ws://2aca211e.ngrok.io/socket");
lSocket.connect();

console.log(lSocket);

let lChannel = lSocket.channel("pursuit_mode_test",{});

lChannel.join()
	.receive("ok", (message) => console.log("connected", message))
	.receive("error", ({reason}) => console.log("failed", reason))
	.receive("timeout", err => console.log("timeout",err));

lChannel.on("new_msg", msg => console.log("Got message", msg));
lChannel.on("change", msg => console.log("msg ", msg));
