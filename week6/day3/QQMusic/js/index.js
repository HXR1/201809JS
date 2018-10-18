let QQMusic = (function () {
    let $playBtn = $(".playBtn"),
        $QQMusic = $(".QQMusic"),
        $header = $QQMusic.find("header"),
        $footer = $QQMusic.find("footer"),
        $main = $(".main"),
        $songWord = $(".songWord"),
        $runTime = $(".runTime"),
        $innerL = $(".innerL"),
        $endTime = $(".endTime"),
        myAudio = $("#audio")[0];//音频文件获取的得是js对象
    function setHeight() {
        //整屏的高度 - header的高度- footer的高度 - main的margintop值-songWord的上下padding
        let winH = document.documentElement.clientHeight || document.body.clientHeight;
        let h = winH - $header.height() - $footer.height() - parseInt($main.css("margin-top")) - parseInt($songWord.css("padding-top")) * 2;
        $songWord.css("height", `${h}px`);
    }

    function bindHtml(ary) {
        let str = "";
        ary.forEach((item, index) => {
            //item表示数组中的每一项对象
            str += `<p data-m = "${item.m}" data-s="${item.s}">${item.content}</p>`;
        });
        $songWord.html(str);
    }

    function btnRotate() {
        //如何判断音频文件加载完了？canplay
        myAudio.addEventListener("canplay", function () {
            playMusic();
        }, false)
    }

    function playMusic() {
        //设置总的播放时间
        //console.log(myAudio.duration);//单位秒 总时间
        $endTime.html(formTime(myAudio.duration));
        //对音乐图标绑定点击事件，若是停止则播放，若是播放则停止
        $playBtn.singleTap(function () {
            if (myAudio.paused) {//若为true则表示停止，若为false则表示播放
                myAudio.play(); //音频文件播放
                $(this).addClass("rotateClass");
                computedTime();
            } else {
                myAudio.pause();//音频文件停止播放
                $(this).removeClass("rotateClass");
            }

        })
    }
    function computedTime(){
        let duration = myAudio.duration;
        var timer  = window.setInterval(function(){
            let curTime = myAudio.currentTime;//当前播放的时间
            $runTime.html(formTime(curTime));
            $innerL.css("width",curTime/duration*100+"%");
            if(curTime>=duration){
                clearInterval(timer);
                $playBtn.removeClass("rotateClass");
                $songWord.css("transform","translate(0)");
                $runTime.html("00:00");
                $innerL.css("width","0%");
            }else{
                matchLyric();//匹配歌词的操作
            }
        },500);
    }
    let pos = 0;
    //4.歌词匹配
    function matchLyric(){
        //通过当前播放的时间找到对应的歌词，添加选中效果
        let curTime = formTime(myAudio.currentTime);//"00:01"
        let [m,s] = curTime.split(":") //["00","01"];
        let $oPs = $songWord.children("p");
        let $oP = $oPs.filter(`[data-m="${m}"]`).filter(`[data-s="${s}"]`);
        if($oP.length===0) return;
        if($oP.hasClass("active")) return;
        if($oP.length>=1) $oP.addClass("active").siblings("p").removeClass("active");
        let index =  $oP.index(); //选中歌词的索引
        if(index>2){
            //放歌词的盒子songWord 每次往上移动一条歌词的高度 每次往上移动累加每条歌词的高度
            pos+=$oP.height();
            $songWord.css("transform",`translateY(-${pos}px)`);
        }

    }

    function formTime(time) {
        var m = parseInt(time / 60);
        m = m < 10 ? "0" + m : m;
        var s = parseInt(time - m * 60);
        s = s < 10 ? "0" + s : s;
        return `${m}:${s}`;
    }

    return {
        init() {
            //1.设置放置歌词盒子的高度
            setHeight();
            //2.通过ajax获取数据，并绑定到页面上
            $.ajax({
                url: "data.json",
                dataType: "json",
                success: function (data) {
                    data = data.lyric;
                    //[{m:0,s:30,content:""},{},{}]
                    let reg = /\[(\d{2}):(\d{2})\.\d{2}\]([^\[]+)/g;
                    let ary = [];
                    data.replace(reg, function ($0, $1, $2, $3) {
                        let obj = {};
                        obj.m = $1;
                        obj.s = $2;
                        obj.content = $3;
                        ary.push(obj);
                    });
                    bindHtml(ary);
                    //3.处理播放和停止，绑定点击事件
                    btnRotate();

                }
            })

        }
    }
})();
QQMusic.init();