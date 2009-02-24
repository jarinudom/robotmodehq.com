class Mailer::SignupsController < ApplicationController
  layout "application"
  before_filter :authenticate_token, :only => [:verify]
  
  # GET /mailer/signups/new
  def new
    @mailer_signup = MailerSignup.new
    @countries = CampaignMonitor.countries
    @timezones = CampaignMonitor.timezones

    respond_to do |format|
      format.html # new.html.erb
    end
  end

  # POST /mailer/signups
  def create
    @mailer_signup = MailerSignup.new(params[:mailer_signup])

    respond_to do |format|
      if @mailer_signup.save
        flash[:notice] = 'MailerSignup was successfully created.'
        format.html { redirect_to signup_created_mailer_signups_url }
      else
        format.html { render :action => "new" }
      end
    end
  end
  
  # GET /mailer/signups/signup_created
  def signup_created
    respond_to do |format|
      format.html
    end
  end

  # GET /mailer/signups/1/verify
  def verify
    @mailer_signup = MailerSignup.find(params[:id])
    @mailer_signup.update_attribute(:verified_at, Time.now)
    
    @campaign_monitor = CampaignMonitor.new({:company_name => @mailer_signup.company_name,
                                             :contact_name => @mailer_signup.contact_name,
                                             :email => @mailer_signup.email,
                                             :country => @mailer_signup.country,
                                             :timezone => @mailer_signup.timezone})

    respond_to do |format|
      format.html
    end
  end
  
  # POST /mailer/signups/create_account
  def create_account
    @campaign_monitor = CampaignMonitor.new(params[:campaign_monitor])

    respond_to do |format|
      if @campaign_monitor.save
        format.html { redirect_to account_created_mailer_signups_url }
      else
        format.html { render :action => "verify" }
      end
    end
  end
  
  # POST /mailer/signups/account_created
  def account_created
    respond_to do |format|
      format.html
    end
  end
  
  private
  
  def authenticate_token
    signup = MailerSignup.find_by_token(params[:t])
    if signup.blank? || signup.id != params[:id].to_i
      raise "Unauthorized"
    end
  end
end
