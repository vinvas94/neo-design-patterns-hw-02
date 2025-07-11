import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { NotificationService } from "./services/NotificationService";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";

const user = new User("user@example.com", "+341234567890", "device-token-123");

const logger = new Logger();

const notificationService = new NotificationService();

notificationService.addChannel( new EmailNotification(user, logger));
notificationService.addChannel(new SMSNotification(user, logger));
notificationService.addChannel(new PushNotification(user, logger));

notificationService.notifyAll("Ваш платіж оброблено успішно!");

