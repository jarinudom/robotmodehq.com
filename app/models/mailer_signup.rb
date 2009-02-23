class MailerSignup < ActiveRecord::Base
  validates_email_format_of :email
  validates_presence_of :company_name, :contact_name, :country, :timezone, :token
  before_create :generate_token
  
  def generate_token
    @attributes[:token] = MD5.hexdigest((object_id + rand(255)).to_s)
  end
end
