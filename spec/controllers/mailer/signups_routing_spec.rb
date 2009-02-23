require File.expand_path(File.dirname(__FILE__) + '/../../spec_helper')

describe Mailer::SignupsController do
  describe "route generation" do
    it "maps #new" do
      route_for(:controller => "mailer/signups", :action => "new").should == "/mailer/signups/new"
    end

    it "maps #create" do
      route_for(:controller => "mailer/signups", :action => "create").should == {:path => "/mailer/signups", :method => :post}
    end

    it "maps #verify" do
      route_for(:controller => "mailer/signups", :action => "verify", :id => "1").should == {:path =>"/mailer/signups/1/verify", :method => :get}
    end
  end

  describe "route recognition" do
    it "generates params for #new" do
      params_from(:get, "/mailer/signups/new").should == {:controller => "mailer/signups", :action => "new"}
    end
  
    it "generates params for #create" do
      params_from(:post, "/mailer/signups").should == {:controller => "mailer/signups", :action => "create"}
    end

    it "generates params for #verify" do
      params_from(:get, "/mailer/signups/1/verify").should == {:controller => "mailer/signups", :action => "verify", :id => "1"}
    end
  end
end
