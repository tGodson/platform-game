import "babel-polyfill"
import postScores from '../src/API/PostScore';

const responeJSON = {
    result: [
      {
        name: 'John Doe',
        score: 42,
      },
      {
        name: 'Peter Parker',
        score: 35,
      },
      {
        name: 'Wonder Woman',
        score: 50,
      },
    ],
  };

test('display scores', () => {
    fetch.mockResponse(responeJSON);
    async () => {
        const x = await postScores(name, score);
        expect(x).toEqual(responeJSON.result);
    };
  
  });