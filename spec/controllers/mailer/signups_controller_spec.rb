require File.expand_path(File.dirname(__FILE__) + '/../../spec_helper')

describe Mailer::SignupsController do

  def mock_mailer_signup(stubs={})
    @mock_mailer_signup ||= mock_model(MailerSignup, stubs)
  end

  describe "GET new" do
  
    it "exposes a new mailer_signup as @mailer_signup" do
      pending
    end

  end

  describe "POST create" do

    describe "with valid params" do
      
      it "exposes a newly created mailer_signup as @mailer_signup" do
        pending
      end

      it "redirects to the created mailer_signup" do
        pending
      end
      
    end
    
    describe "with invalid params" do

      it "exposes a newly created but unsaved mailer_signup as @mailer_signup" do
        pending
      end

      it "re-renders the 'new' template" do
        pending
      end
      
    end
    
  end

end
