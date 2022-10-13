package in.nareshit.raghu.util;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

@Component
public class MailSenderUtil {

	@Autowired
	private JavaMailSender sender;

	public boolean send(String to, String cc[], String bcc[], String subject, String text, Resource files[]) {
		boolean sent = false;

		try {
			// 1. Create Message object
			MimeMessage message = sender.createMimeMessage();

			// 2. fill details
			MimeMessageHelper helper = new MimeMessageHelper(message, files != null && files.length > 0);

			helper.setTo(to);
			if (cc != null && cc.length > 0)
				helper.setCc(cc);
			if (bcc != null && bcc.length > 0)
				helper.setBcc(bcc);

			helper.setText(text);
			helper.setSubject(subject);

			if (files != null && files.length > 0) {
				for (Resource file : files) {
					// filename, file object
					helper.addAttachment(file.getFilename(), file);
				}
			}

			// 3. send email
			sender.send(message);
			sent = true;
		} catch (Exception e) {
			e.printStackTrace();
		}

		return sent;
	}

	// overloaded methods--2
	public boolean send(String to, String subject, String text) {
		return send(to, null, null, subject, text, null);
	}

	// overloaded methods--3
	public boolean send(String to, String subject, String text, Resource files[]) {
		return send(to, null, null, subject, text, files);
	}

}
