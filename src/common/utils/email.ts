import { send } from 'emailjs-com';

var user_id = 'user_qyFGuc1rfyfrZpLYqc0K5';
var template_id = 'template_KMfkE904';

export const sendEmail = (name: string, email: string, message: string) => {
  var template_params = {
    from: `${name} - ${email}`,
    message: message,
    reply_to: email
  };

  send('gmail', template_id, template_params, user_id);
};
