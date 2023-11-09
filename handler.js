const logger = require('./logger');
const NotificationError = require('./notification-error');
const NotificationService = require('./service');

module.exports.sendSMSNotification = async ({ body }) => {
  logger.info(`sendSMSNotificationHandler: ${JSON.stringify(body)}`);
  try {
    const result = await NotificationService.sendSMS(body);
    return {
      statusCode: result.status,
      body: JSON.stringify(result.data),
    };
  } catch (error) {
    logger.error(`sendSMSNotificationHandler: ${JSON.stringify(error)}`);
    throw new NotificationError(error?.message, error?.statusCode)
  }
};

module.exports.sendEmailNotification = async ({ body }) => {
  logger.info(`sendEmailNotificationHandler: ${JSON.stringify(body)}`);
  try {
    const result = await NotificationService.sendEmail(body);
    return {
      statusCode: result.status,
      body: JSON.stringify(result.data),
    };
  } catch (error) {
    logger.error(`sendEmailNotificationHandler: ${JSON.stringify(error)}`);
    throw new NotificationError(error?.message, error?.statusCode)
  }
};
