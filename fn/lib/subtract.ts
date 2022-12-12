import { reduce, flat } from '../index.ts'

/**
 * 인자로 들어온 값들의 차를 구해주는 함수
 *
 * @name subtract
 * */

const subtract = (...numbers: number[]) => reduce((prev: number, cur: number) => prev - cur, flat(numbers))

export default subtract
