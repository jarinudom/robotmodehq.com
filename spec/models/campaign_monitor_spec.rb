require File.expand_path(File.dirname(__FILE__) + '/../spec_helper')
require 'hpricot'

describe CampaignMonitor do

  it "should create a new string array given valid XML" do
    
    doc = Hpricot.XML(<<-eoxml)
    <anyType xmlns:d1p1="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://api.createsend.com/api/" d1p1:type="ArrayOfString">
      <string>Anguilla</string>
      <string>Antigua &amp; Barbuda</string>
      <string>Argentina</string>
    </anyType>
    eoxml
    
    CampaignMonitor.parse_xml_string_array(doc).should include("Anguilla")
    
  end
end
