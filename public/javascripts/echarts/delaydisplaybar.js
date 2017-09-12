/**
 *实例参考http://echarts.baidu.com/demo.html#bar-animation-delay
 *api参考http://echarts.baidu.com/option.html#series-bar.markLine.animationDelayUpdate
*/
var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 0; i < 100; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
}

ddbOption = {
    title: {
        text: '柱状图动画延迟'
    },
    legend: {
        data: ['bar', 'bar2'],
        align: 'left'
    },
    toolbox: {//工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
        // y: 'bottom',
        feature: {//各工具配置项。
            magicType: {//动态类型切换 示例：
                type: ['stack', 'tiled']//启用的动态类型，包括'line'（切换为折线图）, 'bar'（切换为柱状图）, 'stack'（切换为堆叠模式）, 'tiled'（切换为平铺模式）。
            },
            dataView: {},//数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
            saveAsImage: {//保存为图片。
                pixelRatio: 2//保存图片的分辨率比例，默认跟容器相同大小，如果需要保存更高分辨率的，可以设置为大于 1 的值，例如 2。
            }
        }
    },
    tooltip: {},//提示框组件。
    xAxis: {
        data: xAxisData,
        silent: false,//坐标轴是否是静态无法交互。
        splitLine: {//坐标轴在 grid 区域中的分隔线。
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {//初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果。
            return idx * 10;// 越往后的数据延迟越大
        }
    }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    }],
    animationEasing: 'elasticOut',//初始动画的缓动效果。不同的缓动效果可以参考 缓动示例。
    animationDelayUpdate: function (idx) {//数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。
        return idx * 5;
    }
};

$(function(){
    var ddbEc = echarts.init(document.getElementById('delaydisplaybar'));
    ddbEc.setOption(ddbOption);
})
