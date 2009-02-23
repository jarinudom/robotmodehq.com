module NavigationHelpers
  def path_to(page_name)
    case page_name
    
    when /the homepage/i
      root_path
    
    when /the Robot Mailer product page/i
      "/mailer"
      
    when /the Robot Mailer signup page/i
      "/mailer/signups/new"
    
    else
      raise "Can't find mapping from \"#{page_name}\" to a path."
    end
  end
end

World do |world|
  world.extend NavigationHelpers
  world
end
