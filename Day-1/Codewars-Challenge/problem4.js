// Your task is to write a function which returns the time since midnight in milliseconds.

// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// milliseconds = (hours × 60 × 60 × 1000) + (minutes × 60 × 1000) + (seconds × 1000)

function past(h, m, s) {
	let milliseconds = h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
	return milliseconds;
}
