/**
 * 단일 실 함수를 각각의 인수들을 실행시키는 함수로 변환해주는 함수
 *
 * ex) fn(a, b, c) => fn(a)(b)(c)
 *
 * @name curry
 * */

const curry =
  <T = any>(callback: (...args: any) => T) =>
    (arg, ...args) =>
      args.length ? callback(arg, ...args) : (...args) => callback(arg, ...args)

export default curry
