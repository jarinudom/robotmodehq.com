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
        format.html { render :text => "Success!" }
      else
        format.html { render :action => "new" }
      end
    end
  end

  # PUT /mailer/signups/1/verify
  def verify
    @mailer_signup = MailerSignup.find(params[:id])

    respond_to do |format|
      if @mailer_signup.update_attributes(params[:mailer_signup])
        flash[:notice] = 'MailerSignup was successfully updated.'
        format.html { redirect_to(@mailer_signup) }
      else
        format.html { render :action => "edit" }
      end
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
