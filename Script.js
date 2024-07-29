mode: rule
redir-port: 7892
mixed-port: 7777
socks-port: 7778
port: 7779
allow-lan: true
log-level: info
external-controller: 127.0.0.1:9097
secret: ''
dns:
  dns: true
  listen: 1053
  ipv6: true
  use-hosts: true
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
  - +.lan
  - +.local
  - +.msftconnecttest.com
  - +.msftncsi.com
  default-nameserver:
  - 223.5.5.5
  - 114.114.114.114
  nameserver:
  - https://dns.alidns.com/dns-query
  - https://doh.360.cn/dns-query
  - https://1.1.1.1/dns-query
  - https://1.0.0.1/dns-query
  - https://208.67.222.222/dns-query
  - https://208.67.220.220/dns-query
  proxy-server-nameserver:
  - https://dns.alidns.com/dns-query
  - https://doh.360.cn/dns-query
  - https://1.1.1.1/dns-query
  - https://1.0.0.1/dns-query
  - https://208.67.222.222/dns-query
  - https://208.67.220.220/dns-query
  nameserver-policy:
    geosite:google,youtube,telegram,gfw,geolocation-!cn:
    - https://1.1.1.1/dns-query
    - https://1.0.0.1/dns-query
    - https://208.67.222.222/dns-query
    - https://208.67.220.220/dns-query
  fallback:
  - https://doh.dns.sb/dns-query
  - https://dns.cloudflare.com/dns-query
  - tls://8.8.4.4:853
  use-system-hosts: false
profile:
  store-selected: true
tun:
  stack: mixed
  device: Meta
  auto-route: true
  auto-detect-interface: true
  dns-hijack:
  - any:53
  strict-route: false
  mtu: 9000
  enable: false
proxies:
- name: 🇭🇰 香港01
  type: ss
  server: hk1.lvuy.xyz
  port: 10031
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇭🇰 香港02
  type: ss
  server: hk2.lvuy.xyz
  port: 10032
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇭🇰 香港03
  type: ss
  server: hk3.lvuy.xyz
  port: 12345
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇭🇰 香港04
  type: ss
  server: hk4.lvuy.xyz
  port: 10033
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇭🇰 香港05
  type: ss
  server: hk5.lvuy.xyz
  port: 10034
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇭🇰 香港06
  type: ss
  server: hk6.lvuy.xyz
  port: 10035
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇭🇰 香港07
  type: ss
  server: hk7.lvuy.xyz
  port: 10072
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇭🇰 香港08
  type: ss
  server: hk8.lvuy.xyz
  port: 10074
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 官网：https://1100.gg
  type: vmess
  server: ar.suxia.co
  port: 443
  uuid: 59bde425-ca39-3c58-8533-0434fb2e2a56
  alterId: 0
  cipher: auto
  udp: true
- name: 🇯🇵 日本01
  type: ss
  server: jp1.lvuy.xyz
  port: 10037
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇯🇵 日本02
  type: ss
  server: jp2.lvuy.xyz
  port: 10038
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇯🇵 日本03
  type: ss
  server: jp3.lvuy.xyz
  port: 10039
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇯🇵 日本04
  type: ss
  server: jp4.lvuy.xyz
  port: 10058
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇹🇼 台湾01
  type: ss
  server: tw1.lvuy.xyz
  port: 10036
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇹🇼 台湾02
  type: ss
  server: tw2.lvuy.xyz
  port: 10064
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇹🇼 台湾03
  type: ss
  server: tw3.lvuy.xyz
  port: 10073
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇹🇼 台湾04
  type: ss
  server: tw4.lvuy.xyz
  port: 10077
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇸🇬 新加坡01
  type: ss
  server: sg1.lvuy.xyz
  port: 10044
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇸🇬 新加坡02
  type: ss
  server: sg2.lvuy.xyz
  port: 10045
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇸🇬 新加坡03
  type: ss
  server: sg3.lvuy.xyz
  port: 10046
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇸🇬 新加坡04
  type: ss
  server: sg4.lvuy.xyz
  port: 10068
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇺🇲 美国01
  type: ss
  server: us1.lvuy.xyz
  port: 10040
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇺🇲 美国02
  type: ss
  server: us2.lvuy.xyz
  port: 10041
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇺🇲 美国03
  type: ss
  server: us3.lvuy.xyz
  port: 10042
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇺🇲 美国04
  type: ss
  server: us4.lvuy.xyz
  port: 10043
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇺🇲 美国05
  type: ss
  server: us5.lvuy.xyz
  port: 10067
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇺🇲 美国06
  type: ss
  server: us6.lvuy.xyz
  port: 20036
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇺🇲 美国07
  type: ss
  server: us7.lvuy.xyz
  port: 10075
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇮🇳 印度01
  type: ss
  server: in1.lvuy.xyz
  port: 10050
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇮🇳 印度02
  type: ss
  server: in2.lvuy.xyz
  port: 10051
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇰🇷 韩国01
  type: ss
  server: kr1.lvuy.xyz
  port: 10047
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇰🇷 韩国02
  type: ss
  server: kr2.lvuy.xyz
  port: 10048
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇬🇧 英国01
  type: ss
  server: uk1.lvuy.xyz
  port: 10052
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇬🇧 英国02
  type: ss
  server: uk2.lvuy.xyz
  port: 10053
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇩🇪 德国01
  type: ss
  server: ed.lvuy.xyz
  port: 10069
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇫🇷 法国
  type: ss
  server: fr.lvuy.xyz
  port: 10076
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇦🇺 澳大利亚01
  type: ss
  server: xn1.lvuy.xyz
  port: 10055
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 🇦🇺 澳大利亚02
  type: ss
  server: xn2.lvuy.xyz
  port: 10054
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 迪拜01
  type: ss
  server: dibai1.lvuy.xyz
  port: 10056
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
- name: 迪拜02
  type: ss
  server: dibai2.lvuy.xyz
  port: 10057
  cipher: chacha20-ietf-poly1305
  password: iYjiel5ESDggiYlw
  udp: true
proxy-groups:
- name: 规则外代理模式
  type: select
  proxies:
  - 选择节点
  - DIRECT
- name: 选择节点
  type: select
  proxies:
  - DIRECT
  - 自动选择
  - 香港
  - 台湾
  - 美国
  - 新加坡
  - 日本
  - 其他
  - 🇭🇰 香港01
  - 🇭🇰 香港02
  - 🇭🇰 香港03
  - 🇭🇰 香港04
  - 🇭🇰 香港05
  - 🇭🇰 香港06
  - 🇭🇰 香港07
  - 🇭🇰 香港08
  - 🇯🇵 日本01
  - 🇯🇵 日本02
  - 🇯🇵 日本03
  - 🇯🇵 日本04
  - 🇹🇼 台湾01
  - 🇹🇼 台湾02
  - 🇹🇼 台湾03
  - 🇹🇼 台湾04
  - 🇸🇬 新加坡01
  - 🇸🇬 新加坡02
  - 🇸🇬 新加坡03
  - 🇸🇬 新加坡04
  - 🇺🇲 美国01
  - 🇺🇲 美国02
  - 🇺🇲 美国03
  - 🇺🇲 美国04
  - 🇺🇲 美国05
  - 🇺🇲 美国06
  - 🇺🇲 美国07
  - 🇮🇳 印度01
  - 🇮🇳 印度02
  - 🇰🇷 韩国01
  - 🇰🇷 韩国02
  - 🇬🇧 英国01
  - 🇬🇧 英国02
  - 🇩🇪 德国01
  - 🇫🇷 法国
  - 🇦🇺 澳大利亚01
  - 🇦🇺 澳大利亚02
  - 迪拜01
  - 迪拜02
- name: 其他
  type: select
  proxies:
  - 官网：https://1100.gg
  - 🇮🇳 印度01
  - 🇮🇳 印度02
  - 🇰🇷 韩国01
  - 🇰🇷 韩国02
  - 🇬🇧 英国01
  - 🇬🇧 英国02
  - 🇩🇪 德国01
  - 🇫🇷 法国
  - 🇦🇺 澳大利亚01
  - 🇦🇺 澳大利亚02
  - 迪拜01
  - 迪拜02
- name: AI
  type: select
  proxies:
  - 香港
  - 台湾
  - 美国
  - 新加坡
  - 日本
  - 选择节点
- name: 美国
  type: url-test
  url: https://www.gstatic.com/generate_204
  interval: 1800
  tolerance: 30
  timeout: 1000
  lazy: true
  proxies:
  - 🇺🇲 美国01
  - 🇺🇲 美国02
  - 🇺🇲 美国03
  - 🇺🇲 美国04
  - 🇺🇲 美国05
  - 🇺🇲 美国06
  - 🇺🇲 美国07
- name: 香港
  type: url-test
  url: https://www.gstatic.com/generate_204
  interval: 1800
  tolerance: 30
  timeout: 1000
  lazy: true
  proxies:
  - 🇭🇰 香港01
  - 🇭🇰 香港02
  - 🇭🇰 香港03
  - 🇭🇰 香港04
  - 🇭🇰 香港05
  - 🇭🇰 香港06
  - 🇭🇰 香港07
  - 🇭🇰 香港08
- name: 台湾
  type: url-test
  url: https://www.gstatic.com/generate_204
  interval: 1800
  tolerance: 30
  timeout: 1000
  lazy: true
  proxies:
  - 🇹🇼 台湾01
  - 🇹🇼 台湾02
  - 🇹🇼 台湾03
  - 🇹🇼 台湾04
- name: 日本
  type: url-test
  url: https://www.gstatic.com/generate_204
  interval: 1800
  tolerance: 30
  timeout: 1000
  lazy: true
  proxies:
  - 🇯🇵 日本01
  - 🇯🇵 日本02
  - 🇯🇵 日本03
  - 🇯🇵 日本04
- name: 新加坡
  type: url-test
  url: https://www.gstatic.com/generate_204
  interval: 1800
  tolerance: 30
  timeout: 1000
  lazy: true
  proxies:
  - 🇸🇬 新加坡01
  - 🇸🇬 新加坡02
  - 🇸🇬 新加坡03
  - 🇸🇬 新加坡04
- name: 自动选择
  type: url-test
  url: https://www.gstatic.com/generate_204
  interval: 1800
  tolerance: 30
  timeout: 1000
  lazy: true
  proxies:
  - 🇭🇰 香港01
  - 🇭🇰 香港02
  - 🇭🇰 香港03
  - 🇭🇰 香港04
  - 🇭🇰 香港05
  - 🇭🇰 香港06
  - 🇭🇰 香港07
  - 🇭🇰 香港08
  - 🇯🇵 日本01
  - 🇯🇵 日本02
  - 🇯🇵 日本03
  - 🇯🇵 日本04
  - 🇹🇼 台湾01
  - 🇹🇼 台湾02
  - 🇹🇼 台湾03
  - 🇹🇼 台湾04
  - 🇸🇬 新加坡01
  - 🇸🇬 新加坡02
  - 🇸🇬 新加坡03
  - 🇸🇬 新加坡04
  - 🇺🇲 美国01
  - 🇺🇲 美国02
  - 🇺🇲 美国03
  - 🇺🇲 美国04
  - 🇺🇲 美国05
  - 🇺🇲 美国06
  - 🇺🇲 美国07
  - 🇮🇳 印度01
  - 🇮🇳 印度02
  - 🇰🇷 韩国01
  - 🇰🇷 韩国02
  - 🇬🇧 英国01
  - 🇬🇧 英国02
  - 🇩🇪 德国01
  - 🇫🇷 法国
  - 🇦🇺 澳大利亚01
  - 🇦🇺 澳大利亚02
  - 迪拜01
  - 迪拜02
