import { formatCurrrency } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrrency(2095)).toEqual('20.95')
  })

  it('works with zero', () => {
    expect(formatCurrrency(0)).toEqual('0.00')
  })

  it('rounds up to the nearest cent', () => {
    expect(formatCurrrency(2000.5)).toEqual('20.01')

    expect(formatCurrrency(2000.4)).toEqual('20.00')
  })
})