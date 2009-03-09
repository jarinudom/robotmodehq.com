require 'digest/md5'

class ShopkeeperController < ApplicationController
  
  def new
    
  end
  
  def auth
    @subdomain = params[:shop].split('.').first
    @api_key = Digest::MD5.hexdigest(SHOPKEEPER_SECRET + params[:t])
  end
  
  def go
    if params[:subdomain]
      redirect_to "http://#{params[:subdomain]}.myshopify.com/admin/api/auth?api_key=#{SHOPKEEPER_IPHONE_API_KEY}&mode=w"
    else
      redirect_to :action => :new
    end
  end
end