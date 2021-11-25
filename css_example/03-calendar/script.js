// 存储月份的数组
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
// 获取当前日期
let date = new Date();
const today = new Date();
const tYear = today.getFullYear();
const tMonth = today.getMonth();

// 初次渲染
add();

// 添加当月日期的方法
function add() {
	// 获取当前年
	let cYear = date.getFullYear();
	// 获取当前月份
	let cMonth = date.getMonth();
	// 获取当前天
	let cDate = date.getDate();
	// 获取当前月份的总天数
	let daysNum = new Date(cYear, cMonth + 1, 0).getDate();
	// 获取当前月份第一天是周几
	let fDay = new Date(cYear, cMonth, 1).getDay();

	// 设置当前年份
	$('.year').html(cYear + ' -');
	// 设置当前月份
	$('.month').html(month[cMonth]);

	// 添加每一天
	let days = '<ul>';
	for ( let i = 0; i < fDay; i++ ) {
		days+= '<li></li>';
	}
	for( let i = 1; i <= daysNum; i++ ) {
		if ( tYear === cYear && tMonth === cMonth && i === cDate ) {
			days += '<li class="day today">' + i + '</li>';
		} else {
			days += '<li class="day">' + i + '</li>';
		}
	}
	days += '</ul>';
	$('.days').html(days);
}

// 点击切换月份 —— 上月
$('.pre-month').click(function() {
	date.setMonth(date.getMonth() - 1);
	add();
});

// 点击切换月份 —— 下月
$('.next-month').click(function() {
	date.setMonth(date.getMonth() + 1);
	add();
});
