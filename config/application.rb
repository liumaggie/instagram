require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Instagram
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.paperclip_defaults = {
      :storage => :s3,
      :s3_region => ENV['_FIGARO_AWS_REGION']
      :s3_credentials => {
        :bucket => ENV["_FIGARO_s3_bucket"],
        :access_key_id => ENV["_FIGARO_s3_access_key_id"],
        :secret_access_key => ENV["_FIGARO_s3_secret_access_key"],
        :s3_region => ENV["_FIGARO_s3_region"]
      }
    }


  end
end
