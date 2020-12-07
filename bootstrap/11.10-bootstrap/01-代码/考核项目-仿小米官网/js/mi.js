// jQuery的入口函数
$(function(){
    // 左侧导航功能开始
    // 左侧导航栏数组
    var datas = [
        ["Redmi 9","腾讯黑鲨游戏手机3","Redmi 8A","小米移动 电话卡"],
        ["小米电视 大师 65英寸OLED","小米电视5 75英寸","全面屏电视Pro 55英寸","小米电视4A 58英寸"],
        ["RedmiBook 13","显示器"],
        ["冰箱","微波炉","电磁炉","插线板"],
        ["手环5NFC","滑板车","无线车充"],
        ["打印机","摄像机","小爱音箱"],
        ["移动电源","手机壳"],
        ["洗手机","体脂称","婴儿推车"],
        ["小爱音箱Art","Redmi音箱","蓝牙音箱"],
        ["小背包","床垫","驱蚊器"]
    ];
    // 遍历数组动态创建数据
    $.each( datas, function(index, item ){
        // 创建.item标签
        var oItem = $(`<div class="item" style="display: none;"></div>`);

        item.forEach(function(item2, index2 ){
            // 创建.item ul标签
            var oUl = $(`<ul></ul>`);
            for(var i = 1; i <= 6 ; i++){
                // 创建.item ul li标签
                var oLi = $(`<li><a href="#"><img src="images/nav_imgs/${item2}.png">${item2}</a></li>`);
                // 追加
                oUl.append( oLi );
            }
            // 追加
            oItem.append( oUl );
        })

        // 追加
        $(".banner .nav .detail").append( oItem );
    })
    
    // 鼠标移上.nav_title li事件
    $(".nav_title li").mouseover(function(){
        // 显示.detail
        $(".banner .nav .detail").show();
        // 拿到当前li的索引号
        var index = $(this).index();
        // 显示对应的.item
        $(".banner .nav .detail .item").eq(index).show().siblings(".item").hide();
    });

    // 鼠标移出.nav_title li事件
    $(".nav_title li").mouseout(function(){
        // 隐藏.detail
        $(".banner .nav .detail").hide();
    });

    // 鼠标移上移出.banner .nav .detail .item事件
    $(".banner .nav .detail .item").hover(function(){
        $(".banner .nav .detail").show();
    },function(){
        $(".banner .nav .detail").hide();
    })
    // 左侧导航功能结束

    // 小米闪购滑动功能开始
    var iflashbuyDatas = [
        {
            pro_name:  "小米小爱音箱 Play（白色）量产版 白色",
            pro_desc:  "听音乐、语音遥控家电",
            old_price: "99元",
            new_price: "169元"
        },{
            pro_name:  "米家扫拖一体机器人 白色",
            pro_desc:  "扫得干净，拖得彻底",
            old_price: "1599元",
            new_price: "1999元"
        },{
            pro_name:  "小米米家智能门锁 标准碳素黑",
            pro_desc:  "一体化活体指纹识别，多种开锁方式",
            old_price: "1199元",
            new_price: "1299元"
        },{
            pro_name:  "MIJOY 抽纸青春版 24包/箱 ",
            pro_desc:  "精选原生竹浆，健康环保",
            old_price: "27.9元",
            new_price: "32.9元"
        },{
            pro_name:  "米家两门冰箱 160L 银色",
            pro_desc:  "小巧能装，速冻养鲜",
            old_price: "929元",
            new_price: "1099元"
        },{
            pro_name:  "巨省电 | 小米新1级空调X 1.5匹",
            pro_desc:  "变频节能巨省电，自清洁",
            old_price: "2099元",
            new_price: "2399元"
        },{
            pro_name:  "小米AI音箱",
            pro_desc:  "听音乐、语音遥控家电",
            old_price: "199元",
            new_price: "299元"
        },{
            pro_name:  "17PIN 星果杯 樱花粉",
            pro_desc:  "随心随行，悦饮随心",
            old_price: "99元",
            new_price: "139元"
        },{
            pro_name:  "小米移动电源10000mAh高配 灰色",
            pro_desc:  "轻薄设计，轻松出行",
            old_price: "129元",
            new_price: "149元"
        },{
            pro_name:  "米家手持无线吸尘器1C 白色",
            pro_desc:  "吸力续航双强劲，清洁小怪兽",
            old_price: "899元",
            new_price: "999元"
        },{
            pro_name:  "米家扫拖一体机器人 白色",
            pro_desc:  "扫得干净，拖得彻底",
            old_price: "1599元",
            new_price: "1999元"
        },{
            pro_name:  "圈厨多功能涮烤锅 黑色火锅盘",
            pro_desc:  "深浅双盘多用途",
            old_price: "329元",
            new_price: "399元"
        },{
            pro_name:  "米家落地扇 白色",
            pro_desc:  "静享智能轻风",
            old_price: "199元",
            new_price: "219元"
        },{
            pro_name:  "小米曲面显示器 34英寸 黑",
            pro_desc:  "超宽大环绕显示屏",
            old_price: "2199元",
            new_price: "2499元"
        },{
            pro_name:  "自清洁 | 米家互联网立式空调 2匹",
            pro_desc:  "一级能效更省电，自清洁",
            old_price: "3499元",
            new_price: "4299元"
        },{
            pro_name:  "米家空气净化器Pro",
            pro_desc:  "大空间，快循环",
            old_price: "999元",
            new_price: "1499元"
        },{
            pro_name:  "小米手环4 石墨黑",
            pro_desc:  "大屏彩显，20天超长续航",
            old_price: "149元",
            new_price: "169元"
        },{
            pro_name:  "小米路由器4C 白色",
            pro_desc:  "300M单频，高增益4天线",
            old_price: "59元",
            new_price: "99元"
        },{
            pro_name:  "Fun Home保温泡茶杯（茶水分离） 白色 520ml",
            pro_desc:  "茶水分离，长效保温",
            old_price: "79元",
            new_price: "99元"
        },{
            pro_name:  "最生活毛巾·Air（10条装） 白色+素蓝",
            pro_desc:  "给生活一条好毛巾",
            old_price: "99元",
            new_price: "169元"
        },{
            pro_name:  "Pinlo迷你三明治机 白色",
            pro_desc:  "小巧身材，一机多用",
            old_price: "109元",
            new_price: "169元"
        },{
            pro_name:  "小米显示器1A 23.8英寸 黑色",
            pro_desc:  "高清画质，超广视角",
            old_price: "679元",
            new_price: "699元"
        },{
            pro_name:  "小浪智能衣物消毒烘干机 白色 35L",
            pro_desc:  "三重杀菌 柔热烘干",
            old_price: "489元",
            new_price: "549元"
        },{
            pro_name:  "小米米家智能门锁 磨砂金 霸王锁体 磨砂金",
            pro_desc:  "适配霸王锁体，多种开锁方式",
            old_price: "1499元",
            new_price: "1799元"
        },{
            pro_name:  "8H多功能护颈枕U1 混灰色",
            pro_desc:  "乳胶颗粒填充 ，舒适入睡",
            old_price: "69元",
            new_price: "79元"
        },{
            pro_name:  "悦米YM人体工学椅 白色",
            pro_desc:  "健康坐姿，舒适体验",
            old_price: "1199元",
            new_price: "1499元"
        },{
            pro_name:  "米家扫拖机器人1C 白色",
            pro_desc:  "能扫能拖，地面清洁交给我",
            old_price: "1199元",
            new_price: "1299元"
        },{
            pro_name:  "RedmiBook 16 i7 16G 512G MX350 灰色",
            pro_desc:  "便携大屏，全“芯”超越",
            old_price: "5499元",
            new_price: "5699元"
        },{
            pro_name:  "最生活浴巾·Air（4条装） 白色+素蓝",
            pro_desc:  "享用一条洁净好浴巾",
            old_price: "169元",
            new_price: "269元"
        },{
            pro_name:  "米家运动鞋4 花灰色 41",
            pro_desc:  "轻盈若絮,弹若脱兔",
            old_price: "189元",
            new_price: "199元"
        },{
            pro_name:  "小米游戏鼠标 黑色",
            pro_desc:  "掌中游戏利器，为真玩家而生",
            old_price: "169元",
            new_price: "199元"
        },{
            pro_name:  "小米手表 尊享版 曜石黑",
            pro_desc:  "能打电话、能下载APP，才是真正的智能手表",
            old_price: "1799元",
            new_price: "1999元"
        }
    ];

    // 根据数组遍历数据
    iflashbuyDatas.forEach(function(item, index ){
        var currentImgIndex = index+1;
        currentImgIndex = currentImgIndex < 10 ? "0"+currentImgIndex : currentImgIndex;
        var oLi = $(`<li>
                    <a href="#">
                        <img src="images/shangou/iflashbuy${currentImgIndex}.jpg">
                        <p class="biaoti">${item.pro_name}</p>
                        <p class="desc">${item.pro_desc}</p>
                        <p class="price">
                            <span>${item.old_price}</span>
                            <del>${item.new_price}</del>
                        </p>
                    </a>
                </li>`);
        $(".iflashbuy .content .right ul").append( oLi );
    })

    // 设置.iflashbuy .content .right ul的宽度
    $(".iflashbuy .content .right ul").width( 7936 );

    // 定义一个变量,保存当前滑动的索引号
    var currentScrollNum = 0;
    // 右侧滑动按钮
    $(".icon-left").on("click", fn1 );


    // 定义一个节流阀变量
    var flag = true;

    function fn1(){
        if( flag ){// 判断节流阀状态
            flag = false;// 关闭节流阀
            currentScrollNum++;
            $(".iflashbuy .content .right ul").stop().animate({
                "marginLeft" : -992*currentScrollNum
            }, 1000 ,function(){
                flag = true;// 重新打开节流阀
            });

            ableClick( currentScrollNum );
        }
    }
    
    // 左侧滑动按钮
    $(".icon-arrow-left-copy").on("click", fn2 );
    
    function fn2 (){
        if( flag ){// 判断节流阀状态
            flag = false;// 关闭节流阀
            currentScrollNum--;
            $(".iflashbuy .content .right ul").stop().animate({
                "marginLeft" : -992*currentScrollNum
            }, 1000 ,function(){
                flag = true;// 重新打开节流阀
            })
    
            ableClick( currentScrollNum );
        }
    }

    // 最大索引号是多少?
    var maxiCurrentScrollNum = iflashbuyDatas.length/4 - 1;
    // 当前currentScrollNum=0  左侧按钮禁用,解绑点击事件     右侧按钮不禁用
    // 当前currentScrollNum=1  左侧按钮不禁用   右侧按钮不禁用
    // 当前currentScrollNum=2  左侧按钮不禁用   右侧按钮不禁用
    // 当前currentScrollNum=3  左侧按钮不禁用   右侧按钮不禁用
    // 当前currentScrollNum=4  左侧按钮不禁用   右侧按钮不禁用
    // 当前currentScrollNum=5  左侧按钮不禁用   右侧按钮不禁用
    // 当前currentScrollNum=6  左侧按钮不禁用   右侧按钮不禁用
    // 当前currentScrollNum=7  左侧按钮不禁用   右侧按钮禁用

    function ableClick( num ){
        if( num == 0 ){
            $(".icon-arrow-left-copy").addClass("disabled");
            $(".icon-arrow-left-copy").off("click");
            $(".icon-left").removeClass("disabled");
        }else if( num <= 6 ){
            $(".icon-arrow-left-copy").removeClass("disabled");
            
            $(".icon-left").off("click").on("click" , fn1);
            $(".icon-arrow-left-copy").off("click").on("click" , fn2 );

            $(".icon-left").removeClass("disabled");
        }else if( num == 7 ){
            $(".icon-arrow-left-copy").removeClass("disabled");
            $(".icon-left").addClass("disabled");
            $(".icon-left").off("click");
        }
    }

    ableClick( currentScrollNum );


    // 自动滑动
    /* setInterval(function(){
        fn1();
    },1000 ); */
    
    // 小米闪购滑动功能结束
})