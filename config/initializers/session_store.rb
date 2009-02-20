# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_robotmo.de_session',
  :secret      => 'b050c42597f6f3f7e15984d198150250b2ce0262735463b5627191b2ecb2bbd398bbcb8fca1b7da92c20fdc8470188f7c4fc620f97df1f3e91a4d0b24257b021'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
ActionController::Base.session_store = :active_record_store
