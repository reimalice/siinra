import { LotePlanosModule } from './lote-planos.module';

describe('LotePlanosModule', () => {
  let lotePlanosModule: LotePlanosModule;

  beforeEach(() => {
    lotePlanosModule = new LotePlanosModule();
  });

  it('should create an instance', () => {
    expect(lotePlanosModule).toBeTruthy();
  });
});
