const password = 'test98'

test('Check password match', () => {
    expect(password).toMatch(/^.{6,256}$/);
});