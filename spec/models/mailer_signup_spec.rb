require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')

describe MailerSignup do
  before(:each) do
    @valid_attributes = {
      :email => "test@example.com",
      :company_name => "My Company",
      :contact_name => "Testo Jones",
      :country => "United States of America",
      :timezone => "(GMT-08:00) Pacific Time (US&Canada)"
    }
  end

  it "should create a new instance given valid attributes" do
    MailerSignup.create!(@valid_attributes)
  end
end
