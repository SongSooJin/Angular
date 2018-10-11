import { HeavyModule } from './heavy.module';

describe('HeavyModule', () => {
  let heavyModule: HeavyModule;

  beforeEach(() => {
    heavyModule = new HeavyModule();
  });

  it('should create an instance', () => {
    expect(heavyModule).toBeTruthy();
  });
});
