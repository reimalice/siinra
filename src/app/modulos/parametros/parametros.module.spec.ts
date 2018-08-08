import { ParametrosModule } from './parametros.module';

describe('ParametrosModule', () => {
  let parametrosModule: ParametrosModule;

  beforeEach(() => {
    parametrosModule = new ParametrosModule();
  });

  it('should create an instance', () => {
    expect(parametrosModule).toBeTruthy();
  });
});
