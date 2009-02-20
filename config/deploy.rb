set :runner, "jarinudom"
set :use_sudo, false

# =============================================================================
# CUSTOM OPTIONS
# =============================================================================
set :user, "jarinudom"
set :application, "robotmo.de"
set :domain, "209.20.64.61"
set :alias, %{ robotmo.de }

role :web, domain
role :app, domain
role :db,  domain, :primary => true

# =============================================================================
# DATABASE OPTIONS
# =============================================================================
 set :rails_env,       "production"

# =============================================================================
# DEPLOY TO
# =============================================================================
set :deploy_to, "/home/#{user}/public_html/#{application}"

# =============================================================================
# REPOSITORY
# =============================================================================
set :scm, "git"
set :deploy_via, :remote_cache 
set :repository, "/home/#{user}/reponame.git"

# =============================================================================
# SSH OPTIONS
# =============================================================================

default_run_options[:pty] = true
ssh_options[:paranoid] = false
ssh_options[:keys] = %w(/Users/jarinudom/.ssh/id_rsa)
ssh_options[:port] = 30000


desc "Make symlink for database yaml" 
task :symlink do
  run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml" 
end
