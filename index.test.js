const axios = require('axios');
const mockServerlessEvents = require('./event-generator');
const { sendSMSNotification, sendEmailNotification } = require('./handler');

jest.mock('axios');

describe('Notification Service Unit Test', () => {
  beforeEach(() => {
      jest.clearAllMocks();
  });

  test('Should SUCCEED delivering SMS notification', async () => {
    axios.mockResolvedValue({ status: 200 })
    const event = mockServerlessEvents({ body: { message: 'Hello World!' } });
    const result = await sendSMSNotification(event);
    expect(result.statusCode).toBe(200);
  });

  test('Should FAIL delivering SMS notification', async () => {
    axios.mockImplementation(() => { throw new Error() })
    const event = mockServerlessEvents({ body: { message: 'Hello World!' } });
    await expect(sendSMSNotification(event)).rejects.toThrow('Failed to reach the notification server!');
  });

  test('Should SUCCEED delivering EMAIL notification', async () => {
    axios.mockResolvedValue({ status: 200 })
    const event = mockServerlessEvents({ body: { message: 'Hello World!' } });
    const result = await sendEmailNotification(event);
    expect(result.statusCode).toBe(200);
  });

  test('Should FAIL delivering EMAIL notification', async () => {
    axios.mockImplementation(() => { throw new Error() })
    const event = mockServerlessEvents({ body: { message: 'Hello World!' } });
    await expect(sendEmailNotification(event)).rejects.toThrow('Failed to reach the notification server!');
  });
})