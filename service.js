const axios = require("axios");
const logger = require("./logger");
const NotificationError = require("./notification-error");

class NotificationService {

  static async sendSMS(payload) {
    logger.info(`NotificationService.sendSMS: ${JSON.stringify(payload)}`);
    try {
      const result = await axios({
        method: 'POST',
        url: 'http://localhost:8080/send/sms',
        data: payload,
      });
      return result;
    } catch (error) {
      logger.error(`NotificationService.sendSMS: ${JSON.stringify(payload)}`);
      throw new NotificationError('Failed to reach the notification server!', 500);
    }
    
  }

  static async sendEmail(payload) {
    logger.info(`NotificationService.sendEmail: ${JSON.stringify(payload)}`);
    try {
      const result = await axios({
        method: 'POST',
        url: 'http://localhost:8080/send/email',
        data: payload,
      });
      return result;
    } catch (error) {
      logger.error(`NotificationService.sendEmail: ${JSON.stringify(payload)}`);
      throw new NotificationError('Failed to reach the notification server!', 500);
    }
  }
}

module.exports = NotificationService;
