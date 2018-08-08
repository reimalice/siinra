import { TestBed, inject } from '@angular/core/testing';

import { GrupoParametroService } from './grupo-parametro.service';

describe('GrupoParametroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrupoParametroService]
    });
  });

  it('should be created', inject([GrupoParametroService], (service: GrupoParametroService) => {
    expect(service).toBeTruthy();
  }));
});
