const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });
  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });
  it('Handles perfect hour time', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe('two o\'clock');
  });
  it('Handles hour PM', () => {
    const timeInWords = convertTimeToWords('15:00');
    expect(timeInWords).toBe('three o\'clock');
  });
  it('Handles min between 00-15', () => {
    const timeInWords = convertTimeToWords('2:03');
    expect(timeInWords).toBe('three past two');
  });
  it('Handles min between 00-15', () => {
    const timeInWords = convertTimeToWords('2:11');
    expect(timeInWords).toBe('eleven past two');
  });
  it('Handles min 15', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });
  it('Handles min 15-30', () => {
    const timeInWords = convertTimeToWords('2:25');
    expect(timeInWords).toBe('twenty five past two');
  });
  it('Handles min 15-30', () => {
    const timeInWords = convertTimeToWords('2:27');
    expect(timeInWords).toBe('twenty seven past two');
  });
  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });
  it('Handles min between 30-45', () => {
    const timeInWords = convertTimeToWords('2:33');
    expect(timeInWords).toBe('twenty seven to three');
  });
  it('Handles min between 30-45', () => {
    const timeInWords = convertTimeToWords('2:40');
    expect(timeInWords).toBe('twenty to three');
  });
  it('Handles times with 45 min - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
  it('Handles times with 45 min - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
  it('Handles min between 45-00', () => {
    const timeInWords = convertTimeToWords('2:55');
    expect(timeInWords).toBe('five to three');
  });
});
