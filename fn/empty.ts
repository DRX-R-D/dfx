/**
 * 빈 제너레이터 함수를 생성해주는 함수
 *
 * @name empty
 * */

const empty = <T = any>(): Iterable<T> => (function* () {})()

export default empty
