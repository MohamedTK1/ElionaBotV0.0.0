const _0x2fb649=_0x4905;(function(_0x2dabc0,_0x5f1387){const _0x5a4265=_0x4905,_0x270454=_0x2dabc0();while(!![]){try{const _0x59cc54=parseInt(_0x5a4265(0xfc))/0x1+-parseInt(_0x5a4265(0x110))/0x2+parseInt(_0x5a4265(0x119))/0x3+parseInt(_0x5a4265(0x10c))/0x4*(-parseInt(_0x5a4265(0x103))/0x5)+-parseInt(_0x5a4265(0xe3))/0x6+parseInt(_0x5a4265(0xf5))/0x7+parseInt(_0x5a4265(0xf8))/0x8;if(_0x59cc54===_0x5f1387)break;else _0x270454['push'](_0x270454['shift']());}catch(_0x29f160){_0x270454['push'](_0x270454['shift']());}}}(_0x26ee,0xa36f0));const {spawn}=require(_0x2fb649(0x100)),{readFileSync}=require('fs-extra'),http=require(_0x2fb649(0xe2)),axios=require('axios'),semver=require('semver'),logger=require(_0x2fb649(0x117)),chalk=require(_0x2fb649(0xf3));var uptimelink=['https://'+process[_0x2fb649(0xeb)]['REPL_SLUG']+'.'+process[_0x2fb649(0xeb)][_0x2fb649(0x10d)]+_0x2fb649(0x107)];function _0x4905(_0x52809c,_0x92a9cc){const _0x26eeab=_0x26ee();return _0x4905=function(_0x49054d,_0x2288b6){_0x49054d=_0x49054d-0xe2;let _0x50addf=_0x26eeab[_0x49054d];return _0x50addf;},_0x4905(_0x52809c,_0x92a9cc);}const Monitor=require(_0x2fb649(0xe6));for(const now of uptimelink){const monitor=new Monitor({'website':''+now,'title':_0x2fb649(0xe4),'interval':0x3b,'config':{'intervalUnits':_0x2fb649(0xe9)}});monitor['on']('up',_0x435e96=>console[_0x2fb649(0x118)](chalk[_0x2fb649(0x104)]['hex'](_0x2fb649(0xed))('[\x20Jeka\x20]\x20❯\x20')+chalk[_0x2fb649(0x114)]('#00FF00')(''+_0x435e96['website']))),monitor['on'](_0x2fb649(0xf0),_0x2e68a0=>console[_0x2fb649(0x118)](chalk[_0x2fb649(0x104)][_0x2fb649(0x114)]('#FF0000')(_0x2fb649(0x116))+chalk[_0x2fb649(0x114)](_0x2fb649(0x108))(_0x2e68a0[_0x2fb649(0xef)]+'\x20'+_0x2e68a0[_0x2fb649(0xe5)]))),monitor['on'](_0x2fb649(0x109),_0xf4ce2=>console[_0x2fb649(0x118)](chalk[_0x2fb649(0x104)][_0x2fb649(0x114)]('#FF0000')(_0x2fb649(0x10f))+chalk[_0x2fb649(0x114)]('#FF0000')(''+_0xf4ce2))),monitor['on']('error',_0x259180=>console[_0x2fb649(0x118)](chalk[_0x2fb649(0x104)][_0x2fb649(0x114)](_0x2fb649(0x108))(_0x2fb649(0xf4))+chalk[_0x2fb649(0x114)](_0x2fb649(0x108))(''+_0x259180)));}function _0x26ee(){const _0x46e6f7=['2007408QZScUE','http','7130556cCsNWl','Jeka','statusMessage','ping-monitor','inherit','stringify','seconds','jeka.js','env','Opened\x20server\x20site...','#00FF00','node','website','down','[\x20ONLINE\x20]','countRestart','chalk','[\x20ERROR\x20]\x20❯\x20','2866759LALgld','sendFile','--trace-warnings','3163768LsREUu','express','Your\x20app\x20is\x20listening\x20a\x20http://localhost:','[\x20VERSION\x20]','913777fQYTqV','PORT','[\x20NAME\x20]','/Jeka.html','child_process','then','error','1287155ivsdxZ','bold','data','name','.repl.co','#FF0000','stop','Version:\x20','get','4vGnxQp','REPL_OWNER','description','[\x20STOP\x20]\x20❯\x20','545280VZlVFy','[\x20Starting\x20]','version','close','hex','listen','[\x20DOWN\x20]\x20❯\x20','./utils/log','log'];_0x26ee=function(){return _0x46e6f7;};return _0x26ee();}const express=require(_0x2fb649(0xf9)),app=express(),port=process[_0x2fb649(0xeb)][_0x2fb649(0xfd)]||0x1388;app[_0x2fb649(0x115)](port,()=>logger(_0x2fb649(0xfa)+port,_0x2fb649(0xf1))),logger(_0x2fb649(0xec),_0x2fb649(0x111));function startBot(_0x52611a){const _0x94403c=_0x2fb649;_0x52611a?logger(_0x52611a,'[\x20Starting\x20]'):'';const _0x4428f7=spawn(_0x94403c(0xee),[_0x94403c(0xf7),'--async-stack-traces',_0x94403c(0xea)],{'cwd':__dirname,'stdio':_0x94403c(0xe7),'shell':!![]});_0x4428f7['on'](_0x94403c(0x113),_0x82534f=>{const _0x3eac76=_0x94403c;if(_0x82534f!=0x0||global[_0x3eac76(0xf2)]&&global['countRestart']<0x5){startBot('Starting\x20up...'),global[_0x3eac76(0xf2)]+=0x1;return;}else return;}),_0x4428f7['on'](_0x94403c(0x102),function(_0x50e465){const _0x1871bc=_0x94403c;logger('An\x20error\x20occurred:\x20'+JSON[_0x1871bc(0xe8)](_0x50e465),_0x1871bc(0x111));});};axios[_0x2fb649(0x10b)]('https://raw.githubusercontent.com/ZiaRein/ZiaReinBypass/main/package.json')[_0x2fb649(0x101)](_0x3041a8=>{const _0x708bd3=_0x2fb649;logger(_0x3041a8[_0x708bd3(0x105)][_0x708bd3(0x106)],_0x708bd3(0xfe)),logger(_0x708bd3(0x10a)+_0x3041a8['data'][_0x708bd3(0x112)],_0x708bd3(0xfb)),logger(_0x3041a8[_0x708bd3(0x105)][_0x708bd3(0x10e)],'[\x20DESCRIPTION\x20]');}),startBot(),app[_0x2fb649(0x10b)]('/',(_0x98ab11,_0x1dcb4b)=>_0x1dcb4b[_0x2fb649(0xf6)](__dirname+_0x2fb649(0xff)));