class CampaignMonitorMailer < ActionMailer::Base
  

  def confirm(sent_at = Time.now)
    subject    'CampaignMonitorMailer#confirm'
    recipients ''
    from       ''
    sent_on    sent_at
    
    body       :greeting => 'Hi,'
  end

end
