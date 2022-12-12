/**
 * 함수가 Promise 인지 확인하는 함수
 *
 * @name isPromise
 * */

const isPromise = <T = any>(value: T): boolean => value instanceof Promise

export default isPromise
