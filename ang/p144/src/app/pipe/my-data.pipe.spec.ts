import { MyDataPipe } from './my-data.pipe';

describe('MyDataPipe', () => {
  it('create an instance', () => {
    const pipe = new MyDataPipe();
    expect(pipe).toBeTruthy();
  });
});
