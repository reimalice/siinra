import { TramitesModule } from './tramites.module';

describe('TramitesModule', () => {
  let tramitesModule: TramitesModule;

  beforeEach(() => {
    tramitesModule = new TramitesModule();
  });

  it('should create an instance', () => {
    expect(tramitesModule).toBeTruthy();
  });
});
