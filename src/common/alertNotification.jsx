import { notification } from 'antd';

export default function AlertNotification({ type, message, description }) {
  notification[type]({
    message,
    description: description || '',
  });
}
