function music(){
    document.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/start.css">
    <title>声情并茂 | 首页</title>
</head>
<body>
    <!-- 网页头部 -->
    <header>
        <nav class="navbar">
            <img src="./img/logo.png" alt="陈烁天的网页" height="50px">
            <ul>
                <li><a href="index.html">首页</a></li>
                <li><a class="now" href="start.html">开始</a></li>
                <li><a href="user.html">注册</a></li>
                <li><p id="uname">username</p></li>
            </ul>
        </nav>
        <div class="showcase"><h1>声情并茂游戏</h1></div>
    </header>
    <section>
        <button class="btn">A题</button>
        <audio src="./music/泽六 - 科目三.mp3" controls="controls" class="audio"></audio>
        <p class="geci">皇朝中我指鹿为马<br>
            一人一刀破金甲<br>
            若有谁还不伏法<br>
            满门抄斩千刀刮<br>
            九重天外苍生劫<br>
            封神篇说困龙诀<br>
            就算此生成魔邪<br>
            九转轮回化彩蝶</p>
    </section>
</section>
    <footer class="footer">
        <h4>声情并茂</h4>
        <p>陈烁天 &copy; All Right Reserved</p>
    </footer>
    <script src="./js/start.js"></script>
</body>
</html>
    `)
}
function words(){
    document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="./css/start.css">
        <title>声情并茂 | 首页</title>
    </head>
    <body>
        <!-- 网页头部 -->
        <header>
            <nav class="navbar">
                <img src="./img/logo.png" alt="陈烁天的网页" height="50px">
                <ul>
                    <li><a href="index.html">首页</a></li>
                    <li><a class="now" href="start.html">开始</a></li>
                    <li><a href="user.html">注册</a></li>
                    <li><p id="uname">username</p></li>
                </ul>
            </nav>
            <div class="showcase"><h1>声情并茂游戏</h1></div>
        </header>
        <section>
            <button class="btn" onclick="music()">B题</button>
            <p class="geci">成语：亡羊补牢</p>
        </section>
    </section>
        <footer class="footer">
            <h4>声情并茂</h4>
            <p>陈烁天 &copy; All Right Reserved</p>
        </footer>
        <script src="./js/start.js"></script>
    </body>
    </html>
    `)
    }