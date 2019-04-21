
$(function(){ 
    var myChart1 = echarts.init(document.getElementById('tab1-content'));
    var data1 = [{'name':'','value':105},
    {'name':'08:00','value':90},
    {'name':'09:00','value':115},
    {'name':'10:00','value':125},
    {'name':'11:00','value':110},
    {'name':'12:00','value':134},
    {'name':'13:00','value':145},
    {'name':'','value':165}]
    drawChart(myChart1,data1);
});
/*平台计算曲线*/
$('.tab-link1').on('click', function(){
    clearTimeout(timer)
    var timer = setTimeout(function () {
        var myChart1 = echarts.init(document.getElementById('tab1-content'));
        var data1 = [{'name':'','value':105},
        {'name':'08:00','value':90},
        {'name':'09:00','value':115},
        {'name':'10:00','value':125},
        {'name':'11:00','value':110},
        {'name':'12:00','value':134},
        {'name':'13:00','value':145},
        {'name':'','value':165}]
        drawChart(myChart1,data1);
    },10)

})
/*挖矿用户量曲线*/
$('.tab-link2').on('click', function(){
    clearTimeout(timer)
    var timer = setTimeout(function () {
        var myChart2 = echarts.init(document.getElementById('tab2-content'));
        var data2 = [{'name':'','value':105},
        {'name':'08:00','value':90},
        {'name':'09:00','value':115},
        {'name':'10:00','value':125},
        {'name':'11:00','value':110},
        {'name':'12:00','value':134},
        {'name':'13:00','value':145},
        {'name':'','value':165}]
        drawChart(myChart2,data2);
    },10)

})
/*新增安装量曲线*/
$('.tab-link3').on('click', function(){
    clearTimeout(timer)
    var timer = setTimeout(function () {
        var myChart3 = echarts.init(document.getElementById('tab3-content'));
        var data3 = [{'name':'','value':105},
        {'name':'08:00','value':90},
        {'name':'09:00','value':115},
        {'name':'10:00','value':125},
        {'name':'11:00','value':110},
        {'name':'12:00','value':134},
        {'name':'13:00','value':145},
        {'name':'','value':165}]
        drawChart(myChart3,data3);
    },10)

})
/*可挖矿游戏曲线*/
$('.tab-link4').on('click', function(){
    clearTimeout(timer)
    var timer = setTimeout(function () {
        var myChart4 = echarts.init(document.getElementById('tab4-content'));
        var data4 = [{'name':'','value':105},
        {'name':'08:00','value':90},
        {'name':'09:00','value':115},
        {'name':'10:00','value':125},
        {'name':'11:00','value':110},
        {'name':'12:00','value':134},
        {'name':'13:00','value':145},
        {'name':'','value':165}]
        drawChart(myChart4,data4);
    },10)

})
// 指定图表的配置项和数据
function drawChart(myChart,data) {
    var option = {
        grid: {
            left: 0,
            bottom: 0,
            right: 0,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                show: true,
                color: '#fff',
                margin: -100,
            },
            data: Object.keys(data).map(function (key) {
                return data[key].name;
            }),//x轴左边，首尾两个需传空值才会有设计稿效果，相应的数据可能要多传两组数值进来
            axisTick: { show: false,},
            axisLine: {show: false,},
        },
        yAxis: {
            type: 'value',
            axisTick: { show: false,},
            axisLabel: {show: false},
            splitLine: {
               show: true,
               lineStyle: {
                   color: 'rgba(56,184,181, .4)',
               }
           },
           axisLine: {show: false,},
       },
       series: [{
        data: Object.keys(data).map(function (key) {
            return data[key].value;
        }),
        type: 'line',
        smooth: true, 
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                 { offset: 0,  color: 'rgba(56,184,181, 1)'}, 
                 { offset: 0.7,  color: 'rgba(46,108,193, 1)'}
                       ], false),   // 线条颜色
            }
        },
            areaStyle: { //区域填充样式
                normal: {
                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                     { offset: 0,  color: 'rgba(46,134,207, 0.9)'}, 
                     { offset: 1,  color: 'rgba(61,234,255, 0.1)'}
                     ], false),

             }
         },
         label: {
            show: true,
            position: 'top',
            textStyle: {
                color: "#00deff"
            },

        },
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#feca17",
                borderColor: 'rgba(254,202,23,.5)',
                borderWidth: 4,

            },
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}