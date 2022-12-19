/**
 * 배열인지 판별해주는 함수
 *
 * @name isArray
 * */

const isArray = <T = any>(list: any): boolean => Array.isArray(list)

export default isArray
