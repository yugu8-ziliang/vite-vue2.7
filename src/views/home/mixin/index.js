import * as echarts from 'echarts';
export default {
    data() {
        return {
            ResizeObserver: '',
        };
    },
    methods: {
        createChart({ dom, data,name,money, option }) {
            let elem = document.getElementById(dom);
            let myChart = echarts.init(elem);
            let options = option || {
                title: {
                    text: name,
                    subtext: money+"元",
                    textStyle: {
                        fontSize: 16,
                        color: "rgba(1,6,33,0.75)",
                        fontWeight: 400,
                        width: 160,
                        overflow: "truncate"
                    },
                    subtextStyle: {
                        fontSize: 18,
                        color: "rgba(1,6,33,0.75)",
                        fontWeight: 400,
                        width: 160,
                        overflow: "truncate"
                    },
                    textAlign: "center", //图例文字居中显示
                    x: "69%",   //距离左边的距离
                    y: "45%"    //距离上边的距离
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: "orient",
                    top: 'center',
                    left: '24px',
                    itemGap: 24,
                    itemWidth: 9,
                    itemHeight: 9,
                    icon: "circle",
                    textStyle: {
                        color: "#010621BF",
                        overflow: "truncate"
                    },
                    formatter: function (params) {
                        var legendIndex = 0;
                        data.forEach(function (v, i) {
                            if (v.name == params) {
                                legendIndex = i;
                            }
                        });
                        return params + " " + data[legendIndex].value + '元';
                    }
                },
                series: [
                    {
                        type: 'pie',
                        width: "70%",
                        radius: ['45%', '80%'],
                        center: ['100%', 'center'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        data
                    }
                ]
            }
            myChart.setOption(options);

            this.addResizeListen(elem, this.debounce((entries) => {
                myChart.resize();
            }, 50))
        },
        addResizeListen(dom, callback) {
            this.ResizeObserver = new ResizeObserver(entries => {
                if (callback) callback(entries)
            })
            this.ResizeObserver.observe(dom)
        },
        // 防抖
        debounce(func, wait) {
            let timer
            return function () {
                const context = this // 注意 this 指向
                const args = arguments // arguments中存着e
                if (timer) clearTimeout(timer)
                timer = setTimeout(() => {
                    func.apply(this, args)
                }, wait)
            }
        },
    }, 
    beforeDestroy() {
        // 销毁时消除元素的尺寸监听
        this.ResizeObserver && this.ResizeObserver.disconnect()
    },
};
