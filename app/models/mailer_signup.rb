class MailerSignup < ActiveRecord::Base
  
  before_validation_on_create :generate_token
  
  validates_email_format_of :email
  validates_presence_of :company_name, :contact_name, :country, :timezone, :token
  
  def generate_token
    @attributes['token'] = Digest::MD5.hexdigest((object_id + rand(255)).to_s)
  end
  
end
