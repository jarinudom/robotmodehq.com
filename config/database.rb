##
# A MySQL connection:
# DataMapper.setup(:default, 'mysql://user:password@localhost/the_database_name')
#
# # A Postgres connection:
# DataMapper.setup(:default, 'postgres://user:password@localhost/the_database_name')
#
# # A Sqlite3 connection
# DataMapper.setup(:default, "sqlite3://" + Padrino.root('db', "development.db"))
#


DataMapper.logger = logger

case Padrino.env
  when :development then DataMapper.setup(:default, "sqlite3://" + Padrino.root('db', "robot_mode_development.db"))
  when :test        then DataMapper.setup(:default, "sqlite3://" + Padrino.root('db', "robot_mode_test.db"))
  when :production  then DataMapper.setup(:default, ENV['DATABASE_URL'])
end
