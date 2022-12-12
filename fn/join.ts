import { reduce, curry } from './index.ts'

/**
 * 주어진 배열을 문자열로 합쳐주는 함수
 *
 * @name join
 * */

const join = curry((mark: string | number, list) =>
  reduce((prev, cur) => `${prev}${mark}${cur}`, list)
)

export default join
