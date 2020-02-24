import {getNext, getPrevious} from './list';

describe('list util', () => {
  describe('getNext', () => {
    it('should return next item', () => {
      const expected = {id: 3};
      const actual = getNext({list: [{id: 2}, {id: 3}], item: {id: 2}});
      expect(actual).toEqual(expected);
    });
    it('should return undefined if there is no next', () => {
      const expected = undefined;
      const actual = getNext({list: [{id: 2}, {id: 3}], item: {id: 3}});
      expect(actual).toEqual(expected);
    });
  });
  describe('getPrevious', () => {
    it('should return previous item', () => {
      const expected = {id: 2};
      const actual = getPrevious({list: [{id: 2}, {id: 3}], item: {id: 3}});
      expect(actual).toEqual(expected);
    });
    it('should return undefined if there is no previous', () => {
      const expected = undefined;
      const actual = getPrevious({list: [{id: 2}, {id: 3}], item: {id: 2}});
      expect(actual).toEqual(expected);
    });
  });
});
