require 'open-uri'
require 'net/http'
require 'uri'
require 'hpricot'

class CampaignMonitor
  
  include Validateable
  
  attr_accessor :client_id, :username, :password, :company_name,
                :contact_name, :email, :country, :timezone
                
  validates_presence_of :client_id, :username, :password, :company_name, :contact_name, :country, :timezone
  validates_email_format_of :email
  
  def initialize(options = {})
    @client_id = options[:client_id] if options[:client_id]
    @username = options[:username] if options[:username]
    @password = options[:password] if options[:password]
    @company_name = options[:company_name] if options[:company_name]
    @contact_name = options[:contact_name] if options[:contact_name]
    @email = options[:email] if options[:email]
    @country = CGI.unescapeHTML(options[:country]) if options[:country]
    @timezone = CGI.unescapeHTML(options[:timezone]) if options[:timezone]
  end
  
  def save
    if client_id = create_account
      result = update_access_and_billing(client_id)
      puts "result #{result}"
      return true if result.to_i == 0
      false
    else
      false
    end
  end
  
  def create_account
    req = "http://api.createsend.com/api/api.asmx/Client.Create"
    
    data = {"ApiKey"        => CM_API_KEY.to_s,
            "CompanyName"   => @company_name.to_s,
            "ContactName"   => @contact_name.to_s,
            "EmailAddress"  => @email.to_s,
            "Country"       => @country.to_s,
            "Timezone"      => @timezone.to_s}
    
    result = Net::HTTP.post_form(URI.parse(req), data)
    
    Hpricot.XML(result.body).search('//anyType:first').inner_html || false
  end
  
  def update_access_and_billing(client_id)
    req = "http://api.createsend.com/api/api.asmx/Client.UpdateAccessAndBilling"
    
    data = {"ApiKey"                => CM_API_KEY.to_s,
            "ClientID"              => client_id.to_s,
            "AccessLevel"           => access_level.to_s,
            "Username"              => @username.to_s,
            "Password"              => @password.to_s,
            "BillingType"           => billing_type.to_s,
            "Currency"              => currency.to_s,
            "DeliveryFee"           => delivery_fee.to_s,
            "CostPerRecipient"      => cost_per_recipient.to_s,
            "DesignAndSpamTestFee"  => design_and_spam_test_fee.to_s}
    
    result = Net::HTTP.post_form(URI.parse(req), data)
    puts result.body
    Hpricot.XML(result.body).search('//Code:first').inner_html
  end
  
  def self.countries
    doc = Hpricot.XML(open("http://api.createsend.com/api/api.asmx/User.GetCountries?ApiKey=#{CM_API_KEY}"))
    self.parse_xml_string_array(doc)
  end
  
  def self.timezones
   doc = Hpricot.XML(open("http://api.createsend.com/api/api.asmx/User.GetTimezones?ApiKey=#{CM_API_KEY}"))
   self.parse_xml_string_array(doc)
  end
  
  def self.parse_xml_string_array(doc)
    string_array = []
    
    doc.search('//string').each do |string|
      string_array << CGI.unescapeHTML(string.inner_html)
    end
    
    string_array
  end
  
  
  # Variables for account creation
  
  def access_level
    63
  end
  
  def billing_type
    "ClientPaysWithMarkup"
  end
  
  def currency
    "USD"
  end
  
  def delivery_fee
    5 # 5 dollars
  end
  
  def cost_per_recipient
    2 # 2 cents
  end
  
  def design_and_spam_test_fee
    10 # 10 dollars
  end
end