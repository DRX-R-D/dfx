/**
 * 로직의 흐름에 맞추기 위해 함수를 실행시키는 함수
 *
 * @name sync
 * */

const sync = <T = any>(value: T, fn: (arg: T) => void): void => fn(value)

export default sync
