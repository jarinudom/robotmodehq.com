require 'open-uri'
require 'hpricot'

class CampaignMonitor
  
  include Validateable
  
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
end