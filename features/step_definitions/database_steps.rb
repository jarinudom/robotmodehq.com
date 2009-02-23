Given /^no (.*) with email "(.*)" exists$/ do |resource_class, email|
  klass = resource_class.classify.constantize
  klass.destroy_all(:email => email)
  klass.find_by_email(email).should be_nil
end

Then /^(a|an) (.*) with email "(.*)" should exist$/ do |a_or_an, resource_class, email|
  resource = resource_class.classify.constantize.find_by_email(email)
  resource.should_not be_nil
  instance_variable_set("@#{resource_class.gsub(" ","_")}", resource)
end

Given /^no (.*) named "(.*)" exists$/ do |resource_class, name|
  klass = resource_class.classify.constantize
  klass.destroy_all(:name => name)
  klass.find_by_name(name).should be_nil
end

Then /^(a|an) (.*) with name "(.*)" should exist$/ do |a_or_an, resource_class, name|
  resource = resource_class.classify.constantize.find_by_name(name)
  resource.should_not be_nil
  instance_variable_set("@#{resource_class.gsub(" ","_")}", resource)
end
