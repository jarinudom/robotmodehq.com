class CampaignMonitorMailer < ActionMailer::Base
  

  def confirm(mailer_signup, sent_at = Time.now)
    subject    'Please confirm your Robot Mailer account'
    recipients mailer_signup.email
    from       'activate@robotmo.de'
    sent_on    sent_at
    
    body       :mailer_signup => mailer_signup
  end

end
