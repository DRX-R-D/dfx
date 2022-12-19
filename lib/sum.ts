import { reduce, flat } from '../index.ts'

/**
 * 주어진 배열의 숫자들을 모두 더하는 함수
 *
 * @name sum
 * */

const sum = (...list: number[]) => reduce((prev: number, cur: number) => prev + cur, flat(list))

export default sum
