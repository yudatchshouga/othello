import { getFlippable } from './function';

describe('', () => {
  it('1つの駒をひっくり返す(横)', () => {
    const initialBoard = [
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNBWNNN',
      'NNNWBNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
    ];
    const result = getFlippable(initialBoard, 'B', '3-5');
    expect(result).toEqual(['3-4']);
  });
  it('1つの駒をひっくり返す(縦)', () => {
    const initialBoard = [
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNBWNNN',
      'NNNWBNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
    ];
    const result = getFlippable(initialBoard, 'B', '2-4');
    expect(result).toEqual(['3-4']);
  });
  it('1つの駒をひっくり返す(斜め)', () => {
    const initialBoard = [
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNBWNNN',
      'NNNBBNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
    ];
    const result = getFlippable(initialBoard, 'B', '2-5');
    expect(result).toEqual(['3-4']);
  });
  it('1方向に2つの駒をひっくり返す', () => {
    const initialBoard = [
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNBWWNN',
      'NNNWBNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
    ];
    const result = getFlippable(initialBoard, 'B', '3-6');
    expect(result.sort()).toEqual(['3-4', '3-5']);
  });
  it('2方向に駒をひっくり返す', () => {
    const initialBoard = [
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNWWWNN',
      'NNNBBBNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
    ];
    const result = getFlippable(initialBoard, 'B', '2-3');
    expect(result.sort()).toEqual(['3-3', '3-4']);
  });
  it('端に駒を置く', () => {
    const initialBoard = [
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNBWWWN',
      'NNNBBBNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
    ];
    const result = getFlippable(initialBoard, 'B', '3-7');
    expect(result.sort()).toEqual(['3-4', '3-5', '3-6']);
  });
  it('角に駒を置く', () => {
    const initialBoard = [
      'NNNNNNNN',
      'NNNNNNWN',
      'NNNNNWNN',
      'NNNBWNNN',
      'NNNBBNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
    ];
    const result = getFlippable(initialBoard, 'B', '0-7');
    expect(result.sort()).toEqual(['1-6', '2-5', '3-4']);
  });
  it('ひっくり返せる駒がない', () => {
    const initialBoard = [
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNBWNNN',
      'NNNWBNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
    ];
    const result = getFlippable(initialBoard, 'B', '2-3');
    expect(result).toEqual([]);
  });
  it('既に駒がある場合', () => {
    const initialBoard = [
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNBWNNN',
      'NNNWBNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
    ];
    const result = getFlippable(initialBoard, 'B', '3-4');
    expect(result).toEqual([]);
  });
  it('盤外に駒を置く', () => {
    const initialBoard = [
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNBWWWW',
      'NNNWBNNN',
      'NNNNNNNN',
      'NNNNNNNN',
      'NNNNNNNN',
    ];
    const result = getFlippable(initialBoard, 'B', '3-8');
    expect(result).toEqual([]);
  });
});
