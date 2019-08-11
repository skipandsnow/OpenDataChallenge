$('document').ready(function () {
    renderPowerChart();
    renderFivePowerChart();
    // renderWordCloud();
    initWordCloud();
});

function renderPowerChart() {
    Highcharts.chart('powerCombat', {
        chart: {
            type: 'bar'
        },
        title: {
            text: '戰鬥力大比拼'
        },
        xAxis: {
            categories: ['']
        },
        yAxis: {
            min: 0,
            title: {
                text: '被告 V.S 原告'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'percent',
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return this.series.name + ": " + Highcharts.numberFormat(this.percentage) + '%';
                    },
                    style: {
                        fontSize: 20 + 'px'
                    }
                }
            }
        },
        series: [{
            name: '被告',
            data: [500]
        }, {
            name: '原告',
            data: [1200]
        }]
    });
}


function renderFivePowerChart() {
    var series = ['車禍糾紛', '遺產繼承', '勞資糾紛', '消費爭議', '房地糾紛'];
    var seriesData = [
        {
            name: '被告',
            data: [43000, 19000, 60000, 35000, 17000],
            pointPlacement: 'on'
        }, {
            name: '原告',
            data: [50000, 39000, 42000, 31000, 26000],
            pointPlacement: 'on'
        }
    ];
    Highcharts.chart('fivePowerCombat', {

        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: '律師專長五力分析',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: series,
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'center',
            verticalAlign: 'bottom'
        },

        series: seriesData,

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'bottom',
                        verticalAlign: 'bottom'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }

    });
}

function initWordCloud() {
    var placeholderDiv = document.getElementById("wordCloudViz");
    var url = "https://public.tableau.com/views/ODC/sheet4?:embed=y&:display_count=yes&:origin=viz_share_link";
    var options = {
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function () {
            workbook = viz.getWorkbook();
            activeSheet = workbook.getActiveSheet();
        }
    };
    var viz = new tableau.Viz(placeholderDiv, url, options);
}

function renderWordCloud() {
    var data = [{name: "隱私權", weight: 44},
        {name: "新聞報導", weight: 47},
        {name: "受虐兒", weight: 15},
        {name: "兒少保障法", weight: 38},
        {name: "無學校標示", weight: 38},
        {name: "聯合稽查", weight: 41},
        {name: "媒體", weight: 45},
        {name: "校長", weight: 4},
        {name: "公路監理機關", weight: 10},
        {name: "學生交通車", weight: 15},
        {name: "權益保障法", weight: 17},
        {name: "租賃", weight: 30},
        {name: "罰鍰新臺幣", weight: 41},
        {name: "生命安全", weight: 30},
        {name: "幼童專用車", weight: 48},
        {name: "載運人數", weight: 23},
        {name: "保母", weight: 6},
        {name: "二度傷害", weight: 36}];

    console.log(data);
    Highcharts.chart('wordCloudChart', {
        series: [{
            type: 'wordcloud',
            data: data,
            name: 'Occurrences'
        }],
        title: {
            text: 'Wordcloud of Lorem Ipsum'
        }
    });
}