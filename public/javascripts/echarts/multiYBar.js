/**
 *多Y轴实例很实用，在追求图表趋势效果一致但是数据相差很大的情形下，只需设置多个不同比例的Y轴即可
 *
**/

var colors = ['#5793f3', '#d14a61', '#675bba'];

mybOption = {
    color: colors,
    title: {
        text: '多 Y 轴示例'
    },
    tooltip: {//提示框组件。可以设置在全局，即 tooltip；可以设置在坐标系中，即 grid.tooltip、polar.tooltip、single.tooltip；可以设置在系列中，即 series.tooltip；可以设置在系列的每个数据项中，即 series.data.tooltip
        trigger: 'axis',//坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。'none'什么都不触发。'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        axisPointer: {//坐标轴指示器配置项。实际上坐标轴指示器的全部功能，都可以通过轴上的 axisPointer 配置项完成（例如 xAxis.axisPointer 或 angleAxis.axisPointer）。但是使用 tooltip.axisPinter 在简单场景下会更方便一些。
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '蒸发量',
            min: 0,
            max: 250,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '降水量',
            min: 0,
            max: 2500,
            position: 'right',
            offset: 80,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'降水量',
            type:'bar',
            yAxisIndex: 1,
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 2,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};
$(function(){
    var mybEc = echarts.init(document.getElementById('multiYBar'));
    mybEc.setOption(mybOption);
})
