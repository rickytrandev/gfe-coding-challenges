import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'
import { numOfOccurences } from './numOfOccurences'

describe('numOfOccurences', () => {
  it('should be a function', () => {
    expect(numOfOccurences).toBeInstanceOf(Function)
  })
  it('should return a number of occurences for each letter in a  string', () => {
    const result = numOfOccurences('aabbcc')

    expect(result).toEqual({
      a: 2,
      b: 2,
      c: 2
    })
  })
  it('should return a number of occurences for each letter in a  string', () => {
    const result = numOfOccurences('ababcbac')

    expect(result).toEqual({
      a: 3,
      b: 3,
      c: 2
    })
  })
})