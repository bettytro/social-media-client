import { login } from '../js/api/auth/login';
import { logout } from '../js/api/auth/logout';
import * as storageModule from '../js/storage/index';

jest.mock('../js/storage/index');

describe('Authentication Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('login works and stores token in localStorage', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ accessToken: 'mocked-token', otherData: 'data' }),
      })
    );

    const profile = await login('test@example.com', 'password');

    expect(storageModule.save).toHaveBeenCalledWith('token', 'mocked-token');
    expect(storageModule.save).toHaveBeenCalledWith('profile', { otherData: 'data' });

    expect(profile).toEqual({ otherData: 'data' });
  });

  test('logout works, and removes token from localStorage', () => {
    logout();

    expect(storageModule.remove).toHaveBeenCalledWith('token');
    expect(storageModule.remove).toHaveBeenCalledWith('profile');
  });
});