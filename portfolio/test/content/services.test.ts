import { SERVICES } from '@/content/services';

describe('SERVICES data', () => {
  it('has 6 services', () => {
    expect(SERVICES).toHaveLength(6);
  });

  it('each service has all required fields', () => {
    for (const service of SERVICES) {
      expect(service.title).toBeTruthy();
      expect(service.description).toBeTruthy();
      expect(service.icon).toBeTruthy();
      expect(service.benefits.length).toBeGreaterThan(0);
    }
  });
});
