import { reduce, sync } from '../index.ts'

/**
 * 담겨있는 함수들을 순차적으로 실행해주는 함수
 *
 * @name pipe
 * */

const pipe =
  <T = any>(fn, ...fns) =>
    (...args): T =>
      reduce(sync, fn(...args), fns)

export default pipe