- name: 负载均衡
  type: select
  proxies:
  - DIRECT
  - 自动选择
  - 选择节点
  - 分流
- name: 分流
  type: load-balance
  lazy: true
  proxies:
  - 🇭🇰 香港01
  - 🇭🇰 香港02
  - 🇭🇰 香港03
  - 🇭🇰 香港04
  - 🇭🇰 香港05
  - 🇭🇰 香港06
  - 🇭🇰 香港07
  - 🇭🇰 香港08
  - 🇹🇼 台湾01
  - 🇹🇼 台湾02
  - 🇹🇼 台湾03
  - 🇹🇼 台湾04
  - 🇯🇵 日本01
  - 🇯🇵 日本02
  - 🇯🇵 日本03
  - 🇯🇵 日本04
  - 🇸🇬 新加坡01
  - 🇸🇬 新加坡02
  - 🇸🇬 新加坡03
  - 🇸🇬 新加坡04
  strategy: round-robin
rules:
- DOMAIN-SUFFIX,kakuyomu.jp,负载均衡
- DOMAIN-SUFFIX,x.com,选择节点
- DOMAIN-SUFFIX,einck.top,日本
- DOMAIN-SUFFIX,18comic.vip,香港
- DOMAIN-SUFFIX,gamer.com.tw,台湾
- DOMAIN,share.acgnx.se,香港
- DOMAIN,mikanani.me,香港
- DOMAIN-SUFFIX,bilibili.tv,新加坡
- DOMAIN-SUFFIX,gamepp.com,DIRECT
- DOMAIN-SUFFIX,onedrive.com,日本
- DOMAIN-SUFFIX,sharepoint.com,日本
- PROCESS-NAME,qbittorrent.exe,DIRECT
- DOMAIN-SUFFIX,anthropic.com,美国
- DOMAIN-SUFFIX,claude.ai,美国
- DOMAIN-SUFFIX,openai.com,AI
- DOMAIN-SUFFIX,chat.openai.com,AI
- DOMAIN-SUFFIX,oaistatic.com,AI
- DOMAIN-SUFFIX,oaiusercontent.com,AI
- DOMAIN-SUFFIX,sydney.bing.com,AI
- DOMAIN,generativelanguage.googleapis.com,日本
- DOMAIN,gemini.google.com,AI
- PROCESS-NAME,leigod.exe,DIRECT
- PROCESS-NAME,QQ.exe,DIRECT
- PROCESS-NAME,5EClient.exe,DIRECT
- DOMAIN-SUFFIX,extension.run,选择节点
- DOMAIN-SUFFIX,immersivetranslate.com,选择节点
- DOMAIN-SUFFIX,smtp,DIRECT
- GEOSITE,category-bank-cn,DIRECT
- GEOSITE,bilibili,DIRECT
- GEOSITE,github,选择节点
- GEOSITE,microsoft@cn,DIRECT
- GEOSITE,microsoft,选择节点
- GEOSITE,telegram,选择节点
- GEOSITE,steam@cn,DIRECT
- GEOSITE,steam,选择节点
- GEOSITE,steamunlocked,选择节点
- GEOSITE,netflix,选择节点
- GEOSITE,speedtest,选择节点
- GEOSITE,facebook,选择节点
- GEOSITE,sogou,DIRECT
- GEOSITE,qihoo360,DIRECT
- GEOSITE,youtube,选择节点
- GEOSITE,google,选择节点
- GEOSITE,xbox,选择节点
- GEOSITE,private,DIRECT
- GEOSITE,category-game-accelerator-cn,DIRECT
- GEOSITE,epicgames,选择节点
- GEOSITE,abema,选择节点
- GEOSITE,niconico,选择节点
- GEOSITE,dmm,选择节点
- GEOSITE,apple-cn,DIRECT
- GEOSITE,adguard,选择节点
- PROCESS-NAME,calibre.exe,负载均衡
- DOMAIN-SUFFIX,rapidgator.net,负载均衡
- DOMAIN,www.zip-rar.com,负载均衡
- DOMAIN,deeplx.deno.dev,负载均衡
- PROCESS-NAME,baidunetdisk.exe,DIRECT
- PROCESS-NAME,baidunetdiskhost.exe,DIRECT
- DOMAIN-SUFFIX,store.steampower.com,DIRECT
- DOMAIN-SUFFIX,steamcontent.com,DIRECT
- DOMAIN-SUFFIX,steamstatic.com,选择节点
- DOMAIN-SUFFIX,steamserver.net,DIRECT
- DOMAIN-SUFFIX,api.steampowered.com,选择节点
- DOMAIN-SUFFIX,moegirl.org,日本
- DOMAIN-SUFFIX,adobe.io,REJECT
- DOMAIN-SUFFIX,adobestats.io,REJECT
- DOMAIN,prod.adobegenuine.com,REJECT
- DOMAIN,uf0onoepoe.adobestats.io,REJECT
- DOMAIN-SUFFIX,baomitu.com,DIRECT
- DOMAIN-SUFFIX,qhimg.com,DIRECT
- DOMAIN-SUFFIX,wwentua.com,DIRECT
- DOMAIN-SUFFIX,otheve.beacon.qq.com,REJECT
- DOMAIN-SUFFIX,tpstelemetry.tencent.com,REJECT
- DOMAIN-SUFFIX,h.trace.qq.com,REJECT
- DOMAIN-SUFFIX,report.gamecenter.qq.com,REJECT
- DOMAIN-SUFFIX,jp,选择节点
- GEOSITE,geolocation-cn,DIRECT
- DOMAIN-SUFFIX,cn,DIRECT
- DOMAIN,clash.razord.top,DIRECT
- DOMAIN-SUFFIX,qq.com,DIRECT
- DOMAIN-SUFFIX,zhihu.com,DIRECT
- DOMAIN,yacd.haishan.me,DIRECT
- DOMAIN-SUFFIX,local,DIRECT
- IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
- IP-CIDR,10.0.0.0/8,DIRECT,no-resolve
- IP-CIDR,172.16.0.0/12,DIRECT,no-resolve
- IP-CIDR,127.0.0.0/8,DIRECT,no-resolve
- IP-CIDR,100.64.0.0/10,DIRECT,no-resolve
- IP-CIDR6,::1/128,DIRECT,no-resolve
- IP-CIDR6,fc00::/7,DIRECT,no-resolve
- IP-CIDR6,fe80::/10,DIRECT,no-resolve
- IP-CIDR6,fd00::/8,DIRECT,no-resolve
- DOMAIN,app.adjust.com,DIRECT
- DOMAIN,lz.qaiu.top,DIRECT
- DOMAIN-SUFFIX,rmbgame.net,DIRECT
- DOMAIN-SUFFIX,googletraveladservices.com,DIRECT
- DOMAIN,livew.l.qq.com,DIRECT
- DOMAIN,vd.l.qq.com,DIRECT
- DOMAIN,analytics.strava.com,DIRECT
- DOMAIN,msg.umeng.com,DIRECT
- DOMAIN,msg.umengcloud.com,DIRECT
- DOMAIN-SUFFIX,qhres.com,DIRECT
- DOMAIN-SUFFIX,qhimg.com,DIRECT
- DOMAIN-SUFFIX,akadns.net,DIRECT
- DOMAIN-SUFFIX,alibaba.com,DIRECT
- DOMAIN-SUFFIX,alicdn.com,DIRECT
- DOMAIN-SUFFIX,alikunlun.com,DIRECT
- DOMAIN-SUFFIX,alipay.com,DIRECT
- DOMAIN-SUFFIX,amap.com,DIRECT
- DOMAIN-SUFFIX,autonavi.com,DIRECT
- DOMAIN-SUFFIX,dingtalk.com,DIRECT
- DOMAIN-SUFFIX,mxhichina.com,DIRECT
- DOMAIN-SUFFIX,soku.com,DIRECT
- DOMAIN-SUFFIX,taobao.com,DIRECT
- DOMAIN-SUFFIX,tmall.com,DIRECT
- DOMAIN-SUFFIX,tmall.hk,DIRECT
- DOMAIN-SUFFIX,ykimg.com,DIRECT
- DOMAIN-SUFFIX,youku.com,DIRECT
- DOMAIN-SUFFIX,xiami.com,DIRECT
- DOMAIN-SUFFIX,xiami.net,DIRECT
- DOMAIN-SUFFIX,aaplimg.com,DIRECT
- DOMAIN-SUFFIX,apple.co,DIRECT
- DOMAIN-SUFFIX,apple.com,DIRECT
- DOMAIN-SUFFIX,apple-cloudkit.com,DIRECT
- DOMAIN-SUFFIX,appstore.com,DIRECT
- DOMAIN-SUFFIX,cdn-apple.com,DIRECT
- DOMAIN-SUFFIX,crashlytics.com,DIRECT
- DOMAIN-SUFFIX,icloud.com,DIRECT
- DOMAIN-SUFFIX,icloud-content.com,DIRECT
- DOMAIN-SUFFIX,me.com,DIRECT
- DOMAIN-SUFFIX,mzstatic.com,DIRECT
- DOMAIN,www-cdn.icloud.com.akadns.net,DIRECT
- DOMAIN-SUFFIX,baidu.com,DIRECT
- DOMAIN-SUFFIX,baidubcr.com,DIRECT
- DOMAIN-SUFFIX,bdstatic.com,DIRECT
- DOMAIN-SUFFIX,yunjiasu-cdn.net,DIRECT
- DOMAIN-SUFFIX,acgvideo.com,DIRECT
- DOMAIN-SUFFIX,hdslb.com,DIRECT
- DOMAIN-SUFFIX,blizzard.com,DIRECT
- DOMAIN-SUFFIX,battle.net,DIRECT
- DOMAIN,blzddist1-a.akamaihd.net,DIRECT
- DOMAIN-SUFFIX,feiliao.com,DIRECT
- DOMAIN-SUFFIX,pstatp.com,DIRECT
- DOMAIN-SUFFIX,snssdk.com,DIRECT
- DOMAIN-SUFFIX,iesdouyin.com,DIRECT
- DOMAIN-SUFFIX,toutiao.com,DIRECT
- DOMAIN-SUFFIX,cctv.com,DIRECT
- DOMAIN-SUFFIX,cctvpic.com,DIRECT
- DOMAIN-SUFFIX,livechina.com,DIRECT
- DOMAIN-SUFFIX,didialift.com,DIRECT
- DOMAIN-SUFFIX,didiglobal.com,DIRECT
- DOMAIN-SUFFIX,udache.com,DIRECT
- DOMAIN-SUFFIX,343480.com,DIRECT
- DOMAIN-SUFFIX,baduziyuan.com,DIRECT
- DOMAIN-SUFFIX,com-hs-hkdy.com,DIRECT
- DOMAIN-SUFFIX,czybjz.com,DIRECT
- DOMAIN-SUFFIX,dandanzan.com,DIRECT
- DOMAIN-SUFFIX,fjhps.com,DIRECT
- DOMAIN-SUFFIX,kuyunbo.club,DIRECT
- DOMAIN-SUFFIX,21cn.com,DIRECT
- DOMAIN-SUFFIX,hitv.com,DIRECT
- DOMAIN-SUFFIX,mgtv.com,DIRECT
- DOMAIN-SUFFIX,iqiyi.com,DIRECT
- DOMAIN-SUFFIX,iqiyipic.com,DIRECT
- DOMAIN-SUFFIX,71.am.com,DIRECT
- DOMAIN-SUFFIX,jd.com,DIRECT
- DOMAIN-SUFFIX,jd.hk,DIRECT
- DOMAIN-SUFFIX,jdpay.com,DIRECT
- DOMAIN-SUFFIX,360buyimg.com,DIRECT
- DOMAIN-SUFFIX,iciba.com,DIRECT
- DOMAIN-SUFFIX,ksosoft.com,DIRECT
- DOMAIN-SUFFIX,meitu.com,DIRECT
- DOMAIN-SUFFIX,meitudata.com,DIRECT
- DOMAIN-SUFFIX,meitustat.com,DIRECT
- DOMAIN-SUFFIX,meipai.com,DIRECT
- DOMAIN-SUFFIX,duokan.com,DIRECT
- DOMAIN-SUFFIX,mi-img.com,DIRECT
- DOMAIN-SUFFIX,miui.com,DIRECT
- DOMAIN-SUFFIX,miwifi.com,DIRECT
- DOMAIN-SUFFIX,xiaomi.com,DIRECT
- DOMAIN-SUFFIX,msecnd.net,DIRECT
- DOMAIN-SUFFIX,windowsupdate.com,DIRECT
- DOMAIN,officecdn-microsoft-com.akamaized.net,DIRECT
- DOMAIN-SUFFIX,163.com,DIRECT
- DOMAIN-SUFFIX,126.net,DIRECT
- DOMAIN-SUFFIX,127.net,DIRECT
- DOMAIN-SUFFIX,163yun.com,DIRECT
- DOMAIN-SUFFIX,lofter.com,DIRECT
- DOMAIN-SUFFIX,netease.com,DIRECT
- DOMAIN-SUFFIX,ydstatic.com,DIRECT
- DOMAIN-SUFFIX,sina.com,DIRECT
- DOMAIN-SUFFIX,weibo.com,DIRECT
- DOMAIN-SUFFIX,weibocdn.com,DIRECT
- DOMAIN-SUFFIX,sohu.com,DIRECT
- DOMAIN-SUFFIX,sohucs.com,DIRECT
- DOMAIN-SUFFIX,sohu-inc.com,DIRECT
- DOMAIN-SUFFIX,v-56.com,DIRECT
- DOMAIN-SUFFIX,sogo.com,DIRECT
- DOMAIN-SUFFIX,sogou.com,DIRECT
- DOMAIN-SUFFIX,sogoucdn.com,DIRECT
- DOMAIN-SUFFIX,gtimg.com,DIRECT
- DOMAIN-SUFFIX,idqqimg.com,DIRECT
- DOMAIN-SUFFIX,igamecj.com,DIRECT
- DOMAIN-SUFFIX,myapp.com,DIRECT
- DOMAIN-SUFFIX,myqcloud.com,DIRECT
- DOMAIN-SUFFIX,qq.com,DIRECT
- DOMAIN-SUFFIX,tencent.com,DIRECT
- DOMAIN-SUFFIX,tencent-cloud.net,DIRECT
- DOMAIN-SUFFIX,jstucdn.com,DIRECT
- DOMAIN-SUFFIX,zimuzu.io,DIRECT
- DOMAIN-SUFFIX,zimuzu.tv,DIRECT
- DOMAIN-SUFFIX,zmz2019.com,DIRECT
- DOMAIN-SUFFIX,zmzapi.com,DIRECT
- DOMAIN-SUFFIX,zmzapi.net,DIRECT
- DOMAIN-SUFFIX,zmzfile.com,DIRECT
- DOMAIN-SUFFIX,ccgslb.com,DIRECT
- DOMAIN-SUFFIX,ccgslb.net,DIRECT
- DOMAIN-SUFFIX,chinanetcenter.com,DIRECT
- DOMAIN-SUFFIX,meixincdn.com,DIRECT
- DOMAIN-SUFFIX,ourdvs.com,DIRECT
- DOMAIN-SUFFIX,staticdn.net,DIRECT
- DOMAIN-SUFFIX,wangsu.com,DIRECT
- DOMAIN-SUFFIX,ipip.net,DIRECT
- DOMAIN-SUFFIX,ip.la,DIRECT
- DOMAIN-SUFFIX,ip-cdn.com,DIRECT
- DOMAIN-SUFFIX,ipv6-test.com,DIRECT
- DOMAIN-SUFFIX,test-ipv6.com,DIRECT
- DOMAIN-SUFFIX,whatismyip.com,DIRECT
- DOMAIN-SUFFIX,netspeedtestmaster.com,DIRECT
- DOMAIN,speedtest.macpaw.com,DIRECT
- DOMAIN-SUFFIX,awesome-hd.me,DIRECT
- DOMAIN-SUFFIX,broadcasthe.net,DIRECT
- DOMAIN-SUFFIX,chdbits.co,DIRECT
- DOMAIN-SUFFIX,classix-unlimited.co.uk,DIRECT
- DOMAIN-SUFFIX,empornium.me,DIRECT
- DOMAIN-SUFFIX,gazellegames.net,DIRECT
- DOMAIN-SUFFIX,hdchina.org,DIRECT
- DOMAIN-SUFFIX,hdsky.me,DIRECT
- DOMAIN-SUFFIX,icetorrent.org,DIRECT
- DOMAIN-SUFFIX,jpopsuki.eu,DIRECT
- DOMAIN-SUFFIX,keepfrds.com,DIRECT
- DOMAIN-SUFFIX,madsrevolution.net,DIRECT
- DOMAIN-SUFFIX,m-team.cc,DIRECT
- DOMAIN-SUFFIX,nanyangpt.com,DIRECT
- DOMAIN-SUFFIX,ncore.cc,DIRECT
- DOMAIN-SUFFIX,open.cd,DIRECT
- DOMAIN-SUFFIX,ourbits.club,DIRECT
- DOMAIN-SUFFIX,passthepopcorn.me,DIRECT
- DOMAIN-SUFFIX,privatehd.to,DIRECT
- DOMAIN-SUFFIX,redacted.ch,DIRECT
- DOMAIN-SUFFIX,springsunday.net,DIRECT
- DOMAIN-SUFFIX,tjupt.org,DIRECT
- DOMAIN-SUFFIX,totheglory.im,DIRECT
- DOMAIN-SUFFIX,acm.org,DIRECT
- DOMAIN-SUFFIX,acs.org,DIRECT
- DOMAIN-SUFFIX,aip.org,DIRECT
- DOMAIN-SUFFIX,ams.org,DIRECT
- DOMAIN-SUFFIX,annualreviews.org,DIRECT
- DOMAIN-SUFFIX,aps.org,DIRECT
- DOMAIN-SUFFIX,ascelibrary.org,DIRECT
- DOMAIN-SUFFIX,asm.org,DIRECT
- DOMAIN-SUFFIX,asme.org,DIRECT
- DOMAIN-SUFFIX,astm.org,DIRECT
- DOMAIN-SUFFIX,bmj.com,DIRECT
- DOMAIN-SUFFIX,cambridge.org,DIRECT
- DOMAIN-SUFFIX,cas.org,DIRECT
- DOMAIN-SUFFIX,clarivate.com,DIRECT
- DOMAIN-SUFFIX,ebscohost.com,DIRECT
- DOMAIN-SUFFIX,emerald.com,DIRECT
- DOMAIN-SUFFIX,engineeringvillage.com,DIRECT
- DOMAIN-SUFFIX,icevirtuallibrary.com,DIRECT
- DOMAIN-SUFFIX,ieee.org,DIRECT
- DOMAIN-SUFFIX,imf.org,DIRECT
- DOMAIN-SUFFIX,iop.org,DIRECT
- DOMAIN-SUFFIX,jamanetwork.com,DIRECT
- DOMAIN-SUFFIX,jhu.edu,DIRECT
- DOMAIN-SUFFIX,jstor.org,DIRECT
- DOMAIN-SUFFIX,karger.com,DIRECT
- DOMAIN-SUFFIX,libguides.com,DIRECT
- DOMAIN-SUFFIX,madsrevolution.net,DIRECT
- DOMAIN-SUFFIX,mpg.de,DIRECT
- DOMAIN-SUFFIX,myilibrary.com,DIRECT
- DOMAIN-SUFFIX,nature.com,DIRECT
- DOMAIN-SUFFIX,oecd-ilibrary.org,DIRECT
- DOMAIN-SUFFIX,osapublishing.org,DIRECT
- DOMAIN-SUFFIX,oup.com,DIRECT
- DOMAIN-SUFFIX,ovid.com,DIRECT
- DOMAIN-SUFFIX,oxfordartonline.com,DIRECT
- DOMAIN-SUFFIX,oxfordbibliographies.com,DIRECT
- DOMAIN-SUFFIX,oxfordmusiconline.com,DIRECT
- DOMAIN-SUFFIX,pnas.org,DIRECT
- DOMAIN-SUFFIX,proquest.com,DIRECT
- DOMAIN-SUFFIX,rsc.org,DIRECT
- DOMAIN-SUFFIX,sagepub.com,DIRECT
- DOMAIN-SUFFIX,sciencemag.org,DIRECT
- DOMAIN-SUFFIX,scopus.com,DIRECT
- DOMAIN-SUFFIX,siam.org,DIRECT
- DOMAIN-SUFFIX,spiedigitallibrary.org,DIRECT
- DOMAIN-SUFFIX,springer.com,DIRECT
- DOMAIN-SUFFIX,springerlink.com,DIRECT
- DOMAIN-SUFFIX,tandfonline.com,DIRECT
- DOMAIN-SUFFIX,un.org,DIRECT
- DOMAIN-SUFFIX,uni-bielefeld.de,DIRECT
- DOMAIN-SUFFIX,webofknowledge.com,DIRECT
- DOMAIN-SUFFIX,westlaw.com,DIRECT
- DOMAIN-SUFFIX,wiley.com,DIRECT
- DOMAIN-SUFFIX,worldbank.org,DIRECT
- DOMAIN-SUFFIX,worldscientific.com,DIRECT
- DOMAIN-SUFFIX,cn,DIRECT
- DOMAIN-SUFFIX,360in.com,DIRECT
- DOMAIN-SUFFIX,51ym.me,DIRECT
- DOMAIN-SUFFIX,8686c.com,DIRECT
- DOMAIN-SUFFIX,abchina.com,DIRECT
- DOMAIN-SUFFIX,accuweather.com,DIRECT
- DOMAIN-SUFFIX,aicoinstorge.com,DIRECT
- DOMAIN-SUFFIX,air-matters.com,DIRECT
- DOMAIN-SUFFIX,air-matters.io,DIRECT
- DOMAIN-SUFFIX,aixifan.com,DIRECT
- DOMAIN-SUFFIX,amd.com,DIRECT
- DOMAIN-SUFFIX,b612.net,DIRECT
- DOMAIN-SUFFIX,bdatu.com,DIRECT
- DOMAIN-SUFFIX,beitaichufang.com,DIRECT
- DOMAIN-SUFFIX,bjango.com,DIRECT
- DOMAIN-SUFFIX,booking.com,DIRECT
- DOMAIN-SUFFIX,bstatic.com,DIRECT
- DOMAIN-SUFFIX,cailianpress.com,DIRECT
- DOMAIN-SUFFIX,camera360.com,DIRECT
- DOMAIN-SUFFIX,chinaso.com,DIRECT
- DOMAIN-SUFFIX,chua.pro,DIRECT
- DOMAIN-SUFFIX,chuimg.com,DIRECT
- DOMAIN-SUFFIX,chunyu.mobi,DIRECT
- DOMAIN-SUFFIX,chushou.tv,DIRECT
- DOMAIN-SUFFIX,cmbchina.com,DIRECT
- DOMAIN-SUFFIX,cmbimg.com,DIRECT
- DOMAIN-SUFFIX,ctrip.com,DIRECT
- DOMAIN-SUFFIX,dfcfw.com,DIRECT
- DOMAIN-SUFFIX,docschina.org,DIRECT
- DOMAIN-SUFFIX,douban.com,DIRECT
- DOMAIN-SUFFIX,doubanio.com,DIRECT
- DOMAIN-SUFFIX,douyu.com,DIRECT
- DOMAIN-SUFFIX,dxycdn.com,DIRECT
- DOMAIN-SUFFIX,dytt8.net,DIRECT
- DOMAIN-SUFFIX,eastmoney.com,DIRECT
- DOMAIN-SUFFIX,eudic.net,DIRECT
- DOMAIN-SUFFIX,feng.com,DIRECT
- DOMAIN-SUFFIX,fengkongcloud.com,DIRECT
- DOMAIN-SUFFIX,frdic.com,DIRECT
- DOMAIN-SUFFIX,futu5.com,DIRECT
- DOMAIN-SUFFIX,futunn.com,DIRECT
- DOMAIN-SUFFIX,gandi.net,DIRECT
- DOMAIN-SUFFIX,geilicdn.com,DIRECT
- DOMAIN-SUFFIX,getpricetag.com,DIRECT
- DOMAIN-SUFFIX,gifshow.com,DIRECT
- DOMAIN-SUFFIX,godic.net,DIRECT
- DOMAIN-SUFFIX,hicloud.com,DIRECT
- DOMAIN-SUFFIX,hongxiu.com,DIRECT
- DOMAIN-SUFFIX,hostbuf.com,DIRECT
- DOMAIN-SUFFIX,huxiucdn.com,DIRECT
- DOMAIN-SUFFIX,huya.com,DIRECT
- DOMAIN-SUFFIX,infinitynewtab.com,DIRECT
- DOMAIN-SUFFIX,ithome.com,DIRECT
- DOMAIN-SUFFIX,java.com,DIRECT
- DOMAIN-SUFFIX,jidian.im,DIRECT
- DOMAIN-SUFFIX,kaiyanapp.com,DIRECT
- DOMAIN-SUFFIX,kaspersky-labs.com,DIRECT
- DOMAIN-SUFFIX,keepcdn.com,DIRECT
- DOMAIN-SUFFIX,kkmh.com,DIRECT
- DOMAIN-SUFFIX,licdn.com,DIRECT
- DOMAIN-SUFFIX,linkedin.com,DIRECT
- DOMAIN-SUFFIX,loli.net,DIRECT
- DOMAIN-SUFFIX,luojilab.com,DIRECT
- DOMAIN-SUFFIX,maoyan.com,DIRECT
- DOMAIN-SUFFIX,maoyun.tv,DIRECT
- DOMAIN-SUFFIX,meituan.com,DIRECT
- DOMAIN-SUFFIX,meituan.net,DIRECT
- DOMAIN-SUFFIX,mobike.com,DIRECT
- DOMAIN-SUFFIX,moke.com,DIRECT
- DOMAIN-SUFFIX,mubu.com,DIRECT
- DOMAIN-SUFFIX,myzaker.com,DIRECT
- DOMAIN-SUFFIX,nim-lang-cn.org,DIRECT
- DOMAIN-SUFFIX,nvidia.com,DIRECT
- DOMAIN-SUFFIX,oracle.com,DIRECT
- DOMAIN-SUFFIX,paypal.com,DIRECT
- DOMAIN-SUFFIX,paypalobjects.com,DIRECT
- DOMAIN-SUFFIX,qdaily.com,DIRECT
- DOMAIN-SUFFIX,qidian.com,DIRECT
- DOMAIN-SUFFIX,qyer.com,DIRECT
- DOMAIN-SUFFIX,qyerstatic.com,DIRECT
- DOMAIN-SUFFIX,raychase.net,DIRECT
- DOMAIN-SUFFIX,ronghub.com,DIRECT
- DOMAIN-SUFFIX,ruguoapp.com,DIRECT
- DOMAIN-SUFFIX,s-reader.com,DIRECT
- DOMAIN-SUFFIX,sankuai.com,DIRECT
- DOMAIN-SUFFIX,scomper.me,DIRECT
- DOMAIN-SUFFIX,seafile.com,DIRECT
- DOMAIN-SUFFIX,sm.ms,DIRECT
- DOMAIN-SUFFIX,smzdm.com,DIRECT
- DOMAIN-SUFFIX,snapdrop.net,DIRECT
- DOMAIN-SUFFIX,snwx.com,DIRECT
- DOMAIN-SUFFIX,sspai.com,DIRECT
- DOMAIN-SUFFIX,takungpao.com,DIRECT
- DOMAIN-SUFFIX,teamviewer.com,DIRECT
- DOMAIN-SUFFIX,tianyancha.com,DIRECT
- DOMAIN-SUFFIX,udacity.com,DIRECT
- DOMAIN-SUFFIX,uning.com,DIRECT
- DOMAIN-SUFFIX,vmware.com,DIRECT
- DOMAIN-SUFFIX,weather.com,DIRECT
- DOMAIN-SUFFIX,weico.cc,DIRECT
- DOMAIN-SUFFIX,weidian.com,DIRECT
- DOMAIN-SUFFIX,xiachufang.com,DIRECT
- DOMAIN-SUFFIX,ximalaya.com,DIRECT
- DOMAIN-SUFFIX,xinhuanet.com,DIRECT
- DOMAIN-SUFFIX,xmcdn.com,DIRECT
- DOMAIN-SUFFIX,yangkeduo.com,DIRECT
- DOMAIN-SUFFIX,zhangzishi.cc,DIRECT
- DOMAIN-SUFFIX,zhihu.com,DIRECT
- DOMAIN-SUFFIX,zhimg.com,DIRECT
- DOMAIN-SUFFIX,zhuihd.com,DIRECT
- DOMAIN,download.jetbrains.com,DIRECT
- DOMAIN,images-cn.ssl-images-amazon.com,DIRECT
- IP-CIDR,119.28.28.28/32,DIRECT,no-resolve
- DOMAIN,www.wenku8.net,选择节点
- DOMAIN,www.iflow.work,选择节点
- DOMAIN-SUFFIX,ampproject.org,选择节点
- DOMAIN-SUFFIX,appspot.com,选择节点
- DOMAIN-SUFFIX,blogger.com,选择节点
- DOMAIN-SUFFIX,getoutline.org,选择节点
- DOMAIN-SUFFIX,gvt0.com,选择节点
- DOMAIN-SUFFIX,gvt1.com,选择节点
- DOMAIN-SUFFIX,gvt3.com,选择节点
- DOMAIN-SUFFIX,xn--ngstr-lra8j.com,选择节点
- DOMAIN-SUFFIX,onedrive.live.com,选择节点
- DOMAIN-SUFFIX,xboxlive.com,选择节点
- DOMAIN-SUFFIX,cdninstagram.com,选择节点
- DOMAIN-SUFFIX,fb.com,选择节点
- DOMAIN-SUFFIX,fb.me,选择节点
- DOMAIN-SUFFIX,fbaddins.com,选择节点
- DOMAIN-SUFFIX,fbcdn.net,选择节点
- DOMAIN-SUFFIX,fbsbx.com,选择节点
- DOMAIN-SUFFIX,fbworkmail.com,选择节点
- DOMAIN-SUFFIX,instagram.com,选择节点
- DOMAIN-SUFFIX,m.me,选择节点
- DOMAIN-SUFFIX,messenger.com,选择节点
- DOMAIN-SUFFIX,oculus.com,选择节点
- DOMAIN-SUFFIX,oculuscdn.com,选择节点
- DOMAIN-SUFFIX,rocksdb.org,选择节点
- DOMAIN-SUFFIX,whatsapp.com,选择节点
- DOMAIN-SUFFIX,whatsapp.net,选择节点
- IP-CIDR,3.123.36.126/32,选择节点,no-resolve
- IP-CIDR,35.157.215.84/32,选择节点,no-resolve
- IP-CIDR,35.157.217.255/32,选择节点,no-resolve
- IP-CIDR,52.58.209.134/32,选择节点,no-resolve
- IP-CIDR,54.93.124.31/32,选择节点,no-resolve
- IP-CIDR,54.162.243.80/32,选择节点,no-resolve
- IP-CIDR,54.173.34.141/32,选择节点,no-resolve
- IP-CIDR,54.235.23.242/32,选择节点,no-resolve
- IP-CIDR,169.45.248.118/32,选择节点,no-resolve
- DOMAIN-SUFFIX,pscp.tv,选择节点
- DOMAIN-SUFFIX,periscope.tv,选择节点
- DOMAIN-SUFFIX,t.co,选择节点
- DOMAIN-SUFFIX,twimg.co,选择节点
- DOMAIN-SUFFIX,twimg.com,选择节点
- DOMAIN-SUFFIX,twitpic.com,选择节点
- DOMAIN-SUFFIX,vine.co,选择节点
- DOMAIN-SUFFIX,t.me,选择节点
- DOMAIN-SUFFIX,tdesktop.com,选择节点
- IP-CIDR,91.108.4.0/22,选择节点,no-resolve
- IP-CIDR,91.108.8.0/22,选择节点,no-resolve
- IP-CIDR,91.108.12.0/22,选择节点,no-resolve
- IP-CIDR,91.108.16.0/22,选择节点,no-resolve
- IP-CIDR,91.108.56.0/22,选择节点,no-resolve
- IP-CIDR,149.154.160.0/20,选择节点,no-resolve
- IP-CIDR6,2001:b28:f23d::/48,选择节点,no-resolve
- IP-CIDR6,2001:b28:f23f::/48,选择节点,no-resolve
- IP-CIDR6,2001:67c:4e8::/48,选择节点,no-resolve
- DOMAIN-SUFFIX,line.me,选择节点
- DOMAIN-SUFFIX,line-apps.com,选择节点
- DOMAIN-SUFFIX,line-scdn.net,选择节点
- DOMAIN-SUFFIX,naver.jp,选择节点
- IP-CIDR,103.2.30.0/23,选择节点,no-resolve
- IP-CIDR,125.209.208.0/20,选择节点,no-resolve
- IP-CIDR,147.92.128.0/17,选择节点,no-resolve
- IP-CIDR,203.104.144.0/21,选择节点,no-resolve
- DOMAIN-SUFFIX,4shared.com,选择节点
- DOMAIN-SUFFIX,520cc.cc,选择节点
- DOMAIN-SUFFIX,881903.com,选择节点
- DOMAIN-SUFFIX,9cache.com,选择节点
- DOMAIN-SUFFIX,9gag.com,选择节点
- DOMAIN-SUFFIX,abc.com,选择节点
- DOMAIN-SUFFIX,abc.net.au,选择节点
- DOMAIN-SUFFIX,abebooks.com,选择节点
- DOMAIN-SUFFIX,amazon.co.jp,选择节点
- DOMAIN-SUFFIX,apigee.com,选择节点
- DOMAIN-SUFFIX,apk-dl.com,选择节点
- DOMAIN-SUFFIX,apkfind.com,选择节点
- DOMAIN-SUFFIX,apkmirror.com,选择节点
- DOMAIN-SUFFIX,apkmonk.com,选择节点
- DOMAIN-SUFFIX,apkpure.com,选择节点
- DOMAIN-SUFFIX,aptoide.com,选择节点
- DOMAIN-SUFFIX,archive.is,选择节点
- DOMAIN-SUFFIX,archive.org,选择节点
- DOMAIN-SUFFIX,arte.tv,选择节点
- DOMAIN-SUFFIX,artstation.com,选择节点
- DOMAIN-SUFFIX,arukas.io,选择节点
- DOMAIN-SUFFIX,ask.com,选择节点
- DOMAIN-SUFFIX,avg.com,选择节点
- DOMAIN-SUFFIX,avgle.com,选择节点
- DOMAIN-SUFFIX,badoo.com,选择节点
- DOMAIN-SUFFIX,bandwagonhost.com,选择节点
- DOMAIN-SUFFIX,bbc.com,选择节点
- DOMAIN-SUFFIX,behance.net,选择节点
- DOMAIN-SUFFIX,bibox.com,选择节点
- DOMAIN-SUFFIX,biggo.com.tw,选择节点
- DOMAIN-SUFFIX,binance.com,选择节点
- DOMAIN-SUFFIX,bitcointalk.org,选择节点
- DOMAIN-SUFFIX,bitfinex.com,选择节点
- DOMAIN-SUFFIX,bitmex.com,选择节点
- DOMAIN-SUFFIX,bit-z.com,选择节点
- DOMAIN-SUFFIX,bloglovin.com,选择节点
- DOMAIN-SUFFIX,bloomberg.cn,选择节点
- DOMAIN-SUFFIX,bloomberg.com,选择节点
- DOMAIN-SUFFIX,blubrry.com,选择节点
- DOMAIN-SUFFIX,book.com.tw,选择节点
- DOMAIN-SUFFIX,booklive.jp,选择节点
- DOMAIN-SUFFIX,books.com.tw,选择节点
- DOMAIN-SUFFIX,boslife.net,选择节点
- DOMAIN-SUFFIX,box.com,选择节点
- DOMAIN-SUFFIX,businessinsider.com,选择节点
- DOMAIN-SUFFIX,bwh1.net,选择节点
- DOMAIN-SUFFIX,castbox.fm,选择节点
- DOMAIN-SUFFIX,cbc.ca,选择节点
- DOMAIN-SUFFIX,cdw.com,选择节点
- DOMAIN-SUFFIX,change.org,选择节点
- DOMAIN-SUFFIX,channelnewsasia.com,选择节点
- DOMAIN-SUFFIX,ck101.com,选择节点
- DOMAIN-SUFFIX,clarionproject.org,选择节点
- DOMAIN-SUFFIX,clyp.it,选择节点
- DOMAIN-SUFFIX,cna.com.tw,选择节点
- DOMAIN-SUFFIX,comparitech.com,选择节点
- DOMAIN-SUFFIX,conoha.jp,选择节点
- DOMAIN-SUFFIX,crucial.com,选择节点
- DOMAIN-SUFFIX,cts.com.tw,选择节点
- DOMAIN-SUFFIX,cw.com.tw,选择节点
- DOMAIN-SUFFIX,cyberctm.com,选择节点
- DOMAIN-SUFFIX,dailymotion.com,选择节点
- DOMAIN-SUFFIX,dailyview.tw,选择节点
- DOMAIN-SUFFIX,daum.net,选择节点
- DOMAIN-SUFFIX,daumcdn.net,选择节点
- DOMAIN-SUFFIX,dcard.tw,选择节点
- DOMAIN-SUFFIX,deepdiscount.com,选择节点
- DOMAIN-SUFFIX,depositphotos.com,选择节点
- DOMAIN-SUFFIX,deviantart.com,选择节点
- DOMAIN-SUFFIX,disconnect.me,选择节点
- DOMAIN-SUFFIX,discordapp.com,选择节点
- DOMAIN-SUFFIX,discordapp.net,选择节点
- DOMAIN-SUFFIX,fomepay.com,选择节点
- DOMAIN-SUFFIX,disqus.com,选择节点
- DOMAIN-SUFFIX,dlercloud.com,选择节点
- DOMAIN-SUFFIX,dns2go.com,选择节点
- DOMAIN-SUFFIX,dowjones.com,选择节点
- DOMAIN-SUFFIX,dropbox.com,选择节点
- DOMAIN-SUFFIX,dropboxusercontent.com,选择节点
- DOMAIN-SUFFIX,duckduckgo.com,选择节点
- DOMAIN-SUFFIX,dw.com,选择节点
- DOMAIN-SUFFIX,dynu.com,选择节点
- DOMAIN-SUFFIX,earthcam.com,选择节点
- DOMAIN-SUFFIX,ebookservice.tw,选择节点
- DOMAIN-SUFFIX,economist.com,选择节点
- DOMAIN-SUFFIX,edgecastcdn.net,选择节点
- DOMAIN-SUFFIX,elpais.com,选择节点
- DOMAIN-SUFFIX,enanyang.my,选择节点
- DOMAIN-SUFFIX,encyclopedia.com,选择节点
- DOMAIN-SUFFIX,esoir.be,选择节点
- DOMAIN-SUFFIX,etherscan.io,选择节点
- DOMAIN-SUFFIX,euronews.com,选择节点
- DOMAIN-SUFFIX,evozi.com,选择节点
- DOMAIN-SUFFIX,feedly.com,选择节点
- DOMAIN-SUFFIX,firech.at,选择节点
- DOMAIN-SUFFIX,flickr.com,选择节点
- DOMAIN-SUFFIX,flitto.com,选择节点
- DOMAIN-SUFFIX,foreignpolicy.com,选择节点
- DOMAIN-SUFFIX,freebrowser.org,选择节点
- DOMAIN-SUFFIX,freewechat.com,选择节点
- DOMAIN-SUFFIX,freeweibo.com,选择节点
- DOMAIN-SUFFIX,friday.tw,选择节点
- DOMAIN-SUFFIX,ftchinese.com,选择节点
- DOMAIN-SUFFIX,ftimg.net,选择节点
- DOMAIN-SUFFIX,gate.io,选择节点
- DOMAIN-SUFFIX,getlantern.org,选择节点
- DOMAIN-SUFFIX,getsync.com,选择节点
- DOMAIN-SUFFIX,globalvoices.org,选择节点
- DOMAIN-SUFFIX,goo.ne.jp,选择节点
- DOMAIN-SUFFIX,goodreads.com,选择节点
- DOMAIN-SUFFIX,gov,选择节点
- DOMAIN-SUFFIX,gov.tw,选择节点
- DOMAIN-SUFFIX,greatfire.org,选择节点
- DOMAIN-SUFFIX,gumroad.com,选择节点
- DOMAIN-SUFFIX,hbg.com,选择节点
- DOMAIN-SUFFIX,heroku.com,选择节点
- DOMAIN-SUFFIX,hightail.com,选择节点
- DOMAIN-SUFFIX,hk01.com,选择节点
- DOMAIN-SUFFIX,hkbf.org,选择节点
- DOMAIN-SUFFIX,hkbookcity.com,选择节点
- DOMAIN-SUFFIX,hkej.com,选择节点
- DOMAIN-SUFFIX,hket.com,选择节点
- DOMAIN-SUFFIX,hkgolden.com,选择节点
- DOMAIN-SUFFIX,hootsuite.com,选择节点
- DOMAIN-SUFFIX,hudson.org,选择节点
- DOMAIN-SUFFIX,hyread.com.tw,选择节点
- DOMAIN-SUFFIX,ibtimes.com,选择节点
- DOMAIN-SUFFIX,i-cable.com,选择节点
- DOMAIN-SUFFIX,icij.org,选择节点
- DOMAIN-SUFFIX,icoco.com,选择节点
- DOMAIN-SUFFIX,imgur.com,选择节点
- DOMAIN-SUFFIX,initiummall.com,选择节点
- DOMAIN-SUFFIX,insecam.org,选择节点
- DOMAIN-SUFFIX,ipfs.io,选择节点
- DOMAIN-SUFFIX,issuu.com,选择节点
- DOMAIN-SUFFIX,istockphoto.com,选择节点
- DOMAIN-SUFFIX,japantimes.co.jp,选择节点
- DOMAIN-SUFFIX,jiji.com,选择节点
- DOMAIN-SUFFIX,jinx.com,选择节点
- DOMAIN-SUFFIX,jkforum.net,选择节点
- DOMAIN-SUFFIX,joinmastodon.org,选择节点
- DOMAIN-SUFFIX,justmysocks.net,选择节点
- DOMAIN-SUFFIX,justpaste.it,选择节点
- DOMAIN-SUFFIX,kakao.com,选择节点
- DOMAIN-SUFFIX,kakaocorp.com,选择节点
- DOMAIN-SUFFIX,kik.com,选择节点
- DOMAIN-SUFFIX,kobo.com,选择节点
- DOMAIN-SUFFIX,kobobooks.com,选择节点
- DOMAIN-SUFFIX,kodingen.com,选择节点
- DOMAIN-SUFFIX,lemonde.fr,选择节点
- DOMAIN-SUFFIX,lepoint.fr,选择节点
- DOMAIN-SUFFIX,lihkg.com,选择节点
- DOMAIN-SUFFIX,listennotes.com,选择节点
- DOMAIN-SUFFIX,livestream.com,选择节点
- DOMAIN-SUFFIX,logmein.com,选择节点
- DOMAIN-SUFFIX,mail.ru,选择节点
- DOMAIN-SUFFIX,mailchimp.com,选择节点
- DOMAIN-SUFFIX,marc.info,选择节点
- DOMAIN-SUFFIX,matters.news,选择节点
- DOMAIN-SUFFIX,maying.co,选择节点
- DOMAIN-SUFFIX,medium.com,选择节点
- DOMAIN-SUFFIX,mega.nz,选择节点
- DOMAIN-SUFFIX,mil,选择节点
- DOMAIN-SUFFIX,mingpao.com,选择节点
- DOMAIN-SUFFIX,mobile01.com,选择节点
- DOMAIN-SUFFIX,myspace.com,选择节点
- DOMAIN-SUFFIX,myspacecdn.com,选择节点
- DOMAIN-SUFFIX,nanyang.com,选择节点
- DOMAIN-SUFFIX,naver.com,选择节点
- DOMAIN-SUFFIX,neowin.net,选择节点
- DOMAIN-SUFFIX,newstapa.org,选择节点
- DOMAIN-SUFFIX,nexitally.com,选择节点
- DOMAIN-SUFFIX,nhk.or.jp,选择节点
- DOMAIN-SUFFIX,nicovideo.jp,选择节点
- DOMAIN-SUFFIX,nii.ac.jp,选择节点
- DOMAIN-SUFFIX,nikkei.com,选择节点
- DOMAIN-SUFFIX,nofile.io,选择节点
- DOMAIN-SUFFIX,now.com,选择节点
- DOMAIN-SUFFIX,nrk.no,选择节点
- DOMAIN-SUFFIX,nyt.com,选择节点
- DOMAIN-SUFFIX,nytchina.com,选择节点
- DOMAIN-SUFFIX,nytcn.me,选择节点
- DOMAIN-SUFFIX,nytco.com,选择节点
- DOMAIN-SUFFIX,nytimes.com,选择节点
- DOMAIN-SUFFIX,nytimg.com,选择节点
- DOMAIN-SUFFIX,nytlog.com,选择节点
- DOMAIN-SUFFIX,nytstyle.com,选择节点
- DOMAIN-SUFFIX,ok.ru,选择节点
- DOMAIN-SUFFIX,okex.com,选择节点
- DOMAIN-SUFFIX,on.cc,选择节点
- DOMAIN-SUFFIX,orientaldaily.com.my,选择节点
- DOMAIN-SUFFIX,overcast.fm,选择节点
- DOMAIN-SUFFIX,paltalk.com,选择节点
- DOMAIN-SUFFIX,pao-pao.net,选择节点
- DOMAIN-SUFFIX,parsevideo.com,选择节点
- DOMAIN-SUFFIX,pbxes.com,选择节点
- DOMAIN-SUFFIX,pcdvd.com.tw,选择节点
- DOMAIN-SUFFIX,pchome.com.tw,选择节点
- DOMAIN-SUFFIX,pcloud.com,选择节点
- DOMAIN-SUFFIX,picacomic.com,选择节点
- DOMAIN-SUFFIX,pinimg.com,选择节点
- DOMAIN-SUFFIX,pixiv.net,选择节点
- DOMAIN-SUFFIX,player.fm,选择节点
- DOMAIN-SUFFIX,plurk.com,选择节点
- DOMAIN-SUFFIX,po18.tw,选择节点
- DOMAIN-SUFFIX,potato.im,选择节点
- DOMAIN-SUFFIX,potatso.com,选择节点
- DOMAIN-SUFFIX,prism-break.org,选择节点
- DOMAIN-SUFFIX,proxifier.com,选择节点
- DOMAIN-SUFFIX,pt.im,选择节点
- DOMAIN-SUFFIX,pts.org.tw,选择节点
- DOMAIN-SUFFIX,pubu.com.tw,选择节点
- DOMAIN-SUFFIX,pubu.tw,选择节点
- DOMAIN-SUFFIX,pureapk.com,选择节点
- DOMAIN-SUFFIX,quora.com,选择节点
- DOMAIN-SUFFIX,quoracdn.net,选择节点
- DOMAIN-SUFFIX,rakuten.co.jp,选择节点
- DOMAIN-SUFFIX,readingtimes.com.tw,选择节点
- DOMAIN-SUFFIX,readmoo.com,选择节点
- DOMAIN-SUFFIX,redbubble.com,选择节点
- DOMAIN-SUFFIX,reddit.com,选择节点
- DOMAIN-SUFFIX,redditmedia.com,选择节点
- DOMAIN-SUFFIX,resilio.com,选择节点
- DOMAIN-SUFFIX,reuters.com,选择节点
- DOMAIN-SUFFIX,reutersmedia.net,选择节点
- DOMAIN-SUFFIX,rfi.fr,选择节点
- DOMAIN-SUFFIX,rixcloud.com,选择节点
- DOMAIN-SUFFIX,roadshow.hk,选择节点
- DOMAIN-SUFFIX,scmp.com,选择节点
- DOMAIN-SUFFIX,scribd.com,选择节点
- DOMAIN-SUFFIX,seatguru.com,选择节点
- DOMAIN-SUFFIX,shadowsocks.org,选择节点
- DOMAIN-SUFFIX,shopee.tw,选择节点
- DOMAIN-SUFFIX,slideshare.net,选择节点
- DOMAIN-SUFFIX,softfamous.com,选择节点
- DOMAIN-SUFFIX,soundcloud.com,选择节点
- DOMAIN-SUFFIX,ssrcloud.org,选择节点
- DOMAIN-SUFFIX,startpage.com,选择节点
- DOMAIN-SUFFIX,steemit.com,选择节点
- DOMAIN-SUFFIX,steemitwallet.com,选择节点
- DOMAIN-SUFFIX,t66y.com,选择节点
- DOMAIN-SUFFIX,tapatalk.com,选择节点
- DOMAIN-SUFFIX,teco-hk.org,选择节点
- DOMAIN-SUFFIX,teco-mo.org,选择节点
- DOMAIN-SUFFIX,teddysun.com,选择节点
- DOMAIN-SUFFIX,textnow.me,选择节点
- DOMAIN-SUFFIX,theguardian.com,选择节点
- DOMAIN-SUFFIX,theinitium.com,选择节点
- DOMAIN-SUFFIX,thetvdb.com,选择节点
- DOMAIN-SUFFIX,tineye.com,选择节点
- DOMAIN-SUFFIX,torproject.org,选择节点
- DOMAIN-SUFFIX,tumblr.com,选择节点
- DOMAIN-SUFFIX,turbobit.net,选择节点
- DOMAIN-SUFFIX,tutanota.com,选择节点
- DOMAIN-SUFFIX,tvboxnow.com,选择节点
- DOMAIN-SUFFIX,udn.com,选择节点
- DOMAIN-SUFFIX,unseen.is,选择节点
- DOMAIN-SUFFIX,upmedia.mg,选择节点
- DOMAIN-SUFFIX,uptodown.com,选择节点
- DOMAIN-SUFFIX,urbandictionary.com,选择节点
- DOMAIN-SUFFIX,ustream.tv,选择节点
- DOMAIN-SUFFIX,uwants.com,选择节点
- DOMAIN-SUFFIX,v2ray.com,选择节点
- DOMAIN-SUFFIX,viber.com,选择节点
- DOMAIN-SUFFIX,videopress.com,选择节点
- DOMAIN-SUFFIX,vimeo.com,选择节点
- DOMAIN-SUFFIX,voachinese.com,选择节点
- DOMAIN-SUFFIX,voanews.com,选择节点
- DOMAIN-SUFFIX,voxer.com,选择节点
- DOMAIN-SUFFIX,vzw.com,选择节点
- DOMAIN-SUFFIX,w3schools.com,选择节点
- DOMAIN-SUFFIX,washingtonpost.com,选择节点
- DOMAIN-SUFFIX,wattpad.com,选择节点
- DOMAIN-SUFFIX,whoer.net,选择节点
- DOMAIN-SUFFIX,wikimapia.org,选择节点
- DOMAIN-SUFFIX,wikipedia.org,选择节点
- DOMAIN-SUFFIX,wikiquote.org,选择节点
- DOMAIN-SUFFIX,wikiwand.com,选择节点
- DOMAIN-SUFFIX,winudf.com,选择节点
- DOMAIN-SUFFIX,wire.com,选择节点
- DOMAIN-SUFFIX,wordpress.com,选择节点
- DOMAIN-SUFFIX,workflow.is,选择节点
- DOMAIN-SUFFIX,worldcat.org,选择节点
- DOMAIN-SUFFIX,wsj.com,选择节点
- DOMAIN-SUFFIX,wsj.net,选择节点
- DOMAIN-SUFFIX,xhamster.com,选择节点
- DOMAIN-SUFFIX,xn--90wwvt03e.com,选择节点
- DOMAIN-SUFFIX,xn--i2ru8q2qg.com,选择节点
- DOMAIN-SUFFIX,xnxx.com,选择节点
- DOMAIN-SUFFIX,xvideos.com,选择节点
- DOMAIN-SUFFIX,yahoo.com,选择节点
- DOMAIN-SUFFIX,yandex.ru,选择节点
- DOMAIN-SUFFIX,ycombinator.com,选择节点
- DOMAIN-SUFFIX,yesasia.com,选择节点
- DOMAIN-SUFFIX,yes-news.com,选择节点
- DOMAIN-SUFFIX,yomiuri.co.jp,选择节点
- DOMAIN-SUFFIX,you-get.org,选择节点
- DOMAIN-SUFFIX,zaobao.com,选择节点
- DOMAIN-SUFFIX,zb.com,选择节点
- DOMAIN-SUFFIX,zello.com,选择节点
- DOMAIN-SUFFIX,zeronet.io,选择节点
- DOMAIN-SUFFIX,zoom.us,选择节点
- DOMAIN-SUFFIX,apartmentratings.com,选择节点
- DOMAIN-SUFFIX,apartments.com,选择节点
- DOMAIN-SUFFIX,bankmobilevibe.com,选择节点
- DOMAIN-SUFFIX,booktopia.com.au,选择节点
- DOMAIN-SUFFIX,cccat.io,选择节点
- DOMAIN-SUFFIX,centauro.com.br,选择节点
- DOMAIN-SUFFIX,clearsurance.com,选择节点
- DOMAIN-SUFFIX,costco.com,选择节点
- DOMAIN-SUFFIX,crackle.com,选择节点
- DOMAIN-SUFFIX,depositphotos.cn,选择节点
- DOMAIN-SUFFIX,dish.com,选择节点
- DOMAIN-SUFFIX,dmm.co.jp,选择节点
- DOMAIN-SUFFIX,dmm.com,选择节点
- DOMAIN-SUFFIX,dnvod.tv,选择节点
- DOMAIN-SUFFIX,esurance.com,选择节点
- DOMAIN-SUFFIX,extmatrix.com,选择节点
- DOMAIN-SUFFIX,fastpic.ru,选择节点
- DOMAIN-SUFFIX,flipboard.com,选择节点
- DOMAIN-SUFFIX,fnac.be,选择节点
- DOMAIN-SUFFIX,fnac.com,选择节点
- DOMAIN-SUFFIX,funkyimg.com,选择节点
- DOMAIN-SUFFIX,fxnetworks.com,选择节点
- DOMAIN-SUFFIX,gettyimages.com,选择节点
- DOMAIN-SUFFIX,go.com,选择节点
- DOMAIN-SUFFIX,here.com,选择节点
- DOMAIN-SUFFIX,jcpenney.com,选择节点
- DOMAIN-SUFFIX,jiehua.tv,选择节点
- DOMAIN-SUFFIX,mailfence.com,选择节点
- DOMAIN-SUFFIX,nationwide.com,选择节点
- DOMAIN-SUFFIX,nbc.com,选择节点
- DOMAIN-SUFFIX,nexon.com,选择节点
- DOMAIN-SUFFIX,nordstrom.com,选择节点
- DOMAIN-SUFFIX,nordstromimage.com,选择节点
- DOMAIN-SUFFIX,nordstromrack.com,选择节点
- DOMAIN-SUFFIX,superpages.com,选择节点
- DOMAIN-SUFFIX,target.com,选择节点
- DOMAIN-SUFFIX,thinkgeek.com,选择节点
- DOMAIN-SUFFIX,tracfone.com,选择节点
- DOMAIN-SUFFIX,unity3d.com,选择节点
- DOMAIN-SUFFIX,uploader.jp,选择节点
- DOMAIN-SUFFIX,vevo.com,选择节点
- DOMAIN-SUFFIX,viu.tv,选择节点
- DOMAIN-SUFFIX,vk.com,选择节点
- DOMAIN-SUFFIX,vsco.co,选择节点
- DOMAIN-SUFFIX,xfinity.com,选择节点
- DOMAIN-SUFFIX,zattoo.com,选择节点
- DOMAIN,testflight.apple.com,选择节点
- DOMAIN-SUFFIX,appsto.re,选择节点
- DOMAIN,api-glb-sea.smoot.apple.com,选择节点
- DOMAIN,lookup-api.apple.com,选择节点
- DOMAIN-SUFFIX,abc.xyz,选择节点
- DOMAIN-SUFFIX,android.com,选择节点
- DOMAIN-SUFFIX,androidify.com,选择节点
- DOMAIN-SUFFIX,dialogflow.com,选择节点
- DOMAIN-SUFFIX,autodraw.com,选择节点
- DOMAIN-SUFFIX,capitalg.com,选择节点
- DOMAIN-SUFFIX,certificate-transparency.org,选择节点
- DOMAIN-SUFFIX,chrome.com,选择节点
- DOMAIN-SUFFIX,chromeexperiments.com,选择节点
- DOMAIN-SUFFIX,chromestatus.com,选择节点
- DOMAIN-SUFFIX,chromium.org,选择节点
- DOMAIN-SUFFIX,creativelab5.com,选择节点
- DOMAIN-SUFFIX,debug.com,选择节点
- DOMAIN-SUFFIX,deepmind.com,选择节点
- DOMAIN-SUFFIX,firebaseio.com,选择节点
- DOMAIN-SUFFIX,getmdl.io,选择节点
- DOMAIN-SUFFIX,ggpht.com,选择节点
- DOMAIN-SUFFIX,gmail.com,选择节点
- DOMAIN-SUFFIX,gmodules.com,选择节点
- DOMAIN-SUFFIX,godoc.org,选择节点
- DOMAIN-SUFFIX,golang.org,选择节点
- DOMAIN-SUFFIX,gstatic.com,选择节点
- DOMAIN-SUFFIX,gv.com,选择节点
- DOMAIN-SUFFIX,gwtproject.org,选择节点
- DOMAIN-SUFFIX,itasoftware.com,选择节点
- DOMAIN-SUFFIX,madewithcode.com,选择节点
- DOMAIN-SUFFIX,material.io,选择节点
- DOMAIN-SUFFIX,polymer-project.org,选择节点
- DOMAIN-SUFFIX,admin.recaptcha.net,选择节点
- DOMAIN-SUFFIX,recaptcha.net,选择节点
- DOMAIN-SUFFIX,shattered.io,选择节点
- DOMAIN-SUFFIX,synergyse.com,选择节点
- DOMAIN-SUFFIX,tensorflow.org,选择节点
- DOMAIN-SUFFIX,tfhub.dev,选择节点
- DOMAIN-SUFFIX,tiltbrush.com,选择节点
- DOMAIN-SUFFIX,waveprotocol.org,选择节点
- DOMAIN-SUFFIX,waymo.com,选择节点
- DOMAIN-SUFFIX,webmproject.org,选择节点
- DOMAIN-SUFFIX,webrtc.org,选择节点
- DOMAIN-SUFFIX,whatbrowser.org,选择节点
- DOMAIN-SUFFIX,widevine.com,选择节点
- DOMAIN-SUFFIX,youtu.be,选择节点
- DOMAIN-SUFFIX,yt.be,选择节点
- DOMAIN-SUFFIX,ytimg.com,选择节点
- DOMAIN-SUFFIX,1drv.com,选择节点
- DOMAIN-SUFFIX,1drv.ms,选择节点
- DOMAIN-SUFFIX,blob.core.windows.net,选择节点
- DOMAIN-SUFFIX,livefilestore.com,选择节点
- DOMAIN-SUFFIX,storage.live.com,选择节点
- DOMAIN-SUFFIX,storage.msn.com,选择节点
- DOMAIN,oneclient.sfx.ms,选择节点
- DOMAIN-SUFFIX,0rz.tw,选择节点
- DOMAIN-SUFFIX,4bluestones.biz,选择节点
- DOMAIN-SUFFIX,9bis.net,选择节点
- DOMAIN-SUFFIX,allconnected.co,选择节点
- DOMAIN-SUFFIX,aol.com,选择节点
- DOMAIN-SUFFIX,bcc.com.tw,选择节点
- DOMAIN-SUFFIX,bit.ly,选择节点
- DOMAIN-SUFFIX,bitshare.com,选择节点
- DOMAIN-SUFFIX,blog.jp,选择节点
- DOMAIN-SUFFIX,blogimg.jp,选择节点
- DOMAIN-SUFFIX,blogtd.org,选择节点
- DOMAIN-SUFFIX,broadcast.co.nz,选择节点
- DOMAIN-SUFFIX,camfrog.com,选择节点
- DOMAIN-SUFFIX,cfos.de,选择节点
- DOMAIN-SUFFIX,citypopulation.de,选择节点
- DOMAIN-SUFFIX,cloudfront.net,选择节点
- DOMAIN-SUFFIX,ctitv.com.tw,选择节点
- DOMAIN-SUFFIX,cuhk.edu.hk,选择节点
- DOMAIN-SUFFIX,cusu.hk,选择节点
- DOMAIN-SUFFIX,discord.gg,选择节点
- DOMAIN-SUFFIX,discuss.com.hk,选择节点
- DOMAIN-SUFFIX,dropboxapi.com,选择节点
- DOMAIN-SUFFIX,duolingo.cn,选择节点
- DOMAIN-SUFFIX,edditstatic.com,选择节点
- DOMAIN-SUFFIX,flickriver.com,选择节点
- DOMAIN-SUFFIX,focustaiwan.tw,选择节点
- DOMAIN-SUFFIX,free.fr,选择节点
- DOMAIN-SUFFIX,gigacircle.com,选择节点
- DOMAIN-SUFFIX,hk-pub.com,选择节点
- DOMAIN-SUFFIX,hosting.co.uk,选择节点
- DOMAIN-SUFFIX,hwcdn.net,选择节点
- DOMAIN-SUFFIX,ifixit.com,选择节点
- DOMAIN-SUFFIX,iphone4hongkong.com,选择节点
- DOMAIN-SUFFIX,iphonetaiwan.org,选择节点
- DOMAIN-SUFFIX,iptvbin.com,选择节点
- DOMAIN-SUFFIX,linksalpha.com,选择节点
- DOMAIN-SUFFIX,manyvids.com,选择节点
- DOMAIN-SUFFIX,myactimes.com,选择节点
- DOMAIN-SUFFIX,newsblur.com,选择节点
- DOMAIN-SUFFIX,now.im,选择节点
- DOMAIN-SUFFIX,nowe.com,选择节点
- DOMAIN-SUFFIX,redditlist.com,选择节点
- DOMAIN-SUFFIX,s3.amazonaws.com,选择节点
- DOMAIN-SUFFIX,signal.org,选择节点
- DOMAIN-SUFFIX,smartmailcloud.com,选择节点
- DOMAIN-SUFFIX,sparknotes.com,选择节点
- DOMAIN-SUFFIX,streetvoice.com,选择节点
- DOMAIN-SUFFIX,supertop.co,选择节点
- DOMAIN-SUFFIX,tv.com,选择节点
- DOMAIN-SUFFIX,typepad.com,选择节点
- DOMAIN-SUFFIX,udnbkk.com,选择节点
- DOMAIN-SUFFIX,urbanairship.com,选择节点
- DOMAIN-SUFFIX,whispersystems.org,选择节点
- DOMAIN-SUFFIX,wikia.com,选择节点
- DOMAIN-SUFFIX,wn.com,选择节点
- DOMAIN-SUFFIX,wolframalpha.com,选择节点
- DOMAIN-SUFFIX,x-art.com,选择节点
- DOMAIN-SUFFIX,yimg.com,选择节点
- DOMAIN,api.steampowered.com,选择节点
- DOMAIN,store.steampowered.com,选择节点
- IP-CIDR,91.108.4.0/22,选择节点,no-resolve
- IP-CIDR,91.108.8.0/22,选择节点,no-resolve
- IP-CIDR,91.108.12.0/22,选择节点,no-resolve
- IP-CIDR,91.108.16.0/22,选择节点,no-resolve
- IP-CIDR,91.108.56.0/22,选择节点,no-resolve
- IP-CIDR,149.154.160.0/20,选择节点,no-resolve
- IP-CIDR6,2001:b28:f23d::/48,选择节点,no-resolve
- IP-CIDR6,2001:b28:f23f::/48,选择节点,no-resolve
- IP-CIDR6,2001:67c:4e8::/48,选择节点,no-resolve
- IP-CIDR,23.246.0.0/18,选择节点,no-resolve
- IP-CIDR,37.77.184.0/21,选择节点,no-resolve
- IP-CIDR,45.57.0.0/17,选择节点,no-resolve
- IP-CIDR,64.120.128.0/17,选择节点,no-resolve
- IP-CIDR,66.197.128.0/17,选择节点,no-resolve
- IP-CIDR,108.175.32.0/20,选择节点,no-resolve
- IP-CIDR,192.173.64.0/18,选择节点,no-resolve
- IP-CIDR,198.38.96.0/19,选择节点,no-resolve
- IP-CIDR,198.45.48.0/20,选择节点,no-resolve
- DOMAIN-SUFFIX,disneyplus.com,选择节点
- DOMAIN-SUFFIX,disney-plus.net,选择节点
- DOMAIN-SUFFIX,disneystreaming.com,选择节点
- DOMAIN-SUFFIX,dssott.com,选择节点
- DOMAIN-SUFFIX,bamgrid.com,选择节点
- DOMAIN-SUFFIX,playback-certs.bamgrid.com,选择节点
- DOMAIN-SUFFIX,disney.api.edge.bamgrid.com,选择节点
- DOMAIN-SUFFIX,disney.connections.edge.bamgrid.com,选择节点
- DOMAIN-SUFFIX,disney.content.edge.bamgrid.com,选择节点
- DOMAIN-SUFFIX,disney.playback.edge.bamgrid.com,选择节点
- DOMAIN-SUFFIX,cdn.registerdisney.go.com,选择节点
- DOMAIN-SUFFIX,execute-api.us-east-1.amazonaws.com,选择节点
- DOMAIN-SUFFIX,sanalytics.disnyplus.com,选择节点
- DOMAIN-SUFFIX,byspotify.com,选择节点
- DOMAIN-SUFFIX,pscdn.co,选择节点
- DOMAIN-SUFFIX,scdn.co,选择节点
- DOMAIN-SUFFIX,spoti.fi,选择节点
- DOMAIN-SUFFIX,spotify-everywhere.com,选择节点
- DOMAIN-SUFFIX,spotify.com,选择节点
- DOMAIN-SUFFIX,spotify.design,选择节点
- DOMAIN-SUFFIX,spotifycdn.com,选择节点
- DOMAIN-SUFFIX,spotifycdn.net,选择节点
- DOMAIN-SUFFIX,spotifycharts.com,选择节点
- DOMAIN-SUFFIX,spotifycodes.com,选择节点
- DOMAIN-SUFFIX,spotifyforbrands.com,选择节点
- DOMAIN-SUFFIX,spotifyjobs.com,选择节点
- DOMAIN-SUFFIX,audio-ak-spotify-com.akamaized.net,选择节点
- DOMAIN-SUFFIX,heads4-ak-spotify-com.akamaized.net,选择节点
- DOMAIN-SUFFIX,spclient.wg.spotify.com,选择节点
- DOMAIN-SUFFIX,deezer.com,选择节点
- DOMAIN-SUFFIX,dzcdn.net,选择节点
- DOMAIN-SUFFIX,kkbox.com,选择节点
- DOMAIN-SUFFIX,kkbox.com.tw,选择节点
- DOMAIN-SUFFIX,kfs.io,选择节点
- DOMAIN-SUFFIX,joox.com,选择节点
- DOMAIN-SUFFIX,pandora.com,选择节点
- DOMAIN-SUFFIX,p-cdn.us,选择节点
- DOMAIN-SUFFIX,sndcdn.com,选择节点
- DOMAIN-SUFFIX,soundcloud.com,选择节点
- DOMAIN-SUFFIX,pscdn.co,选择节点
- DOMAIN-SUFFIX,scdn.co,选择节点
- DOMAIN-SUFFIX,spotify.com,选择节点
- DOMAIN-SUFFIX,spoti.fi,选择节点
- DOMAIN-SUFFIX,tidal.com,选择节点
- DOMAIN-SUFFIX,c4assets.com,选择节点
- DOMAIN-SUFFIX,channel4.com,选择节点
- DOMAIN-SUFFIX,abema.io,选择节点
- DOMAIN-SUFFIX,ameba.jp,选择节点
- DOMAIN-SUFFIX,abema.tv,选择节点
- DOMAIN-SUFFIX,hayabusa.io,选择节点
- DOMAIN,abematv.akamaized.net,选择节点
- DOMAIN,ds-linear-abematv.akamaized.net,选择节点
- DOMAIN,ds-vod-abematv.akamaized.net,选择节点
- DOMAIN,linear-abematv.akamaized.net,选择节点
- DOMAIN-SUFFIX,aiv-cdn.net,选择节点
- DOMAIN-SUFFIX,aiv-delivery.net,选择节点
- DOMAIN-SUFFIX,amazonvideo.com,选择节点
- DOMAIN-SUFFIX,primevideo.com,选择节点
- DOMAIN,avodmp4s3ww-a.akamaihd.net,选择节点
- DOMAIN,d25xi40x97liuc.cloudfront.net,选择节点
- DOMAIN,dmqdd6hw24ucf.cloudfront.net,选择节点
- DOMAIN,d22qjgkvxw22r6.cloudfront.net,选择节点
- DOMAIN,d1v5ir2lpwr8os.cloudfront.net,选择节点
- DOMAIN-SUFFIX,bahamut.com.tw,选择节点
- DOMAIN-SUFFIX,gamer.com.tw,选择节点
- DOMAIN,gamer-cds.cdn.hinet.net,选择节点
- DOMAIN,gamer2-cds.cdn.hinet.net,选择节点
- DOMAIN-SUFFIX,bbc.co.uk,选择节点
- DOMAIN-SUFFIX,bbci.co.uk,选择节点
- DOMAIN-SUFFIX,dazn.com,选择节点
- DOMAIN-SUFFIX,dazn-api.com,选择节点
- DOMAIN,d151l6v8er5bdm.cloudfront.net,选择节点
- DOMAIN-SUFFIX,bamgrid.com,选择节点
- DOMAIN-SUFFIX,disney-plus.net,选择节点
- DOMAIN-SUFFIX,disneyplus.com,选择节点
- DOMAIN-SUFFIX,dssott.com,选择节点
- DOMAIN,cdn.registerdisney.go.com,选择节点
- DOMAIN-SUFFIX,encoretvb.com,选择节点
- DOMAIN,edge.api.brightcove.com,选择节点
- DOMAIN,bcbolt446c5271-a.akamaihd.net,选择节点
- DOMAIN-SUFFIX,fox.com,选择节点
- DOMAIN-SUFFIX,foxdcg.com,选择节点
- DOMAIN-SUFFIX,theplatform.com,选择节点
- DOMAIN-SUFFIX,uplynk.com,选择节点
- DOMAIN-SUFFIX,hbo.com,选择节点
- DOMAIN-SUFFIX,hbogo.com,选择节点
- DOMAIN-SUFFIX,hbonow.com,选择节点
- DOMAIN-SUFFIX,hbogoasia.com,选择节点
- DOMAIN-SUFFIX,hbogoasia.hk,选择节点
- DOMAIN,bcbolthboa-a.akamaihd.net,选择节点
- DOMAIN,players.brightcove.net,选择节点
- DOMAIN,s3-ap-southeast-1.amazonaws.com,选择节点
- DOMAIN,dai3fd1oh325y.cloudfront.net,选择节点
- DOMAIN,44wilhpljf.execute-api.ap-southeast-1.amazonaws.com,选择节点
- DOMAIN,hboasia1-i.akamaihd.net,选择节点
- DOMAIN,hboasia2-i.akamaihd.net,选择节点
- DOMAIN,hboasia3-i.akamaihd.net,选择节点
- DOMAIN,hboasia4-i.akamaihd.net,选择节点
- DOMAIN,hboasia5-i.akamaihd.net,选择节点
- DOMAIN,cf-images.ap-southeast-1.prod.boltdns.net,选择节点
- DOMAIN-SUFFIX,5itv.tv,选择节点
- DOMAIN-SUFFIX,ocnttv.com,选择节点
- DOMAIN-SUFFIX,hulu.com,选择节点
- DOMAIN-SUFFIX,huluim.com,选择节点
- DOMAIN-SUFFIX,hulustream.com,选择节点
- DOMAIN-SUFFIX,happyon.jp,选择节点
- DOMAIN-SUFFIX,hulu.jp,选择节点
- DOMAIN-SUFFIX,itv.com,选择节点
- DOMAIN-SUFFIX,itvstatic.com,选择节点
- DOMAIN,itvpnpmobile-a.akamaihd.net,选择节点
- DOMAIN-SUFFIX,kktv.com.tw,选择节点
- DOMAIN-SUFFIX,kktv.me,选择节点
- DOMAIN,kktv-theater.kk.stream,选择节点
- DOMAIN-SUFFIX,linetv.tw,选择节点
- DOMAIN,d3c7rimkq79yfu.cloudfront.net,选择节点
- DOMAIN-SUFFIX,litv.tv,选择节点
- DOMAIN,litvfreemobile-hichannel.cdn.hinet.net,选择节点
- DOMAIN-SUFFIX,channel5.com,选择节点
- DOMAIN-SUFFIX,my5.tv,选择节点
- DOMAIN,d349g9zuie06uo.cloudfront.net,选择节点
- DOMAIN-SUFFIX,mytvsuper.com,选择节点
- DOMAIN-SUFFIX,tvb.com,选择节点
- DOMAIN-SUFFIX,netflix.com,选择节点
- DOMAIN-SUFFIX,netflix.net,选择节点
- DOMAIN-SUFFIX,nflxext.com,选择节点
- DOMAIN-SUFFIX,nflximg.com,选择节点
- DOMAIN-SUFFIX,nflximg.net,选择节点
- DOMAIN-SUFFIX,nflxso.net,选择节点
- DOMAIN-SUFFIX,nflxvideo.net,选择节点
- DOMAIN-SUFFIX,netflixdnstest0.com,选择节点
- DOMAIN-SUFFIX,netflixdnstest1.com,选择节点
- DOMAIN-SUFFIX,netflixdnstest2.com,选择节点
- DOMAIN-SUFFIX,netflixdnstest3.com,选择节点
- DOMAIN-SUFFIX,netflixdnstest4.com,选择节点
- DOMAIN-SUFFIX,netflixdnstest5.com,选择节点
- DOMAIN-SUFFIX,netflixdnstest6.com,选择节点
- DOMAIN-SUFFIX,netflixdnstest7.com,选择节点
- DOMAIN-SUFFIX,netflixdnstest8.com,选择节点
- DOMAIN-SUFFIX,netflixdnstest9.com,选择节点
- IP-CIDR,23.246.0.0/18,选择节点,no-resolve
- IP-CIDR,37.77.184.0/21,选择节点,no-resolve
- IP-CIDR,45.57.0.0/17,选择节点,no-resolve
- IP-CIDR,64.120.128.0/17,选择节点,no-resolve
- IP-CIDR,66.197.128.0/17,选择节点,no-resolve
- IP-CIDR,108.175.32.0/20,选择节点,no-resolve
- IP-CIDR,192.173.64.0/18,选择节点,no-resolve
- IP-CIDR,198.38.96.0/19,选择节点,no-resolve
- IP-CIDR,198.45.48.0/20,选择节点,no-resolve
- DOMAIN-SUFFIX,dmc.nico,选择节点
- DOMAIN-SUFFIX,nicovideo.jp,选择节点
- DOMAIN-SUFFIX,nimg.jp,选择节点
- DOMAIN-SUFFIX,socdm.com,选择节点
- DOMAIN-SUFFIX,pbs.org,选择节点
- DOMAIN-SUFFIX,phncdn.com,选择节点
- DOMAIN-SUFFIX,pornhub.com,选择节点
- DOMAIN-SUFFIX,pornhubpremium.com,选择节点
- DOMAIN-SUFFIX,skyking.com.tw,选择节点
- DOMAIN,hamifans.emome.net,选择节点
- DOMAIN-SUFFIX,twitch.tv,选择节点
- DOMAIN-SUFFIX,twitchcdn.net,选择节点
- DOMAIN-SUFFIX,ttvnw.net,选择节点
- DOMAIN-SUFFIX,jtvnw.net,选择节点
- DOMAIN-SUFFIX,viu.com,选择节点
- DOMAIN-SUFFIX,viu.tv,选择节点
- DOMAIN,api.viu.now.com,选择节点
- DOMAIN,d1k2us671qcoau.cloudfront.net,选择节点
- DOMAIN,d2anahhhmp1ffz.cloudfront.net,选择节点
- DOMAIN,dfp6rglgjqszk.cloudfront.net,选择节点
- MATCH,规则外代理模式
