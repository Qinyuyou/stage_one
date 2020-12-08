   // 1. 让game游戏区域向下移动
   var game = document.querySelector(".game");

   // 6. 定义一个变量,保存当前游戏状态是否结束
   var isOver = false;

   // 7. 定义一个变量,保存当前下落的速度
   var speed = 1;

   // 开启定时器
   var timer = setInterval(function () {
       game.style.top = game.offsetTop + speed + "px";


       // 2. 如果当前游戏区的top值为0的时候,我们就创建新的一行
       if (game.offsetTop >= 0) {
           // 4. 当game游戏区域的总行数超过5,删除多余的底部一行
           if (game.children.length >= 5) {
               // 删除最后一个子元素
               game.removeChild(game.lastElementChild);
           }

           // 7. 游戏区域到达底部,判断游戏区域最后一个子元素中的黑块是否被点击
           // 判断最后一行是否带有自定义pass属性
           var passValue = game.children[game.children.length - 1].getAttribute("pass");

           // 判断自定义属性是否为true
           if (passValue == null) {
               alert("游戏结束");
               // 改变游戏状态
               isOver = true;
               // 清除定时器
               clearInterval(timer);
               return;
           }


           // 创建一行
           var newRow = document.createElement("div");
           // 设置行的类名
           newRow.className = "row";

           // 3. 随机黑块
           // 得到一个1~4之间的随机整数
           var randomNum = Math.floor(Math.random() * 4 + 1);

           for (var i = 1; i <= 4; i++) {
               // 创建行里面的格子
               var newDiv = document.createElement("div");

               // 如果当前的i值等于我们随机值,我们就设置这个格子为黑块
               if (i == randomNum) {
                   newDiv.className = "black";
               }

               // 追加格子到行中
               newRow.appendChild(newDiv);
           }

           // 把新行加到game游戏区子元素列表最前面
           game.insertBefore(newRow, game.firstElementChild);

           // 恢复游戏区域的top值为-100px
           game.style.top = "-100px";
       }
   }, 15);

   // 获取分数文本框
   var scoreInput = document.querySelector(".score");

   // 5. 我们使用事件委托给game绑定单击事件,让每个小格子都可以被点击
   game.onclick = function (e) {
       // 获取事件对象
       var e = e || window.event;
       // 真正触发事件的那个对象
       // console.log( e.target );

       // 判断用户点击的是白块还是黑块

       // console.log( e.target.className );

       // 判断当前游戏状态
       if (!isOver) {// 游戏尚未结束
           if (e.target.className == "black") {
               // 如果点击的是黑块,则干嘛? 黑变白,并加1分
               // console.log("你点击的是黑块");

               // 黑变白,其实就删除.black这个类名
               e.target.removeAttribute("class");

               // 分数加1
               scoreInput.value++;

               // 判断当前分数文本框的值是否为5的倍数
               if (scoreInput.value % 5 == 0) {
                   // 如果是5的倍数,我们就让速度speed变量自加0.5
                   speed += 0.5;
               }

               // 给黑块的父元素添加一个自定义属性
               e.target.parentNode.setAttribute("pass", true);

           } else {
               // 如果点击的是白块,则干嘛? 提示游戏结束,清除定时器
               // console.log("你点击的是白块");

               alert("游戏结束");
               window.clearInterval(timer);
               // 修改当前游戏状态
               isOver = true;
           }
       } else {// 游戏已经结束
           alert("游戏已经结束,请刷新页面重新开始");
       }

   }
