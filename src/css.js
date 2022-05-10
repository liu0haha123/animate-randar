const string = `
.container *,
.container *::before,
.container *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* 布置一下背景,给雷达一个居中*/
.container {
    width: 100%;
    min-height: 50vh;
    padding: 0px 0;
    text-align: center;
    overflow: hidden;
    background-image: linear-gradient(90deg, rgb(89, 76, 75), rgb(8, 9, 2));
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
}

/* 设计一下表盘*/
.container .randar-box {
    width: 360px;
    height: 360px;
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 20px;

    --green: hsl(134, 34%, 38%);
    --line-color: #212121;
}

.container .randar-box .randar-content {
    /* 先定位一下表盘*/
    display: flex;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    border: 15px solid rgb(243, 236, 236);
    /* 线性重复渐变绘制地图*/
    background: radial-gradient(#afadad 50%, #0a0a0a),
        repeating-linear-gradient(0deg,
            var(--line-color) 0px,
            var(--line-color) 1px,
            transparent 1px,
            transparent 25px),
        repeating-linear-gradient(90deg,
            var(--line-color) 0px,
            var(--line-color) 1px,
            transparent 1px,
            transparent 25px),
        linear-gradient(135deg, var(--green), var(--green));
    /* 设置一下背景混合模式，并且调整网格的位置。让网格和背景融合*/
    background-blend-mode: soft-light;
    background-position-x: 20px;
    background-position-y: 7px;
    will-change: transform;
}

/* 用伪元素修正一下雷达的边框*/
.container .randar-box .randar-content::before {
    content: "";
    display: block;
    width: 296px;
    height: 296px;
    position: absolute;
    border-radius: 50%;
    border: 1px solid #355555;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset 0 0 20px 2px #333,
        0 0 12px #999;

}

/* 定位一下自己*/
.container .randar-box .randar-content .randar-pos {
    width: 0;
    height: 0;
    position: absolute;
    border-width: 12px 10px;
    border-style: solid;
    border-color: transparent transparent #ca4828 transparent;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -18px;
}

/* 设计一下敌人*/

.randar-ball {
    width: 10px;
    height: 10px;
    background: #f7f459;
    position: absolute;
    border-radius: 50%;
    box-shadow: 0px 0px 5px #ecea68;
    animation: flash 3.1s linear infinite;
}

.randar-ball:nth-of-type(1) {
    left: 29px;
    top: 94px;
}

.randar-ball:nth-of-type(2) {
    left: 58px;
    top: 65px;
}

.randar-ball:nth-of-type(3) {
    left: 56px;
    top: 78px;
}

.randar-ball:nth-of-type(4) {
    left: 204px;
    top: 228px;
}

/* 加个闪烁*/
@keyframes flash {

    0%,
    50%,
    to {
        opacity: 1;
    }

    25%,
    75% {
        opacity: 0.1;
    }
}
/*加一个炫酷的扫描动画*/
.randar-content::after {
    content: "";
    background: linear-gradient(var(--green) 0%, black 60%), linear-gradient(-90deg, black 50%, var(--green) 50%);
    background-blend-mode: darken;
    position: absolute;
    width: 290px;
    height: 290px;
    margin-left: -145px;
    margin-top: -145px;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    will-change: opacity;
    opacity: 0.15;
    z-index: 88;
    background-blend-mode: darken;
    animation: scan 5s linear infinite;
}

@keyframes scan {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
`
export default string