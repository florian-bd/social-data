import {getImageUrl} from './image';

describe('image util', () => {
  describe('getImageUrl', () => {
    it('should return the new url given the width', () => {
      const expected = 'https://picsum.photos/id/1/100/67';
      const actual = getImageUrl({
        medium: {
          image: 'https://picsum.photos/id/1/5616/3744',
          width: 5616,
          height: 3744,
        },
        width: 100,
      });
      expect(actual).toEqual(expected);
    });
  });
});
