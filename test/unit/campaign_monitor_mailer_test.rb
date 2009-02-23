require 'test_helper'

class CampaignMonitorMailerTest < ActionMailer::TestCase
  test "confirm" do
    @expected.subject = 'Please confirm your Robot Mailer account'
    @expected.body    = read_fixture('confirm')
    @expected.date    = Time.now

    assert_equal @expected.encoded, CampaignMonitorMailer.create_confirm(@expected.date).encoded
  end

end
