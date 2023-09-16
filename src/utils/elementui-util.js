import { dateformat } from '@/utils/time-util'
export function formatTime (row, column, cellValue) {
	return dateformat(new Date(cellValue));
}
