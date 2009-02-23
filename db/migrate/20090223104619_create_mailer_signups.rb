class CreateMailerSignups < ActiveRecord::Migration
  def self.up
    create_table :mailer_signups do |t|
      t.string :email
      t.string :company_name
      t.string :contact_name
      t.string :country
      t.string :timezone
      t.string :token
      t.datetime :verified_at

      t.timestamps
    end
  end

  def self.down
    drop_table :mailer_signups
  end
end
