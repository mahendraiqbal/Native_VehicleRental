import PushNotification from 'react-native-push-notification';

export const sendLocalNotification = ({title, message}) => {
  PushNotification.localNotification({
    channelId: 'rental',
    title,
    message,
  });
};

export const sendScheduleNotificationSchedule = () => {
  PushNotification.localNotificationSchedule({
    channelId: 'rental',
    title: 'Schedule Notification',
    message: 'Sudah 5 detik',
    date: new Date(Date.now() + 5 * 1000),
  });
};

export const cancelNotification = () => {
  PushNotification.cancelLocalNotification('rental');
};
