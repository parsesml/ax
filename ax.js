(async () => {
    await $.getScript("https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js");
b64=true;
getwebsocket=Deobfuscator.function(ig.game.websocket, "c,d)", true)
speechws=Deobfuscator.function(ig.game.websocket, "SPEECH,", true)
eval("ig.game.websocket."+getwebsocket+"="+ig.game.websocket[getwebsocket].toString().replaceAll("c,d){", "c,d){if(b.m=='en'&&b.data.key.startsWith('_c')&&!b.data.key.includes(' ')&&b64){try{b.data.key='_c'+atob(b.data.key.substr(2))}catch(error){}};"));
eval("ig.game.websocket."+speechws+"="+ig.game.websocket[speechws].toString().replace("(a){", "(a){if(a.startsWith('_c')&&!a.includes(' ')&&b64){a='_c'+btoa(a.charAt(2))};"));
})();
