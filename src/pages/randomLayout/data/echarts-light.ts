/**
 * 通过以下代码获取echarts官网提供的所有示例分类及图片
 * 排除：['自定义系列', '数据集', '数据区域缩放', '拖拽', '富文本', '3D*', 'GL*']
 * 添加：3D 地球
 */

// Array.from(document.getElementsByClassName('example-list-panel')[0].children).map(ele => {
// 	const [name, type] = ele.children[0].innerText.split(' ');
// 	return {
// 		name,
// 		type,
// 		children: Array.from(ele.children[1].children).map(item => {
// 			const lastDom = item.children[0].children[0];
// 			return {
// 				title: lastDom.children[1].innerText,
// 				subtitle: lastDom.children[2].innerText,
// 				type: lastDom.href.split('=')[1],
// 				src: lastDom.children[0].src,
// 			};
// 		}),
// 	};
// });

export default [
  {
    name: '折线图',
    type: 'line',
    children: [
      {
        title: '基础折线图',
        subtitle: 'Basic Line Chart',
        type: 'line-simple',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-simple.webp?_v_=1612615474746',
      },
      {
        title: '基础平滑折线图',
        subtitle: 'Smoothed Line Chart',
        type: 'line-smooth',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-smooth.webp?_v_=1612615474746',
      },
      {
        title: '基础面积图',
        subtitle: 'Basic area chart',
        type: 'area-basic',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-basic.webp?_v_=1612615474746',
      },
      {
        title: '折线图堆叠',
        subtitle: 'Stacked Line Chart',
        type: 'line-stack',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-stack.webp?_v_=1612615474746',
      },
      {
        title: '堆叠面积图',
        subtitle: 'Stacked area chart',
        type: 'area-stack',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack.webp?_v_=1612615474746',
      },
      {
        title: '渐变堆叠面积图',
        subtitle: 'Gradient Stacked area chart',
        type: 'area-stack-gradient',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-stack-gradient.webp?_v_=1612615474746',
      },
      {
        title: '未来一周气温变化',
        subtitle: 'Temperature Change in the coming week',
        type: 'line-marker',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-marker.webp?_v_=1612615474746',
      },
      {
        title: '折线图区域高亮',
        subtitle: 'Area Pieces',
        type: 'area-pieces',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-pieces.webp?_v_=1612615474746',
      },
      {
        title: '数据过滤',
        subtitle: 'Data Transform Fitler',
        type: 'data-transform-filter',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/data-transform-filter.webp?_v_=1612615474746',
      },
      // {
      // 	title: '折线图的渐变',
      // 	subtitle: 'Line Gradient',
      // 	type: 'line-gradient',
      // 	src:
      // 		'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-gradient.webp?_v_=1612615474746',
      // },
      {
        title: '一天用电量分布',
        subtitle: 'Distribution of Electricity',
        type: 'line-sections',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-sections.webp?_v_=1612615474746',
      },
      {
        title: '大数据量面积图',
        subtitle: 'Large scale area chart',
        type: 'area-simple',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-simple.webp?_v_=1612615474746',
      },
      {
        title: 'Confidence Band',
        subtitle: 'Confidence Band',
        type: 'confidence-band',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/confidence-band.webp?_v_=1612615474746',
      },
      {
        title: '雨量流量关系图',
        subtitle: 'Rainfall and Water Flow',
        type: 'grid-multiple',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/grid-multiple.webp?_v_=1612615474746',
      },
      {
        title: '北京 AQI 可视化',
        subtitle: 'Beijing AQI',
        type: 'line-aqi',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-aqi.webp?_v_=1612615474746',
      },
      {
        title: '多 X 轴',
        subtitle: 'Multiple X Axes',
        type: 'multiple-x-axis',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/multiple-x-axis.webp?_v_=1612615474746',
      },
      {
        title: '雨量流量关系图',
        subtitle: 'Rainfall',
        type: 'area-rainfall',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-rainfall.webp?_v_=1612615474746',
      },
      {
        title: '时间轴折线图',
        subtitle: 'Area Chart with Time Axis',
        type: 'area-time-axis',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/area-time-axis.webp?_v_=1612615474746',
      },
      {
        title: '动态数据 + 时间坐标轴',
        subtitle: 'Dynamic Data + Time Axis',
        type: 'dynamic-data2',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/dynamic-data2.webp?_v_=1612615474746',
      },
      {
        title: '函数绘图',
        subtitle: 'Function Plot',
        type: 'line-function',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-function.webp?_v_=1612615474746',
      },
      {
        title: '动态排序折线图',
        subtitle: 'Line Race',
        type: 'line-race',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-race.webp?_v_=1612615474746',
      },
      {
        title: '折线图的标记线',
        subtitle: 'Line with Marklines',
        type: 'line-markline',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-markline.webp?_v_=1612615474746',
      },
      {
        title: '自定义折线图样式',
        subtitle: 'Line Style and Item Style',
        type: 'line-style',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-style.webp?_v_=1612615474746',
      },
      {
        title: '双数值轴折线图',
        subtitle: 'Line Chart in Cartesian Coordinate System',
        type: 'line-in-cartesian-coordinate-system',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-in-cartesian-coordinate-system.webp?_v_=1612615474746',
      },
      {
        title: '对数轴示例',
        subtitle: 'Log Axis',
        type: 'line-log',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-log.webp?_v_=1612615474746',
      },
      {
        title: '阶梯折线图',
        subtitle: 'Step Line',
        type: 'line-step',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-step.webp?_v_=1612615474746',
      },
      {
        title: '缓动函数可视化',
        subtitle: 'Line Easing Visualizing',
        type: 'line-easing',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-easing.webp?_v_=1612615474746',
      },
      {
        title: '垂直折线图（Y轴为类目轴）',
        subtitle: 'Line Y Category',
        type: 'line-y-category',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-y-category.webp?_v_=1612615474746',
      },
      {
        title: '自定义图形组件',
        subtitle: 'Custom Graphic Component',
        type: 'line-graphic',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '点击添加折线图拐点',
        subtitle: 'Click to Add Points',
        type: 'line-pen',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '可拖拽点',
        subtitle: 'Try Dragging these Points',
        type: 'line-draggable',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '极坐标双数值轴',
        subtitle: 'Two Value-Axes in Polar',
        type: 'line-polar',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '极坐标双数值轴',
        subtitle: 'Two Value-Axes in Polar',
        type: 'line-polar2',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-polar2.webp?_v_=1612615474746',
      },
      {
        title: '移动端上的 dataZoom 和 tooltip',
        subtitle: 'Tooltip and DataZoom on Mobile',
        type: 'line-tooltip-touch',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/line-tooltip-touch.webp?_v_=1612615474746',
      },
      {
        title: '联动和共享数据集',
        subtitle: 'Share Dataset',
        type: 'dataset-link',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/dataset-link.webp?_v_=1612615474746',
      },
    ],
  },
  {
    name: '柱状图',
    type: 'bar',
    children: [
      {
        title: '带背景色的柱状图',
        subtitle: 'Bar with Background',
        type: 'bar-background',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-background.webp?_v_=1612615474746',
      },
      {
        title: '基础柱状图',
        subtitle: 'Basic Bar',
        type: 'bar-simple',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-simple.webp?_v_=1612615474746',
      },
      {
        title: '坐标轴刻度与标签对齐',
        subtitle: 'Axis Align with Tick',
        type: 'bar-tick-align',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-tick-align.webp?_v_=1612615474746',
      },
      {
        title: '自定义单个柱子颜色',
        subtitle: 'Set Style of Single Bar.',
        type: 'bar-data-color',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-data-color.webp?_v_=1612615474746',
      },
      {
        title: '瀑布图（柱状图模拟）',
        subtitle: 'Waterfall Chart',
        type: 'bar-waterfall',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-waterfall.webp?_v_=1612615474746',
      },
      {
        title: '交错正负轴标签',
        subtitle: 'Bar Chart with Negative Value',
        type: 'bar-negative2',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-negative2.webp?_v_=1612615474746',
      },
      {
        title: '世界人口总量 - 条形图',
        subtitle: 'World Total Population',
        type: 'bar-y-category',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-y-category.webp?_v_=1612615474746',
      },
      {
        title: '特性示例：渐变色 阴影 点击缩放',
        subtitle: 'Clickable Column Chart with Gradient',
        type: 'bar-gradient',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-gradient.webp?_v_=1612615474746',
      },
      {
        title: '柱状图标签旋转',
        subtitle: 'Bar Label Rotation',
        type: 'bar-label-rotation',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-label-rotation.webp?_v_=1612615474746',
      },
      {
        title: '堆叠柱状图',
        subtitle: 'Stacked Column Chart',
        type: 'bar-stack',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-stack.webp?_v_=1612615474746',
      },
      {
        title: '阶梯瀑布图（柱状图模拟）',
        subtitle: 'Waterfall Chart',
        type: 'bar-waterfall2',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-waterfall2.webp?_v_=1612615474746',
      },
      {
        title: '堆叠条形图',
        subtitle: 'Stacked Horizontal Bar',
        type: 'bar-y-category-stack',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-y-category-stack.webp?_v_=1612615474746',
      },
      {
        title: '柱状图框选',
        subtitle: 'Brush Select on Column Chart',
        type: 'bar-brush',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-brush.webp?_v_=1612615474746',
      },
      {
        title: '正负条形图',
        subtitle: 'Bar Chart with Negative Value',
        type: 'bar-negative',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-negative.webp?_v_=1612615474746',
      },
      {
        title: '某地区蒸发量和降水量',
        subtitle: 'Rainfall and Evaporation',
        type: 'bar1',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar1.webp?_v_=1612615474746',
      },
      {
        title: '折柱混合',
        subtitle: 'Mixed Line and Bar',
        type: 'mix-line-bar',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/mix-line-bar.webp?_v_=1612615474746',
      },
      {
        title: '多数值轴轴缩放',
        subtitle: 'Mix Zoom On Value',
        type: 'mix-zoom-on-value',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/mix-zoom-on-value.webp?_v_=1612615474746',
      },
      {
        title: '多 Y 轴示例',
        subtitle: 'Multiple Y Axes',
        type: 'multiple-y-axis',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/multiple-y-axis.webp?_v_=1612615474746',
      },
      {
        title: '柱状图动画延迟',
        subtitle: 'Animation Delay',
        type: 'bar-animation-delay',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-animation-delay.webp?_v_=1612615474746',
      },
      {
        title: '大数据量柱图',
        subtitle: 'Large Scale Bar Chart',
        type: 'bar-large',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-large.webp?_v_=1612615474746',
      },
      {
        title: '动态排序柱状图',
        subtitle: 'Bar Race',
        type: 'bar-race',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-race.webp?_v_=1612615474746',
      },
      {
        title: '动态排序柱状图 - 人均收入',
        subtitle: 'Bar Race',
        type: 'bar-race-country',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-race-country.webp?_v_=1612615474746',
      },
      {
        title: '天气统计（富文本）',
        subtitle: 'Wheater Statistics',
        type: 'bar-rich-text',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-rich-text.webp?_v_=1612615474746',
      },
      {
        title: '动态数据',
        subtitle: 'Dynamic Data',
        type: 'dynamic-data',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/dynamic-data.webp?_v_=1612615474746',
      },
      // {
      // 	title: '2002全国宏观经济指标',
      // 	subtitle: 'Finance Indices 2002',
      // 	type: 'mix-timeline-finance',
      // 	src:
      // 		'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/mix-timeline-finance.webp?_v_=1612615474746',
      // },
      // {
      // 	title: '水印 - ECharts 下载统计',
      // 	subtitle: 'Watermark - ECharts Download',
      // 	type: 'watermark',
      // 	src:
      // 		'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/watermark.webp?_v_=1612615474746',
      // },
      {
        title: 'Bar Chart on Polar',
        subtitle: 'Bar Chart on Polar',
        type: 'bar-polar-real-estate',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-polar-real-estate.webp?_v_=1612615474746',
      },
      {
        title: '极坐标系下的堆叠柱状图',
        subtitle: 'Stacked Bar Chart on Polar',
        type: 'bar-polar-stack',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-polar-stack.webp?_v_=1612615474746',
      },
      {
        title: '极坐标系下的堆叠柱状图',
        subtitle: 'Stacked Bar Chart on Polar(Radial)',
        type: 'bar-polar-stack-radial',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/bar-polar-stack-radial.webp?_v_=1612615474746',
      },
      {
        title: '圆角环形图',
        subtitle: 'Rounded Bar on Polar',
        type: 'polar-roundCap',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/polar-roundCap.webp?_v_=1612615474746',
      },
      {
        title: '柱状图排序',
        subtitle: 'Sort Data in Bar Chart',
        type: 'data-transform-sort-bar',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/data-transform-sort-bar.webp?_v_=1612615474746',
      },
      {
        title: '指定数据到坐标轴的映射',
        subtitle: 'Simple Encode',
        type: 'dataset-encode0',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/dataset-encode0.webp?_v_=1612615474746',
      },
      {
        title: '系列按行和按列排布',
        subtitle: 'Series Layout By Column or Row',
        type: 'dataset-series-layout-by',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/dataset-series-layout-by.webp?_v_=1612615474746',
      },
      {
        title: '最简单的数据集（dataset）',
        subtitle: 'Simple Example of Dataset',
        type: 'dataset-simple0',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/dataset-simple0.webp?_v_=1612615474746',
      },
      {
        title: '对象数组的输入格式',
        subtitle: 'Dataset in Object Array',
        type: 'dataset-simple1',
        src:
          'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/thumb/dataset-simple1.webp?_v_=1612615474746',
      },
    ],
  },
  {
    name: '饼图',
    type: 'pie',
    children: [
      {
        title: '某站点用户访问来源',
        subtitle: 'Referer of a website',
        type: 'pie-simple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '圆角环形图',
        subtitle: 'Doughnut Chart with Rounded Corner',
        type: 'pie-borderRadius',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '环形图',
        subtitle: 'Doughnut Chart',
        type: 'pie-doughnut',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '饼图自定义样式',
        subtitle: 'Customized Pie',
        type: 'pie-custom',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '饼图纹理',
        subtitle: 'Texture on Pie Chart',
        type: 'pie-pattern',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      // {
      // 	title: '南丁格尔玫瑰图',
      // 	subtitle: "Nightingale's Rose Diagram",
      // 	type: 'pie-roseType',
      // 	src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      // },
      {
        title: '基础南丁格尔玫瑰图',
        subtitle: "Nightingale's Rose Diagram",
        type: 'pie-roseType-simple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      // {
      // 	title: '饼图标签对齐',
      // 	subtitle: 'Pie Label Align',
      // 	type: 'pie-alignTo',
      // 	src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      // },
      // {
      // 	title: '饼图引导线调整',
      // 	subtitle: 'Label Line Adjust',
      // 	type: 'pie-labelLine-adjust',
      // 	src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      // },
      {
        title: '可滚动的图例',
        subtitle: 'Pie with Scrollable Legend',
        type: 'pie-legend',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '富文本标签',
        subtitle: 'Pie Special Label',
        type: 'pie-rich-text',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '嵌套环形图',
        subtitle: 'Nested Pies',
        type: 'pie-nest',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '分割数据到数个饼图',
        subtitle: 'Partition Data to Pies',
        type: 'data-transform-multiple-pie',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      // {
      // 	title: '默认 encode 设置',
      // 	subtitle: 'Default arrangement',
      // 	type: 'dataset-default',
      // 	src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      // },
      // {
      // 	title: '日历饼图',
      // 	subtitle: 'Calendar Pie',
      // 	type: 'calendar-pie',
      // 	src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      // },
      // {
      // 	title: '联动和共享数据集',
      // 	subtitle: 'Share Dataset',
      // 	type: 'dataset-link',
      // 	src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      // },
    ],
  },
  {
    name: '散点图',
    type: 'scatter',
    children: [
      {
        title: '基础散点图',
        subtitle: 'Basic Scatter Chart',
        type: 'scatter-simple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      // {
      // 	title: "Anscomb's quartet",
      // 	subtitle: "Anscomb's quartet",
      // 	type: 'scatter-anscombe-quartet',
      // 	src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      // },
      {
        title: '数据聚合',
        subtitle: 'Clustering Process',
        type: 'scatter-clustering',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '聚合过程可视化',
        subtitle: 'Clustering Process',
        type: 'scatter-clustering-process',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '指数回归（使用统计插件）',
        subtitle: 'Exponential Regression',
        type: 'scatter-exponential-regression',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '涟漪特效散点图',
        subtitle: 'Effect Scatter Chart',
        type: 'scatter-effect',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '线性回归（使用统计插件）',
        subtitle: 'Linear Regression',
        type: 'scatter-linear-regression',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '多项式回归（使用统计插件）',
        subtitle: 'Polynomial Regression',
        type: 'scatter-polynomial-regression',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'GitHub 打卡气泡图',
        subtitle: 'Punch Card of Github',
        type: 'scatter-punchCard',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '单轴散点图',
        subtitle: 'Scatter on Single Axis',
        type: 'scatter-single-axis',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '男性女性身高体重分布',
        subtitle: 'Distribution of Height and Weight',
        type: 'scatter-weight',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '散点图标签顶部对齐',
        subtitle: 'Align Label on the Top',
        type: 'scatter-label-align-right',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '散点图标签顶部对齐',
        subtitle: 'Align Label on the Top',
        type: 'scatter-label-align-top',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '大规模散点图',
        subtitle: 'Large Scatter',
        type: 'scatter-large',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '大规模星云散点图',
        subtitle: 'Scatter Nebula',
        type: 'scatter-nebula',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '流式渲染和视觉映射操作',
        subtitle: 'Visual interaction with stream',
        type: 'scatter-stream-visual',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '气泡图',
        subtitle: 'Bubble Chart',
        type: 'bubble-gradient',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'AQI 气泡图',
        subtitle: 'Scatter Aqi Color',
        type: 'scatter-aqi-color',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '营养分布散点图',
        subtitle: 'Scatter Nutrients',
        type: 'scatter-nutrients',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '营养分布散点矩阵',
        subtitle: 'Scatter Nutrients Matrix',
        type: 'scatter-nutrients-matrix',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'GitHub 打卡气泡图（极坐标）',
        subtitle: 'Punch Card of Github',
        type: 'scatter-polar-punchCard',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '各国人均寿命与GDP关系演变',
        subtitle: 'Life Expectancy and GDP',
        type: 'scatter-life-expectancy-timeline',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Master Painter Color Choices Throughout History',
        subtitle: 'Master Painter Color Choices Throughout History',
        type: 'scatter-painter-choice',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '全国主要城市空气质量 - 百度地图',
        subtitle: 'Air Quality - Baidu Map',
        type: 'effectScatter-bmap',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '对数回归（使用统计插件）',
        subtitle: 'Logarithmic Regression',
        type: 'scatter-logarithmic-regression',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      // {
      // 	title: '散点矩阵和平行坐标',
      // 	subtitle: 'Scatter Matrix',
      // 	type: 'scatter-matrix',
      // 	src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      // },
      {
        title: '日力图',
        subtitle: 'Calendar Charts',
        type: 'calendar-charts',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '地理坐标/地图',
    type: 'map',
    children: [
      {
        title: '杭州热门步行路线 - 百度地图',
        subtitle: 'A Hiking Trail in Hangzhou - Baidu Map',
        type: 'lines-bmap',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '北京公交路线 - 百度地图',
        subtitle: 'Bus Lines of Beijing - Baidu Map',
        type: 'lines-bmap-bus',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '北京公交路线 - 线特效',
        subtitle: 'Bus Lines of Beijing - Line Effect',
        type: 'lines-bmap-effect',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '使用线图绘制近 100 万的纽约街道数据',
        subtitle: 'Use lines to draw 1 million ny streets.',
        type: 'lines-ny',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Binning on Map',
        subtitle: 'Binning on Map',
        type: 'map-bin',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '香港18区人口密度 （2011）',
        subtitle: 'Population Density of HongKong (2011)',
        type: 'map-HK',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '在地图上绘制多边形',
        subtitle: 'Draw Polygon on Map',
        type: 'map-polygon',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'USA Population Estimates (2012)',
        subtitle: 'USA Population Estimates (2012)',
        type: 'map-usa',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '六边形分箱图（自定义系列）',
        subtitle: 'Hexagonal Binning',
        type: 'custom-hexbin',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '全国主要城市空气质量 - 百度地图',
        subtitle: 'Air Quality - Baidu Map',
        type: 'effectScatter-bmap',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: 'K',
    type: '线图',
    children: [
      {
        title: '基础 K 线图',
        subtitle: 'Basic Candlestick',
        type: 'candlestick-simple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'OHLC 图（使用自定义系列）',
        subtitle: 'OHLC Chart',
        type: 'custom-ohlc',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '上证指数',
        subtitle: 'ShangHai Index',
        type: 'candlestick-sh',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '大数据量K线图',
        subtitle: 'Large Scale Candlestick',
        type: 'candlestick-large',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '触屏上的坐标轴指示器',
        subtitle: 'Axis Pointer Link and Touch',
        type: 'candlestick-touch',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '日力图刷选',
        subtitle: 'Candlestick Brush',
        type: 'candlestick-brush',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '2015 年上证指数',
        subtitle: 'ShangHai Index, 2015',
        type: 'candlestick-sh-2015',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '雷达图',
    type: 'radar',
    children: [
      {
        title: '基础雷达图',
        subtitle: 'Basic Radar Chart',
        type: 'radar',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'AQI - 雷达图',
        subtitle: 'AQI - Radar Chart',
        type: 'radar-aqi',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '自定义雷达图',
        subtitle: 'Customized Radar Chart',
        type: 'radar-custom',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '浏览器占比变化',
        subtitle: 'Proportion of Browsers',
        type: 'radar2',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '多雷达图',
        subtitle: 'Multiple Radar',
        type: 'radar-multiple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '盒须图',
    type: 'boxplot',
    children: [
      {
        title: '简单的数据聚合',
        subtitle: 'Data Transform Simple Aggregate',
        type: 'data-transform-aggregate',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '基础盒须图',
        subtitle: 'Boxplot Light Velocity',
        type: 'boxplot-light-velocity',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '垂直方向盒须图',
        subtitle: 'Boxplot Light Velocity2',
        type: 'boxplot-light-velocity2',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '多系列盒须图',
        subtitle: 'Multiple Categories',
        type: 'boxplot-multi',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '热力图',
    type: 'heatmap',
    children: [
      {
        title: '笛卡尔坐标系上的热力图',
        subtitle: 'Heatmap on Cartesian',
        type: 'heatmap-cartesian',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '热力图 - 2w 数据',
        subtitle: 'Heatmap - 2w data',
        type: 'heatmap-large',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '热力图 - 颜色的离散映射',
        subtitle: 'Heatmap - Discrete Mapping of Color',
        type: 'heatmap-large-piecewise',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '热力图与百度地图扩展',
        subtitle: 'Heatmap on Baidu Map Extension',
        type: 'heatmap-bmap',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '日历热力图',
        subtitle: 'Calendar Heatmap',
        type: 'calendar-heatmap',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '纵向日历图',
        subtitle: 'Calendar Heatmap Vertical',
        type: 'calendar-vertical',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '关系图',
    type: 'graph',
    children: [
      {
        title: '力引导布局',
        subtitle: 'Force Layout',
        type: 'graph-force2',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '笛卡尔坐标系上的 Graph',
        subtitle: 'Graph on Cartesian',
        type: 'graph-grid',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Graph 简单示例',
        subtitle: 'Simple Graph',
        type: 'graph-simple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '力引导布局',
        subtitle: 'Force Layout',
        type: 'graph-force',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '关系图自动隐藏重叠标签',
        subtitle: 'Hide Overlapped Label',
        type: 'graph-label-overlap',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '悲惨世界人物关系图',
        subtitle: 'Les Miserables',
        type: 'graph',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '悲惨世界人物关系图(环形布局)',
        subtitle: 'Les Miserables',
        type: 'graph-circular-layout',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '动态增加图节点',
        subtitle: 'Graph Dynamic',
        type: 'graph-force-dynamic',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Graph Life Expectancy',
        subtitle: 'Graph Life Expectancy',
        type: 'graph-life-expectancy',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'WebKit 模块关系依赖图',
        subtitle: 'Graph Webkit Dep',
        type: 'graph-webkit-dep',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'NPM 依赖关系图',
        subtitle: 'NPM Dependencies',
        type: 'graph-npm',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '日历关系图',
        subtitle: 'Calendar Graph',
        type: 'calendar-graph',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '路径图',
    type: 'lines',
    children: [
      {
        title: '杭州热门步行路线 - 百度地图',
        subtitle: 'A Hiking Trail in Hangzhou - Baidu Map',
        type: 'lines-bmap',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '北京公交路线 - 百度地图',
        subtitle: 'Bus Lines of Beijing - Baidu Map',
        type: 'lines-bmap-bus',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '北京公交路线 - 线特效',
        subtitle: 'Bus Lines of Beijing - Line Effect',
        type: 'lines-bmap-effect',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '使用线图绘制近 100 万的纽约街道数据',
        subtitle: 'Use lines to draw 1 million ny streets.',
        type: 'lines-ny',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '树图',
    type: 'tree',
    children: [
      {
        title: '从左到右树状图',
        subtitle: 'From Left to Right Tree',
        type: 'tree-basic',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '多棵树',
        subtitle: 'Multiple Trees',
        type: 'tree-legend',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '从下到上树状图',
        subtitle: 'From Bottom to Top Tree',
        type: 'tree-orient-bottom-top',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '从右到左树状图',
        subtitle: 'From Right to Left Tree',
        type: 'tree-orient-right-left',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '折线树图',
        subtitle: 'Tree with Polyline Edge',
        type: 'tree-polyline',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '径向树状图',
        subtitle: 'Radial Tree',
        type: 'tree-radial',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '从上到下树状图',
        subtitle: 'From Top to Bottom Tree',
        type: 'tree-vertical',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '矩形树图',
    type: 'treemap',
    children: [
      {
        title: '磁盘占用',
        subtitle: 'Disk Usage',
        type: 'treemap-disk',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'ECharts 配置项查询分布',
        subtitle: 'ECharts Option Query',
        type: 'treemap-drill-down',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'How $3.7 Trillion is Spent',
        subtitle: 'How $3.7 Trillion is Spent',
        type: 'treemap-obama',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '显示父层级标签',
        subtitle: 'Show Parent Labels',
        type: 'treemap-show-parent',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '基础矩形树图',
        subtitle: 'Basic Treemap',
        type: 'treemap-simple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '映射为渐变色',
        subtitle: 'Gradient Mapping',
        type: 'treemap-visual',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '旭日图',
    type: 'sunburst',
    children: [
      {
        title: '基础旭日图',
        subtitle: 'Basic Sunburst',
        type: 'sunburst-simple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '圆角旭日图',
        subtitle: 'Sunburst with Rounded Corner',
        type: 'sunburst-borderRadius',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '旭日图标签旋转',
        subtitle: 'Sunburst Label Rotate',
        type: 'sunburst-label-rotate',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Monochrome Sunburst',
        subtitle: 'Monochrome Sunburst',
        type: 'sunburst-monochrome',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '旭日图使用视觉编码',
        subtitle: 'Sunburst VisualMap',
        type: 'sunburst-visualMap',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Drink Flavors',
        subtitle: 'Drink Flavors',
        type: 'sunburst-drink',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '书籍分布',
        subtitle: 'Book Records',
        type: 'sunburst-book',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '平行坐标系',
    type: 'parallel',
    children: [
      {
        title: '基础平行坐标',
        subtitle: 'Basic Parallel',
        type: 'parallel-simple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'AQI 分布（平行坐标）',
        subtitle: 'Parallel Aqi',
        type: 'parallel-aqi',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '营养结构（平行坐标）',
        subtitle: 'Parallel Nutrients',
        type: 'parallel-nutrients',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      // {
      // 	title: '散点矩阵和平行坐标',
      // 	subtitle: 'Scatter Matrix',
      // 	type: 'scatter-matrix',
      // 	src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      // },
    ],
  },
  {
    name: '桑基图',
    type: 'sankey',
    children: [
      {
        title: '基础桑基图',
        subtitle: 'Basic Sankey',
        type: 'sankey-simple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '垂直方向的桑基图',
        subtitle: 'Sankey Orient Vertical',
        type: 'sankey-vertical',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '桑基图节点自定义样式',
        subtitle: 'Specify ItemStyle for Each Node in Sankey',
        type: 'sankey-itemstyle',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '桑基图层级自定义样式',
        subtitle: 'Sankey with Levels Setting',
        type: 'sankey-levels',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '桑基图渐变色边',
        subtitle: 'Gradient Edge',
        type: 'sankey-energy',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '桑基图左对齐布局',
        subtitle: 'Node Align Left in Sankey',
        type: 'sankey-nodeAlign-left',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '桑基图右对齐布局',
        subtitle: 'Node Align Right in Sankey',
        type: 'sankey-nodeAlign-right',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '漏斗图',
    type: 'funnel',
    children: [
      {
        title: '漏斗图',
        subtitle: 'Funnel Chart',
        type: 'funnel',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '漏斗图(对比)',
        subtitle: 'Funnel (align)',
        type: 'funnel-align',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '漏斗图',
        subtitle: 'Customized Funnel',
        type: 'funnel-customize',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '漏斗图',
        subtitle: 'Multiple Funnels',
        type: 'funnel-mutiple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '仪表盘',
    type: 'gauge',
    children: [
      {
        title: '基础仪表盘',
        subtitle: 'Gauge Basic chart',
        type: 'gauge',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '带标签数字动画的基础仪表盘',
        subtitle: 'Simple Gauge',
        type: 'gauge-simple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '速度仪表盘',
        subtitle: 'Speed Gauge',
        type: 'gauge-speed',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '进度仪表盘',
        subtitle: 'Grogress Gauge',
        type: 'gauge-progress',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '阶段速度仪表盘',
        subtitle: 'Stage Speed Gauge',
        type: 'gauge-stage',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '等级仪表盘',
        subtitle: 'Grade Gauge',
        type: 'gauge-grade',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '多标题仪表盘',
        subtitle: 'Multi Title Gauge',
        type: 'gauge-multi-title',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '气温仪表盘',
        subtitle: 'Temperature Gauge chart',
        type: 'gauge-temperature',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '得分环',
        subtitle: 'Ring Gauge',
        type: 'gauge-ring',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '气压表',
        subtitle: 'Gauge Barometer chart',
        type: 'gauge-barometer',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '时钟仪表盘',
        subtitle: 'Clock Gauge',
        type: 'gauge-clock',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Gauge Car',
        subtitle: 'Gauge Car',
        type: 'gauge-car',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '象形柱图',
    type: 'pictorialBar',
    children: [
      {
        title: '人体含水量',
        subtitle: 'Water Content',
        type: 'pictorialBar-body-fill',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      // {
      // 	title: '虚线柱状图效果',
      // 	subtitle: 'Dotted bar',
      // 	type: 'pictorialBar-dotted',
      // 	src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      // },
      {
        title: '森林的增长',
        subtitle: 'Expansion of forest',
        type: 'pictorialBar-forest',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '圣诞愿望清单和山峰高度',
        subtitle: 'Wish List and Mountain Height',
        type: 'pictorialBar-hill',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '精灵',
        subtitle: 'Spirits',
        type: 'pictorialBar-spirit',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '交通工具',
        subtitle: 'Vehicles',
        type: 'pictorialBar-vehicle',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '驯鹿的速度',
        subtitle: 'Velocity of Christmas Reindeers',
        type: 'pictorialBar-velocity',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '主题河流图',
    type: 'themeRiver',
    children: [
      {
        title: '主题河流图',
        subtitle: 'ThemeRiver',
        type: 'themeRiver-basic',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'ThemeRiver Lastfm',
        subtitle: 'ThemeRiver Lastfm',
        type: 'themeRiver-lastfm',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '日历坐标系',
    type: 'calendar',
    children: [
      {
        title: '基础日历图',
        subtitle: 'Simple Calendar',
        type: 'calendar-simple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '日历热力图',
        subtitle: 'Calendar Heatmap',
        type: 'calendar-heatmap',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '纵向日历图',
        subtitle: 'Calendar Heatmap Vertical',
        type: 'calendar-vertical',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '横向日力图',
        subtitle: 'Calendar Heatmap Horizontal',
        type: 'calendar-horizontal',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '日历关系图',
        subtitle: 'Calendar Graph',
        type: 'calendar-graph',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '农历日历图',
        subtitle: 'Calendar Lunar',
        type: 'calendar-lunar',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '日历饼图',
        subtitle: 'Calendar Pie',
        type: 'calendar-pie',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '日力图',
        subtitle: 'Calendar Charts',
        type: 'calendar-charts',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '日历图自定义图标',
        subtitle: 'Custom Calendar Icon',
        type: 'custom-calendar-icon',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '自定义系列',
    type: 'custom',
    children: [
      {
        title: '直方图（自定义系列）',
        subtitle: 'Histogram with Custom Series',
        type: 'bar-histogram',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '利润分布直方图',
        subtitle: 'Profit',
        type: 'custom-profit',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '使用自定系列给散点图添加误差范围',
        subtitle: 'Error Scatter on Catesian',
        type: 'custom-error-scatter',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '使用自定义系列添加柱状图趋势',
        subtitle: 'Custom Bar Trend',
        type: 'custom-bar-trend',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '自定义多边形图',
        subtitle: 'Custom Cartesian Polygon',
        type: 'custom-cartesian-polygon',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '使用自定系列给柱状图添加误差范围',
        subtitle: 'Error Bar on Catesian',
        type: 'custom-error-bar',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '性能分析图',
        subtitle: 'Profile',
        type: 'custom-profile',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Cycle Plot',
        subtitle: 'Cycle Plot',
        type: 'cycle-plot',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '机场航班甘特图',
        subtitle: 'Gantt Chart of Airport Flights',
        type: 'custom-gantt-flight',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '极坐标热力图（自定义系列）',
        subtitle: 'Polar Heatmap',
        type: 'custom-polar-heatmap',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '风向图',
        subtitle: 'Wind Barb',
        type: 'wind-barb',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '六边形分箱图（自定义系列）',
        subtitle: 'Hexagonal Binning',
        type: 'custom-hexbin',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '日历图自定义图标',
        subtitle: 'Custom Calendar Icon',
        type: 'custom-calendar-icon',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '使用自定义系列绘制风场',
        subtitle: 'Use custom series to draw wind vectors',
        type: 'custom-wind',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '聚合分割形变（散点图 - 柱状图）',
        subtitle: 'Aggregate Morphing Between Scatter and Bar',
        type: 'custom-aggregate-scatter-bar',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '聚合分割形变（散点图 - 饼图）',
        subtitle: 'Aggregate Morphing Between Scatter and Pie',
        type: 'custom-aggregate-scatter-pie',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '自定义仪表',
        subtitle: 'Custom Gauge',
        type: 'custom-gauge',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '聚合分割形变（散点图聚类）',
        subtitle: 'Aggregate Morphing Between Scatter Clustering',
        type: 'custom-aggregate-scatter-cluster',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Circle Packing with d3',
        subtitle: 'Circle Packing with d3',
        type: 'circle-packing-with-d3',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '一对一映射形变',
        subtitle: 'One-to-one Morphing',
        type: 'custom-one-to-one-morph',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '自定义螺旋线竞速',
        subtitle: 'Custom Spiral Race',
        type: 'custom-spiral-race',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '极简场景变换示例',
        subtitle: 'Simple Story Transition',
        type: 'custom-story-transition',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '数据集',
    type: 'dataset',
    children: [
      {
        title: '柱状图排序',
        subtitle: 'Sort Data in Bar Chart',
        type: 'data-transform-sort-bar',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '指定数据到坐标轴的映射',
        subtitle: 'Simple Encode',
        type: 'dataset-encode0',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '分割数据到数个饼图',
        subtitle: 'Partition Data to Pies',
        type: 'data-transform-multiple-pie',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '默认 encode 设置',
        subtitle: 'Default arrangement',
        type: 'dataset-default',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '指定数据到坐标轴的映射',
        subtitle: 'Encode and Matrix',
        type: 'dataset-encode1',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '联动和共享数据集',
        subtitle: 'Share Dataset',
        type: 'dataset-link',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '系列按行和按列排布',
        subtitle: 'Series Layout By Column or Row',
        type: 'dataset-series-layout-by',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '最简单的数据集（dataset）',
        subtitle: 'Simple Example of Dataset',
        type: 'dataset-simple0',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '对象数组的输入格式',
        subtitle: 'Dataset in Object Array',
        type: 'dataset-simple1',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '数据区域缩放',
    type: 'dataZoom',
    children: [
      {
        title: '使用自定系列给散点图添加误差范围',
        subtitle: 'Error Scatter on Catesian',
        type: 'custom-error-scatter',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '大数据量面积图',
        subtitle: 'Large scale area chart',
        type: 'area-simple',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '机场航班甘特图',
        subtitle: 'Gantt Chart of Airport Flights',
        type: 'custom-gantt-flight',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '风向图',
        subtitle: 'Wind Barb',
        type: 'wind-barb',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '移动端上的 dataZoom 和 tooltip',
        subtitle: 'Tooltip and DataZoom on Mobile',
        type: 'line-tooltip-touch',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '拖拽',
    type: 'drag',
    children: [
      {
        title: '可拖拽点',
        subtitle: 'Try Dragging these Points',
        type: 'line-draggable',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '机场航班甘特图',
        subtitle: 'Gantt Chart of Airport Flights',
        type: 'custom-gantt-flight',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '富文本',
    type: 'rich',
    children: [
      {
        title: '富文本标签',
        subtitle: 'Pie Special Label',
        type: 'pie-rich-text',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '嵌套环形图',
        subtitle: 'Nested Pies',
        type: 'pie-nest',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '天气统计（富文本）',
        subtitle: 'Wheater Statistics',
        type: 'bar-rich-text',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '3D',
    type: '地球',
    children: [
      {
        title: 'Animating Contour on Globe',
        subtitle: 'Animating Contour on Globe',
        type: 'animating-contour-on-globe&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '大气层显示',
        subtitle: 'Globe with Atmosphere',
        type: 'globe-atmosphere&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Contour Paint',
        subtitle: 'Contour Paint',
        type: 'globe-contour-paint&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Globe Displacement',
        subtitle: 'Globe Displacement',
        type: 'globe-displacement&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'ECharts-GL Hello World',
        subtitle: 'ECharts-GL Hello World',
        type: 'globe-echarts-gl-hello-world&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Globe Layers',
        subtitle: 'Globe Layers',
        type: 'globe-layers&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Moon',
        subtitle: 'Moon',
        type: 'globe-moon&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Iron globe',
        subtitle: 'Iron globe',
        type: 'iron-globe&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '3D',
    type: '柱状图',
    children: [
      {
        title: '使用 dataset 为三维柱状图设置数据',
        subtitle: '3D Bar with Dataset',
        type: 'bar3d-dataset&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Bar3D - Global Population',
        subtitle: 'Bar3D - Global Population',
        type: 'bar3d-global-population&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '星云',
        subtitle: '星云',
        type: 'bar3d-myth&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: "Noise modified from marpi's demo",
        subtitle: "Noise modified from marpi's demo",
        type: 'bar3d-noise-modified-from-marpi-demo&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Bar3D - Punch Card',
        subtitle: 'Bar3D - Punch Card',
        type: 'bar3d-punch-card&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Bar3D - Simplex Noise',
        subtitle: 'Bar3D - Simplex Noise',
        type: 'bar3d-simplex-noise&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Voxelize image',
        subtitle: 'Voxelize image',
        type: 'bar3d-voxelize-image&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Global Population - Bar3D on Globe',
        subtitle: 'Global Population - Bar3D on Globe',
        type: 'global-population-bar3d-on-globe&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Image to Bar3D',
        subtitle: 'Image to Bar3D',
        type: 'image-to-bar3d&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Metal Bar3D',
        subtitle: 'Metal Bar3D',
        type: 'metal-bar3d&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Stacked Bar3D',
        subtitle: 'Stacked Bar3D',
        type: 'stacked-bar3d&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Transparent Bar3D',
        subtitle: 'Transparent Bar3D',
        type: 'transparent-bar3d&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '3D',
    type: '散点图',
    children: [
      {
        title: 'Scatter3D',
        subtitle: 'Scatter3D',
        type: 'scatter3d&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '使用 dataset 为三维散点图设置数据',
        subtitle: '3D Scatter with Dataset',
        type: 'scatter3D-dataset&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Scatter3D - Globe Population',
        subtitle: 'Scatter3D - Globe Population',
        type: 'scatter3d-globe-population&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '三维散点图正交投影',
        subtitle: '三维散点图正交投影',
        type: 'scatter3d-orthographic&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '三维散点图和散点矩阵结合使用',
        subtitle: '3D Scatter with Scatter Matrix',
        type: 'scatter3d-scatter&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Scatter3D - Simplex Noise',
        subtitle: 'Scatter3D - Simplex Noise',
        type: 'scatter3d-simplex-noise&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '3D',
    type: '曲面',
    children: [
      {
        title: 'Image Surface Sushuang',
        subtitle: 'Image Surface Sushuang',
        type: 'image-surface-sushuang&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Metal Surface',
        subtitle: 'Metal Surface',
        type: 'metal-surface&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Parametric Surface Rose',
        subtitle: 'Parametric Surface Rose',
        type: 'parametric-surface-rose&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Simple Surface',
        subtitle: 'Simple Surface',
        type: 'simple-surface&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Sphere Parametric Surface',
        subtitle: 'Sphere Parametric Surface',
        type: 'sphere-parametric-surface&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Breather',
        subtitle: 'Breather',
        type: 'surface-breather&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Golden Rose',
        subtitle: 'Golden Rose',
        type: 'surface-golden-rose&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '皮革材质',
        subtitle: '皮革材质',
        type: 'surface-leather&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Mollusc Shell',
        subtitle: 'Mollusc Shell',
        type: 'surface-mollusc-shell&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Theme Roses',
        subtitle: 'Theme Roses',
        type: 'surface-theme-roses&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Surface Wave',
        subtitle: 'Surface Wave',
        type: 'surface-wave&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '3D',
    type: '地图',
    children: [
      {
        title: 'Buildings',
        subtitle: 'Buildings',
        type: 'map3d-buildings&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Wood City',
        subtitle: 'Wood City',
        type: 'map3d-wood-city&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '3D',
    type: '路径图',
    children: [
      {
        title: 'Airline on Globe',
        subtitle: 'Airline on Globe',
        type: 'lines3d-airline-on-globe&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Flights',
        subtitle: 'Flights',
        type: 'lines3d-flights&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Flights GL',
        subtitle: 'Flights GL',
        type: 'lines3d-flights-gl&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Flights on Geo3D',
        subtitle: 'Flights on Geo3D',
        type: 'lines3d-flights-on-geo3d&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: '3D',
    type: '折线图',
    children: [
      {
        title: '三维折线图正交投影',
        subtitle: '三维折线图正交投影',
        type: 'line3d-orthographic&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: 'GL',
    type: '散点图',
    children: [
      {
        title: '1 千万 GPS 点可视化',
        subtitle: '10 million Bulk GPS points',
        type: 'scatterGL-gps&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: 'GL',
    type: '路径图',
    children: [
      {
        title: '实时交互的纽约街道可视化',
        subtitle: 'Use linesGL to draw 1 million ny streets.',
        type: 'linesGL-ny&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: 'GL',
    type: '矢量场图',
    children: [
      {
        title: '直角坐标系上的向量场',
        subtitle: 'Flow on the cartesian',
        type: 'flowGL-noise&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Global wind visualization',
        subtitle: 'Global wind visualization',
        type: 'global-wind-visualization&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'Global Wind Visualization 2',
        subtitle: 'Global Wind Visualization 2',
        type: 'global-wind-visualization-2&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
  {
    name: 'GL',
    type: '关系图',
    children: [
      {
        title: 'GraphGL GPU Layout',
        subtitle: 'GraphGL GPU Layout',
        type: 'graphgl-gpu-layout&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: 'GraphGL - Large Internet',
        subtitle: 'GraphGL - Large Internet',
        type: 'graphgl-large-internet&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
      {
        title: '1w 节点 2w7 边的NPM 依赖图',
        subtitle: 'NPM Dependencies with graphGL',
        type: 'graphgl-npm-dep&gl',
        src: 'https://echarts.apache.org/examples/asset/placeholder.jpg',
      },
    ],
  },
];
