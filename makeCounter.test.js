import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'
import { makeCounter } from './makeCounter'

describe.skip('makeCounter function', () => {
  it('should return a function', () => {
    const counter = makeCounter()
    expect(counter).toBeInstanceOf(Function)
  })

  it('return default value', () => {
    const counter = makeCounter();
    expect(counter()).toBe(0);
  })

  it('should increment', () => {
    const counter = makeCounter();
    expect(counter()).toBe(0);
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
  })
})